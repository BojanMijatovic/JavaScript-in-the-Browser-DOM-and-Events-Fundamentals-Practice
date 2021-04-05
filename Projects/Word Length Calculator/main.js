let word = document.querySelector('.word').value;
const wordLength = document.querySelector('.wordLength');

const btnCalc = document.querySelector('.btn');

btnCalc.addEventListener('click', function() {
    wordLength.textContent = `Word have ${word.length}`;
    if (word.length > 5) {
        document.body.style.backgroundColor = 'red';
    } else {
        document.body.style.backgroundColor = 'teal';
    }

})