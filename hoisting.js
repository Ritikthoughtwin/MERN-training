const myObject = {
    regularExample: function() {
      console.log("REGULAR: ", this)
    },
  
    arrowExample: () => {
      console.log("ARROW: ", this)
    }
  }
  
  myObject.regularExample()
  myObject.arrowExample()