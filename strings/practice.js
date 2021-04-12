'use strict';

const person = {
    name: 'Alex',
    lastName: 'reDyy',
    age: 34,
    hobby: ['airsoft', 'bike', 'reading_bOOKs'],
    position: 'apply for job',
    technologies: [{
            instructor: 'Max',
            finished: false,
            technology: 'JavaScript'
        },
        {
            instructor: 'Andrew',
            finished: false,
            technology: 'javaScript'
        }, {
            instructor: 'stephen',
            finished: false,
            technology: 'react'
        }
    ],
    thingToLearn: ['react', 'js', 'html', 'scss'],
    courses: 8
}

// console.log(person);

const { lastName, hobby, technologies, thingToLearn: newThings, age } = person;
// console.log(lastName[0].toUpperCase() + lastName.toLowerCase().slice(1));

const [, , readBooks] = hobby;
// console.log(readBooks.split('_')[1].toLowerCase());

const [max, andrew, steven] = technologies;
const { instructor } = max;
// console.log(instructor.concat(' Schwarzmüller'));

technologies.push({
    instructor: 'Fillip',
    finished: false,
    technology: 'NEXT>JS'
})

for (const courses of technologies) {
    courses.numberOfTutorials = 3;
    if (courses.technology.includes('javaScript')) {
        courses.timeToPractice = true;
    }
}

newThings.push('css3', 'git', 'webpack');
// console.log(newThings);
// console.log(`${person.name} have ${person.age} years`);

const check = function(symbol, ...courses) {
    const [first, second, third] = courses;
    let { technology } = third;
    person.technologies[3].technology = technology.replace('>', '.').toLowerCase();
}

check(...technologies)

// console.log(person);


const bank = {
    name: 'Intesa Bank',
    users: [],
    money: 200,
}

const addUser = function(userName, userLastName, userAmount = 0) {
    const name = userName.toLowerCase();
    const lastName = userLastName.toLowerCase();
    const amount = userAmount
    bank.users.push({
        name,
        lastName,
        amount,
        transactions: []
    })
}

addUser('ted', 'terry')
addUser('Phillip', 'Watson')
addUser('Richard', 'Clarino', 1000)


console.log(bank);