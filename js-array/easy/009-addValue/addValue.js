// Створи функцію addValue(arr, value), яка повертає новий масив, де в кінець додається елемент value.
// (Використай concat, а не push!)

function addValue(arr, value) {
  return arr.concat(value);
}

// Перевірка:

console.log(addValue([10, 20], 30)); // [10, 20, 30]
