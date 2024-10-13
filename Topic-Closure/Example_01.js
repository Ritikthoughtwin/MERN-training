function parent() {
    const name = "krishnakant Thakur";
    function child() {
        console.log("Name : ", name);
    }
    child();
}

parent();

/*...................................................................................................................*/

const outer=()=>{
    value=5;
     const inner=()=>{
         console.log(value);      //using arrow function
     }
    inner();
}
outer();

    

