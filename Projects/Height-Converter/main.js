const feetValue = document.querySelector('#feet').value;
/*
  get value with querySelector #ID-of-ELEMENT
*/
const inchesValue = document.getElementById('inches').value;
//   get value with getElementById  'ID-of-ELEMENT'

const scoreText = document.querySelector('.text');
//   get value with querySelector by classes  '.class-of-element'
//  text content is string and we can change that in this way 





//  add event listeners 
const convertBtn = document.querySelector('.btn');
//  first add type of event here is CLICK , second argument is function
// functions  is value  so we can use as arguments
convertBtn.addEventListener('click', function(e) {
    if (!feetValue && !inchesValue) {
        scoreText.textContent = `Insert real values`;
    } else {
        scoreText.textContent = `Value of inches is ${parseInt(inchesValue)} and value of feet is ${parseInt(feetValue)}`
    }

})