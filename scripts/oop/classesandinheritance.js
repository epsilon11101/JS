
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
    }
    
    presentation() {
        console.log(`Howdy my name is ${this.name} and im ${this.age} and im ${this.size}`);
    }

    bark() {
        console.log("wauu wauuu  wauuu");
    }

};

console.clear();
const ego = new Dog("ego", 15,"small");
console.log(ego);
ego.whoami();
ego.presentation();
ego.bark();
