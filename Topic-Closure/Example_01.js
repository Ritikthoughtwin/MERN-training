
/*
JavaScript Closure Explained. A closure in JavaScript is a function that 
has access to variables in its parent scope, even after the parent function 
has returned. Closures are created when a function is defined inside another 
function, and the inner function retains access to the variables in the outer 
function's scope.
*/

/*.................................................................................................................................................................................................*/


function displayPersonInfo() {
    const personName = "Krishnakant Thakur"; 

    function showName() {
        console.log("Person's Name: ", personName); 
    }

    showName(); 
}

displayPersonInfo(); 

/*........................................................................................................................................................................................................................................*/

const outerFunction = () => {
    const numberValue = 5; 
    const innerFunction = () => {
        console.log("Value: ", numberValue); 
    };

    innerFunction(); 
};

outerFunction(); 
