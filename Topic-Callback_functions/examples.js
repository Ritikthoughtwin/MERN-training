
function mainFunction(callback) {
    console.log("Performing operation...");
    setTimeout(function() {
      callback("Operation complete");
    }, 1000);
  }
  
  function callbackFunction(result) {
    console.log("Result: " + result);
  }
  
  mainFunction(callbackFunction);

  /*.........................................................................................................*/

  let numbers = [1, 2, 3, 4, 5];
function mainFunction(callback) {
  console.log("Performing operation...");
  numbers.forEach(callback);
}
function callbackFunction(number) {
  console.log("Result: " + number);
}

mainFunction(callbackFunction);


/*...............................................................................................*/

