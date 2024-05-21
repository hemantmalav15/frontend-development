// function handleClick(){
//     alert("you have clicked the button");
// }


let btn = document.querySelector("button");
// btn.onclick = handleClick;

//-----------------Recommended way--------------------
btn.addEventListener("click", function(){
    btn.removeEventListener("click");
    alert("you have clicked the button");
})

// let start = document.getElementById("start");
// start.addEventListener("click", function(){
//     document.addEventListener("mouseover", handleMouseOver);
// });

// let stop = document.getElementById("stop");
// stop.addEventListener("click", function(){
//     document.removeEventListener("mouseover", handleMouseOver);
// });

// function handleMouseOver(event){
//     console.log(event);
// }

// ---------------------------when a key is pressed on keyboard these 3 events happens--------------------
document.addEventListener("keydown", function(e){
    if(e.key === 2){
        e.preventDefault();
    }
    console.log("key down");
})

document.addEventListener("keyup", function(e){
    if(e.key === 2){
        e.preventDefault();
    }
    console.log("key up");
    console.log(e.key);
})

document.addEventListener("keypress", function(e){
    if(e.key === 2){
        e.preventDefault();
    }
    console.log("key press");
})
// ---------------------------------------------------------------------
// focus event is happen when we click on input box
document.getElementById("username").addEventListener("focus", function(){
    console.log("focus event happend");
});

// blur event is happens when we click outside of input
document.getElementById("username").addEventListener("blur", function(){
    console.log("blur event happend");
});