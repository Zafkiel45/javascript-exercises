function range(start, end, step) {
  const arr = [];

  if (typeof step === "undefined") {
    for (let c = start; c <= end; c++) arr.push(c);
  } else if (step < 0) {
    for (let c = start; c > end; c += step) arr.push(c);
    arr.push(end);
  } else {
    for(let c = start; c < end; c += step) arr.push(c);
    arr.push(end);
  }

  return arr;
}

function sum(arr) {
    let sum = 0;
    for(let num of arr) {
        sum += num;
    };

    return sum;
}

console.log('example 1');
console.log(range(1, 10));
console.log('example 2');
console.log(range(10, 1, -1));
console.log('example 3');
console.log(range(10, 1, -3));
console.log('example 4');
console.log(range(0, 10, 2));
console.log('total of sum');
console.log(sum(range(1, 10)));