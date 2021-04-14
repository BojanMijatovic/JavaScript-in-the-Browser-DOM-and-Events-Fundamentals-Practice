'use strict';

// IIFE
// const run = function() {
//     console.log(`Test`);
// }();

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
// booker();


let f = undefined;

const g = function() {
    let test = 1;
    f = function() {
        console.log(test++);
    }
    return f;
}

// g();
// f();
// f();
// f();


(function() {
    const header = document.querySelector('h1');
    header.style.color = 'red';
    document.body.addEventListener('click', function() {
        // console.log(this);
        header.style.color = 'blue';
    })
}())


//      BIND METHOD

const person = {
    name: 'Ted',
    greet(lastName) {
        console.log(`Welcome ${this.name} ${lastName}`);
    }
}

// person.greet('Feeing');


const user = {
    name: 'Alex'
}

const newUser = {
    name: 'Scot'
}

const greetUser = person.greet.bind(user);
const welcome = person.greet.bind(newUser);


// welcome('Wood');
// greetUser('Redd');



//  example 1

const data = [];

const userName = function(user) {
    const [name, lastName] = user.split('|')
    data.push({ name: name, lastName: lastName })
    console.log(`User name is ${name} and password is ${lastName}`);
}

console.log(data);

userName('pera|peric')
userName('marko|markovic')



//  example 2

const calcStr = function(str1, str2) {
    const firstStr = str1.slice(0, 2) + str1.slice(0, 2);
    const secondStr = str2.slice(-3);
    return console.log(`${firstStr}${secondStr}`);

}

calcStr('abcdef', 'ghijkl')



//  example 3

const acronym = function(str) {
    const split = str.split(' ');
    let newStr = ''
    for (const word of split) {
        newStr += word[0].toUpperCase();
    }
    console.log(newStr);
}

acronym('random access memory');



//  example 4

const car = {
    mark: 'Ford',
    model: 'Focus',
    turnOn: false,
    power: 120,
    color: 'green',
    startEngine() {
        const start = this.turnOn = true;
        return console.log(start);
    },
    stopEngine() {
        const stop = this.turnOn = false;
        return console.log(stop);
    },
    newColor(color) {
        this.color = color;
        return console.log(`${this.mark} have new color ${this.color}`);
    }
}

// car.newColor('blue');
// car.newColor('black');
// console.log(car);



// example 5

const showMessage = function(name) {
    return `Happy b-day ${name}`;
}

//  callback 
const sendCard = function(message, name) {
    return console.log(message(name));
}

sendCard(showMessage, 'Alex');



//  example 6

const sayHello = function(name, lastName, gender) {
    if (gender === 'man') {
        gender = 'Mr.'
    } else {
        gender = 'Mrs.'
    }
    return `Hello ${gender} ${name} ${lastName} you are welcome.`;
}

//  callback 
const welcomeMessage = function(message, userName, userLastName, gender) {
    return console.log(message(userName, userLastName, gender));
}

welcomeMessage(sayHello, 'Alex', 'Robinson', 'man')



//  example 7

const names = ['Ted', 'Roy', 'Gary'];

const showNames = function(names) {
    let num = 1;
    for (const name of names) {
        console.log(`${num++} ${name}`);
    }
}

showNames(names)