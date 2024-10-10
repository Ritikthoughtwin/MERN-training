///////////////////////////////HOISTING
// a = 20;
// console.log(a);
// var a;
// the hositing is that where javascript instilaizatoin go on top by dafault

//////////////////////////////////////////////////////////////////////Error

// num = 'aditya';
// console.log(num);
// let num;
//  let const is not work with hostingh bcause they are work on block of code
// let and const is Es6 concept which work on local scope thats why it not work on hostiing

//////////////////////////////////function hosting

// App();
// function App() {
//   console.log('Aditya');
// }

// function is declared after the calling

//////////////////////////////////////////////////////////////////////Error
// fun();
// var fun = () => {
//   console.log('track');
// };
//////////////////////////////////////arrow funactin is not work with hositing

a = [1, 4, 5, 6, 7, 3];
fun(...a);
a.splice(0, 1);
console.log(a);

function fun(...arr) {
  console.log(arr);
}
