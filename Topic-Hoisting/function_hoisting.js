/*
Function hoisting in JavaScript is a process that moves function 
declarations to the top of their scope before the code is executed
*/
/*.................................................................................................................................................................................*/


printHello();  // This will work because function declarations are hoisted

function printHello() {
    console.log("Hello");
}

// Function Expression with let and const (Not Hoisted)
 
 printHii(); // will throw error

let printHii = function () {
    console.log("Hii");
};

printHii();  // This will work because it's called after the assignment

// Arrow Function Expression with let and const (Not Hoisted)

 printGoodMorning();// will throw error

let printGoodMorning = () => {
    console.log("GoodMorning");
};

printGoodMorning();  // This will work because it's called after the assignment
