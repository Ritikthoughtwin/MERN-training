// function APP(name){
//     function app(age){
//         console.log(`my name is ${name} and age ${age} `)

//     }
//     app(23)
// }
// APP("vinod")

// function outer(){
//     let username="vinod"

//     function inner(){
//         return username;
//     }
//   return  inner

// }
// let fun =outer();

// let val=fun();
// console.log(val)

// num=5
// const addtwo=(num)=>{
//     return num
// }
// console.log(addtwo(5))

// addtwoo(5)
// const addtwoo=function(num){
//     return num+2
// }

// console.log(addtwo(5))
// function addtwo(num){
//     return num*5
// }

//  A closure is the combination of a function bundled together
//  (enclosed) with references to its surrounding state (the lexical environment).
//  In other words, a closure gives a function access to its outer scope.

// function outer (multiple){

//     function inner(input){
//         return  input*multiple

//     }
//    console.log( inner(3))

//    function child (plus){
//     return plus + multiple

//    }
//    console.log(child(3))

//    function grendchild(sub){
//     return sub-multiple
//    }
//    console.log(grendchild(5))
// }

// outer(5)

function outer() {
  let a = 10; // block scop
  let name = "vinod";
  function inner() {
    console.log(name);
    console.log(a);
  }
  return inner;
}
let a1 = outer();
a1();
