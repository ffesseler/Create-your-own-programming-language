start =
    comment
    { return ""; }
  / e:expression comment*
     { return e;}

expression =
    "'" e:expression
    { return ["quote"].concat([e]); }
  / _ a:atom _
    { return a;}
  / _ "(" e1:expression e2:spacedexpression* ")" _
    { return [e1].concat(e2)}

spacedexpression =
  _ e:expression _
  { return e;}

validchar
    = [0-9a-zA-Z_?!+\-=@#$%^&*/.]

atom =
    chars:validchar+
        { return chars.join(""); }

space = 
    " "
_ =
  [\n\t ]*

comment =
  ";;" _ validchar*