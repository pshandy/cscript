/*

����� �������� ����� �� ������� �����. ����� ������ - �� ����� NL ��������, ����� ������ - ��
����� NS ��������, ����� ����� � �� ����� NW ��������. �������� ����� ������ �������������
������. ��������� ���������, ������� � �������� ������ ������� �����, �������������� �������
������. � �������� ���������� ������� �������� �����, ��������� ����� � �� ����������.

*/
function isVowel(ch) {
	var str = "���������";
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
var str = WScript.Arguments(0);
var arr = splitAndSolve(str);
WScript.Echo(str);
WScript.Echo("����: " + arr.length);
WScript.Echo(arr);
