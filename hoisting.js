const myObject = {
    regularFunction: function() {
      console.log("REGULAR FUNCTION: ", this)
    },
  
    arrowFunction: () => {
      console.log("ARROW FUNCTION: ", this)
    }
  }
  
  myObject.regularExample()
  myObject.arrowExample()
