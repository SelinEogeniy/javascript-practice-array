// Напиши функцію getFirstThree(arr), яка повертає перші три елементи масиву.

function getFirstThree(arr) {
  return arr.slice(0, 3);
}

console.log(getFirstThree([10, 20, 30, 40, 50])); // [10, 20, 30]
