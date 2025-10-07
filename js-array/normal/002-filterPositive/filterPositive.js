// Напиши функцію filterPositive(arr), яка повертає новий масив лише з позитивними числами.

function filterPositive(arr) {
  let newArr = [];
  for (const item of arr) {
    if (item > 0) {
      newArr.push(item);
    }
  }
  return newArr;
}

console.log(filterPositive([-3, 5, -1, 0, 8])); // очікується [5, 8]
console.log(filterPositive([-5, -10])); // очікується []
