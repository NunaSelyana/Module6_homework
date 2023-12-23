// Задание 4

function getNumber(a, b) {
	let numOne = a;
	let timerId = setInterval(function() {
		console.log(numOne);
		if (numOne == b) {
			clearInterval(timerId);
		}
		numOne++;
	}, 1000);
}

getNumber(6, 12);