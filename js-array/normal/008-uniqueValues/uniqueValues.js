// 🧩 uniqueValues (normal)

// Поверни новий масив, у якому усі елементи унікальні (без повторів).

// ?Variant1 (Set)
// function uniqueValues(arr) {
//   return [...new Set(arr)];
// }
// ? Variant2 (filter)
function uniqueValues(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}

console.log(uniqueValues([1, 2, 2, 3, 3, 3]));
// 👉 [1, 2, 3]
