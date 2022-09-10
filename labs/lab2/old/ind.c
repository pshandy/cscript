#include <stdio.h>

int main(void) {

	int n = 2;
	int x = 3;
	int fact = 1;
	int i = 1;
	while (i <= 2 * n) {
		fact = fact * i;
		i++;
	}
	int one_pow = -1;
	for (int j = 1; j < n; j++) {
		one_pow *= one_pow;
	}
	int x_pow = x;
	for (int j = 1; j < 2 * n; j++) {
		x_pow *= x;
	}
	double An = (one_pow * (2 * n * n + 1) / (double)fact) * x_pow;
	printf("Result: %f\n", An);
}
