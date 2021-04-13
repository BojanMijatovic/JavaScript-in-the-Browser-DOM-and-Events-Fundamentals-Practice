'use strict';

//      Default Parameters

const bookings = []

const createBooking = function(flightNumber = 'LHZ443', numPassengers = 1, price = 180) {

    const booking = {
        flightNumber,
        numPassengers,
        price
    }
    bookings.push(booking);
    console.log(bookings);
}

// createBooking();
// createBooking();
// createBooking('SRB111', undefined, 350);


//      How Passing Arguments Works: Value vs. Reference

const flight = 'EST074';
const passenger = {
    name: 'Bojan',
    passportNumber: 95948784
};

/*
IMPORTANT

When we pass a primitive type as an argument on a function, the function makes a copy of the ORIGINAL VALUE, and works with it.

On the other hand, when we pass an object as an argument on a function, the function makes a copy of the REFERENCE that points to the place of the memory where the object is stored. This copy is a value itself, is not a reference. Because all of this, the original object can be modified from inside of a function.

- In programming languages, Arguments can be passed by value, or passed by reference

- JS has not passing by reference, only passing by value...

- So, when we pass primitive values, the function works with a value, which is a copy of the original value

- When we pass an object, the function works with a value that address to the spot where the original object is in the memory (still is not a reference)
*/


const checkIn = function(flightNumber, passenger) {
    if (passenger.passportNumber === 95948784) {
        console.log(`Check in ${passenger.name}`);
    } else {
        console.log(`Wrong number`);
    }
}

// checkIn(flight, passenger)


const oneWord = function(str) {
    return str.replace(' ', '').toLowerCase();
}

// console.log(oneWord('Love you'));

const upperFirstWord = function(str) {
    const [firstWord, ...rest] = str.split(' ');
    return console.log(firstWord[0] + firstWord.slice(1));
}


//  high order function
const transformer = function(str, fn) {
    return fn(str);
}

// console.log(transformer('test Here', oneWord));
// transformer('javaScript is best', upperFirstWord);



const sumNums = function() {
    return 2 + 2;
}

const total = 100;
//  HOF
const showTotal = function(total, sum) {
    return console.log(total + sum());
};

// showTotal(total, sumNums);


const freeRoom = 10;
const checkGuest = function(freeRoom) {
    return freeRoom - 5;
}


const password = 34124312;
const showAlarmStatus = function(status) {
    status === 'on' ? console.log(`House is locked`) : console.log(`House is open please check alarm status`);
}

const gateStatus = function(status) {
    return status === 'open' ? console.log(`Please close gate`) : console.log(`Gate is closed`);
}

//  HOF
const checkHouse = function(alarm, alarmStatus, gate, gateStatus, code) {
        if (password === code) {
            alarm(alarmStatus);
            gate(gateStatus);
        } else {
            console.log(`Wrong password`);
        }
    }
    // checkHouse(showAlarmStatus, 'of', gateStatus, 'close', 34112);


//  FOOD Restaurant

const menu = ['potato', 'beer', 'cake', 'wine'];
const menuStatus = function(item) {
    if (menu.includes(item)) {
        return console.log(`We have on menu ${item}`);
    }
}

const orderFood = function(showMenu, item) {
    let order = false;
    if (!order) {
        return showMenu(item);
    } else {
        return console.log(`We are free`);
    }
}

// orderFood(menuStatus, 'wine')



//        Functions Returning Functions

// const greet = function(greeting) {
//     return function(name) {
//         console.log(`${greeting} ${name}`);
//     }
// }

// const alex = greet('hello')('alex');
// const ted = greet('hello')('ted');

//      ARROW FUNCTION RETURNS ARROW FUNCTION
const greet = (greetings) => (name) => console.log(`${greetings} ${name}`);
// greet('Hello')('Alex');



const temperatureHouse = (deg) => {
    let turnHeater = 'off';
    if (deg < 20) {
        turnHeater = 'on';
        return console.log(`Turn ${turnHeater} heater`);
    } else {
        return console.log(`Temperature now is ${deg} and heater is ${turnHeater}`);
    }
}

// HOF
const houseStatus = (temp, deg) => {
    return temp(deg);
}

// houseStatus(temperatureHouse, 33);


//      call and apply Methods

const lufthansa = {
    name: 'lufthansa',
    bookings: [],
    itaCode: 'LH',
    book(passengerName, flightNumber) {
        console.log(`${passengerName} have seat on ${this.name} on flight ${this.itaCode} ${flightNumber}`);
        this.bookings.push({
            flight: `${this.itaCode}${flightNumber} ${this.name}`
        })
    }
}

lufthansa.book('Alex', '213');
lufthansa.book('Ted', '448');

console.log(lufthansa);

const book = lufthansa.book;

const euroWings = {
    name: 'EuroWings',
    itaCode: 'EU',
    bookings: [],
    //  add here method as OLD SOLUTION
    // book
}


// OLD SOLUTION
// euroWings.book('Simon', '111');
// console.log(euroWings);

//  new function on book FUNCTION 
// book.call(euroWings, 'Garry', '567');



//      BIND METHOD
// book.call(euroWings, 'Garry', '567');

const bookEW = book.bind(euroWings);

// const bookLH = book.bind(lufthansa, 'Ed', '767');
// bookLH();

// bookEW('Ted', '898');
// bookEW('Sarah', '232');


const test = {
    name: 'Test',
    showName() {
        console.log(this);
        return console.log(`Greet ${this.name}`);
    }
}


document.querySelector('.btn').addEventListener('click', test.showName.bind(test))

const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.20, 100));

const addTaxSrb = addTax.bind(addTax, .4);
// console.log(addTaxSrb(100));


const newTest = (rate) => (value) => value + value * rate;

// console.log(newTest(0.8)(800));