//variable hoisting with var

console.log(a);//will work
var a=5;

//variable hoisting with let and const

console.log(a);  //will not work
let a=10;

//and 

console.log(a);//will not work
const a=67;