// 3) Перевірити, чи масив монотонний (normal)

// Масив монотонний, якщо він тільки зростає або тільки спадає.

function isMonotonic(arr) {
  if (arr.length <= 2) return true;

  let isIncreasing = true;
  let isDiscreasing = true;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      isIncreasing = false;
    }
    if (arr[i] > arr[i - 1]) {
      isDiscreasing = false;
    }
  }

  return isIncreasing || isDiscreasing;
}

console.log(isMonotonic([1, 2, 2, 3])); // true
console.log(isMonotonic([5, 4, 4, 1])); // true
console.log(isMonotonic([1, 3, 2])); // false
