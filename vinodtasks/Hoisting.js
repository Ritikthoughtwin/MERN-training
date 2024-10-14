// only the declaration are hoisted not the initialization
// a=5
//  x=a
// var x
// console.log(x)

// output=5 show the

// a=5
// x=a
// let x
// console.log(x)
// let variable m run time error show

// a=5
// x=a
// const x
// console.log(x)
// const variable m starting the syntax error show

console.log(a);
var a = 20;
// undefined
console.log(a);
// output 20
//  call the function before  its declaration
fun(10, 20);

function fun(val1, val2) {
  console.log(val1 + val2);
}
// output 30
// hoisting first of memery allocate

// console.log(mylet)
// let mylet=10
// ReferenceError: Cannot access 'mylet' before initialization

// Hoisting is a JavaScript mechanism where variables and function
// declarations are moved to the top of their scope before code execution.

// function getName(a,b){
//     return a+b
// }

// let result =getName(5,2)
// console.log(result)

// Hoisting is  javascript default behavior of moving all
// declaration  to the top of the code

var a = 10;

var fn = function () {
  console.log(a);
  var a = 20;
};
console.log(fn());
