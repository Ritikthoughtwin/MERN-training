let numbers = [1,2,3,4,5]
function first(){
    console.log("hello")
}

function second(callback){
    setTimeout(()=>{
        callback()
    },2000)
    console.log("world")
   
}

const tableLogic = (numbers)=>{
      console.log(numbers*2)
}

const table = (callback)=>{
    numbers.forEach(callback)
  
}

table(tableLogic)
second(first);
