class House {

  constructor(hight, width) {
    this.height = hight;
    this.width = width;
  };

  get size() {
    return this.height * this.width
  };

};

// the "size" is invoked as a property even being a method 
// this is powerful, because some properties needs updated values or calculated
// values based on others. 
console.log(new House(200, 200).size); 

class User {
  constructor(name, age, height) {
    this.name   = name;
    this.age    = age; 
    this.height = height; 
  };

  // when the following snipped is executed:
  // const myUser = new User("Murilo", 20, 3.21) 
  // myUser.name = "Jhon Doe"; <== the "set" function is called automatically
  
  set name(name) {
    const formatedName = String(name).normalize('NFD');
    this.name = formatedName;
  };
};