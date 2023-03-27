// IF-condition
console.log("************************")
const flag = true
if(!flag){
    console.log(flag)
    console.log('condition satisfied')
}else{
    console.log(flag)
    console.log('condition not satisfied')
}

//WHILE-loop
console.log("************************")
let i=0
while(i<3){
    console.log('I am inside WHILE-loop ' + i)
    i++
}

console.log("************************")
require=true
while(require){
    console.log('I am inside WHILE-loop ' + require)
    require=false
}

//DO-WHILE-loop
console.log("************************")
i=0
do{
    console.log('I am inside DO-WHILE-loop ' + i)
    i++
}while(i<3)

//FOR-loop
console.log("************************")
for(let k=0; k<3; k++){
    console.log('I am inside FOR-loop ' + k)
}

// 2 and 5
// from 1 to 10, give me common multiple values of 2 and 5
console.log("************************")
for(let k=1; k<=50; k++){
    if(k%2 == 0 && k%5 == 0){
        console.log('I am inside FOR-loop AND ' + k)
    }

    if(k%2 == 0 || k%5 == 0){
        console.log('I am inside FOR-loop OR ' + k)
    }
}

console.log("************************")
let n = 0
for(let k=1; k<=50; k++){
    if(k%2 == 0 && k%5 == 0){
        n++
        console.log('I am inside FOR-loop AND ' + k)
        if(n ==3 )
            break
    }
}


