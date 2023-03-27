console.log("**************************************")
/** 
 * work with NUMBERS 
 */

let marks = Array(6)

marks = new Array(20,40,35,12,37,100)
// OR
marks = [20,40,35,12,37,100]    
console.log("Array 'marks': " + marks)                          // [20,40,35,12,37,100]
console.log("Length of the array: " + marks.length)             //6

console.log("Value at index 2: " + marks[2])                    //35
marks[2] = 14
console.log("Value at index 2 after re-assign: " + marks[2])    //14

console.log("**************************************")
marks.push(65)
console.log("Array after 'push': " + marks)                     // [20,40,35,12,37,100,65]
console.log("Length of the array: " + marks.length)             // 7

console.log("**************************************")
marks.pop()
console.log("Array after 'pop': " + marks)                      // [20,40,35,12,37,100]
console.log("Length of the array: " + marks.length)             // 6

console.log("**************************************")
marks.unshift(12)
console.log("Array after 'unshift': " + marks)                  // [12,20,40,35,12,37,100]
console.log("Length of the array: " + marks.length)             // 7

console.log("**************************************")
console.log("Index of 100 is: " + marks.indexOf(100))           // 6   

console.log("**************************************")
console.log("120 presents in array? - " + marks.includes(120))  // false

console.log("**************************************")
subMarks = marks.slice(2,5)
console.log("Array 'subMarks' slice(2,5): " + subMarks)                    // [40,14,12]
subMarks = marks.slice(2,-2)
console.log("Array 'subMarks' slice(2,-2): " + subMarks)                    // [40,14,12]

console.log("**************************************")
var sum=0
for(let i=0; i<marks.length; i++){
    console.log("sum = " + sum + ' + ' + marks[i])
    sum += marks[i]
}
console.log("sum = " + sum)

/** 'REDUCE' map */
console.log("**************************************")
var sum=0
let total = marks.reduce((sum, mark) => sum + mark, 0)
console.log("Total after 'REDUCE' = " + total)

console.log("**************************************")
var scores = [12,13,14,16]
// Create new array with even numbers of scores array -> [12,14,16]
var evenScores = []
for(let i=0; i<scores.length; i++){
    if(scores[i]%2 == 0)
        evenScores.push(scores[i])
}
console.log(evenScores)

/** 'FILTER' map */
console.log("**************************************")
let newFilterEvenScores= scores.filter(score => score%2==0)
console.log("Scores after 'FILTER': " + newFilterEvenScores)

/** 'MAP' array function, map from 1 value to new value */
console.log("**************************************")
scores = [12,13,14,16]
console.log("Scores array: ")
console.log(scores)

let evenVal = scores.filter(val => val%2==0)
console.log("Mapped scores after 'FILTER' to even: ")
console.log(evenVal)                           // [12,14,16]

// Ex: create array with even numbers and mulitply each value with 3
// means [12,14,16] => [36,42,48]
let mappedArray = evenVal.map(score => score * 3)
console.log("Scores after 'MAP': ")
console.log(mappedArray)                       // [36,42,48]

let totalVal = mappedArray.reduce((sum, val) => sum+val, 0)
console.log("Mapped scores after 'REDUCE': ")
console.log(totalVal)                          // 126

console.log("**************************************")
let sumValue = scores.filter(score=>score%2==0).map(score=>scores*3).reduce((sum, val) => sum+val, 0)
console.log("Sum value after 'FILTER, 'MAP' and 'REDUCE': ")
console.log(totalVal)  


/**
 * work with SORT
 */
console.log("**************************************")
let fruits = ["banana", "mango", "pomegrante", "apple"]
console.log("String array: ")
console.log(fruits)
fruits.sort()
console.log("Sorted String array: ")
console.log(fruits)
fruits.reverse()
console.log("Reversed String array: ")
console.log(fruits)

console.log("**************************************")
console.log("zero in '003' will be removed with sort() ")
scores = [12,003,19,16,14]
console.log("Number array: ")
console.log(scores)
scores.sort()
console.log("Sorted Number array: ")
console.log(scores)
console.log("Add function to avoid the removing zero in '003'")
scores.sort(function(a,b){
    return a-b
})
//similar with
scores.sort((a,b)=>a-b)
console.log(scores)

console.log("**************************************")
var stringInteger = ["banana",12,"mango",003,19,"pomegrante",16,"apple",14]
console.log("String&Number array: ")
console.log(stringInteger)
stringInteger.sort()
console.log("Sorted String&Number array: ")
console.log(stringInteger)