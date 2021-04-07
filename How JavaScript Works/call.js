'use strict';
//  global scope
const firstName = 'Alex';
let lastName = 'Smith';


//  block scope
if (!false) {

    showFullName();

    //  function scope
    function showFullName() {
        const age = 44;
        //  new const and value
        const firstName = 'Ted';
        //  new value
        lastName = 'Test';

        function calcAge() {
            // const age = 140;
            return 2021 - age;
        }
        const x = calcAge();
        console.log(`${firstName} ${lastName} you are born ${x}`);
    }
}


const a = 4;
const b = 2;

function add() {

    function moreNums() {
        const a = 100;
        return a + b + 10;
    }

    return moreNums() + 200;
}

console.log(add());


//  ------

let num1 = 10;
let num2 = 10;

function addNums() {
    num2 = 100;
    let a = num1;
    a = num2;

    //  function scope
    function more() {
        return num1 + num2 + a;
    }

    if (!false) {
        return more();
    }

}

console.log(addNums());