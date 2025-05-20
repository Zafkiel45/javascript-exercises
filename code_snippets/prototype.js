const PROTO_ARRAY = Object.getPrototypeOf([]) === Array.prototype;
const PROTO_OBJECT = Object.getPrototypeOf({}) === Object.prototype;
const PROTO_FUNCTION = Object.getPrototypeOf(new Function) === Function.prototype;
const PROTO_ROOT = Object.getPrototypeOf(Object.prototype) === Object.prototype;

console.log(PROTO_ARRAY + ' <== Array');
console.log(PROTO_FUNCTION + ' <== Function');
console.log(PROTO_OBJECT + ' <== Object');
console.log(PROTO_ROOT + ' <== Root'); // Null/false;

const PROTO_HOBBIES = {
  show(type) {
    console.log(`Showing all items of ${type}`);
  }
};

const ANIMES = Object.create(PROTO_HOBBIES);
const MANGA  = Object.create(PROTO_HOBBIES);
const GAMES  = Object.create(PROTO_HOBBIES);
const PROGRAMMER = Object.create(PROTO_HOBBIES);

ANIMES.show('Animes');
MANGA.show('Manga');
GAMES.show('Games');
PROGRAMMER.show('Programmer');

