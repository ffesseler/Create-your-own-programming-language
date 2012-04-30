start =
    countrycode

alpha =
    [a-z]

countrycode =
    first:alpha second:alpha
    {return first + second}