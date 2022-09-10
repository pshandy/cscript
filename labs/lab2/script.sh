#!/bin/bash

trap 'echo "# $BASH_COMMAND"' DEBUG

gcc -o program -Wall -Wextra -Werror ind.c -lm
./program 3 2
rm program
