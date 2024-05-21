let promise = new Promise(function(resolve, reject){
    let x = 1;
    if(x === 0){
        resolve(" promise success");
    }
    else{
        reject(" promise rejected");
    }
})
.then(
    function(value){console.log("This is inside then block" + value);},
    // function(error){console.log(error);}
)
.catch(function(error){
    console.log("This is inside catch block" + error);
})

// function can also return promises as well Syntax for this is as follows
function heyPromise(){
    return new Promise(function(resolve, reject){
        
    })
}