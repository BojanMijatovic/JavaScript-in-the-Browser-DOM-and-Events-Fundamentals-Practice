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

//   arrays and objects examples
const [{ posts }] = facebookPages;
console.log(posts);
const [{ likes }, { likes: secondLikes }] = posts;
console.log(likes, secondLikes);

const sumLikes = function(a, b) {
    return a + b;
}

// console.log(sumLikes(likes, secondLikes));

const message = 'Welcome';
const [fL, secondL, ...messageNew] = message;
// console.log(fL, ...messageNew);

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const [a, b, c, ...restArr] = arr;
console.log(a, b, c);