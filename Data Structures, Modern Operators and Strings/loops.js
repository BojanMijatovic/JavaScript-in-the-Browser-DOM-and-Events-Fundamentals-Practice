'use strict';

//  arr to copy in obj below
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//      LOOPS 

// for-of LOOP
for (const num of arr) {
    if (num % 5 === 0) {
        console.log(`Num is fizzbuzz`);
    } else if (num % 3 === 0) {
        console.log(`Num is buzz`);
    } else if (num % 2 === 0) {
        console.log(`Num is fizz`);
    }
}

//  ES6 Enhanced Object Literals  

//      Property name for object are always string
const person = {
    name: 'Alex',
    // insert arr like this
    arr,
    addLastName() {}
}

console.log(person);


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
for (const i of names) {
    console.log(i);
}

//  via values on object
const values = Object.values(obj);
for (const v of values) {
    console.log(v);
}