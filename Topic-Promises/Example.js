/*   

promise:- A promise in JavaScript is like a container for a future value.
 It is a way of saying, “I don’t have this value right now, but I will have it 
 later.” Imagine you order a book online. You don’t get the book right away,
 but the store promises to send it to you. While you wait, you can do other 
 things, and when the book arrives, you can read it.In the same way, a promise 
 lets you keep working with your code while waiting for something else to finish, 
 like loading data from a server. When the data is ready, the promise will deliver it.

Three stages of promises

1.pending
2.fulfilled
3.rejected

Methods of promise
1.Promise.all():-Takes an iterable of promises as input and returns a single Promise. 
This returned promise fulfills when all of the input's promises fulfill with an array 
of the fulfillment values. It rejects when any of the input's promises reject, with this first rejection reason.

2.Promise.allSettled() :-Takes an iterable of promises as input and returns a single 
Promise. This returned promise fulfills when all of the input's promises settle
 (including when an empty iterable is passed), with an array of objects that describe the 
 outcome of each promise.

3.Promise.any():-Takes an iterable of promises as input and returns a single Promise.
 This returned promise fulfills when any of the input's promises fulfill, with this first
  fulfillment value. It rejects when all of the input's promises reject (including when an
   empty iterable is passed), with an AggregateError containing an array of rejection reasons.

4.Promise.race():-Takes an iterable of promises as input and returns a single Promise. 
This returned promise settles with the eventual state of the first promise that settles.
*/

// Global Variables
let promiseResult;

/*.............................................................................................................................................................................................................................................*/

// Example 1: Promise with .then() and .catch()

promiseResult = new Promise((resolve, reject) => {
    let dataFetched = false;

    if (dataFetched) {
        resolve("Data loaded successfully!");
    } else {
        reject("Error: Unable to load data.");
    }
});

promiseResult
    .then((message) => {
        console.log(message);  // Output if resolved
    })
    .catch((error) => {
        console.log(error);   // Output if rejected
    });


/*.............................................................................................................................................................................................................................................*/

// Example 2: Promise.all() usage

const apiCall1 = Promise.resolve("API Call 1 Success");
const apiCall2 = new Promise((resolve) => setTimeout(resolve, 1000, "API Call 2 Success"));
const apiCall3 = new Promise((resolve, reject) => setTimeout(reject, 500, "API Call 3 Failed"));

Promise.all([apiCall1, apiCall2])
    .then((responses) => {
        console.log("All API calls resolved:", responses);
    })
    .catch((error) => {
        console.log("One of the API calls failed:", error);
    });

/*.............................................................................................................................................................................................................................................*/

// Example 3: Promise.allSettled() usage

const apiStatus1 = Promise.resolve("Success: API 1");
const apiStatus2 = new Promise((resolve, reject) => setTimeout(reject, 1000, "Error: API 2 failed"));
const apiStatus3 = new Promise((resolve) => setTimeout(resolve, 1500, "Success: API 3"));

Promise.allSettled([apiStatus1, apiStatus2, apiStatus3])
    .then((results) => {
        console.log("API status (settled):", results);
    });

/*.............................................................................................................................................................................................................................................*/

// Example 4: Promise.any() usage

const task1 = new Promise((resolve, reject) => setTimeout(reject, 500, "Task 1 failed"));
const task2 = new Promise((resolve) => setTimeout(resolve, 1000, "Task 2 completed"));
const task3 = new Promise((resolve) => setTimeout(resolve, 200, "Task 3 completed"));

Promise.any([task1, task2, task3])
    .then((firstResult) => {
        console.log("First task to complete:", firstResult);
    })
    .catch((error) => {
        console.log("All tasks failed:", error);
    });

/*.............................................................................................................................................................................................................................................*/

// Example 5: Promise.race() usage

const downloadFile1 = new Promise((resolve) => setTimeout(resolve, 3000, "File 1 Downloaded"));
const downloadFile2 = new Promise((resolve) => setTimeout(resolve, 1000, "File 2 Downloaded"));
const downloadFile3 = new Promise((resolve) => setTimeout(resolve, 2000, "File 3 Downloaded"));

Promise.race([downloadFile1, downloadFile2, downloadFile3])
    .then((firstToComplete) => {
        console.log("First file to download:", firstToComplete);
    });

/*.............................................................................................................................................................................................................................................*/

// Example 6: Promise.finally() usage

const orderPizza = new Promise((resolve, reject) => {
    const orderSuccess = true;

    if (orderSuccess) {
        resolve("Pizza ordered successfully!");
    } else {
        reject("Pizza order failed.");
    }
});

orderPizza
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Order process completed.");  // This will always run
    });

/*.............................................................................................................................................................................................................................................*/

// Example 7: Chaining Promises

const getUserDetails = new Promise((resolve) => {
    setTimeout(() => resolve("User details fetched"), 500);
});

const getUserOrders = new Promise((resolve) => {
    setTimeout(() => resolve("User orders fetched"), 1000);
});

const getUserRecommendations = new Promise((resolve) => {
    setTimeout(() => resolve("User recommendations fetched"), 1500);
});

getUserDetails
    .then((message) => {
        console.log(message);
        return getUserOrders;
    })
    .then((message) => {
        console.log(message);
        return getUserRecommendations;
    })
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error(error);
    });

