var	weekday=new Date().getDay();// получение дня недели
var	str;
	switch(weekday)
	{
	case 0:
		str="Воскресенье";
		break;
	case 1:
		str="Понедельник";
		break;
	case 2:
		str="Вторник";
		break;
	case 3:
		str="Среда";
		break;
	case 4:
		str="Четверг";
		break;
	case 5:
		str="Пятница";
		break;
	case 6:
		str="Суббота";
		break;
	default:
		str="неизвестный";
	}
	WScript.Echo("Сегодня "+str+" день недели ("+
		( (weekday==0||weekday==6)?"выходной":"рабочий")+")");
