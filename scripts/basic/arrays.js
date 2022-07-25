console.log("ARRAYS")

const exampleArray = function () {
    
    return [1, 2, 3];
 }

const ea_my_array = [];
const ea_b = [1, 2, 'a',["A"],exampleArray()];


console.log(`this is an empty array`);
console.log(ea_my_array);
console.log(`filled array`);
console.log(ea_b);
console.log(`lenght of array ${ea_b.length}`);
console.log(`specific element ${ea_b[4][1]}`);


console.log("ES6 new way to fill arrays with Array.of")
const ea_c = Array.of("X", exampleArray(), 4, 5, 6);
console.log(ea_c);

console.log("assign to all elements a specific value and create n elements array");
const ea_d = Array(100).fill(false);
console.log(ea_d);


const ea_colors = ["red", "green", "blue"];
console.log(ea_colors)

console.log('add new elements');
ea_colors.push('Black');
console.log(ea_colors);

console.log('remove last element');
ea_colors.pop();
console.log(ea_colors);

console.log('');
ea_colors.forEach(function(element,index){
    console.log(`<li id=${index}>${element}</li>`);
});
