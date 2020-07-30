"use strict"
var addPrevious = 2;

while(addPrevious <= 65536){
    console.log(addPrevious);
    addPrevious+= addPrevious;
}