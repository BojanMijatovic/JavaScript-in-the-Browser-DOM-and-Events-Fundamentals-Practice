'use strict';
//  Coding Challenges

/*
Rent a car aplikacija je takodje dobra tema, vise razlicitih vozila, termini,
kalendar i ostale stvari koje mozes da iskomplikujes dovoljno da bi mogao da provezbas.
 Web shop isto

Najbolje gradjevinsko preduzeće, gde ces imati firmu, rirma će imati radike,
mehanizaciju i materijal, projekte
Što se nasledjivanja tiče možeš da imaš razne kategorije radnika, mašina, i projekata...
*/

class Car {
    constructor(model, speed) {
        this.model = model;
        this.speed = speed;
    }
    accelerate() {
        this.speed += 10;
        return console.log(`Your speed is ${this.speed} km/h`);
    }
    break () {
        this.speed -= 10;
        return console.log(`Your speed now is ${this.speed} km/h`);
    }
}


const audi = new Car('audi', 100);
audi.accelerate();
audi.accelerate();
audi.break();


class TeslaCar extends Car {
    constructor(model, speed, battery, chargeBattery) {
        super(model, speed);
        this.battery = battery;
        this.chargeBattery = chargeBattery;
    }

    accelerate() {
        return console.log(`${this.model} have speed ${this.speed += 10} and battery is ${this.battery -= 1}%`);
    }

    break () {
        this.speed -= 10;
        return console.log(`Your speed now is ${this.speed} km/h`);
    }

    startChargeBattery() {
        if (this.chargeBattery !== true) {
            this.chargeBattery = true;
            this.battery++;
        }
    }
}


const tesla = new TeslaCar('tesla', 100, 100, false);
tesla.accelerate();
tesla.startChargeBattery();
console.log(tesla);