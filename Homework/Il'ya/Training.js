let a = 3;

switch (a) {
	case 4:
		alert('Правильно!');
		break;

	case 3: // (*) группируем оба case
	case 5:
		alert('Неправильно!');
		alert('Может вам посетить урок математики?');
		break;

	default:
		alert('Результат выглядит странновато. Честно.');
}
