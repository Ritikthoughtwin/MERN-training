// Setteled Promise :- A promise is said to be settled if it is either fulfilled or rejected, but not pending.

const promiseOne = new Promise(function (resolve, reject) {
    const x = 1;
    const y = 1;
    if (x === y) {
        resolve(4);
    } else {
        reject();
    }
});

const promiseTwo =  Promise.resolve(6)
const promiseThree = new Promise((resolve,)=>{
        setTimeout(
            ()=>{
                resolve("hello")
            },100
        )
})

let promises = [promiseOne,promiseTwo,promiseThree]


/// Promise.all :- iterate over all promises
Promise.all(promises).then(
    (value)=>{
        console.log("all",value)
    }
)

/// Promise.any :- returns any which executes first
Promise.any(promises).then((value) => console.log("Any", value));

/// Promise.race :- returns promise which compete first among all the proises
Promise.race(promises).then((value) => console.log("Race", value));

// Difference between Race and Any
// race's promise is rejected when the first promise you give it is rejected; any's promise isn't,
// because another promise may be fulfilled instead.
// any's promise's rejection reason will be an AggregateError, 
//but race's rejection reason will be the rejection reason from the first promise that was rejected.

/// allSetteled :- it returns the array of object with status and value

Promise.allSettled(promises).then((results) =>
   console.log(results) 
  );

promiseOne.
    then(function () {
        console.log('Success with regular function');
    }).
    catch(function () {
        console.log('Error with regular function');
    }); 


promiseThree.then( () =>{
    console.log("success with arrow function")
}).catch(()=>{
    console.log("error with arrow function")
})
