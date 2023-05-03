// PASS BY VALUE
let a = 10;
let b = a;

console.log("Before changing b:");
console.log("a =", a);  // output: a = 10
console.log("b =", b);  // output: b = 10

b += 5;
console.log("After changing b:");
console.log("a =", a);  // output: a = 10
console.log("b =", b);  // output: b = 15

function passByValue(num) {
  num += 10;
}

let num1 = 20;

console.log("Before calling function:");
console.log(num1);  // output: 20

console.log("After calling function:");
console.log(num1);  // output: 20

// PASS BY REFERENCE
// 
let c = {
  name: "Javascript",
  framework: "React",
};

let d = c;

console.log("Before changing d:");
console.log("c =", c);  // output: c = { name: 'Javascript', framework: 'React' }
console.log("d =", d);  // output: c = { name: 'Javascript', framework: 'React' }

d.framework = "Angular";
console.log("After changing d:");
console.log("c =", c);  // output: c = { name: 'Javascript', framework: 'Angular' }
console.log("d =", d);  // output: c = { name: 'Javascript', framework: 'Angular' }

function passByReference(obj) {
  obj.a += 10;
}

let obj = {
  a: 10,
  b: 20,
};

console.log("Before calling function:");
console.log(obj); // output: { a: 10, b: 20 }

passByReference(obj);

console.log("After calling function:");
console.log(obj); // output: { a: 20, b: 20 }