const test = () => {
    return "test"
}

async function  checkAsyncReturn(){
    const res =  test();
    return res
}

console.log(checkAsyncReturn())

const getName = async() =>{
  let name = await "Josh"
  console.log("name", name);
  
}

getName()
console.log("hello")
checkAsyncReturn()