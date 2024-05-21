let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let arr2 = [1,"hello",true,null];  // arr can contain anything in javaScript

let arr3 = [];    // we can put values like this also
arr3[0] = 1;
arr3[2] = 3;
arr3[3] = 4;
arr3[5] = [1, 2, 3];

// console.log(arr3); // [ 1, <1 empty item>, 3, 4, <1 empty item>, [ 1, 2, 3 ] ]

// push -> addLast
// pop -> removeLast

// unshift -> addFirst
// shift -> removeFirst

// arr.unshift(20);
// arr.shift();

// --------> splice() method will remove 5 elements starting from index 2 
// it modify the actual array 
let a = arr.splice(2, 5);
// console.log(arr);
// console.log(a);

// console.log(arr); 

// it create a slice of elements from idx 2 to idx 5 [2, 5) ## idx 2 inculded idx 5 excluded
// it returns a copy of arr elements does not modify the actual arr
let newarr = arr.slice(2, 5);
// console.log(newarr);

// let a = arr.concat(arr2); // it does not modify the current arr instead creates a new array
// console.log(a);

// ----------- Concat -> concats 2 or more arrays and returns new array -----------
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
arr3 = [7, 8, 9];

let newArr = arr1.concat(arr2, arr3);
// console.log(newArr);

const fruits = ["apple", "banana", "orange"];
// console.log(fruits.includes("apple")); // true
// console.log(fruits.includes("grape")); // false

//--------- forEach(): This method executes a provided function once for each element in the array.-------------
fruits.forEach(function (value, index, arr) {
    // arr[index] = index + 1;
})
// console.log(fruits);

// -------------------Map(), filter(), Reduce()--------------
// map(): This method creates a new array with the results of calling a provided function on every element in the array.
arr = [1, 2, 3, 4, 5, 6, 7, 8];
newArr = arr.map((value, index, arr) => {
    return value * value;
})
// console.log(newArr);

// filter(): This method creates a new array with all elements that pass the test implemented by the provided function.
const numbers = [1, 2, 3, 4];
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // [2, 4]

// reduce(): This method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single output value.
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 10