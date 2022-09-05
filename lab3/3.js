/*

«адан исходный текст на русском €зыке. ƒлина текста - не более NL символов, длина строки - не
более NS символов, длина слова Ц не более NW символов. »сходный текст должен заканчиватьс€
точкой. —оставить процедуру, котора€ в заданном тексте находит слова, оканчивающиес€ гласной
буквой. ¬ качестве результата вывести исходный текст, найденные слова и их количество.

*/
function isVowel(ch) {
	var str = "ауоиэы€юеЄ";
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
WScript.Echo("—лов: " + arr.length);
WScript.Echo(arr);
