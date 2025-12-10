// 3) Отримати всі числа більші за середнє значення масиву (середня)

// Функція aboveAverage(arr).

function aboveAverage(arr) {
  if (arr.length === 0) return [];
  const average = arr.reduce((acc, item) => acc + item) / arr.length;
  return arr.filter((item) => item > average);
}

console.log(aboveAverage([1, 2, 3, 4, 5]));
// [4, 5]

console.log(aboveAverage([10, 10, 10]));
