// using object literal syntax
let obj = {
    firstName : "hemant",
    lastName : "malav"
}

// using new keyword
let obj2 = new Object();
obj2.firstName = "asu";
obj2.lastName = "malav";

console.log(obj2);

// here we can creat multiple new persons
let p1 = new person();
console.log(p1);

p1.firstName = "hemant";
p1.lastName = "malav";

console.log(p1);

// -----------------------Prototypal inheritance----------------------

//  (Parent -> (name, lastName properties of parent)  
//   (child -> (name, lastname these properties are inherited from parent ))
// ----------so this is how inheritance works in most of the programming lang-----------)

