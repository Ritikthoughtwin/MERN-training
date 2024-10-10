let a = [18, 23, 23, 4, 4, 5];
let k = ['Aditya', 'vinod', 'rakesh', 'crab'];

let People = [
  { name: 'aditya', age: 23, number: 9672362323, email: 'Adi@gmail.com' },
  { name: 'Ravneet', age: 7, number: 2172362323, email: 'Rasv@gmail.com' },
  { name: 'suitya', age: 39, number: 1232362323, email: 'su@gmail.com' },
  { name: 'Nitya', age: 30, number: 8922362323, email: 'nitya@gmail.com' },
];

function ages(um) {
  return um > 18;
}

// a.shift(); remove from start chnage origanal array "// " it will make time because of it will shift all value

// a.push(1);  remove from last of array

// a.unshift(2);  it will add on start chnage in orginal array

// a.pop(); it will remove last element odf array

// let b = a.concat(k); add two more than array in new array it will not change orignal array

// a.splice(1, 2,4);callback values index deltecount addnum

// let n = a.slice(0, 2);  it will not chnage and original array it will take out value from and array

/////////////////////////////////////// IMP           Sort

// People.sort((a, b) => a.email.localeCompare(b.email));  compaore words in object
// People.sort((a, b) => a.number-b.number);  compare age array in object
// a.sort((a, b) =>a-b); sort the number
// Thw sort method will change orignal array

////////////////////////////////////             Index Off()
// let b= a.indexOf(23)
// it will return new array ,
// dont chnage orignal array ,
// - when value is not persent  work left to right

// //////////////////////////////////////             FindIndex
// let index = People.findIndex((a) => a.age == 53);
// console.log(a.findIndex(ages));
// when you have to find index of array in object
// when you have to give permitters in funaction to check ANY THING
// IF VALUE IS  NOT PERTSENT IT WILL GIVE -1
///////////////////////////////////////////////////////////////////////////////Includes
// let p = a.includes(23);
// // give the value is persent or not in boolen value

///////////////////////////////////////////////////////reverse

a.reverse();
console.log(a);
