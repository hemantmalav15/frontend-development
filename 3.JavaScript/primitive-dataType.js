// JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with
//  any particular value type, and any variable can be assigned (and re-assigned) values of all types:

//Primitive data types: The predefined data types provided by JavaScript language are known as primitive data types.
//Primitive data types are also known as in-built data types.
    //  1.null
    //  2.undefined
    //  3.number
    //  4.boolean
    //  5.Big-Int
    //  6.string
    //  7.symbol
let a;
console.log(a);

a = 10; 
console.log("variable contains" ,a);

a = "I am a string";
console.log("variable contains" ,a);

a = 'I am also a String';
console.log("variable contains" ,a);

// for loop
let number = 10;
for(let i = 1; i <= number; i++){
    console.log(i);
}

// Prime check
number = 23; // we can reinitialise a number again as we can do in most of the programmming langauges
let flag = true;
for(let i = 2; i < number; i++){
    if(number%2 == 0){
        flag = false;
        break;
    }
}
if(flag == true){
    console.log(number,"is prime");
}else{
    console.log(number,"is not prime");
}