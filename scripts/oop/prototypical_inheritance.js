

function Animal(name, age) {
    this.name = name;
    this.age = age;
}

Animal.prototype.whoami =  () => {
        console.log("im an animal");
    };
    
Animal.prototype.presentation = function () {
        console.log(`Howdy my name is ${this.name} and im ${this.age}`);
    };


//PROTOTYPICAL INHERITANCE

function Dog(name,age,size) {
    this.super = Animal
    this.super(name, age);
    this.size = size;
}

//DOG INHERITS FROM ANIMAL
Dog.prototype = new Animal();
Dog.prototype.constructor = Dog;

//OVERRIDE METHODS
Dog.prototype.whoami = () => {
        console.log("im a dog");
    };

Dog.prototype.bark = function() {
    console.log(`wauu wauuu im ${this.name} im ${this.age} old and im so ${this.size}`);
}

console.clear();
ego = new Dog('ego', 15, 'small');

ego.presentation();
ego.whoami();
ego.bark();

console.log(ego);

