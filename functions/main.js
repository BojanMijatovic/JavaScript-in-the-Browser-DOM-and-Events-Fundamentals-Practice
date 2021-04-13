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

checkIn(flight, passenger)


const oneWord = function(str) {
    return str.replace(' ', '').toLowerCase();
}

console.log(oneWord('Love you'));

const upperFirstWord = function(str) {
    const [firstWord, ...rest] = str.split(' ');
    return console.log(firstWord[0] + firstWord.slice(1));
}


//  high order function
const transformer = function(str, fn) {
    return fn(str);
}

console.log(transformer('test Here', oneWord));
transformer('javaScript is best', upperFirstWord);