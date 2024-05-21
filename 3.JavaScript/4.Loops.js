/* LOOPS

  -----------Syntax------------
let arr = [1, 2, 3, "hello", 45];
for (let index = 0; index < array.length; index++) {
     const element = array[index];
} 

---------while loop Syntax---------

 let i = 0;
 while (i < 10) {
     console.log(i);
     i++;
 }

 do{
    consoloe.log(i);
    i++;
 }while(i < 10);

 */

//  FOR-EACH Loop 
let arr = [1,2,3,4,5,6,7,8];

// forEach() function takes a callback function that takes (value,index) as params and
//  take element from array one by one and return to us

// ====================For Each Loop====================

// arr.forEach((value,index) => {
//   console.log(`Value at index ${index} is ${value}`);
// });

arr.forEach(function(value, idx, arr){
  // console.log(`value at index ${idx} is ${value} `)
})

// for in loop
// for (variable in object) {
//    statement
// }

// Variable Receives a string property name on each iteration
let obj = {
  firstName : "Hemant",
  lastName : "Malav",
  age : 22,
  city : "anta",
  state : "Rajasthan"
}

for (const key in obj) {
  console.log(key , typeof key);
  console.log("The " + key + " of object is " + obj[key]); // here key will be in the form of string
}

const arr3 = [3, 5, 7];
arr3.foo = "hello";

// for in gets only keys from arr or objects
for (const i in arr) {
  console.log(i);
}
// "0" "1" "2" "foo"

// for of loop takes values from arr 
for (const i of arr) {
  console.log(i);
}
// Logs: 3 5 7

// let object = {
//   a: 11,
//   b: 22,
//   c:32
// }
 // -------------- this will give us an error (Object is not Iterable)
// for (let val of object) {
//   console.log(val)
// }