import * as vscode from "vscode";

//
// ─────────────────────────────────────────────────────────────────────────────
//  Aptabase telemetry.
//
//  Anonymous, aggregate-only. We send counts derived from the parsed grammar
//  (how many identifiers use hyphens / underscores / are space-adjacent) so we can
//  measure real-world identifier conventions. We NEVER send identifier text, file
//  contents, paths, or any other user content.
//
//  Gating is layered:
//    1. vscode.env.createTelemetryLogger() automatically suppresses everything
//       unless the user's global telemetry level allows usage data.
//    2. Our own `EBNF.telemetry.enable` setting is checked on top of that.
//
//  ⚠ SET YOUR APP KEY BELOW. Aptabase app keys are client-embeddable (not secret).
//    Format: "A-EU-<digits>", e.g. "A-EU-1234567890". This extension targets the
//    Aptabase EU server only. Until a valid key is set, telemetry is silently disabled.
// ─────────────────────────────────────────────────────────────────────────────
//
const APTABASE_APP_KEY = "A-EU-9474712989";
const APTABASE_HOST = "https://eu.aptabase.com"; // EU server only
const SDK_VERSION = "vscode-ebnf@1";

// globalState keys backing the once-per-day, per-install usage profile.
const DAY_KEY = "telemetry.profileDay";
const HYPHEN_KEY = "telemetry.usedHyphen";
const UNDERSCORE_KEY = "telemetry.usedUnderscore";
const SPACE_KEY = "telemetry.usedSpaceSeparated";
const FLUSHED_KEY = "telemetry.flushedDay"; // last day already emitted; guards against double-emit

export interface GrammarStats {
    identifierCount: number;
    hyphenIdentifiers: number;
    underscoreIdentifiers: number;
    adjacentIdentifiers: number; // space-separated multi-word heuristic (≈0 until SC1 lands)
}

function padLeft(value: string | number, width: number): string {
    let text = String(value);
    while (text.length < width) {
        text = "0" + text;
    }
    return text;
}

function newSessionId(): string {
    const epoch = Math.floor(Date.now() / 1000).toString();
    const random = padLeft(Math.floor(Math.random() * 1e8), 8);
    return epoch + random;
}

export class Telemetry {
    private static logger: vscode.TelemetryLogger | undefined;
    private static apiUrl: string | undefined;
    private static appVersion = "";
    private static isDebug = false;
    private static readonly sessionId = newSessionId();
    private static state: vscode.Memento | undefined; // per-install storage backing the daily dedupe
    private static pending: Promise<unknown> = Promise.resolve(); // last in-flight send, awaited on shutdown

    public static initialize(context: vscode.ExtensionContext): void {
        try {
            this.apiUrl = this.resolveApiUrl(APTABASE_APP_KEY);
            if (!this.apiUrl) {
                return; // placeholder / invalid key → telemetry disabled
            }

            this.appVersion = (context.extension?.packageJSON?.version as string) ?? "";
            this.isDebug = context.extensionMode !== vscode.ExtensionMode.Production;
            this.state = context.globalState;

            const sender: vscode.TelemetrySender = {
                sendEventData: (eventName, data) => { this.pending = this.post(eventName, data); },
                sendErrorData: () => { /* not collecting error telemetry */ },
            };

            // ignoreBuiltInCommonProperties: true keeps VS Code from appending device
            // identifiers (common.vscodemachineid / sqmid / devDeviceId) to every event.
            this.logger = vscode.env.createTelemetryLogger(sender, { ignoreBuiltInCommonProperties: true });
            context.subscriptions.push(this.logger);
        } catch {
            // Never let telemetry setup break activation.
            this.logger = undefined;
        }
    }

    /**
     * Folds a parsed document's identifier usage into a per-install, per-day profile.
     * We accumulate booleans (did the user use hyphen / underscore / space-separated
     * identifiers today?) in globalState and emit exactly ONE `usage_profile` event
     * per active day — for every active user, including those who used none of them,
     * so the population denominator is preserved. No per-user identifier is sent, so
     * "share of a day's events with usedHyphen=true" ≈ "share of active users".
     */
    public static reportGrammarAnalyzed(document: vscode.TextDocument, stats: GrammarStats): void {
        if (!this.logger || !this.state || document.languageId !== "ebnf") {
            return;
        }

        // Our own opt-out, layered on top of the global setting the logger already honors.
        const enabled = vscode.workspace.getConfiguration("EBNF").get<boolean>("telemetry.enable", true);
        if (!enabled) {
            return;
        }

        const today = this.currentDay();
        const storedDay = this.state.get<string>(DAY_KEY);

        // Day rolled over → flush the completed previous day as one event, then reset.
        if (storedDay && storedDay !== today) {
            if (this.state.get<string>(FLUSHED_KEY) !== storedDay) {
                this.flush(storedDay); // skip if already emitted on deactivate
            }
            void this.state.update(HYPHEN_KEY, false);
            void this.state.update(UNDERSCORE_KEY, false);
            void this.state.update(SPACE_KEY, false);
        }
        if (storedDay !== today) {
            void this.state.update(DAY_KEY, today);
        }

        // Accumulate today's usage (monotonic OR within the day).
        if (stats.hyphenIdentifiers > 0 && !this.state.get<boolean>(HYPHEN_KEY, false)) {
            void this.state.update(HYPHEN_KEY, true);
        }
        if (stats.underscoreIdentifiers > 0 && !this.state.get<boolean>(UNDERSCORE_KEY, false)) {
            void this.state.update(UNDERSCORE_KEY, true);
        }
        if (stats.adjacentIdentifiers > 0 && !this.state.get<boolean>(SPACE_KEY, false)) {
            void this.state.update(SPACE_KEY, true);
        }
    }

    /**
     * Flush the current (possibly in-progress) day on shutdown, then wait for the
     * send to complete. This captures a user's final active day — and one-time users
     * who never trigger a day-rollover — without double-counting (see FLUSHED_KEY).
     */
    public static async dispose(): Promise<void> {
        try {
            if (this.state) {
                const day = this.state.get<string>(DAY_KEY);
                if (day && this.state.get<string>(FLUSHED_KEY) !== day) {
                    this.flush(day);
                }
            }
            await this.pending; // best-effort: let the in-flight request finish before shutdown
        } catch {
            // ignore
        } finally {
            this.logger?.dispose();
            this.logger = undefined;
        }
    }

    /** Emit the accumulated profile for a given day as a single event (once). */
    private static flush(day: string): void {
        if (!this.logger || !this.state) {
            return;
        }
        // Honor our own opt-out here too, so the shutdown flush respects it.
        if (!vscode.workspace.getConfiguration("EBNF").get<boolean>("telemetry.enable", true)) {
            return;
        }

        const identifierStyle = vscode.workspace.getConfiguration("EBNF").get<string>("identifierStyle", "modern");
        this.logger.logUsage("usage_profile", {
            date: day,
            usedHyphen: this.state.get<boolean>(HYPHEN_KEY, false),
            usedUnderscore: this.state.get<boolean>(UNDERSCORE_KEY, false),
            usedSpaceSeparated: this.state.get<boolean>(SPACE_KEY, false),
            identifierStyle,
        });
        void this.state.update(FLUSHED_KEY, day); // mark emitted so rollover won't re-send it
    }

    /** Local calendar day as YYYY-MM-DD (defines the reporting period). */
    private static currentDay(): string {
        const now = new Date();
        return `${now.getFullYear()}-${padLeft(now.getMonth() + 1, 2)}-${padLeft(now.getDate(), 2)}`;
    }

    // ── internals ───────────────────────────────────────────────────────────

    private static resolveApiUrl(appKey: string): string | undefined {
        // EU server only: require a well-formed, non-placeholder "A-EU-<digits>" key.
        const parts = appKey.split("-");
        if (parts.length !== 3 || parts[0] !== "A" || parts[1] !== "EU"
            || !/^\d+$/.test(parts[2]) || /^0+$/.test(parts[2])) {
            return undefined;
        }
        return `${APTABASE_HOST}/api/v0/event`;
    }

    private static async post(eventName: string, data?: Record<string, any>): Promise<void> {
        if (!this.apiUrl || typeof fetch !== "function") {
            return;
        }
        try {
            const response = await fetch(this.apiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "App-Key": APTABASE_APP_KEY,
                    "User-Agent": this.userAgent(), // Aptabase requires a UA for non-browser clients
                },
                credentials: "omit",
                body: JSON.stringify({
                    timestamp: new Date().toISOString(),
                    sessionId: this.sessionId,
                    eventName,
                    systemProps: {
                        isDebug: this.isDebug,
                        appVersion: this.appVersion,
                        sdkVersion: SDK_VERSION,
                    },
                    props: this.sanitizeProps(data),
                }),
            });

            if (response.status >= 300) {
                console.warn(`EBNF telemetry: event "${eventName}" rejected (${response.status}).`);
            }
        } catch {
            // Swallow all network/serialization errors — telemetry must never surface to the user.
        }
    }

    private static sanitizeProps(data?: Record<string, any>): Record<string, string | number | boolean> {
        const out: Record<string, string | number | boolean> = {};
        if (!data) {
            return out;
        }
        for (const [k, v] of Object.entries(data)) {
            if (v === null || v === undefined) {
                continue;
            }
            out[k] = (typeof v === "string" || typeof v === "number" || typeof v === "boolean") ? v : String(v);
        }
        return out;
    }

    private static userAgent(): string {
        const platform = (typeof process !== "undefined" && process.platform) || "Unknown";
        const os: Record<string, string> = { darwin: "Macintosh", win32: "Windows", linux: "Linux" };
        return `Mozilla/5.0 (${os[platform] ?? platform}) VSCode-EBNF`;
    }
}
