// function personConstructor(name, age) {
//     // an object literal that will be returned
//     var person = {};
//     // attributes of a person
//     person.name = name;
//     person.age = age;
//     // when attached to an object or instance, functions are called 'methods'.
//     // this is our first method, greet
//     person.greet = function(){
//         console.log("Hello my name is " + person.name + " and I am " + person.age + " years old!");
//     }
//     // finally, this function must return an instance
//     return person;
// }
// // create the 'steve' instance, run greet
// var steve = personConstructor("Steve", 27);
// steve.greet();
// // create the 'anika' instance, run greet. note that it is different.
// var anika = personConstructor("Anika", 33);
// anika.greet();
// // finally note how we can refine the greet method for any particular instance
// var emily = personConstructor("Emily", 22);
// emily.greet = function() {
//     console.log("I am the greatest, ever!");
// };
// emily.greet();


// function personConstructor(name, age) {
//     this.name = name;
//     this.age = age;
//     this.greet = function() {
//         console.log("Hello my name is " + this.name + " and I am " + this.age + " years old!");
//     }
// }
// // the 'new' keyword causes our constructor to return the object we expected.
// var anika = new personConstructor('Anika', 33);
// anika.greet();
// console.log(anika);

// function personConstructor(name, age) {
//     this.name = name;
//     this.age = age;
//     this.greet = function() {
//         console.log("Hello my name is " + this.name + " and I am " + this.age + " years old!");
//     }
// }
// var emily = new personConstructor("Emily", 22);
// // using this & new, we can now refer to the 'name' attribute of our instance!
// emily.greet = function() {
//     console.log("My name is " + this.name + " and I'm the coolest ever!");
// }
// emily.greet()
// console.log(emily.age)

// the naming convention for Classes and Object Constructors is that they're capitalized and singular
// function Cat(catName) {
//     var name = catName;
//     this.getName = function() {
//       return name;
//     };
//   }
//   //adding a method to the cat prototype
//   Cat.prototype.sayHi = function() {
//     console.log('meow');
//   };
//   //adding properties to the cat prototype
//   Cat.prototype.numLegs = 4;
//   var muffin = new Cat('muffin');
//   var biscuit = new Cat('biscuit');
//   console.log(muffin, biscuit);
//   //we access prototype properties the same way as we would access 'own' properties
//   muffin.sayHi();
//   biscuit.sayHi();
//   console.log(muffin.numLegs);
//   // we may change an instance's attributes rather than keeping the value set by prototype
//   muffin.numLegs = 3;
//   // poor mutant cats: muffin.__proto__.numLegs ++;
//   // doing this to muffin will cause all the cats to have 5 legs, but muffin will still have 3 legs


// Define the object constructor
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
// // Attach class methods using .prototype
// Person.prototype.greet = function() {
//     console.log("Hello my name is " + this.name + " and I am " + this.age + " years old!");
//     return this;
// };
// // Create new instances with the new keyword
// var amelia = new Person('Amelia', 36);
// // Create instance methods by attaching the function directly to an instance
// amelia.sing = function() {
//     console.log("Lalalala!");
// };
// amelia.sing()
// console.log(amelia.age)

// Private variables are scoped to the constructor with the 'var' keyword
function Car(make, model) {
    var odometer = 0;
    this.make = make;
    this.model = model;
    
    // To make functions private, we scope them to the constructor
    function updateOdometer(distance) {
        odometer += distance;
    };
    
    // 'Getter' functions help us read private variables
    this.readOdometer = function() {
      return odometer;
    }
    
    // 'Setter' functions help us update private variables
    this.drive = function(distance) {
      updateOdometer(distance);
      // return this will allow us to chain methods
      return this;
    }
}
var myCarInstance = new Car("Chevy", "Camaro");
// by returning this, we can chain drive()
myCarInstance.drive(50).drive(90); 
// private variable is undefined
console.log(myCarInstance.odometer);
// but we can read it with our getter function
console.log(myCarInstance.readOdometer());