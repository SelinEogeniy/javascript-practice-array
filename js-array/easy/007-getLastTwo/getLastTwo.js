// Напиши функцію getLastTwo(arr), яка повертає останні два елементи масиву.

function getLastTwo(arr) {
  return arr.slice(-2);
}

console.log(getLastTwo(["a", "b", "c", "d"])); // ['c', 'd']
