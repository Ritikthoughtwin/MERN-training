/*    Three stages of promises

1.pending
2.fulfilled
3.rejected

*/

let myPromise = new Promise(function(resolve, reject) {
 
    let success = false; 
  
    if (success) {
      resolve("The data has loaded successfully!");
    } else {
      reject("There was an error loading the data.");
    }
  });

  myPromise.then((res)=>{   //.then()
    console.log(res);
  })

  myPromise.catch((res)=>{     //.catch()
    console.log(res);
  })

  /********************************************************************************************* */
  
 

  let promise = new Promise(function (resolve, reject) {
    const x = 45;
    const y = 45;
    if (x === y) {
        resolve();
    } else {
        reject();
    }
});

promise.
    then(function () {
        console.log('Success, You are a GEEK');
    }).
    catch(function () {
        console.log('Some error has occurred');
    }); 
