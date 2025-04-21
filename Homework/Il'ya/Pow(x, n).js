function pow(x, n) {
	let result = 1;
	for (let i = 0; i <= n; i++) {
		result *= x;
	}
	return result;
}

let x = +prompt('Введите число для возведения в степень (основание)');
let n = +prompt('Введите степень, в которую нужно возвести число');

alert(pow(x, n));
