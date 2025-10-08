// Створи функцію arrayToString(arr), яка приймає масив слів і повертає один рядок, де слова розділені пробілом.
// Перевірка:

function arrayToString(arr) {
  return arr.join(" ");
}

console.log(arrayToString(["Hello", "world", "!"])); // "Hello world !"
