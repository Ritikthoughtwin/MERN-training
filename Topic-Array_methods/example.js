/*
  Array :- 
          An array in JavaScript is a data structure used to store 
          multiple values in a single variable. It can hold various data 
          types and allows for dynamic resizing. Elements are accessed by 
          their index, starting from 0.
          ex:- [1,2,3,"a","b",{ name : krishnakant ,age : 22}];

  Array Methods :- 
                  Array methods are the build-in methods.
                  They provide essential functionalities like adding, removing,
                  and transforming elements, as well as searching, sorting and many more.
                  
*/

// Global variables:-

let ArrayOfNumbers=[10,45,78,45,78,56,43,45,66,6,2,78,998]; 
const ArrayOfSportsName = ["Cricket", "Volleyball", "Basketball", "Hockey"];
const ArrayOfColorName=["red","yellow","green","brown","white","black","white"];
const subArray = [[1,2],[3,4],[5,6]];
let returnValue;

// Some array methods are :-

/*.............................................................................................................................................*/

// Array.length 
// The length property returns the length of an array


console.log("Sports names : ", ArrayOfSportsName.length);   // using .length method


/*......................................................................................................................................................*/

// toString() method
// return a new string
// The JavaScript method toString() converts an array to a string of (comma separated) array values.
// does not effect the actual array

 let StringOfNumArray= ArrayOfNumbers.toString(); // using toString methods which returns a new string of comma seperated vales of given array
 console.log("string :",StringOfNumArray);
 console.log("Type : ",typeof(StringOfNumArray));

 /*..................................................................................................................................................................................................*/
   
 //   Array at()
 //   ES2022 intoduced the array method at()
 //   The at() method returns an element from an array according to given index.
  
 let Element= ArrayOfSportsName.at(3);  //  using at() method
 console.log("Sport name : ",Element);


 /*..........................................................................................................................................................................................................................*/

  // Array join() method
  // The join() method joins all array elements into a string
  // return a new string
  // Does not effect in actual array
 
      let colorString=ArrayOfColorName.join();
      console.log("color :",colorString);

       colorString=ArrayOfColorName.join("=");
      console.log("color :",colorString);

       colorString=ArrayOfColorName.join("++");
      console.log("color :",colorString);



/*....................................................................................................................................................................................*/


  //  Array pop() method
  //  Make changes in actual array
  //  The pop() method removes the last element from an array
  //  The pop() method returns the value that was "popped out"
 
  returnValue=ArrayOfColorName.pop(); // it removes the last element from ArrayOfColorName array
  let emptyArray=[];
  console.log("return value : ",returnValue)
  returnValue=emptyArray.pop();
  console.log("return value : ",returnValue)



  /*................................................................................................................................................................................................................*/

  //  Array push() method.
  //  The push() method adds a new element to an array at the end.
  //  Make changes in actual array.
  //  The push() method returns the updated array length.
   
   console.log("Actual array before push() operation: ",ArrayOfNumbers)
   returnValue=ArrayOfNumbers.push(788);
   console.log("Actual array after push() operation: ",ArrayOfNumbers)
   console.log("return value : ",returnValue);



/*.........................................................................................................................................................................................................*/


//    Array shift() method.
//    The shift() method removes the first array element and "shifts" all other elements to a lower index.
//    The shift() method returns the value that was "shifted out".
//    Makes changes in array.
   

    
    console.log("Actual array before shift() operation: ",ArrayOfNumbers)
    returnValue=ArrayOfNumbers.shift();
    console.log("Actual array after shift() operation: ",ArrayOfNumbers)
    console.log("return value : ",returnValue);


 /*..................................................................................................................................................................................................................*/
 
 
  //     Array unshift() method
  //     The unshift() method adds a new element to an array at the beginning.
  //     The unshift() method returns the updated array length

  console.log("Actual array before unshift() operation: ",ArrayOfNumbers)
  returnValue=ArrayOfNumbers.unshift(555);
  console.log("Actual array after unshift() operation: ",ArrayOfNumbers)
  console.log("return value : ",returnValue);
 
  
/*......................................................................................................................................................................................................*/


  //    Array concat() method
  //    The concat() method creates a new array by merging existing arrays:
  //    The concat() method does not change the existing arrays. It always returns a new array.
  //    The concat() method can take any number of array arguments

  returnValue=ArrayOfColorName.concat(ArrayOfNumbers,ArrayOfSportsName);
  console.log("return array : ",returnValue);


  /*.....................................................................................................................................................................................................................................*/
   
  //   copyWithin() method.
  //   The copyWithin() method copies array elements to another position in an array.
  //   The copyWithin() method overwrites the existing values.
  //   The copyWithin() method does not change the length of the array.

  console.log("Actual array before copyWithin() operation: ",ArrayOfNumbers)
  returnValue=ArrayOfNumbers.copyWithin(2,0,5);
  console.log("Actual array after copyWithin() operation: ",ArrayOfNumbers)
  console.log("return value : ",returnValue);


  /*........................................................................................................................................................................................................................................*/

  //      Array flat() method 
  //      ES2019 Introduced the Array flat() method.
  //      The flat() method creates a new array with sub-array elements 


  returnValue=subArray.flat();
  console.log(returnValue)


  /*............................................................................................................................................................................................................................................*/
    
  // ES2019 added the Array flatMap() method to JavaScript
  // The flatMap() method first maps all elements of an array and then creates a new array by flattening the array.
     
  
   
     returnValue=subArray.flatMap((value)=>{
        return [value[0]+1,value[1]+2];
     });

     console.log(returnValue);


 /*....................................................................................................................................................................................................................................................*/
 
 //   Array splice() method.
 //   The splice() method adds new items to an array.
 //   The splice() method effect the actual array.
 //   And its returns the array of deleted elements.
      
    console.log("Actual array before splice() operation: ",ArrayOfNumbers)
    returnValue=ArrayOfNumbers.splice(2,5,"one","two","three","four","five");
    console.log("Actual array after splice() operation: ",ArrayOfNumbers)
    console.log("retrun value : ",returnValue);


 /*.........................................................................................................................................................................................................................................................*/
 
 //  Array slice() method
 //  The slice() method slices out a piece of an array 
 //  The slice() method returns new array.
 //  It does not change in actual array.

     returnValue=ArrayOfNumbers.slice(2,8);
     console.log("return value :",returnValue);



 /*.........................................................................................................................................................................................................................................................*/

 //  Array indexOf() method
 //  The indexOf() method searches an index for an element value and returns its position.
 //  It returns the  first index where it finds the element and other index where the same data is present is not comes in use.
 //  Array.indexOf() returns -1 if the item is not found.  
   returnValue=ArrayOfColorName.indexOf("white");
   console.log("return value :",returnValue);



/*.........................................................................................................................................................................................................................................................*/

//   Array includes() methods
//   ECMAScript 2016 introduced Array.includes() to arrays. 
//   This allows us to check if an element is present in an array or not.
//   Returns boolean values

     returnValue=ArrayOfColorName.includes("red");
     console.log("return value :",returnValue);


/*.........................................................................................................................................................................................................................................................*/

//   Array find() method
//   The find() method returns the value of the first array element that passes a test function.
  
returnValue=ArrayOfNumbers.find((value)=>{
    return value>70000;
})

console.log("return value :",returnValue);


/*.........................................................................................................................................................................................................................................................*/
  
// Array sort() method.
// The JavaScript sort() method arranges array elements alphabetically by default, treating them as strings.  
// For numerical sorting, a custom function is needed.

console.log("Actual array before sort() operation: ",ArrayOfSportsName);
returnValue=ArrayOfSportsName.sort();
console.log("Actual array after sort() operation: ",ArrayOfSportsName);
console.log("return value :",returnValue);

// for numerical array we have to create a custom function

let numArray=[34,67,23,12,89,56,45];

numArray.sort((a,b)=>{                      // for ascending order
    return a-b;
})
console.log("Ascending",numArray);

numArray.sort((a,b)=>{                      // for descending order
    return b-a;
})
console.log("Descending",numArray)



/*.........................................................................................................................................................................................................................................................*/
//  Array reverse() method
//  The reverse() method reverses the elements in an array
//  Effect the actual array

numArray.reverse()
console.log(numArray);


/*.........................................................................................................................................................................................................................................................*/

//  forEach method
/* 
 The forEach() method in javascript is an array method that allows you to execute 
 a provided function once for each array elements.
*/ 
// no return value
// does not effect the actual array

ArrayOfSportsName.forEach((value,index,array)=>{
console.log(value);
})


let sum =0;
numArray.forEach((value)=>{
    return 
})


/*.............................................................................................................................................................................................................................................................*/
//  Array map() method
//  The map() method creates a new array by performing a function on each array element.
//  The map() method does not change the original array.

returnValue=ArrayOfSportsName.map((value)=>{
    return value+"@";
})

console.log("return array : ",returnValue);


returnValue=ArrayOfColorName.map((value)=>{
    return value+"*$%^&*";
})

console.log("return array : ",returnValue);



/*.................................................................................................................................................................................................................................................................*/

// Array filter() method
// The filter() method creates a new array with array elements that pass a test.
//  The filter() method does not change the original array.
const numbersArray = [45, 4, 9, 16, 25];
const over18 = numbersArray.filter((value)=>{
    return value > 18;
  });
  console.log("over18 : ",over18);



/*.................................................................................................................................................................................................................................................................*/


//    Array reduce() method
//    The reduce() method runs a function on each array element to reduce it to a single value.
//    The reduce() method works from left-to-right in the array.
//    The reduce() method does not reduce the original array.



let sumValue = numbersArray.reduce((total, value, index, array)=> {
    return total + value;
  });
  console.log("sum : ",sumValue);

  // The reduce() method can accept an initial value
    
 
sumValue = numbersArray.reduce((total, value)=> {
    return total + value;
  }, 100);

  console.log("sum : ",sumValue);


  /*...................................................................................................................................................................................................................................................................*/
  

  //  Array every() method
  //  The every() method checks if all array values pass a test.
  // returns false or true
 
let allOver18 = numbersArray.every((value)=> {
    return value > 18;
  } );
  console.log(allOver18)





 


