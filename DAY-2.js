// 1. What is the result of 10 + '5'?

console.log(10+'5');    // Output : 105

// 2. What is the value of x after x = 10; x += 5;?

let x=10;
x+=5;  //or x=x+5;
console.log(x);        // Output : 15

//3. What is the result of 10 - null?

console.log(10-null)    // Output : 10

//4. What is the value of x after x = 10; x *= 2;?

let x=10;
x*=2;
console.log(x);   // Output : 20

//5. What is the result of 10 / '2'?

console.log(10/'2')  // Output : 5

//6. What is the result of 10 % 3?

console.log(10%3);  // Output : 1

//7. What is the value of x after x = 10; x = x ** 2;?

let x=10;
x**=2;
console.log(x);     // Output : 100

//8. What is the result of 10 > 5 && 5 < 10?

console.log(10>5 && 5<10)    // Output : true

//9. What is the result of 10 === '10'?

console.log(10==='10');  // Output : false

//10. What is the result of null ?? 'default'?

console.log(null??'default')  // Output : default

//11. What is the result of 10 || 'default'?

console.log(10||'default')   // Output : 10

//12. What is the result of !true?

console.log(!true)  // Output : false

//13. What is the result of 10 & 5?

console.log(10&5)   // Output : 0

//14. What is the result of 10 | 5?

console.log(10|5)   // Output : 15

//15. What is the result of 10 ^ 5?

console.log(10^5);  // Output : 15

//1. What is the result of x = 10; y = ++x;? What are the values of x and y?

let x=10;
y=++x;
console.log(x)  // Output : 11
console.log(y)  // Output : 11

//2. What is the result of x = 10; y = x++;? What are the values of x and y?

let x=10;
y=x++;
console.log(x)  // Output : 11
console.log(y)  // Output : 10

//3. What is the result of x = 10; console.log(++x);?

let x=10;
console.log(++x);   // Output : 11

//4. What is the result of x = 10; console.log(x++);?

let x=10;
console.log(x++);   // Output : 10

//5. What is the result of x = 10; y = --x;? What are the values of x and y?

let x=10;
y=--x;
console.log(x)  // Output : 9
console.log(y)  // Output : 9

//6. What is the result of x = 10; y = x--;? What are the values of x and y?

let x=10;
y=x--;
console.log(x)  // Output : 10
console.log(y)  // Output : 9

// Ternary Operators:

// 1. What is the result of x = 10; y = x > 5 ? 'yes' : 'no';? What is the value of y?

let x=10;
let result=(y=x>5)? "Yes" : "No";
console.log(result);        // Output : Yes

// 2. What is the result of x = 10; y = x > 5 ? 'yes' : x > 3 ? 'maybe' : 'no';? What is the value of y?

let x=10;
let result=(y=x>5)? 'Yes' : (x>3)? 'Maybe':'No';
console.log(result)    // Output : Yes

// Optional Chaining:

// 1. What is the result of const obj = { a: { b: 'c' } }; console.log(obj?.a?.b);?

const obj= {a: { b: 'c'}}; 
console.log("Result of obj?.a?.b:", obj?.a?.b);   // Output : c

// 2. What is the result of const obj = { a: { b: 'c' } }; console.log(obj?.a?.c);?

const obj= {a: { b: 'c'}}; 
console.log(obj?.a?.c);   // Output : undefined

// 3. What is the result of const obj = { a: { b: 'c' } }; console.log(obj?.b?.c);?

const obj= {a: { b: 'c'}}; 
console.log(obj?.b?.c);    // Output : undefined

// Nullish Coalescing:

// 1. What is the result of x = null; y = x ?? 'default';? What is the value of y?

x=null;
y=x?? 'default';
console.log(y)   // Output : default

// 2. What is the result of x = undefined; y = x ?? 'default';? What is the value of y?

x=undefined;
y=x?? 'default';
console.log(y)    // Output : default

// 3. What is the result of x = 0; y = x ?? 'default';? What is the value of y?

x=0;
y=x?? 'default';
console.log(y)  // Output : 0


let x=60;
let y=60;
let z=60;
let result=(x>y && x>z) ? `${x} is a largest number`:(y>z)?`${y} is a largest number`:`${z} is a largest number`
console.log(result)     // Output : 60 is a largest number

