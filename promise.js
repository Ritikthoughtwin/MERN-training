let promise = new Promise(function (resolve, reject) {
    const x = 1;
    const y = 1;
    if (x === y) {
        resolve();
    } else {
        reject();
    }
});

promise.
    then(function () {
        console.log('Success with regular function');
    }).
    catch(function () {
        console.log('Some error has occurred');
    }); 


promise.then( () =>{
    console.log("success with arraow function")
}).catch(()=>{
    console.log("error with arraow function")
})

