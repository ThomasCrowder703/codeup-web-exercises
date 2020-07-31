"use strict"
console.log("");
var numberToSkip;
while(true){
     numberToSkip = parseFloat(prompt("Please pick an odd number between 1 and 50"));
    if (numberToSkip % 2 !== 0 && numberToSkip > 0 && numberToSkip < 51 ){
        break;
    }
}
for (var list = 1; list < 50; list += 2) {
       if(list === numberToSkip){
           console.log("skip");
           continue;
       }
    console.log( "Here is an odd number: " + list)

}
//
// console.log("");

