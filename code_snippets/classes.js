// A class is a blueprint of an object.
// Objecs of classes are called of object instance. 

class Smartphone {
  constructor(screenSize, color) {
    this.screenSize = screenSize;
    this.color = color; 
  };
}

const HYPE_SMARTPHONE = new Smartphone();

console.log(Object.getPrototypeOf(HYPE_SMARTPHONE) === Object.getPrototypeOf(Smartphone)); // false 
console.log(Object.getPrototypeOf(HYPE_SMARTPHONE) === Smartphone.prototype); // true

// A class itself is a special function 
// The prototype of Smarphone is "Function"
// The prototype of HYPE_SMARTPHONE is Smartphone.prototype

// this is a representation of constructor in JavaScript. 
function makeRabbit(type) {
  let rabbit = Object.create(protoRabbit); // create a object with a specific prototype 
  rabbit.type = type; // Make sure it has the property and initialize it
  return rabbit; // returns the new instance 
};

function Car(screenSize, color) {
  this.screenSize = screenSize;
  this.color = color;
  // this is a problem. The method is defined every time a net instance is created 
  // the reference changes, the performance is poor... 
  Car.prototype.powerOn = function() {
    console.log("Smartphone is on");
  };
};

// The method must be defined once 
// the property generally changes by instance, so it must be initialzed every time
function Fridge(screenSize, color) {
  this.screenSize = screenSize;
  this.color = color;
};

Fridge.prototype.powerOn = function() {
  console.log("Smartphone is on");
};

class Manga {
  constructor(title) {
    // this is called for every instance
    this.title = title;
  };
  // this is defined on prototype once 
  showTitle() {
    console.log(`The title of manga is ${this.title}`);
  };
};

const DEATH_NOTE = new Manga('Death Note');
const VAGABOND = new Manga('Vagabond');

DEATH_NOTE.showTitle();
VAGABOND.showTitle();

class SuperSecretData {
  #myFavoriteAnime;
  #myFavoriteManga;

  constructor(anime, manga) {
    this.#myFavoriteAnime = anime;
    this.#myFavoriteManga = manga;
  };

  showSecreteData() {
    console.log(`${String(this.#myFavoriteAnime).toUpperCase()} & ${String(this.#myFavoriteManga).toUpperCase()}`);
  };
};

new SuperSecretData("Sousou no Frieren", "Vagabond").showSecreteData();
new SuperSecretData("Hajime no Ippon", "Berserk").showSecreteData();

