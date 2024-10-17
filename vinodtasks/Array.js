// Defination =
//               An array in JavaScript is a type of global object that is used to store data.
//               Arrays consist of an ordered collection or list containing zero or more data types,
//               and use numbered indices starting from 0 to access specific items.
// ------------------------------------------------------------
// Assign the five names to five variables

const oneNamescity = "indore";
const twoNamescity = "dewas";
const threeNamecity = "khandwa";
const fourNamescity = "harda";
const fiveNamescity = "kanpur";

//difficult to maintain and keep track

// ---------------------------------------------------------------

// Assign the names

let cityArr = ["indore", "dewas", "khandwa", "harda", "kanpur"];

//Instead of creating five separate variables,
//we now have one variable that contains all five elements.
//We used square brackets — [] — to create an array.

// -------------------------------------------------------------------

// console frist elements in cityarr

console.log(cityArr[0]); // indore

// ----------------------------------------------------------------------

// The length property returns the length (size) of an array
const namesArr = ["vinod", "shrikanth", "adity"];
console.log(namesArr.length); // The length property returns the length (size) of an array
console.log(namesArr.toString()); //The JavaScript method toString() converts an array to a string of (comma separated) array values.
console.log(namesArr.at(2)); //ES2022 intoduced the array method at() The at() method returns the same as [].

console.log(namesArr.join("-vinod-")); //The join() method also joins all array elements into a string.

const numbersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11];

console.log(numbersArr.join()); // all array numbersarr

const numbersArrone = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const  joinresult = numbersArrone.join();
console.log(joinresult.at(1)); //  output ,

console.log(namesArr.pop()); //The pop() method removes the last element from an array
console.log(namesArr.push("adity")); //The push() method returns the new array length
console.log(namesArr.shift()); //The shift() method removes the first array element and shifts all other elements to a lower index.
console.log(namesArr.unshift("vinod")); //The unshift() method adds a new element to an array at the beginning and unshifts older elements
console.log(namesArr);
const last = namesArr[0]; // Array elements are accessed using their index numbersArr
console.log(namesArr);

// ------------------------------------------------------------------

//Merging Arrays (Concatenating)

const namesArrone = ["vinod", "adity", "shrikanth", "mohit"];
const namesArrtwo = ["vinod", "adity", "shrikanth", "mohit"];

const alladdnamesArr = namesArrone.concat(namesArrtwo);
console.log(alladdnamesArr);

//  The concat() method creates a new array by merging (concatenating) existing arrays
//  The concat() method does not change the existing arrays. It always returns a new array.
//  The concat() method can take any numbersArr of array arguments.

const namesArrthree = ["vinod", "adity", "shrikanth", "mohit"];
const namesArrfour = ["vinod", "adity", "shrikanth", "mohit"];
const namesArrfive = ["vinod", "adity", "shrikanth", "mohit"];

console.log(namesArrthree.concat(namesArrfour, namesArrfive)); // cambine a single array

console.log(namesArrthree.concat("rohit"));

//[ 'vinod', 'adity', 'shrikanth', 'mohit', 'rohit' ]return a new array

// ----------------------------------------------------------------------------
//The copyWithin() method does not change the length of the array
//shallow copy of array
//Copy to index 2 all elements from index 0

console.log(namesArrone.copyWithin(3, 0));

//Copy to index 2 the elements from index 0 to 2

console.log(namesArrtwo.copyWithin(2, 0, 2));

// -------------------------------------------------------------------------
// JavaScript Array flat()

//ES2019 Introduced the Array flat() method.

//The flat() method creates a new array with sub-array elements concatenated to a specified depth.

const numbersArrflat = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const numbersArrflatresult=(numbersArrflat.flat()); //The flat() method creates a new array with sub-array elements concatenated to a specified depth.

const newArrflatmap =numbersArrflatresult.flatMap((x) => [x, x * 5]);
console.log(newArrflatmap); //The flatMap() method first maps all elements of an array and then creates a new array by flattening the array.

// ----------------------------------------------------------------------------
///the slice() method creates a new array.The slice() 
// method does not remove any elements from the source array
const namesArrsix = ["vinod", "adity", "shrikanth", "mohit"];
console.log(namesArrsix.slice(0,2));
console.log(namesArrsix.slice(1,3));

//The splice() method can be used to add new items to an array
const namesArrseven = ["vinod", "adity", "shrikanth", "mohit"];
const addnewArr = namesArrseven.splice(1,3, "op", "prem");
console.log(addnewArr); // delete elements return
console.log(namesArrseven) // add a new items to an array

// -------------------------------------------------------------------------------
//The sort() method sorts an array alphabetically
const namesArrsort = ["vinod", "adity", "shrikanth", "mohit"];
console.log(namesArrsort.sort()); 

// The reverse() method reverses the elements in an array
console.log(namesArrsort.reverse());
let namesArrto=namesArrsort.toReversed()  // orginal array does not change
console.log(namesArrto)

//numbersArr sort

const numbersArrsort = [2, 5, 8, 9, 3, 4, 1, 10, 6, 7];
// Use the same trick to sort an array descending
numbersArrsort.sort((a,b)=>{
    return a-b;
})
console.log(numbersArrsort)
// Use the same trick to sort an array acending
numbersArrsort.sort((a,b)=>{
  return b-a;
})
console.log(numbersArrsort)

 console.log(numbersArrsort.sort((a,b)=>b-a))

// -------------------------------------------------------------------------

//  reduce array
//               The reduce() method executes a reducer function for array element.
//               The reduce() method returns a single value the function's accumulated name
//               The reduce() method does not execute the function for empty array elements.
//               The reduce() method does not change the original array.

const numbersArrreduce = [1, 2, 3];

const totolnumbersArr = numbersArrreduce.reduce((ecum, curval) => {
  console.log(`ecum value ${ecum}and ${curval}`);
  return ecum + curval;
}, 0);
console.log(totolnumbersArr);

 //others example

const numbersArrreduceothers= [
  { itemname : "mengo", price : 2000 },
  { itemname : "mengo", price : 2000 },
  { itemname : "mengo", price : 2000 },
  { itemname : "mengo", price : 2000 },
];

console.log(numbersArrreduceothers.reduce((accum, item) => accum + item.price, 0)); // 8000

// -----------------------------------------------------------------------------
// filter example

//               The filter() method creates a new array filled with elements that pass a test provided by a function.
//               The filter() method does not execute the function for empty elements.
//               The filter() method does not change the original array.
// array.filter(function(currentValue, index, arr), thisValue)
const namesfilterArr = [
  { book: "hindi", published: "2001", name: "shri" },
  { book: "english", published: "2002", name: "vinod" },
  { book: "maths", published: "2001", name: "adity" },
  { book: "hindi", published: "2003", name: "vinod" },
  { book: "maths", published: "2002", name: "shri" },
];

console.log(namesfilterArr.filter((i) => i.published >= 2001));
console.log(namesfilterArr.filter((i) => i.book === "hindi")); // book name filter hindi
// ---------------------------------------------------------------------------------
// map example

//Return a new array with the square root of all element values

const namesmapArr  = [
  { book: "hindi", published: "2001", name: "shri" },
  { book: "english", published: "2002", name: "vinod" },
  { book: "maths", published: "2001", name: "adity" },
  { book: "hindi", published: "2003", name: "vinod" },
  { book: "maths", published: "2002", name: "shri" },
];

console.log(
  namesmapArr.map((i, n) => {
    let namesArrresult = `book  ${i.book} and name  ${i.name};`;

    return  namesArrresult;
  })
);

// boolean true and false return
console.log(
  namesmapArr.map((i, n) => {
    let namesArr = i.book === "hindi"; // filter lagane par [ true, false, false, true, false ]
    return namesArr;
  })
);
// ---------------------------------------------------------------------
// foreach example
// The forEach() method calls a function for each element in an array.
// The forEach() method is not executed for empty elements.
// return value undefind
const namesArrforeach = ["vinod", "adity", "shrikanth"];

let namesArrforeachresult = namesArrforeach.forEach((val, index, arr) => {
  return val;
});

console.log(namesArrforeachresult); //undefined

namesArrforeach.forEach((val) => console.log(val));


//example

namesitems=[]

for(let i=0;i<namesArrforeach.length;i++){
  namesitems.push(namesArrforeach[i])
}

console.log(namesitems)


 let  final= namesArrforeach.forEach((namesArrforeach,index)=>{
  namesitems.push(namesArrforeach)
})

console.log(namesitems)  // foreach does not return any value it just return undefined


// -----------------------------------------------------------------------------


//The indexOf() method searches an array for an element value and returns its position
//Array.indexOf() returns -1 if the item is not found.
//array.lastIndexOf(item, start) start is optional 

const namesArrindex=["adity", "shrikanth","vinod","shrikanth","vinod"]
let namesArrposition=namesArrindex.indexOf("shrikanth")
console.log(namesArrposition)  // returns index of  first occurance of given value

let namesArrlastindexof=namesArrindex.lastIndexOf("vinod")
console.log(namesArrlastindexof) // returns index of last occurance of given value


// -----------------------------------------------------------------------------------

// find array
// The find() method returns the value of the first array element that passes a test function.
 const numbersArrfind=[1,2,3,4,5,6,7,8,9,10]
 let find=numbersArrfind.find(findresult)

 function findresult(val,index,array){
 return val>5
 }
console.log(find) // return the value of frist elements

// findindex array

let findindex=numbersArrfind.findIndex(findindexresult)
function findindexresult(val,index,array){
  return val==6
  }

console.log(findindex)  // return single value


let findage=[
  {name:"vinod",age:"5"},
  {name:"adity",age:"8"},
  {name:"adity",age:"2"},
  {name:"adity",age:"7"}
]

findage.sort((a,b)=>(a.age)-(b.age))



console.log(findage)