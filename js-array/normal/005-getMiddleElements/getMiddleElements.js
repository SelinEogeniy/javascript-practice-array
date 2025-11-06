// getMiddleElements (normal)

// Поверни середній елемент масиву.
// Якщо елементів парна кількість — поверни два середніх у масиві.
function getMiddleElements(arr) {
  if (arr.length % 2 !== 0) {
    return arr[Math.floor(arr.length / 2)];
  } else {
    return [arr[arr.length / 2 - 1], arr[arr.length / 2]];
  }
}

console.log(getMiddleElements([1, 2, 3])); // 👉 2
console.log(getMiddleElements([1, 2, 3, 4])); // 👉 [2, 3]
