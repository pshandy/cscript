/*

- ����������� ���������, ����������� �������� � �������������� �������
  ������������������ �������� (����������) � ������� ������ MS.

- ������������ ���� ���� �������� ������ � ��������� � �������
  ���������� ��������� ������ ��� ������ ���������.

- ������������� ����������� ��������������� ����������� ���������� � ����.

6 ����������� ���������:
6.1 ������� �������� �������;
6.2 � ������� �������� ������� �������� ����;
6.3 ����������� �������� ������� � �������������� �������;
6.4 ������������� ���� � �������������� ��������;
6.5 ��������� ������� ��� �������������� ����� � �������������� ��������;
6.6 ������� ���������� ��������������� ��������;

*/

// {source_cathalog} {source_file} {result_cathalog} {result_file} {file_output}

// cscript 3.js C:\Users\User\Documents\cscript\lab5\tmp before.txt C:\Users\User\Documents\cscript\lab5\aaa\tmp\ after.txt C:\Users\User\Documents\cscript\lab5\aaa\tmp\t.txt

var source_cathalog = WScript.Arguments(0);
var source_file = WScript.Arguments(1);
var result_cathalog = WScript.Arguments(2);
var result_file = WScript.Arguments(3);

var Shell = WScript.CreateObject("WScript.Shell");

// 6.1 ������� �������� �������;
Shell.Run('%COMSPEC% /C mkdir ' + source_cathalog );
// 6.2 � ������� �������� ������� �������� ����;
Shell.Run(('notepad.exe "' + source_cathalog + '\\' + source_file + '"'), 1, true);
// // 6.3 ����������� �������� ������� � �������������� �������;
Shell.Run('%COMSPEC% /C xcopy ' + source_cathalog  + ' ' + result_cathalog);
// // 6.4 ������������� ���� � �������������� ��������;
Shell.Run('%COMSPEC% /C rename "' + result_cathalog + '\\' + source_file + '" "' + result_file + '"');
// // 6.5 ��������� ������� ��� �������������� ����� � �������������� ��������;
Shell.Run(Shell.ExpandEnvironmentStrings('"%WINDIR%\\notepad.exe" "' + result_cathalog +'\\'+ result_file + '"'), 1, true);
// // 6.6 ������� ���������� ��������������� ��������;
if (WScript.Arguments.count() == 5) {
	var file_output = WScript.Arguments(4);
	Shell.Run('%COMSPEC% /C dir ' + result_cathalog + ' > ' + file_output);
} else {
	Shell.Run('%COMSPEC% /K dir "' + result_cathalog);
}
