function every(arr, test) {
  let isEverything; 

  if(arr.length === 0) return true;

  arr.forEach((item) => {
    if(!test(item)) {isEverything = false; return} 
    else {isEverything = true}
  });

  return isEverything;
};
// copied
function every2(array, predicate) {
  return !array.some(element => !predicate(element));
};

console.log(every([1, 3, 5], n => n < 10));
console.log(every([2, 4, 16], n => n < 10));
console.log(every([], n => n < 10));
