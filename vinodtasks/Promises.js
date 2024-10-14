// The Promise object represents the eventual completion (or failure)
// of an asynchronous operation and its resulting value.
// state:rejects,fulfilled,resolve,

// const result =new Promise (function(resolve,rejects){
//     setTimeout(function(){
//     let error=false
//     if(!error){
//         resolve({username:"vinod",password:"1234"})

//     }else{
//         rejects("error:wrong")
//     }
// },1000)

// })
// let k=result.then(function(user){

//    console.log(user)

//     return user.username;

// }).catch(function(error){
//     console.log(error)

// })

// k.then((value)=>{
//     console.log("value : ",value)
// })

// const result =new Promise (function(resolve,rejects){
//     setTimeout(function(){
//     let error=false
//     if(!error){
//         resolve({username:"vinod",password:"1234"})

//     }else{
//         rejects("error:wrong")
//     }
// },1000)

// })
// result.then(function(user){

//    console.log(user)

//     return

// }).catch(function(error){
//     console.log(error)

// })

function fun() {
  console.log("hello");
}

const result = setTimeout(function () {
  let p = fetch("https://dummyjson.com/products");
  p.then((res) => {
    return res.json();
  })
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });
}, 5000);
fun();
result;
funn();

function funn() {
  console.log("hii");
}
