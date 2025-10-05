// Сума елементів масиву

// Напиши функцію sumArray(arr), яка повертає суму всіх чисел у масиві.
// Якщо масив порожній — поверни 0.

function sumArray(arr) {
  let total = 0;
  for (const item of arr) {
    total += item;
  }
  return total;
}

console.log(sumArray([1, 2, 3, 4])); // очікується 10
console.log(sumArray([-1, 5, 10])); // очікується 14
console.log(sumArray([])); // очікується 0
