'use strict';

const number = document.querySelector('.number');
const submitBtn = document.querySelector('.submit');

const remainAttempt = 10;
const previousAttempt = 0;

let randomNumber = Math.trunc(Math.random() * 10) + 1;


submitBtn.addEventListener('click', function() {

    if (parseInt(number.value) === randomNumber) {
        console.log('true');

    } else if (parseInt(number.value) > randomNumber) {
        console.log(`To high`);
    } else if (parseInt(number.value) < randomNumber) {
        console.log(`To low`);
    }
})