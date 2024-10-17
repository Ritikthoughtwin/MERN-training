function outer(){
    value=34;
    function inner(){
        return value;
    }
    return inner;
}

const outerReturnValue=outer();
const innerReturnValue=outerReturnValue();

console.log("value : ",innerReturnValue);


/*......................................................................................................................................*/

const outer=()=>{
    value=22;
    const inner=()=>{
        return value;
    }
    return inner;
}

outerReturnValue =outer();
innerReturnValue =outerReturnValue();

console.log("value : ",innerReturnValue);
