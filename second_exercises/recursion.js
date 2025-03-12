function isEven(target) {
    if(target === 0) {
        return true;
    } else if(target === 1) {
        return false;
    } else {
        return isEven(target - 2);
    }
};

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));

/* Partially completed... I forgot to consider negative values. Below, the correct version: */

function isEven(n) {
    if (n == 0) return true;
    else if (n == 1) return false;
    else if (n < 0) return isEven(-n);
    else return isEven(n - 2);
  }
  
  console.log(isEven(50));
  // → true
  console.log(isEven(75));
  // → false
  console.log(isEven(-1));
  // → false