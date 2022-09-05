var n = parseInt(WScript.Arguments(0));
var sin = Math.sin(1/n);
var ln = Math.log(sin)
var ln_pow = Math.pow(ln, 2);
var result = 1 / ln_pow;
WScript.Echo ('n = ', n);
WScript.Echo(result);
