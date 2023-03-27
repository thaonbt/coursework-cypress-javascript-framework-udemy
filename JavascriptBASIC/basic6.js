// Object is collection of properties

let person = {
    firstName: 'Tim',
    lastName: 'Joe',
    age: 24,
    fullName: function(){
        console.log(this.firstName + this.lastName)
    } 
}

console.log(person)
console.log(person.firstName)
console.log(person['lastName'])
console.log(person.fullName)
console.log(person.fullName())

// Change property 
console.log("*** Change property ***")
person.firstName = "Tim Dane"
console.log(person.firstName)

person.gender = "male"
console.log(person)

delete person.gender
console.log(person)

// Check property exist
console.log('gender' in person)     // false

// Print all values
console.log("*** FOR-loop ***")
for(let key in person){
    console.log(person[key])
}