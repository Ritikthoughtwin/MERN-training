let num = [1,2,3,4,5]
function first(){
    console.log("hello1")
}

function second(callback){
    setTimeout(()=>{
        callback()
    },2000)
    console.log("world")
   
}

const tableLogic = (num)=>{
      console.log(num*2)
}

const table = (callback)=>{
   num.forEach(callback)
  
}

table(tableLogic)
second(first);
