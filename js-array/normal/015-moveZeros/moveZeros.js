// 🟡 1) moveZeros (normal)

// Створи функцію moveZeros(arr), яка переносить всі нулі в кінець масиву,
// зберігаючи порядок інших елементів.
//! Variant 1
function moveZeros(arr) {
  const withoutZeros = arr.filter((num) => num !== 0);
  const zeros = arr.filter((num) => num === 0);
  return [...withoutZeros, ...zeros];
}

//! Variant 2
function moveZeros(arr) {
  const result = [];
  let zeroCount = 0;

  for (const item of arr) {
    if (item === 0) {
      zeroCount++;
    } else {
      result.push(item);
    }
  }

  while (zeroCount > 0) {
    result.push(0);
    zeroCount--;
  }

  return result;
}

console.log(moveZeros([0, 1, 0, 3, 12]));
// [1, 3, 12, 0, 0]

console.log(moveZeros([0, 0, 1]));
// [1, 0, 0]
