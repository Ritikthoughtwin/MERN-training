//  string length
//  Property Access [ ]

let text="ahfhjfhfuihhijughjihiuhsdsdsdsd"
let length=text.length  // The length property returns the length of a string
console.log(length)

// -------------------------------------------------------
//The charAt() method returns the character at a specified index (position) in a string
let textcharat="hello"
let charat=textcharat.charAt(2)
console.log(charat)

// ----------------------------------------------------------
// string at()

let textat="hello"
console.log(textat.at(2))  //Get the secand letter of name
console.log(textat[2])     ////Get the secand letter of name

// ------------------------------------------------------------

//Extracting String Parts
//There are 3 methods for extracting a part of a string
   // slice(start, end)
   // substring(start, end)
   // substr(start, length)

// slice
// javascript counts position of zero

let textslice="vinod,adity,shrikanth"
console.log("Slice",textslice.slice(5,10))   //Slice out a portion of a string from position 5 to 10 

// secand method

// console.log(textslice.slice(2))  //if you omit the second parameter the method will slice out the rest of the string

// --------------------------------------------------------------

// substring
//substring() is similar to slice().
//The difference is that start and end values less than 0 are treated as 0 in substring().
let textsubstring="vinod,adity,shrikanth"
console.log("Substring",textsubstring.substring(7,5))  

// -------------------------------------------------------------

//JavaScript String toUpperCase

let texttocase="vinod"
console.log("touppercase",texttocase.toUpperCase())
console.log("",texttocase.toLocaleLowerCase())

// ------------------------------------------------------------
//concat() joins two or more strings

let stringConcat="vinod,adity"
console.log(stringConcat.concat(" ","hii"))

// -------------------------------------------------------------

// string trim()

let stringTrim="          vinod,adity"  
console.log(stringConcat.trim())  // remove the space input filed
 
// ---------------------------------------------------------------
// stering repeat
let stringRepeat="vinod"
console.log(stringRepeat.repeat( 5 ) ) // The repeat() method returns a string with a number of copies of a string.

// -------------------------------------------------------------------
// replace string
// The replace() method replaces a specified value with another value in a string

let stringReplace="vinod adity shrikanth"
let resultReplace=stringReplace.replace("shrikanth","mohit")
console.log(resultReplace)  //The replace method replaces only the first match

// replaceAll string

console.log(stringReplace.replaceAll("vinod","mohit")) 

// ---------------------------------------------------------------------

//Converting a String to an Array
// string split

let stringSplit="a,b,c,d"
let resultSplit=stringSplit.split()
console.log(resultSplit)


// -----------------------------------------------------------------------
//string search
//The searchmethod searches a string for a string or a regular expression and returns the position of the match
let stringSearch="a,b,c,d"
let resultSearch=stringSearch.search("d")
console.log(resultSearch) // two methods indexof and search are equal

// -------------------------------------------------------------------------
// string match
// The match() method returns an array containing the results of matching a string against a string or a regular expressio
let stringMatch="hello indore"
let resultMatch=stringMatch.match("indore")
console.log(resultMatch)    // console.log(/resultMatch/g) global search  


console.log(stringMatch.matchAll(/indore/g)) // return a object

// --------------------------------------------------------------------------
