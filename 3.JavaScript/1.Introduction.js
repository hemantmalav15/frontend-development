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
    // console.log(a) // output -> hello
}
// console.log(a) // output -> hello

// let and const is block scoped
let b = 10;
{
    let b = "hemant";
    // console.log(b); // output -> hemant
}
// console.log(b); // output -> 10

// 'const' declarations must be initialized.
// const c; we cannot write like this, we have to initialize it first

const PI = 3.14;
// console.log(PI);

// var y;
// console.log(y); -> undefined

// let z;
// console.log(z); -> undefined


// const a; //we cannot use like this we have to initialise const at declaration time
let y = 3;

// OBJECTS
// 1.Object using object literal
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
    "hair":"black"
}

// console.log(person);

const x = person;
x.age = 10;      // Will change both x.age and person.age
// console.log(x.age);
// console.log(person.age);

// Object using new KeyWord
const obj = new Object();
obj.firstName = "John";
obj.lastName = "Doe"
obj.age = 50
obj.eyeColor = "blue";

// console.log("firstName of person is " , obj["firstName"] ," and last name is "+obj["lastName"] );
let myObj = {
    name:"John",
    age:30,
    cars: {
      car1:"Ford",
      car2:"BMW",
      car3:"Fiat"
    }
}
  console.log(myObj);
// console.log(myObj["cars"].car2);
// console.log(myObj.cars["car2"]);
// console.log(myObj.cars.car2);
// console.log(myObj["cars"]["car2"]);

// BACKTICKS
let firstName = "hemant";
let lastName = "malav";

// console.log(`my name is ${firstName}${lastName}`);
// console.log(`my name is ${firstName}   ${lastName}`);