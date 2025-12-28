// 🟡 3) compactArray (normal)

// Створи функцію compactArray(arr), яка видаляє всі falsy-значення
// (false, 0, "", null, undefined, NaN).

//! Variant 1
function compactArray(arr) {
  const falseValue = [false, 0, "", null, undefined, NaN];

  for (let i = arr.length - 1; i >= 0; i--) {
    if (falseValue.includes(arr[i])) {
      arr.splice(i, 1);
    }
  }

  return arr;
}

console.log(compactArray([0, 1, false, 2, "", 3]));
// [1, 2, 3]

console.log(compactArray([null, "hi", undefined, ""]));
// ["hi"]
