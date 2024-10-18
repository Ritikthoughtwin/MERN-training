///////////////////////////////HOISTING
// The Hoisting work before code run the memory

num = 20;
console.log(num);
var num;
// the hositing is that where javascript instilaizatoin go on top by dafault

//////////////////////////////////////////////////////////////////////Error

strName = 'aditya';
console.log(strName);
let strName;
//  let const is not work with hostingh bcause they are work on block of code
// let and const is Es6 concept which work on local scope thats why it not work on hostiing

//////////////////////////////////function hosting

checkHoisting();
function checkHoisting() {
  console.log('Aditya');
}

// function is declared after the calling

//////////////////////////////////////////////////////////////////////Error
arrowHosting();
var arrowHosting = () => {
  console.log('track');
};
//////////////////////////////////////arrow funactin is not work with hositing
// all the variable can store as undefind and the function and  before instilization code

function taskHosting() {
  console.log('aditya ', numfirst);
}
console.log('we will get error', a);

taskHosting();
var numfirst = 10;
