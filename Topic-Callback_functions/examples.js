/*
A callback function is a function that is passed as an argument to another function and 
is executed after the completion of some operations
*/
function performAsyncOperation(callback) {
    console.log("Performing operation...");
    setTimeout(() => {
        callback("Operation complete");  // Calls the provided callback with the result
    }, 1000);
}


function logResult(result) {
    console.log("Result: " + result);  // Logs the result of the async operation
}

// Calling the performAsyncOperation function with logResult as the callback
performAsyncOperation(logResult);


/........................................................................................................./

let numbersArray = [1, 2, 3, 4, 5];

function processNumbers(callback) {
    console.log("Processing numbers...");
    numbersArray.forEach(callback);  // Calls the callback for each number in the array
}

//  A callback function that logs each number.
function displayNumber(number) {
    console.log("Result: " + number);  // Logs the current number
}

// Calling the processNumbers function with displayNumber as the callback
processNumbers(displayNumber);


/.............................................................................................../

const performAsyncOperationWithArrow=(callback)=> {
    console.log("Performing operation...");

    setTimeout(() => {
        callback("Operation complete");  // Calls the provided callback with the result
    }, 1000);
}

// Calling the performAsyncOperationWithArrow function with an arrow function as the callback
performAsyncOperationWithArrow((result) => {
    console.log("Result: " + result);  // Logs the result using an arrow function
});
