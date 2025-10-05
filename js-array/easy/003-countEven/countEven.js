// Кількість парних чисел

// Напиши функцію countEven(arr), яка повертає кількість парних чисел у масиві.

function countEven(arr) {
  let count = 0;
  for (const item of arr) {
    if (item % 2 === 0) {
      count++;
    }
  }
  return count;
}

console.log(countEven([1, 2, 3, 4, 6])); // очікується 3
console.log(countEven([1, 3, 5, 7])); // очікується 0
console.log(countEven([2, 4, 8, 10])); // очікується 4
