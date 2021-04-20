'use strict';

const cars = [];
const form = document.querySelector('.form');
const type = document.querySelector('.type');
const model = document.querySelector('.model');
const power = document.querySelector('.power');
const addCars = document.querySelector('.btn');
const showCars = document.querySelector('.showCars');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const car = {
        type: type.value,
        model: model.value,
        power: Number(power.value)
    }

    cars.push(car)
    type.value = '';
    model.value = '';
    power.value = '';
    showCars.innerHTML = '';

    // calc power
    cars.map(car => {
        if (car.power > 200) {
            return car.power -= 100
        } else if (car.power < 200) {
            return car.power *= 1.5;
        }
    })

    cars.forEach((car, id) => {
        const carDiv = document.createElement('p');
        carDiv.textContent = `${id + 1} ${car.type} ${car.model} ${car.power}`;
        showCars.append(carDiv);
    })

    console.log(cars);
});