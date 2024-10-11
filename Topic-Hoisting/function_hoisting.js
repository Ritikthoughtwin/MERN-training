
print_hello();
function print_hello(){   //will work with regular function
    console.log("Hello");
}


print_hello();
//use let,var or const
let print_hello=function (){   //will not work
    console.log("Hello");
}


print_hello();
//use let,var or const
let print_hello=()=>{   //will not work
    console.log("Hello");
}