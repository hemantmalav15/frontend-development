/**
 * ***********************data-types in javascript******************
 * 
 * There are 7 (Primitive data types) in JS (NNBBSSU)
 * N -> Null
 * N -> Number
 * B -> Boolean
 * B -> BigInt
 * S -> String
 * S -> Symbol
 * U -> undefined
 * 
 * ***************Non-Premitive data types******************
 * Objects, Array are non premitive data types in JS
 * Objects are in the form of (KEY, VALUE) pair
 * Arrays are collection of data
 * 
 */

let a = null;
let b = 234;
let c = true;
let d = BigInt(25435635);
let e = "hemant";
let f = Symbol('It accepts string, number and undefined');
let g = undefined;

console.log(a, b, c, d, e, f, g);
console.log(typeof b);

// Objects in JS
const item = {
    "hemant": true,
    "asu": 67,
    "chotu": undefined,
    "ram": "good boy"
}
console.log(item["ram"]);
console.log(item.ram);