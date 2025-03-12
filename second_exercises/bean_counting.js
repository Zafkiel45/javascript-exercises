function count(string, targetChart) {
    let count = 0;

    for(let c = 0; c < string.length; c++) {
        if(string[c]  === targetChart) {
            count++;
        };
    };

    return count;
};

function countChart(string, targetChar) {
    return count(string, targetChar);
};

console.log(countChart("akame ga kill", 'a'));


/* SUCESSFULLY COMPLETED */ 