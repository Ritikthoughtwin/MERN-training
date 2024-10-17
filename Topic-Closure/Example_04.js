function counter() {

    let count = 12;

    const increment=()=> {
        count++;
        console.log("count value : ", count);
    }

    function decrement() {
        count--;
        console.log("count value : ", count);
    }

    function reset() {
        count = 0;
        console.log("count value : ", count);
    }

    return (
        {
            increment: increment,
            decrement: decrement,
            reset: reset
        }
    )
}

let outerReturn = counter();
outerReturn.increment();
outerReturn.decrement();
outerReturn.reset();
