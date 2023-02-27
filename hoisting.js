console.log(a);
console.log(b)
var a = 10; // Output= undefined
// let b = 10; or const b = 10; // Output= ReferenceError

// -------------------------------------------------------------

run(); // Output:- running...
function run(){
    console.log("running...")
}

run(); // Output= run is not a function
var run = function (){
    console.log("running...")
}

// -------------------------------------------------------------

var a = 1;
function func(){
    console.log(a); // Output= undefined
    var a = 2;
}
func();

// -------------------------------------------------------------

var a = 1;
function func(){
    console.log(a); // Output= 1
}
func();

// -------------------------------------------------------------

{
    var h = 1; // var has a global level scope
}

console.log(h); // Output= 1