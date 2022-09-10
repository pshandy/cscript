#!/bin/bash

trap 'echo "# $BASH_COMMAND"' DEBUG

gcc -o program -Wall -Wextra -Werror ind.c
./program
rm program
