// chunkArray

// Розбий масив на підмасиви певного розміру.

function chunkArray(arr, size) {
  return arr.reduce((acc, _, i) => {
    if (i % size === 0) {
      acc.push(arr.slice(i, i + size));
    }
    return acc;
  }, []);
}

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 3));
// 👉 [[1, 2, 3], [4, 5, 6], [7]]
