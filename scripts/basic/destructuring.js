let nums = Array.of(1, 2, 3);
console.log(nums);

console.log("Whitout destructuring");
let o = nums[0],
 t = nums[1],
 th = nums[2];

console.log(o, t, th);

console.log("Whit destructuring");

let [one, two, three ] = nums;

console.log(one, two, three);

const pers = {
    name: "Aaron",
    age: 31
};

let { name, age } = pers;
console.log(name, age);

/*
More information of destructurin in below link:

https://dmitripavlutin.com/javascript-object-destructuring/#2-extracting-a-property

*/

