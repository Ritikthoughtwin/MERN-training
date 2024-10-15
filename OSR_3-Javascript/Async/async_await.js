// async/await is also use to async programing
// await always use inside the async function outside it will get error
// await is use before the block of code which you now that it will take time
// you can  handel the error in async await with try & catch method

// normal creation async function

// async function asyncFunction() {
//   return 'Hello';
// }

// console.log(asyncFunction());
// asyncFunction().then((res) => console.log(res));

// creation of async await function
// await wait for the prmoise to complete

// const getData = async () => {
//   let y = await 'Hello World';
//   console.log(y);
// };

// console.log(1);
// getData();
// console.log(2);

// async function fetchData() {
//   try {
//     let response = await fetch('https://dummyjson.com/users');
//     let data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error('Data not get ');
//   }
// }
// fetchData();
