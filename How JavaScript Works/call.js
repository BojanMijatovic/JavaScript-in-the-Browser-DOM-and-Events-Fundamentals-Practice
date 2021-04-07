'use strict';
//  --------- Example
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

    //  block scope
    if (!false) {
        return more();
    }

    //  function scope
    function more() {
        return num1 + num2 + a;
    }

}

console.log(addNums());


//  ----------

function changeName() {
    let name = 'Alex';
    let lastName = 'Freddy';

    function addYears() {
        const year = 33;
        const bio = `${name} ${lastName} have ${year}`
        return bio;
    }

    name = 'Tomas';
    lastName = lastName + ` junior`;

    return addYears();
}

console.log(changeName());


//  ----------

const newName = 'Ivan';

function first() {
    const a = 'Hey'
    return second();

    function second() {
        const b = `how`;
        return third();

        function third() {
            const c = ' are you?'
            return `${a} ${newName} ${b} ${c}`;
        }

    }
}

console.log(first());