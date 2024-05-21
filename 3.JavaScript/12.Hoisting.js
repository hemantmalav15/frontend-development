// ===========================Hoisting=============================
//  In JavaScript, a variable can be declared after it has been used.
// In other words; a variable can be used before it has been declared.

// Declare Your Variables At the Top !
// Hoisting is (to many developers) an unknown or overlooked behavior of JavaScript.

// If a developer doesn't understand hoisting, programs may contain bugs (errors).
// To avoid bugs, always declare all variables at the beginning of every scope.
// Since this is how JavaScript interprets the code, it is always a good rule.

// JavaScript in strict mode does not allow variables to be used if they are not declared.
// So "use strict" 

// "use strict";

// if we not use strict mode then it shows an error
x = 5;
console.log(x);