### EBNF Grammar
This is an example ...

``` ebnf
syntax = syntax rule, {syntax rule};

(* A <syntax rule> defines the sequences of symbols represented by a <meta identifier> *)
syntax rule 
= meta identifier, '=', definitions list, ';';

(* | separates alternative <single definitions> *)
definitions list
= single definition, {'|', single definition};

(* , separates successive <terms> *)
single definition = term, {',', term};

(* A <term> represents any sequence of symbols that is defined by the <factor> but not defined by the <exception> *)
term = factor, ['-', exception];

(* A <factor> may be used as an <exception> if it could be replaced by a <factor> containing no <meta identifiers> *)
exception = factor;

(* The <integer> specifies the number of repetitions of the <primary> *)
factor = [integer, '*'], primary;
```