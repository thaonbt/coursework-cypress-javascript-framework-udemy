// in order to let other classes call this class, 
// it must be export to public
// class Person{
module.exports = class Person{
    age = 25
    // location = "canada"
    get location(){
        return "canada"
    }
    // constructor is method which executes by default when you create object of the class
    constructor(firstName, lastName){
        this.firstName=firstName
        this.lastName=lastName
    }

    //methods
    
    fullName(){
        console.log(this.firstName + this.lastName)
    }
}

/** These below cannot use when class is export to public */
// let person = new Person("Tim", "Joseph")
// let person1 = new Person("Chris", "John")
// console.log(person.age)
// console.log(person.location)
// console.log(person.fullName())
// console.log(person1.fullName())


