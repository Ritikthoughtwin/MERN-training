/*
Variable hoisting in JavaScript is the process of moving a variable's declaration to the top of 
its scope before the code is executed. This allows the variable to be used before it has been declared
in the code. However, the variable's value will be undefined until it is assigned a value.
*/

//variable hoisting with var

console.log(number); // Output: undefined (due to hoisting)
var number= 5;
console.log(number); // Output: 5

/*........................................................................................................................*/

//variable hoisting with let and const

console.log(value);  //will not work
let value=10;

//and 

console.log(value);//will not work
const value=67;
