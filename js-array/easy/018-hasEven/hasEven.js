// 2) Перевірити, чи масив містить парне число (легка)

// Функція hasEven(arr) повертає true/false.

function hasEven(arr) {
  return arr.some((item) => item % 2 === 0);
}

console.log(hasEven([1, 3, 5])); // false
console.log(hasEven([1, 4, 7])); // true
