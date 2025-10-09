// Створи функцію sumAll(), яка приймає будь-яку кількість чисел
// (через arguments) і повертає їхню суму.

function sumAll() {
  const newArr = Array.from(arguments);
  let total = 0;
  for (const num of newArr) {
    total += num;
  }
  return total;
}

console.log(sumAll(1, 2, 3, 4)); // 10
console.log(sumAll(10, 20, 30)); // 60
