/*
Variable hoisting in JavaScript is the process of moving a variable's declaration to the top of 
its scope before the code is executed. This allows the variable to be used before it has been declared
in the code. However, the variable's value will be undefined until it is assigned a value.
*/

//variable hoisting with var

console.log(x); // Output: undefined (due to hoisting)
var x = 5;
console.log(x); // Output: 5

/*........................................................................................................................*/

//variable hoisting with let and const

console.log(a);  //will not work
let a=10;

//and 

console.log(a);//will not work
const a=67;
