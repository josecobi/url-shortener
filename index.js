// Create variables for DOM elements
const form = document.querySelector(".form");
const inputBox = document.querySelector(".urlInputBox");
const shortenBtn = document.querySelector(".shortenBtn");

// Declare a function that gets the link the user submitted
function getLongLink(){
    form.addEventListener("submit", (event) =>{
        event.preventDefault();
        console.log(inputBox.value);
        return inputBox.value;
    });
}

getLongLink();