//promise had resolution of inversion of control,
//in Promisse we have 3 stage pending , fullfiled and reject
// then and catch both method work with Promisse
// one of the main use of Promises is APi Fetch

// let Pro = new Promise(function (resoleve, reject) {
//   setTimeout(function () {
//     console.log('it is done ');
//     resoleve();
//   }, 1000);
// });
// Pro.then(function () {
//   console.log('the task is done');
// });

// creation of Promise
//Example of  Promises

// let pro = new Promise(function (res, rej) {
//   let er = false;

//   if (er) {
//     res([
//       { name: 'aditya', age: 23, number: 9672362323, email: 'Adi@gmail.com' },
//       { name: 'Ravneet', age: 7, number: 2172362323, email: 'Rasv@gmail.com' },
//       { name: 'suitya', age: 39, number: 1232362323, email: 'su@gmail.com' },
//       { name: 'Nitya', age: 30, number: 8922362323, email: 'nitya@gmail.com' },
//     ]);
//   } else {
//     rej('error find');
//   }
// });

// pro
//   .then((res) => {
//     return res[0].name;
//   })
//   .then((rem) => {
//     console.log(rem);
//   })
//   .catch((er) => {
//     console.log(er);
//   });
// the program is chaining then

// Promise with async/ awai try catch

// let pro = new Promise((res, rej) => {
//   let istask = false;
//   if (istask) {
//     res({ task: 'leraning of js', level: '9.6' });
//   } else {
//     rej('there is data crab');
//   }
// });

// async function StratPromise() {
//   try {
//     let neested = await pro;
//     console.log(neested);
//   } catch (err) {
//     console.log(err);

//   }
// }
// StratPromise();

//method of prmises

// Promise the Method prmoises.all
// Promises.all is used when we have multiple Promises
// single then & catch is use for multiple promises
// all prmises return  resolve  then it will go with then()
// but if single Promise are return reject() then it will go with cathch() it will not check other

// Promises.all take an array

// let p1 = new Promise((res, rej) => {
//   setTimeout(function () {
//     console.log('first resolve ');
//     res(10);
//   }, 1000);
// });

// let p2 = new Promise((res, rej) => {
//   setTimeout(function () {
//     console.log('second resolve ');
//     res(20);
//   }, 1000);
// });

// Promise.all([p1, p2]).then((data) => {
//   for (const key in data) {
//     console.log(data[key] + 1);
//   }
// });

//promises.allsatlled
//The Promises has method  promises.allsatlled
// these method is used when we have multiple per prmoises and they are not dependent each other
// if promises get reslove then it will go on then or if reject then it will go on catch()

// let promiseMethodFirst = new Promise((res, rej) => {
//   setTimeout(() => {
//     console.log('The API Fetch of user');
//     res([23, 4, 56]);
//   }, 5000);
// });
// let promiseMethodsecond = new Promise((res, rej) => {
//   setTimeout(() => {
//     console.log('The API Fetch is failed');
//     rej([0]);
//   }, 2000);
// });

// Promise.race([promiseMethodFirst, promiseMethodSecond ])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//promises.race
//the promises.race is the also method of promise
// these method is used when we have multiple per prmoises and they are not dependent each other
// but it is work as who came first will show it can be resolve or reject
// let promise1 = new Promise((res, rej) => {
//     setTimeout(() => {
//       console.log('The API Fetch of user');
//       res([23, 4, 56]);
//     }, 5000);
//   });
//   let promise2 = new Promise((res, rej) => {
//     setTimeout(() => {
//       console.log('The API Fetch is failed');
//       rej([0]);
//     }, 2000);
//   });

//   Promise.race([promise1, promise2])
//     .then((res) => {
//       console.log(res);
//     })
//     .catch((err) => {
//       console.log(err);
//     });

//promice.any
// promise.any is the method of prmoise
// but it is work as who came first will show it can be resolve only

let promise1 = new Promise((res, rej) => {
  setTimeout(() => {
    console.log('The API Fetch of user');
    rej([23, 4, 56]);
  }, 5000);
});
let promise2 = new Promise((res, rej) => {
  setTimeout(() => {
    console.log('The API Fetch is failed');
    rej([0]);
  }, 2000);
});

Promise.any([promise1, promise2])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
