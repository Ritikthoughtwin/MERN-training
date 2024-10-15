const myObject = {
  regularFunction: function (firstName) {
    this.firstName = firstName;
    console.log("REGULAR FUNCTION: ", this.firstName)
  },

  arrowFunction: (lastName) => {
    this.lastName = lastName;
    console.log("ARROW FUNCTION: ", this.lastName)
  }
}

myObject.regularFunction("first")
myObject.arrowFunction("last")

// it will give the output beacuse add is consider in a glbal execution context
add()
function add(){
  console.log(34+66)
}

// it gives us reference error because const and let stuck in a temporial dead zone
// addUsingArrowFunction()
// const addUsingArrowFunction = () =>{
//   console.log(34+66)
// }