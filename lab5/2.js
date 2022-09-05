/*
	Разработать процедуру запуска Блокнота для создания новой или
	редактирования существующей процедуры с возможностью ее последующего
	запуска в оконном режиме или режиме командной строки. Организовать
	ввод пути и имени редактируемой процедуры и режим ее запуска с помощью
	параметров командной строки.
*/

//cscript 1.js {path} {procedure_name} {mode}
//cscript 2.js C:\Users\User\Documents\cscript\lab1\ 1.js cmd

var path = WScript.Arguments(0);
var procedure_name = WScript.Arguments(1);
var mode = WScript.Arguments(2);

var Shell = WScript.CreateObject("WScript.Shell");
Shell.Run(("notepad.exe '" + path + procedure_name + "'"), 1, true);

if (mode == "cmd")
	Shell.Run('cmd.exe /K cscript "' + path + procedure_name + '"');
else if (mode == "window")
	Shell.Run('cmd.exe /K wscript "' + path + procedure_name + '" & exit');
