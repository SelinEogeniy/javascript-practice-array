// replaceAt (normal)

// Створи функцію, яка замінює елемент у масиві за індексом на нове значення.
// Повертає новий масив, не змінюючи старий.

function replaceAt(arr, index, newValue) {
  const newArr = [...arr];
  newArr[index] = newValue;
  return newArr;
}

console.log(replaceAt(["a", "b", "c"], 1, "z"));
// 👉 ['a', 'z', 'c']
