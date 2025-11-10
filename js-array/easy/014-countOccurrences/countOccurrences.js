// countOccurrences

// Напиши функцію, яка рахує, скільки разів певне значення зустрічається в масиві.

function countOccurrences(arr, value) {
  return arr.reduce((acc, item) => {
    if (item === value) {
      acc++;
    }
    return acc;
  }, 0);
}

console.log(countOccurrences([1, 2, 2, 3, 2, 2], 2)); // 👉 3
