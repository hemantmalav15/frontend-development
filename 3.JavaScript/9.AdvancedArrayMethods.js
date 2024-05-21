// Arrow function
// const myFun = (a,b) => {
//     console.log(a * b);
// }
// myFun(2,4);

//==================Find() Method=============
// find method iterate over the array and used to find.
//The find() method returns the value of the first element that passes a test.

let arr = [2,3,10,18,20];
function checkAge(age){
    return age > 10;
}
// it returns (18) as output
// console.log(arr.find(checkAge));

//find method iterate over the array
// it finds only first element
arr.find((value, index) => {
    // console.log("Value at index " + index + " is " + value);
    // return value;
});


// ====================== every() function===================
//The every() method returns true if the function returns true for all elements.
//The every() method returns false if the function returns false for one element

let res = arr.every((value,index) =>{
    return value > 10;
});
// console.log(res);

//======================some() function====================
// The some() method returns true (and stops) if the function returns true for one of the array elements.
let result = arr.some((value,index) => {
    // console.log(value);
    return value >= 10;
});
// console.log(result);

// for each doesnt return any value if we want to get element in new array we should use map function
// it does not return new array it only performs some action on elements that we provide in callback fun
let a = arr.forEach((value,index) => {
    // console.log(value * 20);
    return value;
});
// console.log(a);

//=========================map() function==================
//map() creates a new array from calling a function for every array element.

let newArr = arr.map((value,index) => {
    return value * 10;
})
console.log(newArr);
console.log(arr);

//  ====================filter() method======================

//The filter() method creates a new array filled with elements that pass a test provided by a function.
let ans = arr.filter((value,index) =>{
    return value >= 10;
});
// console.log(ans);

// ================== reduce() method=========================

// it does not create a new array instead it returns the last value after performing operation on array
// arr = [ 2, 3, 10, 18, 20 ]
// in starting prevVal = 2, currVal = 3 and in next call prevVal = 5, currVal = 10
// return val of reduce fun becomes prev val in next iteration
let nres = arr.reduce((prevVal, currVal, currIdx, arr) =>{
    console.log(`previous value is ${prevVal} and curr value is ${currVal}`);
    return prevVal + currVal;
});

// console.log(nres);

// if we pass the initial value then it start iterating from 0th idx O/W it starts from 1st idx
[15, 16, 17, 18, 19].reduce((accumulator, currentValue) => (accumulator + currentValue), 10);
//               accumulator	currentValue	index	Return value
// First call	    10	          15	          0     	25
// Second call	    25	          16	          1     	41
// Third call	    41	          17	          2     	58
// Fourth call	    58	          18	          3     	76
// Fifth call	    76	          19	          4     	95
// The value returned by reduce() in this case would be 95.
