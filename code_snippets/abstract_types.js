const peek = (() => {
  const peekedArr = (targetArr) => targetArr[targetArr.length - 1];

  return {
    peekArr: peekedArr,
  }
})();

console.log(peek.peekArr([1,2,3]));

const stringFormatter = (() => {
  const toLowerString = (text) => String(text).toLowerCase();
  const toUpperString = (text) => String(text).toUpperCase();
  const formatString  = (text) => String(text).normalize('NFD');
  const splitedString = (text) => String(text).split(' ');
  const noWhiteSpaceString = (text) => String(text).trim();
  
  return {
    toLowerString,
    toUpperString,
    formatString,
    splitedString,
    noWhiteSpaceString,
  };
})();

console.log(stringFormatter.noWhiteSpaceString('I LOVE ANIMES SO MUCH   '));
console.log(stringFormatter.formatString('EU DIGO NÃO!'));
console.log(stringFormatter.toUpperString('yes, I bought Dark Souls today!'));
console.log(stringFormatter.splitedString('HONKAI START RAIL'));
console.log(stringFormatter.toLowerString('SO SMALL'));