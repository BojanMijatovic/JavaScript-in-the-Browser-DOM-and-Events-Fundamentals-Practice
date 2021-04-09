'use strict';

// Data Structures, Modern Operators and Strings

//      Destructuring Arrays and Rest operators practice 
const facebookPages = [{
    title: "1. FC Pauli",
    fans: 2011,
    posts: [{
            title: "Loss in first game",
            content: "long text",
            likes: 12,
            comments: [{
                    text: "what a bad game!",
                },
                {
                    text: "trainers fault!",
                },
            ],
        },
        {
            title: "90 minutes thriller",
            content: "long text 1231",
            likes: 132,
            comments: [{
                    text: "amazing game",
                },
                {
                    text: "great to see you winning",
                },
                {
                    text: "90 minutes standing",
                },
            ],
        },
    ],
}, ];

//    destructing  arrays and objects examples
const [{ posts }] = facebookPages;
console.log(posts);
const [{ likes }, { likes: secondLikes }] = posts;
console.log(likes, secondLikes);

const sumLikes = function(a, b) {
    return a + b;
}

// console.log(sumLikes(likes, secondLikes));

const message = 'Welcome';
const [firstLetter, secondLetter, ...messageNew] = message;


const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [, , , a, b, c, ...restArr] = arr;
console.log(a, b, c);

//  spread arr 
const spreadArr = ['spread arr', 'new arr', ...arr];
console.log(spreadArr);





//  use rest operator on function
const sumAll = function(...arg) {
    let total = 0;
    for (let i = 0; i < arg.length; i++) {
        total += arg[i];
    }
    return console.log(total);
}

// sumAll(2, 4)
// sumAll(2, 4, 5, 6)
// sumAll(2, 4, 5, 6, 9)

// Spread on arr example
const newArr = [...arr, 10, 11, 12];
console.log(newArr);

//  rest operator
const [q, r, ...newArrR] = newArr;
console.log(...newArrR);

const person = {
    name: 'Alex',
    lastName: 'Smith',
    hobby: []
}

const newPerson = { nameF: 'Ted', ...person };


console.log(newPerson);



const { hobby } = person;
hobby.push('learn js', 'work');
console.log(person);

const [js, ...rest] = person.hobby;
console.log(js, ...rest);