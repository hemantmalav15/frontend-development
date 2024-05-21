/**
 * JS is Dynamic typed Language - When you declare a variable, you do not need to specify it's type
 * 
 * -----------------------Variables in JavaScript---------------
 * Variable -> variables are containers that holds some values in it of different types 
 * 1. Before ES6 only var is used to declare a variale but now we have var, let and const.
 * 2. const is used to declare a variable that will never change.
 * 3. var is a globally scoped while let and const are block scoped -> means if we declare a variable with let
 *    or const it's scope is only on that block it is not accessible outside that block.
 * 4. variable declared with let can be update or reinitialize but cannot redeclared.
 * 5. variable declared with const can't be reinitialized and can't be redeclared, they are constant.
 * 
 */

// var is global scoped
var a = 20;
{
    var a = "hello"
    console.log(a) // output -> hello
}
console.log(a) // output -> hello

// let and const is block scoped
let b = 10;
{
    let b = "hemant";
    console.log(b); // output -> hemant
}
console.log(b); // output -> 10

// 'const' declarations must be initialized.
// const c; we cannot write like this, we have to initialize it first

const PI = 3.14;
console.log(PI);

