// document.querySelector("button").addEventListener("click", handleClick);

// function handleClick() {
//     alert("I have been clicked");
// }

// Adding evenListener to all of the buttons

// document.querySelector(".set").addEventListener("click", handleClick);

// function handleClick() {
//     alert("I have been clicked");
// }

//Adding eventListener to all buttons using a forLoop
// or let numberOfDrums = document.querySelectorAll(".drum").length;

//adding audio

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        
        // alert("I have been clicked!"); //function() is an annonymous function(), instead of a named function()

    var buttonInnerHTML = this.innerHTML;
        
    makeSound(buttonInnerHTML);
    
    buttonAnimation(buttonInnerHTML);

    });
//adding eventListener to detect keyboard strokes
document.addEventListener("keydown", function(event) { //adding doument. adds event listener to the entire page
    
    makeSound(event.key); //the function(event) tells the function makeSound(key) to output the sound via makeSound property
    //note and understand that in JS functions can be passed through (parameters)

    buttonAnimation(event.key)

});
    

function makeSound(key) {

    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
             tom2.play();
            break;
        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
             kick.play();
        break;

        default: console.log(key);
            
    }
    };
}


//Adding animation to websites via DOM
function buttonAnimation(currentKey) { //active button is found upon the current key pressed

       var activeButton = document.querySelector("." + (currentKey));

        activeButton.classList.add("pressed"); //adds the CSS class .pressed on the (currentKey) pressed.

        setTimeout(function() {
            activeButton.classList.remove("pressed");
        }, 100); //after waiting 100 m.s it will remove the class from its class list.
    }