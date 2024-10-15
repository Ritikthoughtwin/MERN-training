const numberOne = 6; // Global Scope

const parentAddFunction = () => {
    const numberTwo = 2  // local Scope but child function have access
    function childAddFunction() {
        const numberThree = 7 // local Scope for childAddFunction
        // return numberOne + numberTwo + numberThree
        console.log(numberOne + numberTwo + numberThree)
    }
    childAddFunction()
}
parentAddFunction()
// console.log(parentAddFunction()) 
// console.log(parentAddFunction()()) 

// this is called currying and Closure scope chain
function Multiply(numOne){
    return function(numTwo){
        return function(numThree){
            return function(numFour){
                return function(numFive){
                    return numOne*numTwo*numThree*numFour*numFive;
                }
            }
        }
    }
}
console.log(Multiply(2)(3)(4)(5)(5));