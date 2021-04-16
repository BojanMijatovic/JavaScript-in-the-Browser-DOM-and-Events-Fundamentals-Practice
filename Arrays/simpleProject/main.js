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