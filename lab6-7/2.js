/*

> Разработать процедуру обработки текстового файла, в соответствии с индивидуальным заданием.

> Организовать ввод исходных данных в процедуру с помощью параметров командной строки при вызове процедуры.

> Создание исходного текста на русском языке в текстовом файле произвести в процедуре путем вызова Блокнота.

> Предусмотреть возможность перенаправления результатов выполнения процедуры в файл.

Задан исходный текст на русском языке. Длина текста - не более NL символов, длина строки - не более NS
слова – не более NW символов. Исходный текст должен заканчиваться точкой. Составить процедуру, которая
находит слова, оканчивающиеся гласной буквой. В качестве результата вывести исходный текст, найденные
количество.

*/

function isVowel(ch) {
	var str = "ауоиэыяюеё";
	var len = str.length;
	for (var i = 0; i < len; i++) {
		if (ch == str.charAt(i)) {
			return (true);
		}
	}
	return (false);
}
function splitAndSolve(str) {
	var arr = str.split(' ');
	var final_arr = [];
	for (var i = 0; i < arr.length; i++) {
		if (isVowel(arr[i].charAt(arr[i].length - 1))) {
			final_arr.push(arr[i]);
		}
	}
	return (final_arr);
}

// {source_cathalog} {source_file} {file_output}

var source_cathalog = WScript.Arguments(0);
var source_file = WScript.Arguments(1);

var Shell = WScript.CreateObject("WScript.Shell");
var fso = WScript.CreateObject("Scripting.FileSystemObject");

fso.CreateTextFile(source_cathalog + "\\" + source_file, true);
Shell.Run(('notepad.exe "'+ source_cathalog  + '\\' + source_file + '"'), 1, true);

var file = fso.GetFile(source_cathalog + "\\" + source_file);
var text = file.OpenAsTextStream(1).ReadAll();
WScript.Echo(arr);

var arr = splitAndSolve(text);
if (WScript.Arguments.count() == 3) {
	var file_output = WScript.Arguments(2);
	var outfile = fso.CreateTextFile(file_output, true);
	outfile.WriteLine(text);
	outfile.WriteLine("Слов: " + arr.length);
	outfile.WriteLine(arr);
} else {
	WScript.Echo(text);
	WScript.Echo("Слов: " + arr.length);
	WScript.Echo(arr);
}
