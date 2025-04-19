let n = 1000;
let count = 0;
labelMajor: for (let i = 2; i < n; i++) {
	for (let j = 2; j <= i / 2; j++) {
		if (i % j == 0) {
			count++;
		}
	}
	if (count == 0) {
		console.log(i);
	}
	count = 0;
}
