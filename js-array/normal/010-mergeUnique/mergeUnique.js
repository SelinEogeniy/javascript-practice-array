// mergeUnique

// Об’єднай два масиви в один без повторів (але без використання Set).

function mergeUnique(arr1, arr2) {
  const result = [...arr1];
  for (const item of arr2) {
    if (!result.includes(item)) {
      result.push(item);
    }
  }
  return result;
}

console.log(mergeUnique([1, 2, 3], [3, 4, 5])); // 👉 [1, 2, 3, 4, 5]
