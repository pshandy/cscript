function fact(num) {
	if (num < 0)
		return -1;
	else if (num == 0)
		return 1;
	else
		return (num * fact(num - 1));
}
var n = 2;
var x = 3;
var one_pow = -1;
for (var j = 1; j < n; j++) {
	one_pow *= one_pow;
}
var x_pow = x;
for (var j = 1; j < 2 * n; j++) {
	x_pow *= x;
}
var An = (one_pow * (2 * n * n + 1) / fact(2 * n)) * x_pow;
WScript.Echo(An);
