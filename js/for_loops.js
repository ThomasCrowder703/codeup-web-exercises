"use strict"

function showMultiplicationTable(x){
    for (var y = 1; y <= 10; y++){
        console.log(x + " X " + y + " = " + (x*y));
    }
}

showMultiplicationTable(6);

console.log("");


for (var y = 1; y <= 10; y++){
    var randomNumber = Math.floor((Math.random()*200)+20);
    if (randomNumber % 2 === 0){
        console.log(randomNumber + " is even")
    } else{
        console.log(randomNumber + " is odd")
    }
}

console.log("");

for (var pyramid = 1; pyramid <= 9; pyramid++ ){
    console.log(pyramid.toString().repeat(pyramid))
}

console.log("");

for (var countdown = 100; countdown >= 5; countdown-=5){
    console.log(countdown);
}




