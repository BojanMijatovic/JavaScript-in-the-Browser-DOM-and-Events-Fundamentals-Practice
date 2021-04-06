'use strict';

const poundValue = document.getElementById('pounds');
const convertBtn = document.querySelector('.btn');
const converterResult = document.querySelector('.converter');

convertBtn.addEventListener('click', function() {
    const kg = parseInt(poundValue.value) * 0.453;
    converterResult.textContent = `Value in s ${kg} kg`;
})