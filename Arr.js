const arr = [33,56,78,66,22,88,66]
let languages = ['C++', 'Java', 'Html', 'Python', 'C'];
let webDvlop = ["HTML", "CSS", "JS", "Bootstrap"];

//////////// entries = return key value pair of every index
// let v = languages.entries();
// for(x of v ){
//     console.log("geeks",x);
// }

///////////// find = returns first element which passes the condition 
// let found = arr.find(function (element) {
//     return element > 10;
// });
// let indexOf = arr.indexOf(found);  /// returns the indexof element
// console.log(indexOf)

/// Filter = it return the array of all element that passes the condition


// console.log(removed);
// let filtered = ar.filter(isEven);

// console.log(indexOf)



///////////////////////////some method :- pass a test and return a boolean
// function isEven(value) {
//     return value % 2 == 0;
// }
// console.log(arr.some(isEven))

// console.log(arr.sort())


/////////////reduce method

// function sumArr(sum , num){
//     return sum+num;
// }
// console.log(arr.reduce(sumArr));


let new_arr = arr.slice(2, 6);
console.log(new_arr);
 let modifyArr = arr.splice(2,1, 1000,500)
 console.log("spice",modifyArr)
    //  let removed = languages.splice(2, 1, 'Julia', 'Php');
  webDvlop.splice(2, 1, 'PHP', 'React_Native')
     console.log(webDvlop)

let arr1 = ['apple', 'banana', 'cherry', 'dates', 'elderberry'];

//  arr1.splice(2, 1, 'fig', 'grapes');
 let newarr =  arr1.splice(2, 1, 'fig', 'grapes');
console.log(newarr);