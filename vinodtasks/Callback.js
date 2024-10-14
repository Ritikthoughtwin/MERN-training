// A callback is a function passed as an argument to another function
// This technique allows a function to call another function
// A callback function can run after another function has finished

// let myDisplayer=(some) =>{

//    console.log(some)
//   }

//   function myFirst() {
//     myDisplayer("Hello");
//   }

//   function mySecond() {
//     myDisplayer("Goodbye");
//   }
//   myFirst()
//   mySecond()

// Tea process

// function putPanInGas(){
//     console.log("pan placed in gas")
// }
// function addwater(){
//     console.log("add water in tea")
// }
// function addtealeaves(){
//     console.log("tea leaves added")
// }
// function addsuger(){
//     console.log("add suger in tea")
// }
// function addginger(){
//     console.log("add ginger in tea")
// }
// function pureit(){
//     console.log("pureit tea is ready")
// }

// console.time("tea")
// putPanInGas()
// addsuger()
// addginger()
// pureit()
// console.timeLog("tea")

// all function independent
// no flow control and no error handling

// call back

// function putPanInGas(){
//     console.log("pan placed in gas")
// }
// function addwater(callback){
//     console.log("add water in tea")
//     setTimeout(function(){
//         console.log("water boils")
//         callback()

//     },3000)
// }
// function addtealeaves(){
//     console.log("tea leaves added")

// }
// function addsuger(){
//     console.log("add suger in tea")
//     addginger()
// }
// function addginger(){
//     console.log("add ginger in tea")
//     setTimeout(function(){
//         pourit()

//     },1000)
// }
// function pourit(){
//     console.log("pourit tea is ready")
// }

// putPanInGas()
// addwater(addsuger)

// function fun (callback){
//     console.log("hii")

// }
// function fun1(){
//     console.log("helo")
// }
// fun1(fun())

// callback problem many time debit no control the code

// function buynow(){
//     transcation()
//     transcation()

// }

// function transcation(){
//     console.log("amount 10k debit")

// }
// buynow(transcation())
