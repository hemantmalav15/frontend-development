/**
 *  Operators in JS
 * 
 * 1. Arithmetic Operators
 *    - Addition (a + b)
 *    - Subtraction (a - b)
 *    - Multiplicatio (a * b)
 *    - Division (a / b)
 *    - Modulo (a % b)
 *    - Exponentiation (a^b -> a**b)
 *    - Increment (a++)
 *    - Decrement (a--)
 * 
 * 2. Assignment Operator
 *    =, +=, -=, *=, /= etc.
 * 
 * 3. Comparison Operators
 *    - Equal to ==
 *    - Not Equal !=
 *    - Equal value and type ===
 *    - Both value and type not equal !==
 *    - Greater than >
 *    - Less than <
 *    - Greater than equal >=
 *    - Less than equal <=
 *    - Ternary ?
 * 
 * 4. Logical Operators
 *    - logical AND -> &&
 *    - logical OR -> ||
 *    - logical NOT -> !
 */
let a = 2;
let b = "2";
console.log("a == b: " , a == b) // returns true bcoz it only checks value and values are same
console.log("a != b: " , a != b) // returns false bcoz it only checks value and values are same
console.log("a !== b: " , a !== b) // returns true bcoz it checks value as well as type and type is different
console.log("a === b: " , a === b); // false

console.log("a power b: ", 2 ** 3); // it is 2^3 = 8

/**
 * Conditional Expression in JavaScript
 *  - if else 
 *  - if else if else
 * 
 */
// In this we will learn about if-else Statment
let x = -10;

if (x === 10) {
  console.log("number is equal to 10");
} else if (x === 20) {
  console.log("number is equal to 20");
} else {
  console.log("number is not in range");
}

// (return true bcoz == only checks the values)
console.log(12 == "12"); 

// (but === checks value as well as type also and here one is string another one is number) 
console.log(12 === "12"); //----------> (return false bcoz both are not equal)
console.log(12 !== "12");  //----------> (return true bcoz both are not equal)