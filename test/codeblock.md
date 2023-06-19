### EBNF Grammar
This is an example ...

``` ebnf
syntax = syntax_rule, {syntax_rule};

(* A <syntax rule> defines the sequences of symbols represented by a <meta identifier> *)
syntax_rule 
= meta_identifier, '=', definitions_list, ';';

(* | separates alternative <single definitions> *)
definitions_list
= singledefinition, {'|', singledefinition};

(* , separates successive <terms> *)
singledefinition = term, {',', term};

(* A <term> represents any sequence of symbols that is defined by the <factor> but not defined by the <exception> *)
term = factor, ['-', exception];

(* A <factor> may be used as an <exception> if it could be replaced by a <factor> containing no <meta identifiers> *)
exception = factor;

(* The <integer> specifies the number of repetitions of the <primary> *)
factor = [integer, '*'], primary;
```