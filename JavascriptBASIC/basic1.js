// these are comments

/*
another way to comment
*/

console.log("Hello World")

// JS automatically see nature of the value to declare the variables
// so, we do not need to declare its datatype
// just need begin with:
// 'var'                 <- from JS ver. ES5
var str = "hello"
// 'var'  (let, const)   <- from JS ver. ES6, 
// 'var' can be used also, as 'let'
// but recommend to use 'let' to declare variables

/** DECLARE VARIABLES */
let a = 4
console.log("Datatype of '" + a + "' is " + typeof(a))

const b = 234.6
console.log("Datatype of '" + b + "' is " + typeof(b))

var c = "Rahul Shetty"
console.log("Datatype of '" + c + "' is " + typeof(c))

let required = true
console.log("Datatype of '" + required + "' is " + typeof(required))
console.log("Datatype of '" + !required + "' is " + typeof(required))

let nullObject = null
console.log("Datatype of '" + nullObject + "' is " + typeof(nullObject))

let undefined
console.log("Datatype of '" + undefined + "' is " + typeof(undefined))

/** ASSIGN TO VARIABLES */

// b = 10.3            <= it did not work, because
//                      b is a constant variable, so its value cannot be changed 

// c = a+b             <= it work, because
//                      re-assign is allowed with 'let'

// let c = a+b      <=  it did not work, because
//                      we cannot re-declare cariable with 'let' keyword
//                      but possible with 'var'
var c = a+b
console.log(c)




