//what is JavaScript? 
// Javascript is single threaded, non blocking synchronus language.
//  EveryTHing in javascript is Object.


//1. Difference between “ == “ and “ === “ operators.
// Ans. "==" is know as loose equality and "===" us knows as strong equality, both return boolean value and "==" checks only value and "===" checks value as well as Data type
// for Example
// console.log( 1 === 1 );
// Expected Ans true
// console.log( 1 == "1" );
// Expected Ans true


//2. What is the spread operator?
// spred operater allow as copy an existing array and object from one array to another
// For Example :-
// const arr = [1,2,3,4];
// const arr2 = [...arr]
// console.log(arr2);
// Expected output is [1,2,3,4]

// 3. What are the differences between var, let and const?
// var is functinal scope and let an const block scope

// 4. What is execution context ?
// var x;

// function a() {
//     var y;
// }


// a();
// b();

// function a() {
// }
// var b = function() { }
// // b()


// 4. What is meant by first class functions?
// var myfunc2 = function(a)
// {
//  return a + 1;
// };

// 5. What are closures ?
//  A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).

//6. Explain call(), apply() and, bind() methods. Give an example of call(), apply(), bind()
//  call is function method which we can call other function property to an other function
// call Example  :-
// function  pare(name, lastName) {
//     this.name = name
//     this.lastName = lastName
//     this.com = "Honda"
//     this.fullname = function() {
//         console.log(`My name is ${this.name} and my lastName is ${this.lastName} my company is ${this.com}`);
//     }
// }

// function chil(name, lastName, fullname, com ) {
//     pare.call(this,name,lastName, fullname, com)
// }
// const childName = new chil("Ben", "Stokes", "Hello")
// childName.fullname()

//apply Example:-
// const per1 = {
//     name : "Rahul",
//     lastName : "KL",
//     comName :  "Honda", 
//     fullName : function(city, hobbies) {
//         console.log(`My name is ${this.name} and my lastName is ${this.lastName} and my company is ${this.comName} and my city is ${city} and my hobbies are ${hobbies}`);
//     }
// }
// const per2 = {
//     name : "Surya",
//     lastName : "Kumar" ,
//     comName : "IndiaTeam"
// }
// per1.fullName.apply(per2,["Mumbai", "Cricket"])

// Example of bind

// const per1 = {
//     name : "Rahul",
//     lastName : "KL",
//     comName :  "Honda", 
//     fullName : function(city, hobbies) {
//         console.log(`My name is ${this.name} and my lastName is ${this.lastName} and my company is ${this.comName} and my city is ${city} and my hobbies are ${hobbies}`);
//     }
// }
// const per2 = {
//     name : "Surya",
//     lastName : "Kumar" ,
//     comName : "IndiaTeam"
// }
// let a = per1.fullName.bind(per2,"Mumbai", "Cricket")
// a()

//7. What is creation phase and execution phase ?
// In the creation phase, the Execution Context is first associated with an Execution Context Object (ECO). The Execution Context Object stores a lot of important data which the code in the Execution Context uses during its run-time.

//8.What are objects in javascript?
// In JavaScript, an object is a standalone entity, with properties and type.
// example :-
// const car = {
//     name : "I20",
//     com : "Hyundai"
// }

//9. What are function constructors? 
// A constructor is a special function that creates and initializes an object instance of a class

//10. What are callbacks?
// function Pname(callback) {
//     setTimeout(() => {
//         console.log("virat");  
//         callback()      
//     }, 2000);
// }

// function lastName() {
//         console.log("Kohli");        
// }

// Pname(lastName)

//10. Explain prototypes
// every object in javascript there is built in property known as prototype
// function company() {
//     this.PerName = "Rahul"
//     this.PerSirName = "Kl"
// }
// company.prototype.company = "Honda"
// company.prototype.city = "BLR"

// let emp = new company()
// console.log(emp.PerSirName)

//11. What is prototype chain ?
// The prototype of an object would also have a prototype object. This continues until we reach the top level when there is no prototype object. This is called prototype chaining or prototype chain in JavaScript


//12. Give an example of inheritance using function constructor









//13 How many operators do we have in JS ?
//Arithmatic operater
//Example :- + - /  *

//Comparision operater
//Example :- == != >= <=

//Logical operater
//Example :- && and || and !

//Asignment operater
//Example :- = += -= *=

//Condition operater
//Example :- ?

//type operater
//Example :- typeOF()

//Bitwise operater
// Expale:- % | ~ ^

//String operater
// Example :- +

// 14. What are arrow functions?
// const fun = ()=> {
//     console.log("Hello, i am arrow function");
// }

//15. Difference between undefined vs not defined vs NaN ?
// var testVar;
// alert(testVar); //shows undefined
// alert(typeof testVar); //shows undefined


// var testVar = null;
// alert(testVar); //shows null
// alert(typeof testVar); //shows object


// null === undefined // false
// null == undefined // true
// null === null // true


// null = 'value' // ReferenceError
// undefined = 'value' // 'value'


// 16. What is callback hell?
// The phenomenon which happens when we nest multiple callbacks within a function is called a callback hell. The shape of the resulting code structure resembles a pyramid and hence callback hell is also called the “pyramid of the doom”. It makes the code very difficult to understand and maintain
// Example:- 
// function cal() {
//     console.log("Started")
//     setTimeout( ()=> {
//         console.log("1");
//         setTimeout( ()=> {
//             console.log("2");
//             setTimeout( ()=> {
//                 console.log("3");
//                 setTimeout( ()=> {
//                     console.log("4");
//                 },4000 )
//             },3000 )
//         },2000 )
//     },1000)
// }
// cal()

// 17. Please explain Self Invoking Function and its code ?
// Immediatly invoked functions Expression IIFE
// it is used to avoid polluting global name splace, 

// (function name() {
//   var a = 10;
//   console.log(a);
// }) ();

// 18. What is the use of setTimeout
// set time out is something which call function after given time

//19. Explain Local Scope, Block Scope, Functional Scope and Scope Chain in javascript ?
// function addition() {
//   {
//     var a = 10;
//     const b = 5;
//     console.log(b);
//   }
//   console.log(a);

// }
// addition();


// function f() {
//     function g() {
//         console.log(x)
//     }
//     let x = 1
//     g()
// }
// f() // 1 because x is hoisted even though declared with `let`!

// function f() {
//     var x = 1
//     let y = 1
//     const z = 1
// }
// console.log(typeof x) // undefined (because var has function scope!)
// console.log(typeof y) // undefined (because the body of the function is a block)
// console.log(typeof z) // undefined (because the body of the function is a block)

// {
//     var x = 1
//     let y = 1
//     const z = 1
// }
// console.log(x) // 1
// console.log(typeof y) // undefined because `y` has block scope
// console.log(typeof z) // undefined because `z` has block scope

// for(var x = 0; x < 5; ++x) {}
// console.log(x) // 5 (note this is outside the loop!)

// for(var x = 0; x < 5; ++x) {
//     setTimeout(() => console.log(x)) // closes over the `x` which is logically positioned at the top of the enclosing scope, above the loop
// }
// console.log(x) // note: visible outside the loop

// for(let x = 0; x < 5; ++x) {
//     setTimeout(() => console.log(x)) // `let` declarations are re-declared on a per-iteration basis, so the closures capture different variables
// }
// console.log(typeof x) // undefined

// if(false) {
//     var x = 1
// }
// console.log(x) // here, `x` has been declared, but not initialised

// for(let x = 0; x < 10; ++x) {} 
// console.log(typeof x) // undefined, because `x` is block-scoped

// if(false) {
//     let x = 1
// }
// console.log(typeof x) // undefined, because `x` is block-scoped

// // module1.js

// var x = 0
// export function f() {}

// //module2.js

// import f from 'module1.js'

// console.log(x) // throws ReferenceError


// var x = 1
// console.log(window.hasOwnProperty('x')) // true

// let x = 1
// console.log(window.hasOwnProperty('x')) // false

// function f(x) {}
// console.log(typeof x) // undefined, because `x` is scoped to the function

// try {} catch(e) {}
// console.log(typeof e) // undefined, because `e` is scoped to the catch block

// (function foo() { console.log(foo) })()
// console.log(typeof foo) // undefined, because `foo` is scoped to its own expression

// x = 1 // implicitly defined property on the global object (no "var"!)

// console.log(x) // 1
// console.log(window.hasOwnProperty('x')) // true

// 'use strict'
// {
//     function foo() {}
// }
// console.log(typeof foo) // undefined, because `foo` is block-scoped

// 20. What is difference between null and undefined ?
// var testVar;
// alert(testVar); //shows undefined
// alert(typeof testVar); //shows undefined


// var testVar = null;
// alert(testVar); //shows null
// alert(typeof testVar); //shows object


// null === undefined // false
// null == undefined // true
// null === null // true


// 21. What is an event loop and call stack ?
//Ans :- 
































