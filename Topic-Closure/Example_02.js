function outer(){
    value=34;
    function inner(){
        return value;
    }
    return inner;
}

const x=outer();
const y=x();

console.log("value : ",y);


/*......................................................................................................................................*/

const outer=()=>{
    value=22;
    const inner=()=>{
        return value;
    }
    return inner;
}

const x=outer();
const y=x();

console.log("value : ",y);
