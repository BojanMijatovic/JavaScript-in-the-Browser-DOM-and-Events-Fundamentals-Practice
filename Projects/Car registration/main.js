'use strict';

// const cars = [];
// const form = document.querySelector('.form');
// const type = document.querySelector('.type');
// const model = document.querySelector('.model');
// const power = document.querySelector('.power');
// const addCars = document.querySelector('.btn');
// const showCars = document.querySelector('.showCars');

// form.addEventListener('submit', function(e) {
//     e.preventDefault();

//     const car = {
//         type: type.value,
//         model: model.value,
//         power: Number(power.value)
//     }

//     cars.push(car)
//     type.value = '';
//     model.value = '';
//     power.value = '';
//     showCars.innerHTML = '';

//     // calc power
//     cars.map(car => {
//         if (car.power > 200) {
//             return car.power -= 100
//         } else if (car.power < 200) {
//             return car.power *= 1.5;
//         }
//     })

//     cars.forEach((car, id) => {
//         const carDiv = document.createElement('p');
//         carDiv.textContent = `${id + 1} ${car.type} ${car.model} ${car.power}`;
//         carDiv.classList.add('greatMotor');
//         showCars.append(carDiv);
//     })

//     console.log(cars);
// });


/*
Kreirati program koji analizira JMBG koji je definisan kao string (kao u primerima '10. numbers' i '11. string').
  Znacajne delove JMBG-a izdvojiti putem funkcije substring.
  JMBG je broj formata 'DDMMGGGRRBBBK' i sastoji se od sledecih informacija:

    DD - dan rođenja
    MM - mesec rođenja
    GGG - zadnje tri cifre godine rođenja
    RR - region rođenja, odn. prebivalište za građane rođene pre 1976. godine.
    BBB - pol:
          000-499 - muški
          500-999 - ženski
    K - kontrolna cifra

  U zadatku ispisati datum rodjenja i pol osobe za zadani JMBG.
*/

// const showId = (id) => {
//     const dayB = id.slice(0, 2)
//     const montB = id.slice(2, 4);
//     const yearB = id.slice(4, 7);
//     let gender = id.slice(7, 10);
//     const control = id.slice(-1);
//     if (gender === 0 && gender < 500) {
//         gender = 'male'
//     } else {
//         gender = 'female'
//     }
//     const idDiv = document.createElement('p');
//     idDiv.textContent = `Day of birth ${dayB}, month  ${montB}, year  ${yearB}, gender ${gender}, control number is ${control}`;
//     idDiv.classList.add('oldMotor');
//     document.body.append(idDiv);
// }

// showId('23020215004');
// showId('0212987800043');


const users = [{
        name: 'michel',
        lastName: 'paint',
        userName: 'admin'
    },
    {
        name: 'ana',
        lastName: 'nixon',
        userName: 'nix'
    },
    {
        name: 'sawn',
        lastName: 'forest',
        userName: 'gum'
    },
    {
        name: 'ted',
        lastName: 'readd',
        userName: 'g'
    }
]