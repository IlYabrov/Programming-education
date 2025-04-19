let login = prompt('Кто там?', 'Введите ваш логин:');

if (login) {
	if (login === 'Admin') {
		let password = prompt('Введите пароль', 'Пароль');
		if (password) {
			if (password == 'Я главный') {
				alert('Здравствуйте!');
			} else {
				alert('Неверный пароль');
			}
		} else {
			alert('Отменено');
		}
	} else {
		alert('Я вас не знаю');
	}
} else {
	alert('Отменено');
}
