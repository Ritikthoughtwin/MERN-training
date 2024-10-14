const test = () => {
    return "test"
}

async function  hello(){
    //  console.log("hello")
    const res =  test();
    return res
}

console.log(hello())

const getData = async() =>{
  let name = await "Josh"
  console.log("name", name);
  
}

getData()
console.log("hello")
hello()