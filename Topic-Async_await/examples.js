async function myFunction() {
    return "Hello";                //async function
}
/*................................................................................................*/

async function myFunction() {
    return "Hello";
}
myFunction().then(
    function (value) { console.log(value); }  //myfunction returning the promise
    //use .then() and .catch()
);

myFunction().catch((error) => {
    console.log("error : ", error);
})

/*..............................................................................................................*/

let value = await fetch("");/* await keyword is used to wait or hold 
                               the execution of async function for any specific  part 
                               of the code */


/*..........................................................................................................*/

async function myFunction1(){
    let value = await fetch("")
    console.log(value);
}
/*...........................................................................................................................*/

 const arrow_function=async()=>{ 
     
     await setTimeout(()=>{
         return 5;
     },2000);
                                                            //async-await with arrow function
 }
arrow_function.then((value)=>{
console.log("value : ",value);
}) 

arrow_function.catch((error)=>{
    console.log("something wrong try again",error);
})
