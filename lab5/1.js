/*
����������� ��������� ������ ������� � �������� MS DOS � ������������ ��������������� ���������
����. ������������ ���� ����� ������������ �������, ���� � ����� ��������������� ����� � ���������
���������� ��������� ������ ��� ������ ���������.
*/

//cscript 1.js md {path} {filename}
//cscript 1.js md C:\Users\User\Documents\cscript\lab5\ out.txt

var shell = WScript.CreateObject("WScript.Shell");
if (WScript.Arguments.count() == 3) {
	var command = WScript.Arguments(0);
	var path = WScript.Arguments(1);
	var filename = WScript.Arguments(2);
	var strCommand = "%COMSPEC% /C help " + command + ' > ' + path + filename;
	shell.Run(strCommand);
} else if (WScript.Arguments.count() == 1) {
	var command = WScript.Arguments(0);
	shell.Run("%COMSPEC% /K help " + command);
} else {
	shell.Run("%COMSPEC% /K help ");
}
