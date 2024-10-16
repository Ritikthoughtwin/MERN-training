let nameFirst = 'zditya';
let nameSecond = 'Aditya';
let emptystring = '';
let theStort =
  "the bark of dog to the car into the grab of the sky, Isn't Dog is runging to human or car";
let num = '5';

//Concat
// the method is used to add to or more then one string
// Into new string

// emptystring = nameFirst.concat(nameSecond);
// console.log(emptystring);

// Trim
// trim is used in string remove space extra space from starting and ending

// theStort.trim();

// trimStart()
// remove all the extra spaces from start
// theStort.trimStart()

// trimEnd()
// remove all the extra spaces from End in string
// theStort.trimEnd()

//padStart()
// it will start add number & only work with number
// padstart take two parmeters first one the lenth less then 1 and the other one is also num
// only the numbers are then it add
// emptystring = num.padStart(4, '0');
// console.log(emptystring);

//padEnd ()
//it will add after the number &only work with number
// padstart take two parmeters first one the lenth less then 1 and the other  is number  in string themn it will work
// only the numbers are then it add
// emptystring = num.padStart(4, '0');
// console.log(emptystring);

// tolowercase()
// it will not chnage orignal array
// it will make string in lower case
// emptystring = nameFirst.toLowerCase();
// console.log(emptystring);

// toUpperCase()
// it will not chnage orignal array
//it will make string in Upper case
// emptystring = nameFirst.toUpperCase();
// console.log(emptystring);

// torepeat()
// the method repet the string what every number you give in permiters it will repeat
// it will not change orignal string it return new string
// emptystring = nameFirst.repeat();
// console.log(emptystring);

//replace()
//replce the word from string and change with new words in string
// emptystring = theStort.replace('car', 'Human');
// console.log(emptystring);

// split() method return an array
// split method splid every single word (" ")
// emptystring = theStort.split(' ');
// console.log(emptystring);

//replaceall()
// replaceall() is used to change all persent word in string
//g is deffind there gor global if it is not defind then typeerror

// emptystring = theStort.replaceAll(/dog/g, 'cat');
// console.log(emptystring);

// charcodeat()
// it take index value and return a number or char code of digit
// emptystring = nameFirst.charCodeAt(0);
// console.log(emptystring);

// The substring() method extract a part of a string and returns the extracted parts in a new string:
// it will start from 1
// emptystring = theStort.substring(0, 1);
// console.log(emptystring);

//Indexof()
// if value is persent then the index value of word will get or if is not persent then -1
// emptystring = theStort.indexOf('carn');
// console.log(emptystring);

//stringendwith()
// it only check last word of string not check other it check the end pont word
// return boolen value
// emptystring = theStort.endsWith('car');
// console.log(emptystring);

//string startwith()
// it only check first word of string not check other it check the start ponit word
// return boolen value
// emptystring = theStort.startsWith('the');
// console.log(emptystring);

// match() method search in string
// return  a array in which [,index ,value is  parsent ,input persent & group]
// Perform a global, case-insensitive search for "ain"
// emptystring = theStort.match("DOG");
// emptystring = theStort.match(/dog/gi);
// console.log(emptystring);

// // Output=>
// [
//     'dog',
//     index: 12,
//     input: "the bark of dog to the car into the grab of the sky, Isn't dog is runging to human or car",
//     groups: undefined
//   ]

emptystring = theStort.matchAll('dog');
console.log(Array.from(emptystring));
