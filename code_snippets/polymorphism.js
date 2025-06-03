class Animes {
  response() {
    return {
      name: "Sousou no Frieren",
      rate: 10,
      age_rating: 16,
      themes: ["mature", "journey", "alcohol", "violence"], 
    };
  };
};

class Manga {
  response() {
    return {
      name: "Vagabound",
      rate: 10,
      age_rating: 18,
      themes: ["historical", "violence", "philosofy"],
    };
  };
};

function testBodyRequest(instance) {
  const KEYS = Object.keys(instance.response());
  const KEYS_TABLE = ["name", "rate", "age_rating", "themes"];

  let idx = 0;
  let isEqual = true;

  for(const KEY of KEYS_TABLE) {
    if(KEY !== KEYS[idx]) {
      isEqual = false;
    };

    idx++;
  };

  return isEqual;
};

console.log(testBodyRequest(new Animes));
console.log(testBodyRequest(new Manga));