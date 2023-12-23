// Задание 3

function getSum(a) {
	return function(b) {
		return a + b;
	};	
}
let x = getSum(6);
console.log(x(1));

