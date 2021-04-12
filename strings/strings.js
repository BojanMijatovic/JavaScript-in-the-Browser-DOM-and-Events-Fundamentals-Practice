'use strict';

const airline = 'TAP Air Portugal';
const plane = 'A320';

// STRING METHODS

const index = airline.indexOf('a'); //  return index of parameter case sensitive to
// console.log(index);

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

// checkSeats('11A');
// checkSeats('11C');
// checkSeats('11E');


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

// console.log(showBigPlane(boeing));
// console.log(showBigPlane(bigBoeing));
// console.log(bigBoeing.slice(-1));

const replace = [...bigBoeing.replaceAll('7', 'T')];
console.log(replace);

// ID for registration car  ED-4222; CD-7878

const passenger = 'aLEx';
const lowerPassenger = passenger.toLowerCase();

const correctPassengerName = function(name) {
    return console.log(name[0].toUpperCase() + name.toLowerCase().slice(1));
}

// correctPassengerName('tED');
// correctPassengerName('RoCKY');
// correctPassengerName('AlEX');
// correctPassengerName('maXIM');


/*
 Example for today 
  convert value with math calc to
*/

const priceEUR = '34,7e';
const priceDollar = priceEUR.replace(',', '.').replace('e', '$');
console.log(priceDollar);


// reg expression
// const test = 'tesssttt';
// const replaceTest = test.replace(/s/g, 'e');
// console.log(replaceTest);


const checkBaggage = function(items) {
    if (items.toLowerCase().includes('gun') || items.toLowerCase().includes('knife')) {
        console.log(`This is not allowed in plane`);
    } else {
        console.log(`Welcome on aboard`);
    }

}

// checkBaggage('I have laptop and knife')
// checkBaggage('I have laptop');
// checkBaggage('I have Gun');


//      SPLIT METHOD

const welcome = `welcome to Novi Sad`;
// split the value into array and every item is single value in arr
console.log(welcome.split(' '));

const [, , ...noviSad] = welcome.split(' ');
console.log(noviSad);


//  destructing string 
const fullName = 'Alex Teddy';
const [name, lastName] = fullName.split(' ');
// console.log(name);


const capitalizeName = function(name) {
    const splitName = name.split(' ');
    const [firstName, ...lastName] = splitName;
    return console.log(firstName[0].toUpperCase() + firstName.slice(1));
}

capitalizeName('andrew smith');
capitalizeName('ana smith');
capitalizeName('ted jonas');


//    Padding String

const message = 'Here is message';

const paddingMessage = message.padStart(22, '+');
console.log(paddingMessage);

const maskingCreditCard = function(card) {
    const cardStr = card + '';
    const lastNumbers = cardStr.slice(-4);
    return console.log(lastNumbers.padStart(cardStr.length, '*'));
}

maskingCreditCard('4644666');
maskingCreditCard('123465789');
maskingCreditCard('46486544444');


//  repeat method

const repeatMethod = function(message) {
    const newM = message.repeat(2)
    return newM;
}

console.log(repeatMethod('This is test \n'));