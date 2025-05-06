let arrays = [[1, 2, 3], [4, 5], [6]];

function flattenArrs(arr) {
  const flatteredArr = arr.reduce((prev,current) => prev.concat(current));
  console.log(flatteredArr);
  return flatteredArr;
};

flattenArrs(arrays)
