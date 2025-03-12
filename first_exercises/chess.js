let chess = "";
let size = 10;

for(let c = 0; c <= size; c++) {

    for(let e = 0; e <= size; e++) {
        if((c + e) % 2 === 0) {
            chess += "#";
        } else {
            chess += " ";
        };
    };

    chess += "\n";
};

console.log(chess);
