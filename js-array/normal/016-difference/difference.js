// 🟡 2) difference (normal)

// Створи функцію difference(arr1, arr2), яка повертає елементи,
// що є в arr1, але відсутні в arr2.

// //! Varianat 1
// function difference(arr1, arr2) {
//   let newArr = [];
//   for (const i of arr1) {
//     if (!arr2.includes(i)) {
//       newArr.push(i);
//     }
//   }
//   return newArr;
// }

console.log(difference([1, 2, 3], [2, 4]));
// [1, 3]

console.log(difference(["a", "b", "c"], ["b"]));
// ["a", "c"]
