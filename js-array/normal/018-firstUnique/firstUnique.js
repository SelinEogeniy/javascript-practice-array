// 1) Знайти перше унікальне значення (normal)

// Напиши функцію firstUnique(arr), яка повертає перший елемент, що зустрічається тільки один раз.

function firstUnique(arr) {
  const count = {};
  for (const item of arr) {
    count[item] = (count[item] || 0) + 1;
  }

  for (const item of arr) {
    if (count[item] === 1) {
      return item;
    }
  }
}

console.log(firstUnique([2, 3, 4, 2, 3, 5, 4]));
// 5

console.log(firstUnique(["a", "b", "a", "c", "b"]));
// "c"
