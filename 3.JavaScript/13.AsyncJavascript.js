console.log("before");
// let a = 4;
// console.log(a);

function sayHello(){
    console.log("hello everyone");
}
setTimeout(sayHello, 3000);
console.log("after");

// we can also pass the full function instead function as an argument

setInterval(function(){
    const e = document.getElementById("root");

    let d = new Date();
    const time = d.getHours() + ":" +  d.getMinutes() + ":" + d.getSeconds();
    e.innerHTML = time;
}, 1000);