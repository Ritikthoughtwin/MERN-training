let string = "helloworld"
 console.log(string.split(""))// 'h', 'e', 'l', 'l','o', 'w', 'o', 'r','l', 'd'
 console.log(string.split(','))//['helloworld']

sliceString=string.slice(0,5)
console.log(sliceString)

console.log("Upper Case",string.toUpperCase())

console.log("Char at index",string.charAt(7))

console.log("unicode at index",string.charCodeAt(8))

console.log("unicode at index",string.codePointAt(8))
