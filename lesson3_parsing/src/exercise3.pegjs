start =
    word

word = 
	uppercase 
  /	lowercase

lowercase = 
	lwr:[a-z]+
	{ return lwr.join('');}

uppercase = 
	upr:[A-Z]+
	{ return upr.join('');}