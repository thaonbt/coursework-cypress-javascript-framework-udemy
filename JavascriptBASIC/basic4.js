// block of code can be executed together 
// by wrapping them in a module called function

//Function has name
function add(a,b){
    return a+b
}

let sum = add(2,3)
console.log(sum)

//Function do not have name => Anyonmus function -- Function expression
var sumOfIntegers = function(c,d){
                        return c+d
                    }
console.log(sumOfIntegers(2,3))

var sumOfIntegers = (c,d)=>{return c+d}
console.log(sumOfIntegers(2,3))

var sumOfIntegers = (c,d)=>c+d
console.log(sumOfIntegers(2,3))