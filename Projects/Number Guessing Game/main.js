'use strict';

const number = document.querySelector('.number');
const submitBtn = document.querySelector('.submit');
const previousGuess = document.querySelector('.previous-guess');
const remain = document.querySelector('.remain-guess');
const congratsValue = document.querySelector('.congrats');


let remainAttempt = 10;
let previousAttempt = 0;

let randomNumber = Math.trunc(Math.random() * 10) + 1;


submitBtn.addEventListener('click', function() {

    if (parseInt(number.value) === randomNumber) {
        console.log('true');
        congratsValue.textContent = 'Excellent!!!';
    } else if (parseInt(number.value) > randomNumber) {
        console.log(`To high`);
        remain.textContent = `You have  ${remainAttempt--} previous`;
        previousGuess.textContent = `You have  ${previousAttempt++} previous`;
        console.log(remainAttempt, previousAttempt);
    } else if (parseInt(number.value) < randomNumber) {
        console.log(`To low`);
        remain.textContent = `You have  ${remainAttempt--} previous`;
        previousGuess.textContent = `You have  ${previousAttempt++} previous`;
        console.log(remainAttempt, previousAttempt);
    }
})