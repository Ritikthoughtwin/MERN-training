// global array
const fruits = ["Banana", "Orange", "Apple", "Mango"];
/*.............................................................................................................................*/

let size = fruits.length; //it should print length of an array
console.log(size);        //output : 4

/*............................................................................................................*/


let s=fruits.toString();     // it should convert array into string (a comma seperated string)
console.log(s);               //output : Banana,Orange,Apple,Mango

/*........................................................................................................*/


let fruit = fruits.at(2);     // fruits.at() function shows the value stored in given index
console.log(fruit);           // output : Apple

/*.............................................................................................................*/


let s2 = fruits.join(" * ");       /*  
                                        .join ("*") array function returns the string 
                                        with * by adding the * between all array elements
                                   */
console.log(s2);                 
                                    // output : Banana*Orange*Apple*Mango

/*..............................................................................................................*/

 /* 
                                  // Here the pop() function removes the last element from array Actual array;
 fruits4.pop();                  
                                  // And the it will return the removable value "mango" 
 
 */                                       

/*........................................................................................................*/

/*                       // The push methods used to add elements in the end in array it makes changes in actual array
fruits.push("Kiwi");      
                         //And it will return the current length of an array  
*/
/*...........................................................................................................*/

                          // The shift methods is used to remove value from front side and it also makes changes in actual array 
fruits6.shift();      
                          // and it returns the removed value

/*.................................................................................................*/
                                      // The unshift methods is used to add value from front side of an array and it also makes changes in actual array 
fruits7.unshift("Lemon");
                                      //and it returns  the current length of an array after changes
/*............................................................................................................*/

const num_01 = [1,2,3,4,5,6,7,8,9,10];
const num_01 = [11,12,13,14,15];
                                                //concat method adds two or more array together
                                                // does not effect the actual array
                                                // it returns the new array
const result = num_01.concat(num_02);



/*..........................................................................................................................*/



fruits.copyWithin(2, 0); // it makes changes in actual array 
                         // The copyWithin() method copies array elements to another position in an array.
                         //The copyWithin() method overwrites the existing values

/*...............................................................................................................*/

const myArr = [[1,2],[3,4],[5,6]];     // Create a new array with the sub-array elements concatenated
const newArr = myArr.flat();
console.log(newArr);

/*..................................................................................................................*/


console.log(fruits.splice(2, 0, "Lemon", "Kiwi"));   //The splice() method adds and/or removes array elements

                                                     //The splice() method overwrites the original array

/*.................................................................................................................*/


const slice = fruits.slice(1, 3);   //      arr.slice(begin, end);
                                    //     The slice() method returns selected elements in an array, as a new array
console.log(slice);                 //      The slice() method does not change the original array


/*...................................................................................................................*/

const batsman = ["virat", "rohit", "hardik", "virat"];                                 // Finds the first index of "Apple":
let batsman_index = fruits.indexOf("virat");                             //The indexOf() method returns the first index of a specified value.
                                         
/*.....................................................................................................................*/


const bowler = ["Bumrah", "shami", "siraj", "shami"];  //  Find the last index of "Apple":
                                                         // The lastIndexOf() method returns the last index of a specified value
let bowler_index = fruits12.lastIndexOf("shami") 


/*......................................................................................................................................*/


                                       //The includes() method returns true if an array contains a specified value
fruits.includes("Mango");                // is true 


/*..............................................................................................................................*/


const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction);                  //  The find() method returns the value of the first element that passes a test
                                                       //   The find() method executes a function for each array element
function myFunction(value, index, array) {             //    The find() method returns undefined if no elements are found
  return value > 18;                                    //    The find() method does not change the original arra
}

// with arrow function

let second =numbers.find((value, index, array)=>{             
  return value > 18;                                    
}}


/*...................................................................................................................*/


fruits.sort();                      // The sort() method sorts the elements of an array
                                    // The sort() method sorts the elements as strings in alphabetical and ascending order
                                     // The sort() method overwrites the original array

// with numbers 

   const n = [40, 100, 1, 5, 25, 10];
   n.sort(function(a, b){return a - b});   //for ascending order


   n.sort(function(a, b){return b - a});     //for descending order


/*......................................................................................................................*/


                            // The reverse() method reverses the order of the elements in an array
fruits.reverse();           //  The reverse() method overwrites the original array




/*........................................................................................................................*/



const values = [78, 56, 9, 1, 25];                   // The forEach() method calls a function for each element in an array
let txt = "";                                        
                                                      // it does not change the actual array
values.forEach((value, index, array)=> {
  txt += value + "<br>";
});




/*..................................................................................................................................*/


                                                       // map() creates a new array from calling a function for every array element
const result = values.map((value, index, array)=> {    // map() does not change the original array
  return value * 2;
});
   


/*.............................................................................................................................*/


const filtered_array= numbers.filter((value, index, array)=>{    //The filter() method creates a new array filled with elements that pass a test provided by a function.
      return value > 18;
} );





/*................................................................................................................................*/



let sum = numbers.reduce((total, value, index, array)=> {   // The reduce() method executes a reducer function for array element
  return total + value;                                     // The reduce() method returns a single value: the function's accumulated result.
});                                                         // The reduce() method does not change the original array.






/*.....................................................................................................................*/


let new_array=Array.from("ABCDEFG");     // Create an array from a given value



