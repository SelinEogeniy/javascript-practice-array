// 🟡 1) groupByLength (normal)

// Створи функцію groupByLength(arr), яка приймає масив рядків
// і повертає об’єкт, де:

// ключ — довжина рядка

// значення — масив слів з такою довжиною

function groupByLength(arr) {
  return arr.reduce((acc, item) => {
    const key = item.length;
    if (!acc[key]) {
      acc[key] = [];
      acc[key].push(item);
    } else {
      acc[key].push(item);
    }
    return acc;
  }, {});
}

// Приклад:
console.log(groupByLength(["cat", "dog", "apple", "hi", "sun"]));

// {
//   2: ["hi"],
//   3: ["cat", "dog", "sun"],
//   5: ["apple"]
// }
