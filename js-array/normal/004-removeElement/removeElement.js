// 1. removeElement(arr, value)

// Створи функцію, яка видаляє усі входження певного значення з масиву і повертає новий масив.

// ❗ Початковий масив не змінюй.

// console.log(removeElement([1, 2, 3, 2, 4], 2));
// // 👉 [1, 3, 4]

function removeElement(arr, value) {
  return arr.filter((item) => item !== value);
}

console.log(removeElement([1, 2, 3, 2, 4], 2));
