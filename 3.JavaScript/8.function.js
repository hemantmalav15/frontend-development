// function printValue(a,b,c){
//     return (a*10 + b*20 + c*30)/10;
// }

// let ans = printValue(10,20,30);
// console.log(ans);

// let ans = printValue(10,20); here we have put only 2 parameters that is for (a) and (b) for (c)it will take
// Undefined and calculation se pure result bekar ho jayega or ans hume NaN ---> (Not a Number) milega.

// so to resolve this we can give default parameter

// this is how we can put default parameter 
function printValue(a, b, c = 10) {
    return (a * 10 + b * 20 + c * 30) / 10;
}
// ------> agar hum (c) ko koi value ni denge tb (c) ki default value (10) li jayegi <---------
// console.log(printValue(5,5,10));

function findAvg(arr = []) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum, arr.length);
    return sum / arr.length;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 78, 10];
// console.log(findAvg(arr));
// console.log(findAvg());


// ----------Scopping--------

// This is known as block and (a and b) are global variables
let a = 10;
let b = 30;
{
    // -------- (a) and (b) are global variables and global variables have global scope-------------
    //  Means unhe hum is block ke andar or bahar dono jagah use kar sakte hai
    let a = 20;
    let c = 40;
    // console.log(a);
    // console.log(b);
}
// console.log(a);
// But (c) has block level scope bcoz (c) is defined inside a block so we can't access it from outside of that block
// console.log(c);

//--------------Anonymous function------->(function without name is known as anonymous function)
let addTwoNumbers = function (firstNum, secondNum) {
    return firstNum + secondNum;
}
// console.log(addTwoNumbers(3, 4));

//```````====================== { Arrow functions }=============================````````

// this is our normal function
function add(firstNumber, secondNumber){
    return firstNumber + secondNumber;
}
// console.log(add(4, 6));

// just remove the function keyword and function name and add fat arrow 
let res = (a, b) => {
    return a + b;
}
// console.log(res(3, 5));

// we can do even more shorter the function when we have a single line of return statement like this
let ans = (a, b) => a + b;