'use strict';
//  arr to copy in obj below
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//      LOOPS 

// for-of LOOP
// for (const num of arr) {
//     if (num % 5 === 0) {
//         console.log(`Num is fizzbuzz`);
//     } else if (num % 3 === 0) {
//         console.log(`Num is buzz`);
//     } else if (num % 2 === 0) {
//         console.log(`Num is fizz`);
//     }
// }

//  ES6 Enhanced Object Literals  

//      Property name for object are always string
const person = {
    name: 'Alex',
    // insert arr like this
    arr,
    thingToLearn: ['html', 'css', 'js'],
    age: 34,
    position: 'junior'
}

// console.log(person);

// example for different way to select the property in an object
const obj = {
    a: 5,
    b: 8,
    c: 7,
};
const aa = 'a';
// console.log(obj.a); // most common way
// console.log(obj['a']); // have to use string inside [ ]
// console.log(obj[aa]); // be able to use variable as property name


//          LOOP with OBJECT keys and values

//  via key names on object
const names = Object.keys(obj);
const values = Object.values(obj);

for (const i of names) {
    console.log(`We have ${names.length} keys with values ${values}`);
}

//  via values on object

for (const v of values) {
    // console.log(v);
}

const keysPerson = Object.keys(person);
const valuePerson = Object.values(person);

const { thingToLearn, name, position } = person;
// console.log(`${name} have to learn ${thingToLearn}`);


const timeToLearn = function() {
    const dayTime = 12;
    const things = thingToLearn.length;
    const breaks = 2.5;
    const timeSpend = (dayTime - things) - breaks;
    return `${timeSpend}h with breaks`;
}


const days = ['mon', 'thu', 'wen', 'thr', 'fri', 'str', 'sun'];

for (const day of days) {
    if (day === 'str' || day === 'sun') {
        console.log(`${day} is for rest`);
    } else {
        console.log(`${day} is for work and learn ${timeToLearn()}`);
    }
}