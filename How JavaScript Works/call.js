'use strict';
//  global scope
const firstName = 'Alex';
let lastName = 'Smith';


//  block scope
if (!false) {
    //  function scope
    function showFullName() {
        const age = 44;
        //  new const and value
        const firstName = 'Ted';
        //  new value
        lastName = 'Test';

        function calcAge() {
            return 2021 - age;
        }
        const x = calcAge();
        console.log(`${firstName} ${lastName} you are born ${x}`);
    }

    showFullName();
}