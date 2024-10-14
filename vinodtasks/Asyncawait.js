//"async and await make promises easier to write"
//async makes a function return a Promise
//await makes a function wait for a Promise

// async function getName() {
//   return new Promise((resolve, rejects) => {
//     setTimeout(() => {
//       resolve(455);
//     });
//   }, 3500);
// }

// console.time("process");
// console.log("print");
// let data = getName();
// console.log(data);
// console.log("function");
// console.log("await");
// console.timeLog("process");

// output
//print
//Promise { <pending> }
//function
//await
//process: 8.49ms



// async function getName() {
//     return new Promise((resolve, rejects) => {
//       setTimeout(() => {
//         resolve(455);
//       });
//     }, 3500);
//   }
  
// async function main(){
//     console.time("process");
//   console.log("print");
//   let data = await getName();
//   console.log(data);
//   console.log("function");
//   console.log("await");
//   console.timeLog("process");

//   }

//   main()
  
  
//output
//print
//455
//function
//wait
//process: 8.666ms



// settle means resolve or reject
//resolve means promises has settled successfully
//rejects means promises has not settled successfully


// async function getName (){
//   let data = await fetch('https://jsonplaceholder.typicode.com/todos/4')
//  let result= await data.json()
//     return  result
    
// }

//  async function main(){
//    let data= await getName()
//    console.log(data)
// }  
// main()



 async function getdata (){
   let result= await fetch('https://jsonplaceholder.typicode.com/photos')
    let final = await result.json()

    return  final
}
getdata().then((res)=>{
    res.map((value)=>{
        console.log(value.id,". ",value.title);
    })
    
}).catch((err)=>
console.log(err))

