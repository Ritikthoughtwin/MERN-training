//Normal callback

// creation of callback & example

function examIsDone() {
  setTimeout(() => {
    console.log('exam result is out');
  }, 5000);
}
function examIsGoingon(callbackOfexamDone) {
  console.log('exam is running');
  callbackOfexamDone();
}
examIsGoingon(examIsDone);

// callback passed in another function and return inside it is callback
// callback function is introdused in 2015 for async Programing
// javascript work on singlethered the code work in which work  line by line coding
// In which async work has be done by browser

let toatalAttendance = 10;
function addNum(basicSalary) {
  let Totalsalary = basicSalary + 25000;
  return Totalsalary;
}
function assignValue(attendancesalary, toatalAttendance) {
  if (toatalAttendance == 30) {
    let basicSalary = 2300 + attendancesalary;
    console.log(`The Salary of these month ${addNum(basicSalary)} Rupe`);
  } else {
    console.log(`the mont of the salary is 2300`);
  }
}
assignValue(2000, toatalAttendance);
