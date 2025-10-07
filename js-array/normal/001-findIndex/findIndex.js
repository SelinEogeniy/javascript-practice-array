// Напиши функцію findIndex(arr, value), яка повертає індекс елемента, якщо він є в масиві, або -1, якщо елемент не знайдено.

function findIndex(arr, value) {
  return arr.indexOf(value);
}

console.log(findIndex([10, 20, 30, 40], 30)); // очікується 2
console.log(findIndex([1, 2, 3, 4], 5)); // очікується -1
