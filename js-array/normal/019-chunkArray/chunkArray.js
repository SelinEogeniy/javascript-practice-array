// 2) Розбити масив на частини (normal)

// Функція chunkArray(arr, size) ділить масив на підмасиви довжиною size.

function chunkArray(arr, size) {
  return arr.reduce((acc, item) => {
    if (!acc.length || acc[acc.length - 1].length === size) {
      acc.push([]);
    }
    acc[acc.length - 1].push(item);
    return acc;
  }, []);
}

console.log(chunkArray([1, 2, 3, 4, 5], 2));
// [[1,2],[3,4],[5]]
