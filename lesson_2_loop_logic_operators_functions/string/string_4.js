// https://learn.javascript.ru/task/extract-currency
// Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.

// Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.

// Например:
// alert( extractCurrencyValue('$120') === 120 ); // true
let str = prompt('znak+chislo', '')
function extractCurrencyValue(str) {
	return +str.slice(1)
}
alert(extractCurrencyValue(str))