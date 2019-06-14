

/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window and Global object binding, when a function is declare inside a global space, `this` is refer to the window object
* 2. When `this` is use inside an object, `this` is refer to the object on the left-hand side of the dot notation
* 3. New binding, when `this` is used inside a constructor function it is refer to the specific instance
* 4. Explicit binding, when call or apply method is used, `this` is refer to the first parameter inside the paratheses of the method
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function greeting(name) {
    console.log(this) //Window object
    return name;
}
greeting("Peter");

// Principle 2

// code example for Implicit Binding

const restaurant = {
    name: "Chipotle",
    promote: function(){
        return `Hello, welcome to ${this.name}`
    }

}

console.log(restaurant.promote());


// Principle 3

// code example for New Binding

function Animal(attributes) {
    this.name = attributes.name;
	this.age = attributes.age;
	this.zoo = attributes.zoo;
    this.caretaker = attributes.caretaker;
    this.growlingNoise = attributes.growlingNoise
    this.growl = function(){
        console.log(`New binding`,JSON.stringify(this));
        return `${this.name} growls ${this.growlingNoise}`
    }
}

const tiger = new Animal({name: "Nolan", age: 4, zoo: "Portland Zoo", caretaker: "Williams", growlingNoise: "Grrrr..."});
const lion = new Animal({name: "Simba", age: 4, zoo: "San Diego Zoo", caretaker: "Mary", growlingNoise: "Roar..."});
//console.log(tiger.growl());

// Principle 4

// code example for Explicit Binding

tiger.growl.call(lion);
lion.growl.apply(tiger);
//console.log("Nolan: " + tiger.growl());
//console.log(lion.growl());
//console.log(tiger);
//console.log(lion.growl("Grrr..."))

