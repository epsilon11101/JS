
class Animal {
    // CONSTRUCTOR
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // METHODS

    whoami() {
        console.log("im an animal");
    }
    
    presentation() {
        console.log(`Howdy my name is ${this.name} and im ${this.age}`);
    }

};

class Dog extends Animal {
    constructor(name, age, size) {
        super(name, age);
        this.size = size;
        this.kind_breed = null;
    }
    
    presentation() {
        console.log(`Howdy my name is ${this.name} and im ${this.age} and im ${this.size}`);
    }

    bark() {
        console.log("wauu wauuu  wauuu");
    }

    static hi() {
        console.log('Howdy there!');
    }

    get breed() {
        return this.kind_breed;
    }

    set breed(breed) {
        this.kind_breed = breed;
    }

};


const ego = new Dog("ego", 15,"small");
console.log(ego);
ego.whoami();
ego.presentation();
ego.bark();
ego.breed = "American pitbull";
console.log(ego.breed);
Dog.hi();
alert("press ok when read the console log results");