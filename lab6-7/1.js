/*

> Разработать процедуру, выполняющую заданную в индивидуальном задании последовательность операций с папками
  (каталогами) с помощью различных объектов работы с файловой системой.
> Организовать ввод всех исходных данных в процедуру с помощью параметров командной строки при вызове процедуры.
> Предусмотреть возможность передачи результатов выполнения процедуры в файл.

6 Перемещение каталогов:
6.1 Создать исходный каталог;
6.2 С помощью Блокнота создать исходный файл;
6.3 Переместить исходный каталог в результирующий каталог;
6.4 Переименовать файл в результирующем каталоге;
6.5 Запустить Блокнот для редактирования файла в результирующем каталоге;
6.6 Вывести оглавление результирующего каталога;

*/

var source_cathalog = WScript.Arguments(0);
var source_file = WScript.Arguments(1);
var result_cathalog = WScript.Arguments(2);
var result_file = WScript.Arguments(3);

var Shell = WScript.CreateObject("WScript.Shell");
var fso = WScript.CreateObject("Scripting.FileSystemObject");

// {source_cathalog} {source_file} {result_cathalog} {result_file} {file_output}
// cscript 1.js C:\Users\User\Documents\cscript\lab6\tmp before.txt C:\Users\User\Documents\cscript\lab6\after after.txt output.txt

// 6.1 Создать исходный каталог;
fso.CreateFolder(source_cathalog);
// 6.2 С помощью Блокнота создать исходный файл;
fso.CreateTextFile(source_cathalog +"\\" + source_file, true);
Shell.Run(('notepad.exe "' + source_cathalog + '\\' + source_file + '"'), 1, true);
// 6.3 Переместить исходный каталог в результирующий каталог;
fso.MoveFolder(source_cathalog, result_cathalog);
// 6.4 Переименовать файл в результирующем каталоге;
fso.GetFile(result_cathalog + "\\" + source_file).Name = result_file;
// 6.5 Запустить Блокнот для редактирования файла в результирующем каталоге;
Shell.Run(Shell.ExpandEnvironmentStrings('"%WINDIR%\\notepad.exe" "' + result_cathalog +'\\'+ result_file + '"'), 1, true);
// 6.6 Вывести оглавление результирующего каталога;
if (WScript.Arguments.count() == 5) {
	var file_output = WScript.Arguments(4);
	Shell.Run('%COMSPEC% /C dir ' + result_cathalog + ' > ' + file_output);
} else {
	Shell.Run('%COMSPEC% /K dir "' + result_cathalog);
}
