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