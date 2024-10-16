let arrnum = [18, 23, 23, 4, 4, 5];
let arrName = ['Aditya', 'vinod', 'rakesh', 'crab'];
let arrPeople = [
  { name: 'aditya', age: 23, number: 9672362323, email: 'Adi@gmail.com' },
  { name: 'Ravneet', age: 7, number: 2172362323, email: 'Rasv@gmail.com' },
  { name: 'suitya', age: 39, number: 1232362323, email: 'su@gmail.com' },
  { name: 'Nitya', age: 30, number: 8922362323, email: 'nitya@gmail.com' },
];
let newarray = [];

// remove from start change  in  origanal array "
// it will make take  time because of it will shift all value of array
// arrnum.shift()

// add from last of array change  in  origanal array "
// arrnum.push(1);

// it will add on start of an array  change in orginal array
// arrnum.unshift(2);

// it will remove last element odf array
// arrnum.pop();

// add two  or more than array in new array it will not change orignal array
// let newarray = arrnum.concat(arrName);

// callback values (index deltecount addnum)'
// change in orignal array
// when we have to remove element from array & add new element on that remove index at that time we use these method
// delete count number is less then what ever you given
// a.splice(1, 2,4);

// it will not change  and original array it will take out value from and array
// delete count number is less then what ever you given
// let n = a.slice(0,2);

//  IMP Sort
// the sort methodchange orignal array
// sort method is use to arrange alphabet in assending order
// arrName.sort()

// sort method take in call back two arguments a and b two assign element in assending order
// arrnum.sort((a,b)=>{a-b})

// localeCompare it is inbuilt method which is used in array in object to convert in assending order
// arrPeople.sort((a, b) => a.email.localeCompare(b.email));  compaore words in object
// arrPeople.sort((a, b) => a.number-b.number);  compare age array in object

// Index Off()
/* indexof is method is the value is persent or not or you can say that it is use to search element in array  persent or not if it
 If It is not persent then it will give (-1) in console or if  persent then the index value */
// it will return new array ,dont change orignal array ,
// let b= a.indexOf(23)

// FindIndex
//  when you have to find index of array in object
// when you have to give permitters in funaction to check ANY THING
// complicated array
let isindex = arrPeople.findIndex((a) => a.age == 53);
console.log(isindex);

///////////////////////////////////////////////////////////////////////////////Includes
// let p = a.includes(23);
// // give the value is persent or not in boolen value

//reverse

// a.reverse();
// console.log(a);
// chnage orignal array
// reverser the array

// //////////////////////////////////Join
// let n = a.join('*');

// not chnage in orignal array
// convert array into string
// put value between all elements

// /////////////////////////////////include
let n = a.includes(5);
console.log(n);
// not chnage orignal array
// return blooen value true or false
