/**
 * Levenshtein edit distance and nearest-name ranking, used by the "Did you mean…?" quick fix
 * for undefined-rule diagnostics (G16). Free of any VS Code dependency so it can be unit-tested.
 */

export function levenshtein(a: string, b: string): number {
    const m = a.length;
    const n = b.length;
    if (m === 0) { return n; }
    if (n === 0) { return m; }

    let previous = Array.from({ length: n + 1 }, (_, j) => j);
    let current = new Array<number>(n + 1).fill(0);

    for (let i = 1; i <= m; i++) {
        current[0] = i;
        for (let j = 1; j <= n; j++) {
            const cost = a[i - 1] === b[j - 1] ? 0 : 1;
            current[j] = Math.min(previous[j] + 1, current[j - 1] + 1, previous[j - 1] + cost);
        }
        [previous, current] = [current, previous];
    }

    return previous[n];
}

/**
 * The `limit` names in `candidates` closest to `target` within `maxDistance`, nearest first
 * (ties broken alphabetically). Exact matches (distance 0) are excluded.
 */
export function nearestNames(target: string, candidates: Iterable<string>, maxDistance: number, limit: number): string[] {
    return [...candidates]
        .map(name => ({ name, distance: levenshtein(target, name) }))
        .filter(c => c.distance > 0 && c.distance <= maxDistance)
        .sort((a, b) => a.distance - b.distance || a.name.localeCompare(b.name))
        .slice(0, limit)
        .map(c => c.name);
}
