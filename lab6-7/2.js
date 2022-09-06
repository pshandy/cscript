/*

> ����������� ��������� ��������� ���������� �����, � ������������ � �������������� ��������.

> ������������ ���� �������� ������ � ��������� � ������� ���������� ��������� ������ ��� ������ ���������.

> �������� ��������� ������ �� ������� ����� � ��������� ����� ���������� � ��������� ����� ������ ��������.

> ������������� ����������� ��������������� ����������� ���������� ��������� � ����.

����� �������� ����� �� ������� �����. ����� ������ - �� ����� NL ��������, ����� ������ - �� ����� NS
����� � �� ����� NW ��������. �������� ����� ������ ������������� ������. ��������� ���������, �������
������� �����, �������������� ������� ������. � �������� ���������� ������� �������� �����, ���������
����������.

*/

function isVowel(ch) {
	var str = "����������";
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
	outfile.WriteLine("����: " + arr.length);
	outfile.WriteLine(arr);
	WScript.Echo(arr);
} else {
	WScript.Echo(text);
	WScript.Echo("����: " + arr.length);
	WScript.Echo(arr);
}
