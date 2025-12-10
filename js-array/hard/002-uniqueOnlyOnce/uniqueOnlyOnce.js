// 5) Повернути масив без елементів, що повторюються більше 1 разу (складна) Тобто забрати всі значення, які дублюються.

function uniqueOnlyOnce(arr) {
  let count = {};

  for (const item of arr) {
    if (count[item] === undefined) {
      count[item] = 1;
    } else {
      count[item] += 1;
    }
  }

  return arr.filter((item) => count[item] === 1);
}

//
console.log(uniqueOnlyOnce([1, 2, 2, 3, 4, 4, 5])); // [1, 3, 5]
//
console.log(uniqueOnlyOnce(["a", "b", "b", "c", "d", "d"])); // ["a", "c"]
