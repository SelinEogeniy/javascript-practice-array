// Знаходження найбільшого числа

// Напиши функцію findMax(arr), яка повертає найбільше число в масиві.
// (Вважай, що масив містить хоча б один елемент.)

function findMax(arr) {
  let max = arr[0];
  for (const num of arr) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}

console.log(findMax([3, 7, 2, 9, 5])); // очікується 9
console.log(findMax([-10, -3, -25, -1])); // очікується -1
