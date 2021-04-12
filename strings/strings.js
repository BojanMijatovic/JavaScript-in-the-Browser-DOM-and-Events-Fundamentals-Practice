'use strict';

const airline = 'TAP Air Portugal';
const plane = 'A320';

// STRING METHODS

const index = airline.indexOf('a'); //  return index of parameter case sensitive to
// console.log(index);

const sliceAirline = airline.slice(4);
//  stings are primitive values so we can't mutate we must create new variable
// console.log(sliceAirline);

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
// console.log(replace);

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




const priceEUR = '34,7e';
const priceDollar = priceEUR.replace(',', '.').replace('e', '$');
// console.log(priceDollar);


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
// console.log(welcome.split(' '));

const [, , ...noviSad] = welcome.split(' ');
// console.log(noviSad);


//  destructing string 
const fullName = 'Alex Teddy';
const [name, lastName] = fullName.split(' ');
// console.log(name);


const capitalizeName = function(name) {
    const splitName = name.split(' ');
    const [firstName, ...lastName] = splitName;
    return console.log(firstName[0].toUpperCase() + firstName.slice(1));
}

// capitalizeName('andrew smith');
// capitalizeName('ana smith');
// capitalizeName('ted jonas');


//      PADDING  METHOD

const message = 'Here is message';

//  padStart 
//  padEnd 

const paddingMessage = message.padStart(22, '+');
// console.log(paddingMessage);

const maskingCreditCard = function(card) {
    const cardStr = card + '';
    const lastNumbers = cardStr.slice(-4);
    return console.log(lastNumbers.padStart(cardStr.length, '*'));
}

// maskingCreditCard('4644666');
// maskingCreditCard('123465789');
// maskingCreditCard('46486544444');


//  repeat method

const repeatMethod = function(message) {
    const newM = message.repeat(2)
    return newM;
}

// console.log(repeatMethod('This is test \n'));

/*
underscore_case
first_name
Some_Variable
calculate_AGE
delayed_departure


Should produce this output (5 separate console.log outputs):
underscoreCase ✅
firstName ✅✅
someVariable ✅✅✅
calculateAge ✅✅✅✅
delayedDeparture ✅✅✅✅✅
*/



const practice = function(underScore) {
    const arr = [];
    const score = underScore.split('_');
    const [firstW, secondW] = [...score]
    const n = secondW[0].toUpperCase() + secondW.toLowerCase().slice(1);
    const end = [firstW.toLowerCase(), ...n].toString();
    const newEnd = end.replaceAll(',', '');
    arr.push(newEnd);

    for (const i of arr) {
        const newI = i.slice(0);
        const paddingNewI = newI.padEnd(newI.length + 1, '+')
        return console.log(paddingNewI);
    }
}


// practice('ABC_ABC');
// practice('Taletn_TES');
// practice('test_test');



/*
 Example for today
  convert value with math calc to
*/

const dollar = 1;

const converter = function(money) {
    if (money === 'eur') {
        const value = dollar * 0.83
        return console.log(`Today euro is ${value} dollars`);
    } else if (money === 'gbp') {
        const value = dollar * 0.72;
        return console.log(`Today gbp is ${value} pounds`);
    }
}

converter('eur');
converter('gbp');

// ID for registration car  ED-4222; CD-7878

const carRegistration = function(symbol) {
    const num = Math.trunc(Math.random() * 10000);
    const plate = `${symbol.toUpperCase()}-${num}`
    return console.log(plate);
}

// carRegistration('eS');
// carRegistration('aa');
// carRegistration('da');
// carRegistration('tr');


const str = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia illum autem excepturi esse enim. Totam dicta ratione cupiditate dolorem!';

const workOnStr = function(str) {
    const newStr = str.trim().split('.');
    for (const sentence of newStr) {
        const newS = sentence.toLowerCase();
        if (newS.includes('quia')) {
            // return console.log(sentence.replaceAll(' ', '_'));
        }
    }
}

workOnStr(str);
const word = 'love this so much';
const reverseWord = function(str) {
        return str.split(' ').reverse().join(' ');
    }
    // console.log(reverseWord(word));


const mixUp = function(str1, str2) {
    const w1 = str1.slice(0, 2);
    const w2 = str2.slice(0, 2);
    const words = [w2.concat(...str1), w1.concat(...str2)];
    return words.toString();
}

console.log(mixUp('mix', 'pod'));
//'pox mid'