#include <stdio.h>
#include <stdlib.h>
#include <math.h>

int fact(int n) {
	return (n < 2) ? 1 : n * fact(n - 1);
}

int main(int argc, char **argv) {
	if (argc != 3) {
		printf("./program [x] [n]\n");
		return (1);
	}
	int x = atoi(argv[1]);
	int n = atoi(argv[2]);
	double An = (pow(-1, n) * (2 * pow(n, 2) + 1) / fact(2 * n)) * pow(x, 2 * n);
	printf("Result: %f\n", An);
}
