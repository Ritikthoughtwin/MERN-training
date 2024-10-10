function App() {
  let num1 = 23;
  function num() {
    console.log(num1);
  }
  return num;
}
App()();
//////neested function store date after destroy for child function

function Details(name) {
  let car = (age) => {
    console.log(age + name);
  };
  return car;
}

Details('aditya')(23);
// it also work in arrow function
//clouser work on lexical scope ==>are scope which is usedneested function
