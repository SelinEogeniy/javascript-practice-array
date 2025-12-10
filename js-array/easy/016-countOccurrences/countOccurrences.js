// 🟢 2. countOccurrences

// Напиши функцію, яка рахує, скільки разів певне значення зустрічається в масиві.

function countOccurrences(arr, value) {
  let count = 0;
  for (let i of arr) {
    if (i === value) {
      count++;
    }
  }
  return count;
}

console.log(countOccurrences([1, 2, 2, 3, 2], 2)); // 👉 3
