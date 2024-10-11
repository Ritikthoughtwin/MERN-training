function outer(x){

    function inner(y){
        console.log("X : ",x," and Y : ",y);
    }
    return inner;

}

const child=outer(12);
child(78);