// console.log("hello there");
// console.log(document.getElementById('red')); //select by id
// console.log(document.getElementsByClassName('red')); // select by class name
// console.log(document.getElementsByTagName("div")); //select by element/tag name

// let element = document.getElementsByClassName('red'); // will give us html collection
// console.log(element[0]); // this will give us 0th element of this collection

// console.log(document.getElementById('red').style.color = "blue");

// let firstDiv = document.getElementsByClassName('green');
// console.log(firstDiv);

// -----------------how to create and append child on body------------
let hobbies = ["coding", "cooking", "singing"];
let list = document.createElement("ul");

// it appends list items within uonordered list tag
for(let hobby of hobbies){
    list.innerHTML += "<li>" + hobby + "</li>"
}
document.body.appendChild(list);