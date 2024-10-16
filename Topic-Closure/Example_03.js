function outer(outerPassedValue){

    function inner(y){
        console.log("outerPassedValue : ",outerPassedValue," and innerPassedValue: ",innerPassedValue);
    }
    return inner;

}

const child=outer(12);
child(78);


/*.........................................................................................................................................*/

const outer=(outerPassedValue)=>{

    const inner=(innerPassedValue)=>{
        console.log("outerPassedValue : ",outerPassedValue," and innerPassedValue : ",innerPassedValue);
    }
    return inner;

}

const child=outer(12);
child(78);
