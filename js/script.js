"use strict";

const input = document.getElementById('input'), // input/output button

    number = document.querySelectorAll('.numbers div'), // number buttons
    operator = document.querySelectorAll('.operators div'), // operator buttons
    result = document.getElementById('result'), // equal button
    clear = document.getElementById('clear'); // clear button
    
let resultDisplayed = true; // flag to keep an eye on what output is displayed

// adding click handlers to number buttons
number.forEach(function(num){
    num.addEventListener('click', function() {
        input.innerHTML += this.innerHTML;
        console.log(this.innerHTML);
    });
});

// adding click handlers to the operation buttons
operator.forEach(function(operationButton){
    operationButton.addEventListener('click', function() {
        let currentString = input.innerHTML;
        let lastCharacter = input.innerHTML[input.innerHTML.length -1];
        if (lastCharacter === "+" || lastCharacter === "-" || lastCharacter === "×" || lastCharacter === "÷") {
            var newString = currentString.substring(0, currentString.length - 1) + this.innerHTML;
            input.innerHTML = newString;
        } else if (currentString.length == 0) {
            console.log("enter a number first");
        } else {
            input.innerHTML += this.innerHTML;
        }
    })
});

// on click of 'equal' button
result.addEventListener('click', function() {
    let inputString = input.innerHTML;
    const numbers = inputString.split(/\+|\-|\×|\÷/g);

});


// clearing the input on press of clear
clear.addEventListener('click', function(){
    input.innerHTML = '';
});