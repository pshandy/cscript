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
var An = (Math.pow(-1, n) * (2 * n * n + 1) / fact(2 * n)) * Math.pow(x, 2 * n);
WScript.Echo(An);
