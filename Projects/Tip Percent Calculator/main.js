'use strict';

const amount = document.getElementById('amount');
const percent = document.getElementById('percent');
const tip = document.getElementById('tip');
const total = document.querySelector('.total');

const btnCalc = document.querySelector('.btn');

btnCalc.addEventListener('click', function(e) {
    console.log(amount.value, percent.value);

    const tipAmount = (amount.value / 100) * percent.value;
    tip.textContent = `Your tip is ${tipAmount}$`;

    const totalAmount = parseInt(amount.value) + tipAmount;
    total.textContent = `Total is ${totalAmount}$`
})