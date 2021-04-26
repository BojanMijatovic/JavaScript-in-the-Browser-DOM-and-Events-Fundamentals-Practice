'use strict';
//  Coding Challenges

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
// audi.accelerate();
// audi.accelerate();
// audi.break();


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
        return console.log(`Your speed now is ${this.speed} km/h  and battery is ${this.battery -= 1}%`);
    }

    startChargeBattery() {
        if (this.chargeBattery !== true) {
            this.chargeBattery = true;
            this.battery++;
        }
    }
}


const tesla = new TeslaCar('tesla', 100, 100, false);
// tesla.accelerate();
// tesla.startChargeBattery();
// console.log(tesla);

/*
Rent a car aplikacija je takodje dobra tema, vise razlicitih vozila, termini,
kalendar i ostale stvari koje mozes da iskomplikujes dovoljno da bi mogao da provezbas.
 Web shop isto

Najbolje gradjevinsko preduzeće, gde ces imati firmu, rirma će imati radike,
mehanizaciju i materijal, projekte
Što se nasledjivanja tiče možeš da imaš razne kategorije radnika, mašina, i projekata...
*/

class Shop {
    constructor(workers) {
        this.workers = workers;
        this.items = [];
    };

    addItem(item, price) {
        if (this.workers < 1) {
            return console.log(`Sorry you don\`t have more workers `);
        } else {
            this.items.push({
                item,
                price
            });
            this.workers--;
            return this;
        }
    }

    listItems() {
        return this.items.forEach((item, id) => console.log(`${id + 1} ${item.item} price: ${item.price}$`))
    }

    filterItemsPerPrice(price) {
        return this.items.filter(item => item.price > price).forEach((item, id) => console.log(`${id + 1} ${item.item} and the price is ${item.price}`));
    }

    buyItem(shopItem) {
        const itemForShop = this.items.findIndex(item => item.item === shopItem);
        if (itemForShop > -1) {
            const buyItems = this.items.splice(itemForShop, 1);
            buyItems.map((item) => console.log(`You buy ${item.item} per price ${item.price}$ total is ${item.price}`));
        }
    }
}

const tobaccoShop = new Shop(7);

tobaccoShop.addItem('beer', 14);
tobaccoShop.addItem('cigarettes', 4);
tobaccoShop.addItem('tobacco', 8);
tobaccoShop.addItem('juice', 10);
// tobaccoShop.listItems();
// tobaccoShop.filterItemsPerPrice(5);

tobaccoShop.buyItem('beer');
tobaccoShop.buyItem('beer');
tobaccoShop.buyItem('juice');


console.log(tobaccoShop);