// The Promise object represents the eventual completion (or failure)
// of an asynchronous operation and its resulting value
// state:rejects,fulfilled,resolve,

const check = new Promise(function (resolve, rejects) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "vinod", password: "1234" });
    } else {
      rejects("error:wrong");
    }
  }, 1000);
});
check
  .then(function (user) {
    console.log(user);

    return user.username;
  })
  .catch(function (error) {
    console.log(error);
  })

  .then((value) => {
    console.log("value : ", value);
  });



  // fetching api data
let fechingProductdata = fetch("https://dummyjson.com/products");
fechingProductdata.then((res) => {
    return res.json();
  })
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });
;
