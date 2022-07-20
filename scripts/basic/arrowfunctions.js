//expressed anonymous function
const hi = function () {
    console.log("Hi");
}
hi();

const hiArrow = name => {
    console.log(`Hi ${name}`);
}
hiArrow();
const arrow = name => console.log(`one line function ${name}`);
arrow('aaron');
const addition = (a, b) =>  a + b; ;

console.log(addition(9, 9));

const num = Array.of(1, 2, 3, 4, 5);

num.forEach((ele, index) => {
    console.log(ele, index);
});


const ear_dog = {
    name: 'Yuno',
    bark2() { console.log(this);},
    bark: () => { console.log(this);} //inherits from the object where it be declared
    
}

ear_dog.bark2();
ear_dog.bark();
