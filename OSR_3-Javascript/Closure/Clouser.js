/* clouser is used in nested function where outerfunction and inner function is persent and the innerfunction acsses the
variable of outer function the outer function after involk it will destroy but the variable which is access by inner function 
is store in memory for */

// creation of clouser and example
function firstFunction() {
  let numfirst = 23;
  function secondFunction() {
    console.log();
  }
}

//////neested function store date after destroy for child function

// function Details(name) {

//   let car = (age) => {
//     console.log(age + name);
//   };
//   return car;
// }

// Details('aditya')(23);
// it also work in arrow function
//clouser work on lexical scope ==>are scope which is used neested function
// global executive context every function has it exscitive contxt

// //////////////////////////////////
