function addition(a, b,...c) {
    let res = a + b;

    c.forEach(function (n) {
        res += n;
    })

    return res;
}

console.log("REST OPERATOR")
console.log(addition(1, 2));
console.log(addition(1, 2, 3));
console.log(addition(1, 2, 3, 4));
console.log(addition(1, 2, 3, 4, 5));


const arr1 = [1, 2, 3, 4, 5],
    arr2 = [6, 7, 8, 9, 0];
    
console.log(arr1, arr2);

const arr3 = [...arr1, ...arr2];
console.log("SPREAD OPERATOR");
console.log(arr3);
alert("press ok when read the console log results");


