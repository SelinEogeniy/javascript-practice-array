// 🧩 flattenArray (normal)

// Напиши функцію, яка “розгортає” вкладений масив на один рівень.

function flattenArray(arr) {
  return arr.flat();
}

console.log(flattenArray([1, [2, 3], [4, 5]]));
// 👉 [1, 2, 3, 4, 5]
