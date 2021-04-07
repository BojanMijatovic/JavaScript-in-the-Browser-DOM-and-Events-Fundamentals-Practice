'use strict';

//  Working with THIS keyword

//  only in strict mode will be undefined
function start() {
    console.log(this);
}
start();

//  only in strict mode will be undefined
const newStart = function() {
    console.log(this);
}
newStart();

//  work in strict mode and point on WINDOW object
//    arrow functions don`t have own THIS KEYWORD they use lexical scope or parent scope its same 
const arr = () => console.log(this);
arr();


const person = {
    show: function() {
        // points on obj who is calling the method
        console.log(this);
    }
}

person.show();


// Event listeners
const btn = document.querySelector('button');
//  in this example THIS always point on Dom element who is attached handler BTN on this example
btn.addEventListener('click', function() {
    console.log(this);
})

//  this example show on WINDOW OBJECT
btn.addEventListener('click', () => {
    console.log(this);
})



const men = {
    //  parent scope
    name: 'Alex',
    here: () => {
        console.log(this);
    },
    //  object inside object
    job: {
        look: () => {
            console.log(this);
        }
    },
    regular: function() {
        console.log(this);
    }
}

// point to window obj
men.job.look();

//  also point to window obj
men.here();

//  point on obj who is calling
men.regular();