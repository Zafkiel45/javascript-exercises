const length = Symbol('length');

Array.prototype[length] = 0; // settled a new property called "length"

console.log([1,2,3].length); // the original "Length"
console.log([1,2,3][length]) // the new "length"

// Symbols creates a unique, reference to a specific name. 
// This allow we to use properties with the same name, but with references different 
// preventing erros or overwriting. 

