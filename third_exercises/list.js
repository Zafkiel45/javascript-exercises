function prepend(idx, length, list) {
  return idx === length - 1
    ? null
    : {
        value: list[idx + 1],
        rest: prepend(idx + 1, length, list),
      };
}

function arrayToList(arr) {
  let list = {};

  list = {
    ...list,
    value: arr[0],
    rest: prepend(0, arr.length, arr),
  };

  return list;
}

function listToArray(list) {
  const arr = [];

  function interateOverList(list) {
    arr.push(list.value);

    if (!list.rest) {
      return;
    }

    return interateOverList(list.rest);
  }

  interateOverList(list);

  return arr;
}

function nth(list, idx) {
  function findItem(idxFromItem, times, list) {
    if (times === idxFromItem) {
      return list.value;
    }

    return findItem(idxFromItem, times + 1, list.rest);
  }

  return findItem(idx, 0, list);
};

console.log("arrayToList: ", arrayToList([10, 20, 30]));
console.log("listToArray: ", listToArray(arrayToList([10, 20, 30, 40])));
console.log(nth(arrayToList([10, 20, 30]), 2));
// this exercise was, some way, good? Or something like.