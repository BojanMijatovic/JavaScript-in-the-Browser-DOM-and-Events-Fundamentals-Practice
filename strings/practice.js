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
            instructor: 'Steven',
            finished: false,
            technology: 'react'
        }
    ],
    thingToLearn: ['react', 'js', 'html', 'scss'],
    courses: 8
}

console.log(person);

const { lastName, hobby, technologies, thingToLearn: newThings, age } = person;
console.log(lastName[0].toUpperCase() + lastName.toLowerCase().slice(1));

const [, , readBooks] = hobby;
console.log(readBooks.split('_')[1].toLowerCase());

const [max, andrew, steven] = technologies;
const { instructor } = max;
console.log(instructor.concat(' Swarmer'));

for (const courses of technologies) {
    courses.numberOfTutorials = 3;
    if (courses.technology.includes('javaScript')) {
        courses.timeToPractice = true;
    }
    console.log(courses);
}

newThings.push('css3', 'git', 'webpack');
console.log(newThings);

console.log(`${person.name} have ${person.age} years`);