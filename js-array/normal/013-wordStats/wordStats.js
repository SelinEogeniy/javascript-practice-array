// 4) Створити об’єкт, де ключ — слово, а значення — кількість букв (середня)

// Функція wordStats(arr).

function wordStats(arr) {
  let newObj = {};
  arr.map((item) => (newObj[item] = item.length));
  return newObj;
}

console.log(wordStats(["apple", "hi", "sun"]));

// { apple: 5, hi: 2, sun: 3 }
