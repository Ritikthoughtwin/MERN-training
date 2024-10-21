
// Hoisting is a JavaScript mechanism where variables and function
// declarations are moved to the top of their scope before code execution.
// Arrow Function Expression with let and const (Not Hoisted)

addition(10, 20);   //  call the function before  its declaration

function  addition (val1, val2) {
  console.log(val1 + val2);
}

//  console.log(mylet)
//   let mylet=10  // ReferenceError: Cannot access 'mylet' before initialization


// // Function Expression with let and const (Not Hoisted)
 
// expressFun(); // eferenceError: Cannot access expressFun before initialization

// let expressFun = function () {
//     console.log("");
// };


console.log(checkanswer);
var checkanswer = 20;
// undefined // declarations are moved to the top of their scope before code execution.
console.log(checkanswer);
// output 20
// hoisting first of memery allocate

// only the declaration are hoisted not the initialization
// example 1 var variable
showanswer=5
 console=showanswer
var console
console.log(console)

// output=5 show the


// example 2 let variable

numberlets=5
storelets=numberlets
let storelets
console.log(storelets)

// example 3 const variable
// numberconst=5
//  storeconst=number
// const storeconst
// console.log(storeconst) // error show Missing initializer in const declaration




















