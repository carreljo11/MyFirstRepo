let one= document.querySelector("#one");
let two= document.querySelector("#two");
let three= document.querySelector("#three");
let four= document.querySelector("#four");

let alertOne = one.addEventListener("click", ()=>{
    alert("This is level one");
});

let alertTwo = two.addEventListener("click", ()=>{
    confirm("Do you want to proceed to the next level?");
});

let alertThree = three.addEventListener("click", ()=>{
    prompt("Create a username to continue");
});

let alertFour = four.addEventListener("click", ()=>{
    alert("You have succesfully reached the final level. Thanks for participating");
});