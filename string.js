let string = "helloworld"
 console.log(string.split(""))// 'h', 'e', 'l', 'l','o', 'w', 'o', 'r','l', 'd'
 console.log(string.split(','))//['helloworld']

let sliceString=string.slice(0,5)
console.log(sliceString)

console.log("Upper Case",string.toUpperCase())

console.log("Char at index",string.charAt(7))

console.log("unicode at index",string.charCodeAt(8))

console.log("unicode at index",string.codePointAt(8))

let newPadStartString = string.padStart(15, "hy hy"); // pad a string with another string until it reaches the given length
let newPadEndString = string.padEnd(15, "Bye Bye"); // pad a string with another string until it reaches the given length
console.log(newPadStartString)
console.log(newPadEndString)

let concatString = string.concat("MayBe") //join or concatenate two or more strings together
console.log(concatString)

let concatMultipleString = string.concat(concatString,newPadEndString,newPadStartString) // without space
console.log(concatMultipleString) 

let concatMultipleStringWithSpace = string.concat('',concatString,' ' ,newPadEndString,' ',newPadStartString) // with space
console.log(concatMultipleStringWithSpace)

let partOfString = string.substring(6, 11); //returns the part of the given string from the start index to the end index. Indexing starts from zero (0)
console.log(partOfString)

let partOfSubstr = string.substr(4, 5); // returns the specified number of characters from the specified index from the given string
console.log(partOfSubstr)

let replceString = string.replace("hello","heyy") // replaces a part of the given string with another string or a regular expression 
console.log(replceString)

let char = /l/ 
console.log(string.search(char)) // index of matching characters within the string 