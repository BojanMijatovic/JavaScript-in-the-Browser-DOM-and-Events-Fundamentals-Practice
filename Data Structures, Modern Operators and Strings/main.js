'use strict';

// Data Structures, Modern Operators and Strings

//      Destructuring Arrays
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

// example  
const [page] = facebookPages;
const [firstPost, secondPost] = page.posts;
console.log(page);

//  destructing Objects
const { title, fans } = page;
// console.log(title, fans);
// console.log(`We have ${fans} fans on page`);

//  pull comments from second Post
const [firstComment, secondComment, thirdComment] = secondPost.comments
    // console.log(firstComment.text);
    // console.log(secondComment.text);
    // console.log(thirdComment.text);



const restaurant = {
    name: 'Italian',
    location: 'Rome Italy',
    categories: ['Pizza', 'Organic', 'Vegetarian'],
    startMenu: ['Garlic bread', 'Tomato', 'Salad'],
    mainMenu: ['Pizza', 'Breakfast', 'Risotto', 'Pasta']
}

//  take all items from array
const [first, second, third] = restaurant.startMenu;

const arr = [1, 2, 3];

let [a, b, c] = arr;
//  now here we change positions on first and second
[b, a] = [a, b];

//  pull from nested arr 
const nestedArr = [2, 3, 4, [1, 5]];

const [two, , , newArr] = nestedArr;
// console.log(two, newArr);
const [num1, num2] = newArr;
// console.log(num1, num2);

//  destructing  nested arr in one line
const [one, , , [e, d]] = nestedArr;
console.log(one, e, d);


//      Destructuring Objects

//  example
const person = {
    name: 'Alex',
    age: 34,
    job: 'junior'
}

const { name, age, job } = person;

//  with another name 
const { name: personName } = person;
// console.log(personName);

//  add default values
const { firstName = 'firstName' } = person;