'use strict';


const arr = [1, 3, 4, 5, 6, 7];
const newArr = [];

for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    newArr.push(arr[i] * 2);
}

console.log(newArr);


//  create click event
const btn = document.querySelector('button');
btn.addEventListener('click', function(e) {
    // document.body.style.backgroundColor = 'red'
    if (document.body.style.backgroundColor == 'white') {
        document.body.style.backgroundColor = 'red'
    } else {
        document.body.style.backgroundColor = 'white'
    }
})


// for (let i = 0; i < newArr.length; i++) {
//     const newP = document.createElement('p');
//     newP.textContent = newArr[i];
//     newP.style.backgroundColor = 'green';
//     newP.style.color = 'white';
//     document.body.append(newP);
// }


const numbers = document.querySelectorAll('li');

for (let i = 0; i < numbers.length; i++) {
    numbers[i].style.color = 'teal';
}


const btnChangeText = document.querySelector('#change-text');

btnChangeText.addEventListener('click', function(e) {
    document.querySelector('p').textContent = 'Here is new Text'
})


const pickNumberBtn = document.querySelector('.pick-number');
const addNumber = document.querySelector('.add-number').value;


pickNumberBtn.addEventListener('click', function(e) {
    newArr.push(addNumber)
    console.log(newArr);
})



console.log('test');