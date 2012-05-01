start =
    wordlist

wordlist = 
	first:word others:spacedword*
	{ return [first].concat(others);}

word = 
	w:[a-z]+
	{return w.join('');}

spacedword = 
	s:space w:word
	{return w;}

space = 
	" "