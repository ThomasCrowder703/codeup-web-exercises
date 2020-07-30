"use strict"
console.log("");

while(true){
    var numberToSkip = parseFloat(prompt("Please pick an odd number between 1 and 50"));
    if (numberToSkip % 2 !== 0 ){
        break;
    }
}
for (var list = 1; list <=50; list++) {
    if (list % 2 !== 0) {
        if (numberToSkip === list){
            continue;
        }
        console.log( "Here is an odd number: " + list)
    }

}

console.log("");

