'use strict';

const checkDogs = function(dogsJulia, dogsKate) {
    dogsJulia.splice(0, 1).concat(dogsJulia.splice(-2));
    const allDogs = [...dogsJulia].concat(dogsKate);
    allDogs.forEach(function(dog, id) {
        if (dog > 3) {
            return console.log(`Dog number ${id + 1} is adult and is ${dog} years old`);
        } else {
            return console.log(`Dog number ${id + 1} is still a puppy`);
        }
    })
}

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3])


/*Your tasks:
Create a function 'calcAverageHumanAge', which accepts an arrays of dog's
ages ('ages'), and does the following things in order:
1. Calculate the dog age in human years using the following formula: if the dog is
<= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old,
humanAge = 16 + dogAge * 4
2. Exclude all dogs that are less than 18 human years old (which is the same as
keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know
from other challenges how we calculate averages �)
4. Run the function for both test datasets
Test data:
§ Data 1: [5, 2, 4, 1, 15, 8, 3]
§ Data 2: [16, 6, 10, 5, 6, 1, 4]
GOOD LUCK �
*/

const data1 = [5, 2, 4, 1, 15, 8, 3];
const data2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = data1.map(dogAge => {
    let humanAge = 0;
    if (dogAge <= 2) {
        return humanAge = 2 * dogAge
    } else if (dogAge > 2) {
        return humanAge = 16 + dogAge * 4
    }
})

console.log(calcAverageHumanAge);

const excludeDogs = calcAverageHumanAge.filter(dog => dog >= 18);
console.log(excludeDogs);

const averageHumanAge = excludeDogs.reduce((acc, current, i, arr) => (acc + current) / arr.length, excludeDogs[0]);
console.log(averageHumanAge);