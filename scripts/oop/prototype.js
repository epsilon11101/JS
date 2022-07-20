// the function only has attributs
function Animal(name, age) {
    this.name = name;
    this.age = age;
}
// the prototypes functions doesnt will duplicate
Animal.prototype.bark =  () => {
        console.log("wauuu wauuu");
    };
    
Animal.prototype.presentation = function () {
        console.log(`Howdy my name is ${this.name} and im ${this.age}`);
    };

const yuno = new Animal('yuno', 2);
const ego = new Animal('ego', 15);

yuno.bark();
yuno.presentation();
ego.presentation();
console.log("---------------------");
yuno.name = 'Doris';
yuno.age = 15;
ego.name = "egito";
ego.age = 100;

console.clear();
ego.bark();
yuno.presentation();
ego.presentation();

