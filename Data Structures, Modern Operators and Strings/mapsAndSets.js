'use strict';

//     SETS
//  work without duplicate on iterable values arrays, strings, objects
// all values are unique
const orders = new Set(['pasta', 'pizza', 'tomato', 'pasta', 'garlic bread', 'tomato', 'risotto'])


const str = new Set('test');
// console.log(str);

//      methods on SET
//  in set there are no index of value
orders.size; // length
orders.has(); //true or false
orders.add(); // add value
orders.delete(); // remove value
// orders.clear(); // remove all values

// console.log(orders);

const stuff = ['Waiter', 'Manager', 'Chief', 'Waiter', 'Waiter', 'Chief', 'Chief', 'Chief'];
//                                    with spread operator we create new array
const showPositions = [...new Set(stuff)];
// console.log(showPositions);


//      MAPS
//  in map we can set any value as key =  boolean , number , obj , arr, string
const restaurant = new Map();

//  set method add key value pair
restaurant.set('name', 'Italian');
restaurant.set(1, 'Rome');
restaurant.set(2, 'Madrid');
restaurant.set('categories', ['pasta', 'pizza', 'vegetarian', 'hamburgers']).set('open', 11).set('close', 22);

//  to call we use get method
const get = restaurant.get(1);
// console.log(get);
restaurant.has(); // check if we have that key  return boolean
restaurant.delete(); // delete key
restaurant.size; // return numbers of keys
// restaurant.clear()// remove all keys 

const arr = [1, 2, 3];
restaurant.set(arr, 'arr')

// console.log(restaurant);

const questions = new Map([
    ['question', 'What is the best programing language ?'],
    [1, 'C'],
    [2, 'Java'],
    [3, 'JavaScript'],
    ['correct', 3],
    [true, 'correct'],
    [false, 'try again']
]);

// console.log(questions);


console.log(questions.get('question'));

// const answer = Number(prompt(`Answer is `));

for (const [key, value] of questions) {
    if (typeof key === 'number') {
        // console.log(`${key} ${value}`);
    }
}
// if (answer === 3) {
//     console.log(questions.get(true));
// }
// console.log(questions.get(true))
// answer === 3 ? console.log(questions.get(true)) : console.log(questions.get(false))


//  EXAMPLE



// 3. Compute and log the following string to the console: "An event happened, on
// average, every 9 minutes" (keep in mind that a game has 90 minutes)
// 4. Loop over 'gameEvents' and log each element to the console, marking
// whether it's in the first half or second half (after 45 min) of the game, like this:
// [FIRST HALF]17:
// ⚽
// GOAL


const gameEvents = new Map([
    [17, '⚽ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🔶 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽ GOAL'],
    [80, '⚽ GOAL'],
    [92, '🔶 Yellow card'],
]);
// 1. Create an array 'events' of the different game events that happened(no
// duplicates)
const events = new Set(gameEvents);
// console.log(events);

// 2. After the game has finished, is was found that the yellow card from minute 64
// was unfair.So remove this event from the game events log.
const eventsMap = new Map(events);
console.log(eventsMap);

for (const [key, value] of eventsMap) {
    if (key === 64) {
        eventsMap.delete(64);
    }
}
console.log(eventsMap);

// 3. Compute and log the following string to the console: "An event happened, on
// average, every 9 minutes" (keep in mind that a game has 90 minutes)
const average = function(...time) {
    let total = 0;
    for (let i = 0; i < time.length, i++;) {
        total += i;
    }
}