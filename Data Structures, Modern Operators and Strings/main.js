'use strict';

// Data Structures, Modern Operators and Strings

// Destructuring Arrays
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

// example destructing arr
const [page] = facebookPages;
const [firstPost, secondPost] = page.posts;
console.log(firstPost, secondPost);



const restaurant = {
    name: 'Italian',
    location: 'Rome Italy',
    categories: ['Pizza', 'Organic', 'Vegetarian'],
    startMenu: ['Garlic bread', 'Tomato', 'Salad'],
    mainMenu: ['Pizza', 'Breakfast', 'Risotto', 'Pasta']
}