// An=((-1)^n*(2*n^2+1)/(2*n)!)*x^(2*n)
var n = 2;
var x = 3;
var fact = 1, i = 1;
while (i <= 2 * n) {
	fact = fact * i;
	i++;
}
var one_pow = -1;
for (var j = 1; j < n; j++) {
	one_pow *= one_pow;
}
var x_pow = x;
for (var j = 1; j < 2 * n; j++) {
	x_pow *= x;
}
var An = (one_pow * (2 * n * n + 1) / fact) * x_pow;
WScript.Echo(An);
