// Створи функцію pushMany(arr, ...values), яка додає кілька значень одразу
// і повертає новий масив.

function pushMany(arr, ...values) {
  arr.push(...values);
  return arr;
}

console.log(pushMany([10], 20, 30, 40)); // [10, 20, 30, 40]
