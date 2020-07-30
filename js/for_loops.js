"use strict"

function showMultiplicationTable(x) {
    for (var y = 1; y <= 10; y++) {
        console.log(x + " X " + y + " = "  + (x*y));
    }
}

showMultiplicationTable(9);

console.log("");

function randomNumber(min,max) { 
    return Math.floor(Math.random() * (min - max) + min); }

for (var x = 1; x <= 10 ; x ++){
    var randomGen = randomNumber(20,200)
    if (randomGen % 2 === 0){
        console.log(randomGen + " is even!")

    } else{
        console.log(randomGen + " is odd!")
    }
}

console.log("");


for (var pyramid =1; pyramid <= 9; pyramid++){
    console.log(pyramid.toString().repeat(pyramid))
}
 console.log("");

for (var countdown = 100; countdown >= 5; countdown -=5){
    console.log(countdown);
}


