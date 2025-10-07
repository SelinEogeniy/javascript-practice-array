// Напиши функцію reverseArray(arr), яка повертає новий масив, елементи якого йдуть у зворотному порядку.
// Оригінальний масив не повинен змінюватися.

// 🔹 Приклад використання:
function reverseArray(arr) {
  const reverseArr = arr.reverse();
  return reverseArr;
}

console.log(reverseArray([1, 2, 3, 4])); // очікується [4, 3, 2, 1]
console.log(reverseArray(["a", "b", "c"])); // очікується ["c", "b", "a"]
