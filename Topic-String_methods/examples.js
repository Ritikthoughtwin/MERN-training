/* 
String:-

A string is a sequence of characters used to represent text. 
It is enclosed in single or double quotes and provides various 
methods for text manipulation.

String Methods:-

JavaScript provides a wide variety of methods to manipulate strings. 
From retrieving specific characters using `charAt()`, converting strings 
to uppercase with `toUpperCase()`, or combining strings using `concat()`, 
these methods simplify common string manipulation tasks.
*/

/*....................................................................................................................................*/

// 1. length property
// Definition: The `length` property returns the length of a string.

let sentence = "String is a sequence of characters";
let sentenceLength = sentence.length;
console.log(sentenceLength);  // Output: 35

/*............................................................................................................................*/

// 2. charAt() method
// Definition: The charAt() method returns the character at a specified index in a string.

let greeting = "HELLO WORLD";
let firstCharacter = greeting.charAt(0);
console.log(firstCharacter);  // Output: H

/*...........................................................................................................................*/

// 3. at() method
// Definition: The at() method returns the character at a specified index.

const websiteName = "cricbuzz";
let thirdCharacter = websiteName.at(2);  // Returns the character at index 2
console.log(thirdCharacter);  

/*..................................................................................................................................*/

// 4. []
// Definition: Bracket notation can also be used to access a character at a specific index.

let message = "JavaScript provides a wide variety of methods to manipulate strings";
let firstLetter = message[0];
console.log(firstLetter); 

/*............................................................................................................................*/

// 5. slice() method
// Definition: The slice() method extracts a section of a string and returns it as a new string.

let colorList = "red black white yellow blue";
let slicedPart = colorList.slice(7, 13);  
console.log(slicedPart);  

/*......................................................................................................................*/

// 6. toUpperCase() method
// Definition: The toUpperCase() method converts all characters in a string to uppercase.

let text = "A string is a sequence of characters used to represent text";
let uppercasedText = text.toUpperCase();
console.log(uppercasedText); 

/*...........................................................................................................................*/

// 7. toLowerCase()  method
// Definition: The toLowerCase() method converts all characters in a string to lowercase.

let textLowerCase = text.toLowerCase();
console.log(textLowerCase);  

/*.................................................................................................................*/

// 8. concat()  method
// Definition: The `concat()` method combines (concatenates) two or more strings into one.

let combinedText = text.concat(text, "name : krishnakant thakur");
console.log(combinedText);

/*...........................................................................................................................*/

// 9. trim()  method
// Definition: The trim() method removes whitespace from both ends of a string.

let nameWithSpaces = "      krishnakant thakur      ";
let trimmedName = nameWithSpaces.trim();
console.log(trimmedName); 

/*...............................................................................................................*/

// 10. repeat()
// Definition: The repeat() method returns a new string with a specified number of copies of the original string.

let repeatedText = text.repeat(4);
console.log(repeatedText);  

/*....................................................................................................................................*/

// 11. replace()
// Definition: The replace() method replaces the first occurrence of a substring with another substring.

let sentenceToReplace = "Please visit company";
let updatedSentence = sentenceToReplace.replace("company", "Thoughtwin");
console.log(updatedSentence);  // Output: Please visit W3Schools!

/*............................................................................................................................*/

// 12. indexOf()
// Definition: The indexOf() method returns the index of the first occurrence of a specified value in a string. 
// If the value is not found, it returns -1.

let searchText = "where is your Home";
let indexPosition = searchText.indexOf("Home");
console.log(indexPosition); 

/*............................................................................................................................*/

// 13. search()
// Definition: The search() method searches a string for a specified value and returns the position of the match.

let searchResult = searchText.search("locate");
console.log(searchResult); 

/*............................................................................................................................*/

// 14. split()
// Definition: The split() method splits a string into an array of substrings based on a specified separator.

let fruits = "Apple, Banana, mango";
let fruitArray = fruits.split(", ");  // Splits the string into an array of fruits
console.log(fruitArray);  // Output: ["Apple", "Banana", "mango"]

/*............................................................................................................................*/

// 15. startsWith()
// Definition: The startsWith() method checks if a string starts with a specified substring. It returns true or false.

let sentenceStart = "JavaScript is best ";
let startsWithJavaScript = sentenceStart.startsWith("JavaScript");  // true
console.log(startsWithJavaScript);  // Output: true

/*............................................................................................................................*/

// 16. `endsWith()`
// Definition: The `endsWith()` method checks if a string ends with a specified substring. It returns `true` or `false`.


let endsWithAwesome = sentenceStart.endsWith("best");  // true
console.log(endsWithAwesome);  // Output: true
