document.addEventListener("DOMContentLoaded", function(){

// when pressing a key on document it prints that key onto the console
// document.addEventListener("keypress", function(e){
//     console.log(e.key)
// })

// when pressing a key 3 event happens 
// 1. keydown
// 2. keypress
// 3. keyup
document.addEventListener("keydown", function(e){
    console.log(e.key)
    console.log("keydown event happens");
})

document.addEventListener("keypress", function(e){
    console.log(e.key)
    console.log("keypress event happens");
})
document.addEventListener("keyup", function(e){
    console.log(e.key)
    console.log("keyup event happens");
})

// let's perform some events on input

let input = document.getElementById("username");
input.addEventListener("focus", function(){
    input.style.backgroundColor = "silver"
    console.log("focus event happens");
})
input.addEventListener("blur", function(){
    input.style.backgroundColor = "white"
    console.log("blur event happens");
})

// add styling using event listners -> (when clicking on start button background color of body will be change to black and text color will change to black)
document.getElementById("start").addEventListener("click", function(){
    document.body.style.backgroundColor = "black"
    document.body.style.color = "white"
})
document.getElementById("stop").addEventListener("click", function(){
    document.body.style.backgroundColor = "white"
    document.body.style.color = "black"
})

// bubbling ->(when we add click event to inner box it is also applied to the outer box if we not clicked that, it is becoz of nesting elements)

// this is event bubbling i.e event bubbling from child to parent
document.getElementById("subchild").addEventListener("click",function(e){
    console.log("subchild is clicked");
    // when we use stopPropagation() it stops the event to propagate to the upper level
    e.stopPropagation();
})

document.getElementById("child").addEventListener("click",function(){
    console.log("child is clicked");
})

document.querySelector(".parent").addEventListener("click",function(){
    console.log("parent is clicked");
}, true)

// Event bubbling happens from child to parent but (Capturing -> happens from parent to child, for this we have to pass third parameter as true in all boxes)
});