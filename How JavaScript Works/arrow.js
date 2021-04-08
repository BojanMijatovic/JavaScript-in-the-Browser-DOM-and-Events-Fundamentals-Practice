'use strict';

//      Regular functions VS Arrow functions

const person = {
    firstName: 'Alex',
    year: 1987,
    calcAge() {
        console.log(2021 - this.year)
        const self = this;
        const addJob = function() {
            console.log(`${self.firstName} have new job`);
        }
        addJob();
    }
}
person.calcAge();

//  Regular functions and arguments object
const regFunction = function(a, b) {
    console.log(arguments);
    return a + b;
}

//  console.log(regFunction(4, 5));
//  console.log(regFunction(4, 5, 7));

//  arrow function don`t have arguments
//  that means we can call exactly same number arguments as parameters
const add = (a, b) => {
    // console.log(arguments);
    return console.log(a + b);
};
// add(2, 3);


//      Primitives vs. Objects
//  Primitives : string, boolean , number , undefined  , bigint, symbol and null

let age = 30;
let oldAge = age;
age = 31;

const me = {
    name: 'Ted'
}


const he = me;
he.age = 44;

console.log(he === me);
console.log(me);


let job = 'developer'; // address  in call stack example 01
let newJob = job; // address in call stack 01 too
newJob = 'senior'; // address in call stack 02

// console.log(newJob);
// console.log(job);

// let a = 4;
// let b = a + a;
// a = 10;
// b = 100;

// console.log(a, b);

// console.log({} === {}); // false

const o = {};

const secondO = o;
// console.log(secondO === o); // true

const nO = {};
// console.log(o === nO); // false


const a = {
    num1: 1,
    num2: 2
}

const b = {
    num1: a.num1,
    num2: a.num2
}

console.log(a);
console.log(b);
console.log(a === b);

b.test = true;

console.log(a);
console.log(b);