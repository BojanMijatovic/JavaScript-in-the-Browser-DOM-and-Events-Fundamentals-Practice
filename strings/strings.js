'use strict';

const airline = 'TAP Air Portugal';
const plane = 'A320';

// STRING METHODS

const index = airline.indexOf('a'); //  return index of parameter case sensitive to
console.log(index);

const sliceAirline = airline.slice(4);
//  stings are primitive values so we can't mutate we must create new variable
console.log(sliceAirline);

const firstWord = airline.slice(0, airline.indexOf(' ')); // first word

const lastWord = airline.slice(airline.lastIndexOf(' ') + 1); // last word

const checkSeats = function(seat) {
    const seatLetter = seat.slice(-1);
    if (seatLetter === 'E' || seatLetter === 'B') {
        console.log(`You are on middle plane`);
    };
    console.log(`You are on boat :) `);
};

checkSeats('11A');
checkSeats('11C');
checkSeats('11E');


const showCountry = function(airCompany) {
        const country = airCompany.slice(airCompany.indexOf(' ') + 1)
        return country;
    }
    // console.log(showCountry('Air Estonia'));
    // console.log(showCountry('Air Sweden'));
    // console.log(showCountry('Air Germany'));

const boeing = 'E747';
const bigBoeing = '737B';

const showBigPlane = function(plane) {
    if (plane.includes('E')) {
        return `Plane is small`
    } else if (plane.includes('B')) {
        return `Plane is big`
    }
}

console.log(showBigPlane(boeing));
console.log(showBigPlane(bigBoeing));