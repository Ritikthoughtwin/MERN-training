const arr = [33,56,78,66,22,88,66]
let languages = ['C++', 'Java', 'Html', 'Python', 'C'];
let webDevlop = ["HTML", "CSS", "JS", "Bootstrap"];

// For OF Loop
// entries = used to create an iterator that returns key/value pairs for each index in the array.
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

// Iterate Using Map

 let newMapArray=languages.map((item , index)=>{
    if(index%2==0){
        return item;
    }
    
})
console.log(newMapArray)

// For Each Loop
let forEachArray = languages.forEach((item)=>{
     console.log("forEach",item)
})

// For Each With Condition
let forEachWithCondition = arr.forEach((item,index)=>{
    if(index%2==0){
        console.log("forEach with condition",item)
    }
})
console.log(forEachArray) // it will give undefine when we try to assing array output to variable using FOREACH Loop
// For in Loop
for (let item in languages) {
    if(item%2!=0){
        console.log(item + ": " + languages[item]);
    }
}

let filterArray = arr.filter((item)=>{
    return item%2==0;
})
console.log("using filter",filterArray)
let mapArray = arr.map((item)=>{
    return item%2==0
})
console.log("using map",mapArray)

let numbers = [13,4,5,[56,7,[7,8,9,[9,0]]]]
// it flattening a nested array up to the specified depth [ 13, 4, 5, 56, 7, 7, 8, 9, [ 9, 0 ] ]
let flattenArray = numbers.flat(2) 
console.log(flattenArray)

const res = [1,2,3,6,8][1,4] // the last value of second array is consider as index and it returns the value of first array at that particular index
console.log("res",res)

let i=0;
while(i<arr.length){
    console.log("Using While Loop",arr[i])
    i++;
}


const printNumber = (num) =>{
        for (value in num){
            console.log("using instance",value)
            // return value;
        }
}
console.log(printNumber(arr)) // it gives 0 by using return in printNumber arrow function
printNumber(arr)