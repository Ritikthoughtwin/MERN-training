const arr = [33,56,78,66,22,88,66]
let languages = ['C++', 'Java', 'Html', 'Python', 'C'];
let webDevlop = ["HTML", "CSS", "JS", "Bootstrap"];



// entries = return key value pair of every index
let checkEntries = languages.entries();
for(value of checkEntries ){
    console.log("entries",value);
}

//find = returns first element which passes the condition 
let found = arr.find(function (element) {
    return element > 10;
});
let indexOf = arr.indexOf(found);  /// returns the indexof element
console.log("index of",indexOf)

//Filter = it return the array of all element that passes the condition

let filtered = arr.filter(isEven);
console.log("filter",filtered)



//some method :- pass a test and return a boolean
function isEven(value) {
    return value % 2 == 0;
}
console.log(arr.some(isEven))

console.log(arr.sort())


//reduce method :- it reduce the array in single element after applying reducing function

function sumArr(sum , num){
    return sum+num;
}
console.log(arr.reduce(sumArr));
let newArray = arr.slice(2, 6);
console.log(newArray);
 let modifyArray = arr.splice(2,1, 1000,500)
 console.log("spice",modifyArray)
webDevlop.splice(2, 1, 'PHP', 'React_Native')
console.log(webDevlop)


 let newWebDevloper =  webDevlop.splice(2, 1, 'fig', 'grapes');
console.log(newWebDevloper);

 let newMapArray=languages.map((item , index)=>{
    if(index%2==0){
        return item;
    }
    
})
console.log(newMapArray)
let forEachArray = languages.forEach((item)=>{
     console.log("forEach",item)
})
console.log(forEachArray)

let filterArray = arr.filter((item)=>{
    return item%2==0;
})
console.log("using filter",filterArray)
let mapArray = arr.map((item)=>{
    return item%2==0
})
console.log("using map",mapArray)