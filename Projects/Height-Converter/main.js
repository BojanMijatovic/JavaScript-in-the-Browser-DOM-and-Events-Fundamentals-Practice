let feet = document.querySelector('#feet');
/*
  get value with querySelector #ID-of-ELEMENT
*/

const scoreText = document.querySelector('.text');
//   get value with querySelector by classes  '.class-of-element'
//  text content is string and we can change that in this way 


//  add event listeners 
const convertBtn = document.querySelector('.btn');
//  first add type of event here is CLICK , second argument is function
// functions  is value  so we can use as arguments
convertBtn.addEventListener('click', function(e) {
    if (!feet.value) {
        scoreText.textContent = `Insert real values`;
    } else {
        const cm = parseInt(feet.value) * 30.48;
        scoreText.style.fontSize = '30px';
        scoreText.textContent = `The value in cm is ${cm}`;
        feet.value = '';
    }
})