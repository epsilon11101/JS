const b = {};
console.log(b);

const person = {
    Name: "Aaron",
    Last_name: "Miranda Victorino",
    Age: 31,
    hobbies: ['walk', 'hiking', 'research'],
    Contact: {
        tel: "+5212457865",
        email: "amirandav1991@gmail.com"
    },
    Greeting: function () {
        console.log("Hello there!");
    },
    SayMyName: function () {
        console.log("Hi there I'm " + this.Name + " " + this.Last_name);
        console.log("these are my hobbies ");
        this.hobbies.forEach(function (el) { console.log(el); });
    }
      }

console.log(person);
console.log("Access to specific key");
console.log(person["Name"]);
console.log(person["Contact"]["email"]);
console.log(person["Greeting"]);

console.log("The correct way to access to its attributes");
console.log(person.Age);
console.log(person.Contact.tel);

console.log("The correct way to access to its methods");
person.Greeting();
person.SayMyName();

console.log("Some important methods");
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(person.hasOwnProperty("Name")); //evaluate if the property exists
alert("press ok when read the console log results");