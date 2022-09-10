#!/bin/bash

trap 'echo "# $BASH_COMMAND"' DEBUG
date
who
WHO
who am i
ls -la
chmod 777 text.txt
pwd
cd ..
pwd
cd lab1
pwd
mkdir folder
ls
rmdir folder
ls
ls > dir.lst
cat dir.lst
who | sort
who | wc
ls | wc
> newfile
cat newfile
cat dir.lst dir.lst > newfile
cat newfile
mv newfile file
ls
cp file cfile
ls
tr i M < dir.lst
cat /proc/meminfo | grep MemTotal
rm cfile
rm file
rm dir.lst
ls

