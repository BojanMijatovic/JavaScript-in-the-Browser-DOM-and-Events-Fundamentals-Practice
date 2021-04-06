'use strict';

const number = document.querySelector('.number');
const addBtn = document.querySelector('.add');
const removeBtn = document.querySelector('.remove');

let count = 1;

addBtn.addEventListener('click', function() {
    console.log(count);
    number.textContent = count++;

    if (count > 4) {
        document.body.style.backgroundColor = 'teal'
        document.body.textContent = 'Num is bigger from 4';
    }
})

removeBtn.addEventListener('click', function() {
    number.textContent = count--;
    if (count < 4) {
        document.body.style.backgroundColor = 'red'
    }
})