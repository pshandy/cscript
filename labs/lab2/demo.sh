#!/bin/bash

echo "# gcc -o convert 1.c"
gcc -o convert 1.c

echo "# ./convert"
./convert

echo "# rm convert"
rm convert

echo "# gcc -o comvert 2.c"
gcc -o convert 2.c
echo "# ./convert&"
./convert&

echo "# ps"
ps
pid=$(ps | grep convert | awk '{print $1}')
echo "# kill $pid"
kill $pid
ps

echo "# rm convert"
rm convert

echo "# man man"
man man
