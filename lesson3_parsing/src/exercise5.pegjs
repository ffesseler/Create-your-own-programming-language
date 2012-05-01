start =
    expression

expression =
	atom
  /	openParenthesis a:expression b:spacedexpression* enclosedParenthesis
  { return [a].concat(b)}

spacedexpression =
	whitespace a:expression
	{ return a;}

whitespace =
	" "

openParenthesis =
	"("

enclosedParenthesis =
	")"

validchar
    = [0-9a-zA-Z_?!+\-=@#$%^&*/.]

atom =
    chars:validchar+
        { return chars.join(""); }