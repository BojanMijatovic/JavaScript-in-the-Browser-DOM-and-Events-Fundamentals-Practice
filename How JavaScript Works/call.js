'use strict';

//  ------- Call Stack and Execution contest

// Global execution contest
const name = 'John';

// const first = () => {
//     let a = 1;
//     const b = second(7, 8);
//     a = a + b;
//     return a;
// }

// function second(x, y) {
//     var c = 2;
//     return c;
// }

// const x = first()

// console.log(x);


//  --------- SCOPE CHAIN
function show() {
    const age = 44;

    //  BLOCK SCOPE
    if (age < 50) {
        const test = 'Test';
        var newJob = 'junior';

        //  function can be called in here to
        inside();
    }

    function inside() {
        const job = 'front-end';
        console.log(`${name} have ${job} in ${age} age `);
    }
    console.log(newJob);
    //  var from IF BLOCK

    newJob = 'janitor';
    //  CALLING FUNCTION
    inside();
    console.log(newJob);
}

// show();

//  SCOPE CHAIN VS CALL STACK

const a = 'John';
first();

function first() {

    const b = 'Hello';
    second();

    function second() {
        const c = 'Hi';
        third();
    }

}

function third() {
    const d = 'Hey';
    console.log(d + c + b + a);
}