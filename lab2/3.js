/*

Задан исходный текст на русском языке. Длина текста - не более NL символов, длина строки - не
более NS символов, длина слова – не более NW символов. Исходный текст должен заканчиваться
точкой. Составить процедуру, которая в заданном тексте находит слова, оканчивающиеся гласной
буквой. В качестве результата вывести исходный текст, найденные слова и их количество.

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

var str = "Задан исходный текст на русском языке. Длина текста - не более NL символов, длина строки.";
var arr = splitAndSolve(str);
WScript.Echo(str);
WScript.Echo("Слов: " + arr.length);
WScript.Echo(arr);
