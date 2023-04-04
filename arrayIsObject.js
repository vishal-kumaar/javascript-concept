let array = ["a", "b", "c"];

console.log(array); // [ 'a', 'b', 'c' ]
console.log(typeof(array)); // object

let arrayObj = {
    0 : "a",
    1 : "b",
    2 : "c",
};

console.log(arrayObj);  // { '0': 'a', '1': 'b', '2': 'c' }
console.log(typeof(arrayObj));  // object

// To check if an array is object or not
// there is an array method called isArray()

console.log(Array.isArray(array));  // true
console.log(Array.isArray(arrayObj));  // false