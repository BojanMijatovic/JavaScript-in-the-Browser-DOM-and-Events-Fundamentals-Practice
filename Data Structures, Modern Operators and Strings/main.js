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
// 1. Get the number of fans per page
const [{ fans }] = facebookPages;
// console.log(`We have ${fans} fans on page`);


// 2. Get the aggregation of post likes per page
// 3. Get the number of post comments per page

// 1 








//  destructing Objects
// const { title, fans } = page;
// console.log(title, fans);
// console.log(`We have ${fans} fans on page`);

//  pull comments from second Post
// const [firstComment, secondComment, thirdComment] = secondPost.comments
// console.log(firstComment.text);
// console.log(secondComment.text);
// console.log(thirdComment.text);


//  example
const restaurant = {
    name: 'Italian',
    location: 'Rome Italy',
    categories: ['Pizza', 'Organic', 'Vegetarian'],
    startMenu: ['Garlic bread', 'Tomato', 'Salad'],
    mainMenu: ['Pizza', 'Breakfast', 'Risotto', 'Pasta']
}

//  take all items from array
const [first, second, third] = restaurant.startMenu;

// const arr = [1, 2, 3];

// let [a, b, c] = arr;
//  now here we change positions on first and second
// [b, a] = [a, b];

//  pull from nested arr 
const nestedArr = [2, 3, 4, [1, 5]];

// const [two, , , newArr] = nestedArr;
// console.log(two, newArr);
// const [num1, num2] = newArr 
// console.log(num1, num2);

//  destructing  nested arr in one line
const [one, , , [e, d]] = nestedArr;
// console.log(one, e, d);


//      Destructuring Objects

//  example
const person = {
    name: 'Alex',
    age: 34,
    job: 'junior',
    position: {
        day: 'day',
        night: 'night'
    },
    apply({ job = 'junior developer', name, age }) {
        console.log(`Thanks ${name} for apply on ${job} in ${age}`);
    }
}


// person.apply({
//     name: 'Ted',
//     job: 'frontend',
//     age: 100
// })

const { name, age, job } = person;

//  nested object in object 
const { position: { day, night } } = person
// console.log(day);

//  with another name 
const { name: personName } = person;
// console.log(personName);

//  add default values
const { firstName = 'firstName' } = person;


// let a = 22;
// let b = 100;

// const obj = { a: 1, b: 2, c: 3 };

// ({ a, b } = obj)
// console.log(b);
// console.log(a);


//   example
const junior = {
    name: 'junior developer',
    technology: ['html', 'css', 'js'],
    experience: 1,
    nextToLearn: {
        framework: 'Next.js',
        experience: 0
    },
    applyForJob: function({ name, technology, experience, position = 'front-end' }) {
        console.log(`Welcome ${name} thanks for apply on ${position} position with ${experience} year of experience`);
    }
}

// junior.applyForJob({
//     name: 'Steven',
//     experience: 1
// })


//  example
const obj = {
    a: 4,
    b: 3,
    newNums: [5, 6, 7, 8]
}

const { newNums, b, a } = obj;

//  this function use destructing obj
const sumNum = (a, b) => a + b;
// console.log(sumNum(b, a));


//      The Spread Operator

// example
const arr = [1, 2, 3];
const lastArr = [100, 101];

//  this is complete new ARR
const newArr = [...arr, 4, 5, 6, 7, ...lastArr];