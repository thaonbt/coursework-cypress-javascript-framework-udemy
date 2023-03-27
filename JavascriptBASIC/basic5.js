let day = 'tuesday '
console.log("length od day: "+day.length)           //8

let subDay = day.slice(0,4)
console.log("slice day to (0,4): "+subDay)          //tues

console.log("index 1 of day: "+day[1])              //u

let splitDay = day.split("s")
console.log("splitted day by 's': "+splitDay)       //[tue,day ]
console.log("index 1 of the splitted day by 's' (before trim): "+splitDay[1])       // "day "
console.log("index 1 of the splitted day by 's' (length): "+splitDay[1].length)            // 4
console.log("index 1 of the splitted day by 's' (AFTER trim): "+splitDay[1].trim()) // "day"
console.log("index 1 of the splitted day by 's' (AFTER trim): "+splitDay[1].trim().length) // 3



//

let date = '23'
let nextDate = '27'
let diff = parseInt(nextDate-date)
console.log(diff)

diff.toString()


//

let newQuote = day + "is Funday"
console.log(newQuote)

let val=newQuote.indexOf('day')
console.log("index (from 0) of 'day' in string 'tuesday is Funday' is: "+val)

val=newQuote.indexOf('day',5)
console.log("index (from 5) of 'day' in string 'tuesday is Funday' is: "+val)

let count=0
val=newQuote.indexOf('day')
while(val !== -1)
{
    count++
    val=newQuote.indexOf('day',val+1)
    console.log(val+1)
}
console.log("count of 'day' existence in string 'tuesday is Funday' is: "+count)