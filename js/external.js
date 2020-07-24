"use strict";
console.log("Hello from external Javascript");
alert("Welcome to my website");
var coloResponse = prompt("What is your favorite color?");
alert("Cool! " + coloResponse + " is my favorite color too!");
console.log(coloResponse);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var mermaid = prompt("How long would you like to rent The Little Mermaid?");
var intMer = parseInt(mermaid);
//console.log(intMer);
var bear = prompt("How long would you like to rent Brother Bear?");
var intBear = parseInt(bear);
var hercules = prompt("How long would you like to rent Hercules?");
var intHerc = parseInt(hercules);
var subtotal = intMer + intBear + intHerc;
var total = alert("It will cost " + "$" + (subtotal*3) + " to rent these movies.");

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var google = prompt("How much is Google paying you per hour?");
var googTime = prompt("How many hours did you work?");
var intGoog = parseInt(google * googTime);
//console.log(intGoog)
var amazon = prompt("How much is Amazon paying you per hour?");
var amazonTime = prompt("How many hours did you work?");
var intAma = parseInt(amazon * amazonTime);
var facebook = prompt("How much is Facebook paying you per hour?");
var faceTime = prompt("How many hours did you work?");
var intFace = parseInt(facebook * faceTime);
var payment = alert("WOW! You made $" + (intGoog + intAma + intFace) + " this week!")

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var student = prompt("Would you like to enroll in this class? (Please answer only YES or NO");
if (student.includes("Yes")){
    alert("Great, lets move on!")
} else {
    alert("That's too bad!")
};




