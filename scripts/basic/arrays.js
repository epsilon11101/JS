console.log("ARRAYS")

const exampleArray = function () {
    
    return [1, 2, 3];
 }

const my_array = [];
const b = [1, 2, 'a',["A"],exampleArray()];


console.log(`this is an empty array`);
console.log(my_array);
console.log(`filled array`);
console.log(b);
console.log(`lenght of array ${b.length}`);
console.log(`specific element ${b[4][1]}`);


console.log("ES6 new way to fill arrays with Array.of")
const c = Array.of("X", exampleArray(), 4, 5, 6);
console.log(c)

console.log("assign to all elements a specific value and create n elements array");
const d = Array(100).fill(false);
console.log(d);


const colors = ["red", "green", "blue"];
console.log(colors)

console.log('add new elements');
colors.push('Black');
console.log(colors);

console.log('remove last element');
colors.pop();
console.log(colors);

console.log('');
colors.forEach(function(element,index){
    console.log(`<li id=${index}>${element}</li>`);
});

alert("press ok when read the console log results");