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
