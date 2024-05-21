// A callback is a function that can be passed to another function as an argument

// function calculator(add, sub, mul, div){
    // console.log(add(2,4));
    // console.log(mul(3,4));
    // console.log(sub(2,4));
    // console.log(div(2,4));
// }

// function addition(a, b){
//     return (a + b);
// }
// function subtract(a, b){
//     return (a - b);
// }
// function multiply(a, b){
//     return (a * b);
// }
// function divide(a, b){
//     return (a / b);
// }

// calculator(addition,subtract,multiply,divide);

// function printName(callbackFunction){
//     console.log("Hello im inside the normal function");
//     callbackFunction("hey, I'm inside the callback function");
// }

// function sayHello(text){
//     console.log(text);
// }
// printName(sayHello);
var a = 5;
console.log(this);
let person = {
    firstName : "hemant",
    lastName : "malav",
    getName : function(){
        console.log(this);
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

person.getName();