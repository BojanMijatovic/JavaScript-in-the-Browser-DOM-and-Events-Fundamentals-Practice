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

// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3])


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

// console.log(calcAverageHumanAge);

const excludeDogs = calcAverageHumanAge.filter(dog => dog >= 18);
// console.log(excludeDogs);

const averageHumanAge = excludeDogs.reduce((acc, current, i, arr) => acc + current, 0);
// console.log(averageHumanAge);

const chainTest = (data) => {
    // return data.map(dogAge => { 
    //     if (dogAge <= 2) {
    //         return dogAge = 2 * dogAge
    //     } else if (dogAge > 2) {
    //         return dogAge = 16 + dogAge * 4
    //     }
    // }).filter(age => age > 18).reduce((acc, current, arr) => acc + current, 0)
    return data.map(dogAge => dogAge <= 2 ? dogAge * 2 : 16 + dogAge * 4).filter(age => age > 18).reduce((acc, current, arr) => acc + current, 0)
}

// const total = chainTest(data1);
// console.log(total);


// EXAMPLE TO PRACTICE

const account = {
    account1: {
        name: 'Alex',
        age: 33,
        hobbies: ['airsoft', 'coding'],
        job: true,
        moneyTotal: 5000,
        socialNetworks: {
            facebook: true,
            likes: 100
        }
    },
    account2: {
        name: 'Ted',
        age: 50,
        hobbies: ['reading books', 'ride motor'],
        job: true,
        moneyTotal: 10000,
        socialNetworks: {
            facebook: false,
            likes: 0
        }
    },
    account3: {
        name: 'Ferdinand',
        age: 22,
        hobbies: ['beer', 'coding'],
        job: false,
        moneyTotal: 500,
        socialNetworks: {
            facebook: true,
            likes: 750
        }
    },
    account4: {
        name: 'Darlan',
        age: 29,
        hobbies: ['learn', 'javaScript'],
        job: true,
        moneyTotal: 3000,
        socialNetworks: {
            facebook: false,
            likes: 20
        }
    }
}

const accounts = [account.account1, account.account2, account.account3, account.account4];
console.log(accounts);


accounts.forEach(acc => console.log(`Welcome ${acc.name}`));
accounts.map((acc) => {
    return console.log(`${acc.name} have ${acc.hobbies.length} hobbies`);
})


accounts.map(acc => console.log(`You have more 200$ on money now  you have ${acc.moneyTotal + 200} $`))
const youngBoys = accounts.filter(acc => acc.age < 30).map(boys => console.log(`Boys are ${boys.name} with age ${boys.age}`));


const totalAge = accounts.reduce((acc, current) => acc + current.age, 0);
console.log(`You have total age ${totalAge}`);

const totalLikes = accounts.reduce((acc, likesNum) => acc + likesNum.socialNetworks.likes, 0);
console.log(totalLikes);

const findOld = (accounts, age) => {
    return accounts.filter(acc => acc.age > age)
}

console.log(findOld(accounts, 40));

accounts.map(acc => {
    return console.log(`${acc.name} have ${acc.hobbies.map(i => i)}`);
})


const removeFb = (users) => users.filter(user => !user.socialNetworks.facebook)
console.log(removeFb(accounts));

const findRemove = (accounts) => {
    return accounts.findIndex(acc => !acc.socialNetworks.facebook)
}

accounts.splice(findRemove(accounts), 1);
console.log(accounts);

console.log(findRemove(accounts));
accounts.splice(findRemove(accounts), 1);
console.log(accounts);