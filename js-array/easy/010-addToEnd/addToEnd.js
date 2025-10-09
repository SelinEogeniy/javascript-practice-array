// Створи функцію addToEnd(arr, value), яка додає value у кінець масиву за допомогою push()
// і повертає оновлений масив.

function addToEnd(arr, value) {
  arr.push(value);
  return arr;
}

console.log(addToEnd([1, 2, 3], 4)); // [1, 2, 3, 4]
