"use strict"

function sum(a, b){
    // Without any identifier (var, let or const) there is
    // ReferenceError: add is not defined
    add = a + b;
    console.log(add);
}

// There is an SyntaxError: Duplicate parameter name not allowed in this context
function minus(a, a){
    var sub = a - 10;
    console.log(sub);
}

sum(10, 20);
minus(10, 20);