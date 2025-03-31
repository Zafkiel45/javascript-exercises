const mutableCharArr = ['a','b','c','d'];
const mutableNumArr = [1,2,3,4];

function reverseArray(arr) {
  const reversedArray = [];

  if (!arr) {
    console.error("there is not an array here!");
  } else {
    for (let element of arr) {
      reversedArray.unshift(element);
    }
  }

  return reversedArray;
}

function reveseArrayInPlaceWrong(arr) {
    const slicedArr = arr.slice(0, -1);

    for(let length = 0; length < (arr.length - 1); length++) {
        arr.shift();
    };


};

console.log(mutableCharArr);

// reverseArray
console.log(reverseArray([1,2,3]));
console.log(reverseArray(["a", "b", "c"]));
console.log('-------------------');

function reverseArrayInPlace(array) {
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
      let old = array[i];
      array[i] = array[array.length - 1 - i];
      array[array.length - 1 - i] = old;
    }
    return array;
}

reverseArrayInPlace(mutableCharArr);