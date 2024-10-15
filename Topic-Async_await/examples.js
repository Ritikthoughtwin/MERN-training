

/* Async:-
       1. Declared with the async keyword before the function.
       2. Always returns a promise.
       3. You can use the await keyword inside to wait for promises to resolve.
       4. You can handle errors in async functions using try...catch blocks.
          1. The code that might throw an error is placed inside the try block.
          2. If an error occurs in the try block, the code execution stops, and the control is transferred to the catch block.
       
   Await:-
       1. Await is used inside async functions: It can only be used within a function declared with the async keyword.
       2. Pauses execution: When await is used before a promise, it pauses the execution of the function until the
          promise is either resolved or rejected.
        
/*.....................................................................................................................*/

async function GreetingFunction() {
    return "Hello, World!";
}

// Using .then() to handle the resolved value
GreetingFunction().then((value)=> { 
        console.log("Greeting:", value);  
    }
);

// Using .catch() to handle errors
GreetingFunction().catch((error) => {
    console.log("Error:", error);
});

/*..............................................................................................................*/

// Example 2: Fetch data from an API

async function fetchDataFromAPI() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();  // Wait for the response to be parsed into JSON
        console.log("Data fetched:", data);
    } catch (error) {
        console.log("Fetch Error:", error);  // Handles any error during the fetch
    }
}

fetchDataFromAPI();



/*..........................................................................................................*/



async function delayedMessage() {
    console.log("Waiting for 2 seconds...");
    await setTimeout(()=>{
        console.log("The function is executed");
    },2000) // Waits for 2 seconds
    console.log("Done waiting!");
}

delayedMessage();
