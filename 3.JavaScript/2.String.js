// indexing is 0 based
let str = "My name is hemant My";

// console.log(str[3]);
// console.log(str.indexOf("i")); // we can pass both (char and sequence of char) into this method
// console.log(str.charAt(9));

// console.log(str.startsWith("My")); //  --------> will return true
// console.log(str.startsWith("my"));  --------> will return false
// console.log(str.endsWith("hemant"));

let s = str.slice(3,6); // returns a new string from starting idx upto end idx
s = str.replace('My', 'me'); // replace only the first occurrence of given 'string' or 'char'

console.log(s); //  -----------> Same as SubString
console.log(str);

// console.log(str.replace("is","was"));