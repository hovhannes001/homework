// console.log("Hello world");

// let book = {
//     type: "javascript",
//     version: "v8"
// }

// console.log(book.type);
// book["version"] = "v9";

// console.log(book);
// console.log(book.version);

// console.log("\narrays");
// let primes = [1,2,3,4,5];

// for(let i = 0; i < primes.length; i++){
//     console.log(`prime[${i}] = ${primes[i]}`);
// }

// primes[-11] = 6;
// console.log("\nafter adding element");

// for(let i = 0; i < primes.length; i++){
//     console.log(`prime[${i}] = ${primes[i]}`);
// }

// console.log("\n\tfunctions");

// let plus = function(x,y){
//     return x + y;
// }

// console.log(plus(134,56));

// function square(x) {
//     return x **(1/2);
// }

// console.log(square(16));

// const power = (x,y) => x ** y;

// console.log(power(3,3));



// let arr0 = [];

// arr0.push(1,2,3);

// arr0.pop()

// console.log(arr0);

// function prob(){
//     return
//     true;
// }

// console.log(prob());

// let num  = 1_655_345
// console.log(.3333333);

// console.log(num);

// console.log(1/0);

// console.log(-1/0);

// console.log(0/0);

// console.log(-1/Infinity);

// let num1 = true;
// let num2 = 12.34;
// let num3;
// let num4 = null;
// let num5 = BigInt(1_000_000_000)
// console.log(num1.toString(), typeof num1.toString());
// console.log(num2.toString(), typeof num2.toString());
// console.log((typeof num3).toString());
// console.log((typeof num4).toString());
// console.log(num5.toString(), typeof num5.toString());

// let symname = Symbol("arr");

// console.log(symname, typeof symname, );

// const obj = {
//     [symname] : 10,
//     [symname] : 20

// }

// [symname] = 20;

// // console.log(obj)

// console.log("\t\v continue\n");

// const geval = eval;
// let x = "global";
// y = "global";

// function f() {
//     let x = "local";
//     eval("x += 'changed';");
//     return x;
// }

// function g() {
//     let y = "local";
//     geval("y += 'changed';");
//     return y;
// }

// console.log(f(), x);
// console.log(g(), y);


// label:
//     // console.log("jump");
// for (let i = 0;i < 10;i++){
//     if (i == 5) {
//         continue label;
//     }
//     console.log(i);
// }

// console.log("\t\vwith\n");

// const person = {
//     name: "Valod",
//     surname: "James",
//     age: 12
// }

// with (person){
//     console.log(name);
//     console.log(surname);
//     console.log(age);
// }
// let set = new Set([1, 2, 3, 4, 1]);
// console.log(typeof set); // Output: "object"

// console.log(set.entries());

// Define the object
// const obj = {
//     name: "TestObject",
//     regularFunc: function () {
//       console.log("regularFunc this:", this);
//     },
//     arrowFunc: () => {
//       console.log("arrowFunc this:", this);
//     }
//   };
  
  
//   console.log("Global this:", this);
  

//   obj.regularFunc(); 
//   obj.arrowFunc();   
  
//regular functioni jamanak this@ objn e qani vor haytararvel e henc objecti mej
//arrow functionneri jamanak this@ voroshvum e aytnex vortex kanchvel e

// m = 10;
// console.log(typeof m);  
// let point = {
//   x: 1100000000,
//   y: 2000,
//   toString: function() { return `(${this.x}, ${this.y})`; },
//   toLocaleString: function() {
//   return `(${this.x.toLocaleString()}, ${this.y.toLocaleString()})`;
//   }
//   };
//   console.log(point.toString());
//   console.log(point.toLocaleString());

//kayfot havayi function
// (1100000000, 2000)
// (1,100,000,000, 2,000)
// let aq = [1,2,3,4,5]

// function a(elem){
//   return  elem %2 === 0? true : false;
// }
// console.log(aq.filter(a));
// a = [];
// a[-1.23] = true;
// a["1000"] = 0;
// a[1.000] = 1;

// console.log(a);
// for(let i of a){
//   console.log(i);
// }
// let a = [1,1,1];
// // delete a[2];
// // a now has no element at index 2
// console.log(2 in a)
// // => false: no array index 2 is defined
// // a.length
// let letters = "hello world";
// let vowels = "";
// for(let i = 0; i < letters.length; i++) {
// let letter = letters[i];
// if (/[aeiou]/.test(letter)) {   //regular expression
// vowels += letter;
// }
// }
// console.log(vowels); 

// let a = [1,2,3,4,5];
// console.log(a.findIndex(x => x === 3));
// console.log(a.findIndex(x => x < 0));
// console.log(a.find(x => x % 5 === 0));
// console.log(a.find(x => x % 7 === 0));
// => 2; the value 3 appears at index 2
// => -1; no negative numbers in the array
// => 5: this is a multiple of 5

// let a = [1,2,3,4,5];
// console.log(a.every(x => x < 10));
// // => true: all values are < 10.
// console.log(a.every(x => x % 2 === 0));

// console.log([1, [2, 3]].flat())
// console.log([1, [2, [3]]].flat());
// => [1, 2, 3]
// => [1, 2, [3]]

// let a = [1,true,3,NaN];
// console.log(a.includes(true));
// console.log(a.includes(2));
// console.log(a.includes(NaN));
// console.log(a.indexOf(NaN));

// function max(first=-Infinity, ...rest) {
//     let maxValue = first; // Start by assuming the first arg is biggest
//     // Then loop through the rest of the arguments, looking for bigger
//     console.log(typeof rest, rest);
//     // Return the biggest
//     return maxValue;
//     }

// max(1,2,3,4);

// function max(x) {
//     let maxValue = -Infinity;
//     // Loop through the arguments, looking for, and remembering, the biggest.
//     console.log(typeof arguments,arguments);
//     for(let i = 0; i < arguments.length; i++) {
//         if (arguments[i] > maxValue) maxValue = arguments[i];
//     }
//     console.log(max.name);
//     // Return the biggest
//     return maxValue;
//     }
//     console.log(max(1, 10, 100, 2, 3, 1000, 4, 5, 6));
//     // => 1000

// let scope = "global scope";
// function checkscope() {
// let scope = "local scope";
// function f() { return scope; }
// return f;
// }
// let s = console.log(checkscope()());

// function counter() {
//     let n = 0;
//     return {
//     count: function() { return n++; },
//     reset: function() { n = 0; }
//     };
//     }
// let c = counter(), d = counter();
// console.log(c.count());
// console.log(d.count());
// c.reset();
// console.log(c.count());
// console.log(d.count());

// function x(){
//     console.log(this);
// }
// this.val = "hello";
// let y = () => console.log(this);
// y();
// // console.log(val);
// globalThis.val = "grno";
// x();

// class Counter{
//     constructor(){
//         this.count = 0;
//     }
//     increment(){
//         this.count++;
//         console.log(this.count);
//     }
// }
// let counter = new Counter();
// setTimeout(counter.increment,1000);

// console.log(NaN + 1);
// // console.log(undefined++);
// // console.log(undefined++);

// async function foo(){
//     let response = await fetch("https://jsonplaceholder.typicode.com/posts");

//     let a = await response.json();

//     let filtered = a.filter((elem) => {
//         if (elem.id > 10) {
//             return true;
//         }
//         return false;
//     });

//     console.log(filtered);
// }

// foo();

// var b = 11;
// a = 10;
// console.log(globalThis);
// console.log(this);
// console.log(module);
// console.log(global);
// this = global;
// console.log(this);

// function foo() {
//     console.log( this.a );
//     }
//     function doFoo(fn) {
//     // `fn` is just another reference to `foo`
//     fn(); // <-- call-site!
//     }
//     var obj = {
//     a: 2,
//     foo: foo
//     };

// var a = "oops, global"; // `a` also property on global object
// doFoo( obj.foo );
// b = 10;
// console.log(Object.keys(global));
// // console.log(global)
// "use strict";
// let myobj = {};


// Object.defineProperty(myobj,"a",{
//     value: 10,
//     enumerable: false,
//     writable: true,
//     configurable: false
// });
// myobj.b =4
// console.log(myobj);
// console.log(Object.getOwnPropertyNames(myobj));


// Something = {
//     cool: function() {
//         this.greeting = "Hello World";
//         this.count = this.count ? this.count + 1 : 1;
//     }
// };
// Something.cool();
// console.log(Something.greeting); // "Hello World"
// console.log(Something.count); // 1
// Another = {
//     cool: function() {
//     // implicit mixin of `Something` to `Another`
//         Something.cool.call(this);
//     }
// // };
// // Another.cool();
// // console.log(Another.greeting); // "Hello World"
// // console.log(Another.count); // 1 (not shared state with `Something`)

// let error = "Global Error";

// try {
//     throw new Error("Local Error");
// } catch (error) {
//     error.message = "Modified Error";
// }

// console.log(error);


// console.log("4" == 4);
// console.log(Boolean(4));
// console.log(4 == true);
// console.log(2 * "F" == NaN);

// console.log("\t\n\v ");
// class Test {
//     static #priv = 12;
//     #size = 12;
//     static foo() {
// //       Test.#priv = 14;
// //       return Test.#priv;
// //     }
// //   }
// //   let t = new Test();
// //   console.log(Test.foo());

// //   console.log("\t\n\v ");
  

// const person = {
//     name: "John",
//     surname: "Smith",
//     get fullName() {
//         return `${this.name} ${this.surname}`;
//     },
//     set fullName(fullName) {
//         [this.name, this.surname] = fullName.split(' ');
//     }
// };
// const user = Object.create(person, {
//     name: {
//         value: 'Mike',
//     }
// });
// const admin = Object.create(user, {
//     isAdmin: {
//         value: true,
//         writable: true,
//         enumerable: true,
//         configurable: true
//     }
// });
// for (const key in admin) {
//     console.log(key,admin[key]);

// }
// console.log("\t\n\v");
// console.log(person);
// console.log(user);
// console.log(admin   );
// console.log("\t\n\v ");


console.log(1)
setTimeout(() => {
    console.log(2)
    Promise.resolve().then(() => console.log(3))
}, 0);

Promise.resolve().then(() => console.log(4));
console.log(5);
setTimeout(() => console.log(6),0);