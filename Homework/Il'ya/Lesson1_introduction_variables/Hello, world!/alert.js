let weight = prompt('Введите ваш вес', 'Вес, кг');
if (weight === null) {
	alert('Вы отменили ввод');
} else if (weight == '' || isNaN(parseFloat(weight))) {
	alert('Вы ввели не число');
} else {
	alert(`Ваш вес составляет ${weight} кг`);
}
