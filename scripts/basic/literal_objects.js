let name = 'Yuno',
    age = 2;

const dog = {
    name: name,
    age: age,
    bark: function () {
        console.log("guau guau");
    }
}

const dog2 = {
    name,
    age,
    breed: "street dog",
    bark() {
        console.log("guau guau guau");
    }
}

console.log(dog2);
dog2.bark();

