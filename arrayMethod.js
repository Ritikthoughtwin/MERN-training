const arr = [33,56,78,66,22,88,66]
let languages = ['C++', 'Java', 'Html', 'Python', 'C'];
let webDvlop = ["HTML", "CSS", "JS", "Bootstrap"];

//////////// entries = return key value pair of every index
let checkEntries = languages.entries();
for(value of checkEntries ){
    console.log("entries",value);
}

///////////// find = returns first element which passes the condition 
let found = arr.find(function (element) {
    return element > 10;
});
let indexOf = arr.indexOf(found);  /// returns the indexof element
console.log("index of",indexOf)

/// Filter = it return the array of all element that passes the condition

let filtered = arr.filter(isEven);
console.log("filter",filtered)



///////////////////////////some method :- pass a test and return a boolean
function isEven(value) {
    return value % 2 == 0;
}
console.log(arr.some(isEven))

console.log(arr.sort())


/////////////reduce method :- it reduce the array in single element after applying reducing function

function sumArr(sum , num){
    return sum+num;
}
console.log(arr.reduce(sumArr));
let new_arr = arr.slice(2, 6);
console.log(new_arr);
 let modifyArr = arr.splice(2,1, 1000,500)
 console.log("spice",modifyArr)
webDvlop.splice(2, 1, 'PHP', 'React_Native')
console.log(webDvlop)

let fruits = ['apple', 'banana', 'cherry', 'dates', 'elderberry'];

//  arr1.splice(2, 1, 'fig', 'grapes');
 let newfruitsarr =  fruits.splice(2, 1, 'fig', 'grapes');
console.log(newfruitsarr);

 let newMapArray=languages.map((item , index)=>{
    if(index%2==0){
        return item;
    }
    
})
console.log(newMapArray)
let forEachArr = languages.forEach((item)=>{
     console.log("froEach",item)
   
})

let filterPro = arr.filter((item)=>{
    return item%2==0;
})
console.log("using filter",filterPro)
let mapArray = arr.map((item)=>{
    return item%2==0
})
console.log("using map",mapArray)