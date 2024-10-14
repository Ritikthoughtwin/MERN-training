// The length property returns the length (size) of an array:
const result = ["vinod", "shrikanth", "adity"];
console.log(result.length); // The length property returns the length (size) of an array:
console.log(result.toString()); //The JavaScript method toString() converts an array to a string of (comma separated) array values.
console.log(result.at(2)); //ES2022 intoduced the array method at(): The at() method returns the same as [].

console.log(result.join("-vinod-")); //The join() method also joins all array elements into a string.

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(number.join());

const indexcheck = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const final = indexcheck.join();
console.log(final.at(1));

console.log(result.pop()); //The pop() method removes the last element from an array:
console.log(result.push("adity"));
console.log(result.shift()); //The shift() method removes the first array element and "shifts" all other elements to a lower index.
console.log(result.unshift()); //The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
console.log(result);
const last = result[0]; // Array elements are accessed using their index number:
console.log(result);

//Merging Arrays (Concatenating)

const concate = ["vinod", "adity", "shrikanth", "mohit"];
const concating = ["vinod", "adity", "shrikanth", "mohit"];

const alladd = concate.concat(concating);
console.log(alladd);

//The concat() method creates a new array by merging (concatenating) existing arrays:

//The concat() method does not change the existing arrays. It always returns a new array.

//The concat() method can take any number of array arguments.

const ary1 = ["vinod", "adity", "shrikanth", "mohit"];
const ary2 = ["vinod", "adity", "shrikanth", "mohit"];
const ary3 = ["vinod", "adity", "shrikanth", "mohit"];

console.log(ary1.concat(ary2, ary3));

console.log(ary1.concat("rohit"));

console.log(ary1.copyWithin(2, 0));
console.log(ary1.copyWithin(2, 0, 2));

const num = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const num1 = num.flat(); //The flat() method creates a new array with sub-array elements concatenated to a specified depth.

const num3 = num1.flatMap((x) => [x, x + 5]);
console.log(num3); //The flatMap() method first maps all elements of an array and then creates a new array by flattening the array.

const ary5 = ["vinod", "adity", "shrikanth", "mohit"];
console.log(ary5.slice(1, 2)); //he slice() method creates a new array.The slice() method does not remove any elements from the source array.

const ary6 = ["vinod", "adity", "shrikanth", "mohit"];
console.log(ary6.slice(2));

//The splice() method can be used to add new items to an array:
const ary7 = ["vinod", "adity", "shrikanth", "mohit"];
const spli = ary7.splice(0, 0, "op", "prem");
console.log(ary7);

const ary8 = ["vinod", "adity", "shrikanth", "mohit"];
console.log(ary8.sort()); //The sort() method sorts an array alphabetically:

//The reverse() method reverses the elements in an array:
console.log(ary8.reverse());

console.log(ary8.toReversed());

//number sort

const ary9 = [2, 5, 8, 9, 3, 4, 1, 10, 6, 7];
//Use the same trick to sort an array descending:
// ary9.sort((a,b)=>{
//     return a-b;
// })
//Use the same trick to sort an array acending:
// ary9.sort((a,b)=>{
//     return b-a;
// })

//  console.log(ary9.sort((a,b)=>b-a))

//  reduce array
// The reduce() method executes a reducer function for array element.

// The reduce() method returns a single value: the function's accumulated result.

// The reduce() method does not execute the function for empty array elements.

// The reduce() method does not change the original array.

const ary10 = [1, 2, 3];

const totol = ary10.reduce((ecum, curval) => {
  console.log(`ecum value ${ecum}and ${curval}`);
  return ecum + curval;
}, 0);
console.log(totol);

// others example

const ary11 = [
  { itemname: "mengo", price: 2000 },
  { itemname: "mengo", price: 2000 },
  { itemname: "mengo", price: 2000 },
  { itemname: "mengo", price: 2000 },
];

console.log(ary11.reduce((accum, item) => accum + item.price, 0));
// filter example

const ary12 = [
  { book: "hindi", published: "2001", name: "shri" },
  { book: "english", published: "2002", name: "vinod" },
  { book: "maths", published: "2001", name: "adity" },
  { book: "hindi", published: "2003", name: "vinod" },
  { book: "maths", published: "2002", name: "shri" },
];

console.log(ary12.filter((i) => i.published > 2001));
console.log(ary12.filter((i) => i.book === "hindi")); // book name filter hindi

// map example

const ary13 = [
  { book: "hindi", published: "2001", name: "shri" },
  { book: "english", published: "2002", name: "vinod" },
  { book: "maths", published: "2001", name: "adity" },
  { book: "hindi", published: "2003", name: "vinod" },
  { book: "maths", published: "2002", name: "shri" },
];

console.log(
  ary13.map((i, n) => {
    let result = `book : ${i.book} and name : ${i.name};`;

    return result;
  })
);

// boolean true and false return
console.log(
  ary13.map((i, n) => {
    let result = i.book === "hindi";
    return result;
  })
);

// foreach
// The forEach() method calls a function for each element in an array.
// The forEach() method is not executed for empty elements.
// return value undefind
const ary14 = ["vinod", "adity", "shrikanth"];

let a = ary14.forEach((val, index, arr) => {
  return val;
});

console.log(a); //undefined

ary14.forEach((val) => console.log(val));
