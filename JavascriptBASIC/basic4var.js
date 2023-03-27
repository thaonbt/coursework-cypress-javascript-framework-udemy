// block of code can be executed together 
// by wrapping them in a module called function

// var - global level/functional
// let - global level/block level {}
// const - similar with let, but once assigned, cannot reassigned it

var varGreet = "Evening"
var varBye = "Hello"

let letGreet = "Evening"

const constGreet = "Evening"

//Function has name
function add(a,b){
    var varGreet = "Morning"            // CAN'T
    varBye = "Bye"                      // CAN
    let letGreet = "Morning"            // CAN'T
    const constGreet = "Morning"        // CAN'T
    return a+b
}

let sum = add(2,3)
console.log("After a function()")
console.log(sum)
console.log("varGreet: "+varGreet)      // Evening
console.log("varBye: "+varBye)          // Bye
console.log("letGreet: "+letGreet)      // Evening
console.log("constGreet: "+constGreet)  // ?

if(1==1){
    var varGreet = "Afternoon"          // CAN
    let letGreet = "Afternoon"          // CAN'T
    const constGreet = "Morning"        
}

console.log("After 1st block If()")
console.log("varGreet: "+varGreet)
console.log("letGreet: "+letGreet)
console.log("constGreet: "+constGreet)

if(1==1){
    // var varGreet = "Afternoon"
    letGreet = "Afternoon"              // CAN
    // constGreet = "Morning"              // CAN'T
}

console.log("After 2nd block If()")
console.log("letGreet: "+letGreet)
// console.log("constGreet: "+constGreet)

//Function do not have name => Anyonmus function -- Function expression
var sumOfIntegers = function(c,d){
                        return c+d
                    }
console.log(sumOfIntegers(2,3))

var sumOfIntegers = (c,d)=>{return c+d}
console.log(sumOfIntegers(2,3))

var sumOfIntegers = (c,d)=>c+d
console.log(sumOfIntegers(2,3))