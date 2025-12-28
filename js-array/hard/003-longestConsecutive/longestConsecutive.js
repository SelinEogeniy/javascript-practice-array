// 🔴 4) longestConsecutive (HARD)

// Створи функцію longestConsecutive(arr),
// яка знаходить найдовшу послідовність підряд ідучих чисел.

// Порядок у масиві може бути будь-який.

function longestConsecutive(arr) {
  const set = new Set(arr);
  let longest = 0;

  for (const num of set) {
    if (!set.has(num - 1)) {
      let current = num;
      let length = 1;

      while (set.has(current + 1)) {
        current++;
        length++;
      }
      longest = Math.max(longest, length);
    }
  }
  return longest;
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
// 4  (послідовність: 1,2,3,4)

console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
// 9  (0–8)
