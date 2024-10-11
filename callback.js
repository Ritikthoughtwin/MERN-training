function first(){
    console.log("hello1")
}

function second(callback){
    setTimeout(()=>{
        callback()
    },2000)
    console.log("world")
   
}

second(first);
