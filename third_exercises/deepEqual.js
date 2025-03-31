function DeepEqual(a, b) {
  if (a === b) return true;
  if (!a || !b || typeof a !== "object" || typeof b !== "object") return false;

  const keys1 = Object.keys(a),
    keys2 = Object.keys(b);

  if (keys1.length !== keys2.length) return false;

  for (let key of keys1) {
    if(!keys2.includes(key) || !DeepEqual(a[key], b[key])) return false; 
  };

  return true;
};

console.log(DeepEqual({value: 1}, {value: 1}))
console.log(DeepEqual({value: 1}, {value: 2}))
console.log(DeepEqual({value: 1}, {value: 1, value2: 2}))
