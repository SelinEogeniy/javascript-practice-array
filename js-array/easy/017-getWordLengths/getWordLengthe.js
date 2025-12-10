// 1) Отримати довжини всіх слів у масиві (легка)

// Функція getWordLengths(arr) приймає масив слів і повертає масив їх довжин.

function getWordLengths(arr) {
  return arr.map((item) => item.length);
}

console.log(getWordLengths(["cat", "hello", "JS"]));
// [3, 5, 2]
