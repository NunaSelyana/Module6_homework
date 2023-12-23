// Задание 2
function prime(number) {
  let True = 'Простое число';
  let False = 'Данные не верны';
  if (number > 1000)
    return False;
  if (number == 2) return True;
  for (let i = 2; i <= number / 2; i++) {
    if (number % i == 0) {
      return False
    }
  } return True
 }
 console.log(prime(1000));
 console.log(prime(11));