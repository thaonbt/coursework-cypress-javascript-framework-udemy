// Inheritance is the Main Pillar in Object Oriented programming
// One class can inherit/acquire the properties, methods of another class
// The class which inherits the properties of other is known as subclass (derived class, child class)
// The class whose properties are inherited is known as superclass

const Person = require("./basic7")

class Pet extends Person{

    get location(){
        return "BlueCross"
    }

    constructor(firstname, lastname){
        // call parent class constructor
        super(firstname, lastname)
    }

}

let pet = new Pet("sam", "san")
console.log(pet.fullName())
console.log(pet.location)
console.log(pet.age)