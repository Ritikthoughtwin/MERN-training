// A callback is a function passed as an argument to another function
// This technique allows a function to call another function
// A callback function can run after another function has finished

//normal function
function sayhii() {
  console.log("hii");
}

function sayhello() {
  console.log("hello");
}

sayhii();
sayhello();

// callback = a function that is passed as on arguments to another function
callback(callbackothers);
function callback(callBack) {
  console.log("hii");
  callBack();
}
function callbackothers() {
  console.log("hello");
}

//callback problem many time debit no control the code

function buyNow() {
  transcation();
  transcation();
}

function transcation() {
  console.log("amount 10k debit");
}
buyNow(transcation());

function call() {
  console.log("call");
   return function data() {
     console.log('-')

   }
}

call()()

// call the function

 function hightOrder(callback){
    callback(5);
 }

 function callBack(value){
    console.log(" value : ",value);
 }

 hightOrder(callBack);

//create new individual function objects at every re-render of the component

const calculate = (a,b,opration)=>{
   return opration(a,b)

}

//method 1

const addition=calculate(3,4 ,(num1,num2)=>{
   return num1+num2
})
console.log(addition)

//method 2

const subtract=(a,b)=>a-b
const result=calculate(3,3,subtract)
console.log(result)

//delay in execution

function fristName(name) {
  console.log("my name is", name);
}
function lastName(last) {
  console.log("last name", last);
}

fristName("vinod");
setTimeout(() => lastName("rajput"), 1000);
