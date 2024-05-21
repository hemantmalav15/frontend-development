// Objects -> group of -------> (key : value pair)
let person = {
    firstName : "Hemant",
    lastName : "Malav",

    print : function(){
        console.log("This is a function inside an object");
    }
}
person.print();

let obj = {
    name : "hemant",
    lastName : "malav",

    //object inside an object
    address : {
        state : "rajasthan",
        city : "Antah"
    },
    age:21,
    brothers : ["asu","hitu"],
    // we can also provide function as : value
    // key : function()
    sayhi : function(){
        console.log("hemant says hii");
    }
};
// console.log(obj);
// console.log(obj.sayhi());

// console.log("```````````````````````````````");
// Set / Update
obj.age = 20;
obj.friends = ["lokesh","vikas"];
// console.log(obj);

// console.log("```````````````````````````````");
// delete 
delete obj.sayhi;
console.log(obj);

for(let key in obj){
    // console.log("key",obj[key]);
}