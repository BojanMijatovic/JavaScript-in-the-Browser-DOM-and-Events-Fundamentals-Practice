'use strict';

// IIFE

const run = function() {
    console.log(`Test`);
}();

//  this is undefined 
// console.log(run);


//      Closures

const secureBooking = function() {
    let passengers = 0;
    return function() {
        passengers++;
        console.log(passengers);
    }
}
const booker = secureBooking();
booker();


let f = undefined;


const g = function() {
    let test = 1;
    f = function() {
        console.log(test++);
    }
    return f;
}

g();
f();
f();
f();



(function() {
    const header = document.querySelector('h1');
    header.style.color = 'red';
    document.body.addEventListener('click', function() {
        console.log(this);
        header.style.color = 'blue';
    })
}())



const person = {
    name: 'Ted',
    greet(lastName) {
        console.log(`Welcome ${this.name} ${lastName}`);
    }
}

person.greet('Feeing');


const user = {
    name: 'Alex'
}

const newUser = {
    name: 'Scot'
}

const greetUser = person.greet.bind(user);
const welcome = person.greet.bind(newUser);


welcome('Wood');
greetUser('Redd');