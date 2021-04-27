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
            buyItems.map((item) => console.log(`You buy ${item.item} per price ${item.price}$`));
        }
    }


    showTotal() {
        return console.log(`Total in store is ${this.items.reduce((acc, current) => acc + current.price, 0)}$`);;
    }
}

const tobaccoShop = new Shop(7);

tobaccoShop.addItem('beer', 14);
// tobaccoShop.addItem('cigarettes', 4);
// tobaccoShop.addItem('tobacco', 8);
// tobaccoShop.addItem('juice', 10);
// tobaccoShop.listItems();
// tobaccoShop.filterItemsPerPrice(5);

// tobaccoShop.buyItem('beer');
// tobaccoShop.buyItem('beer');
// tobaccoShop.buyItem('juice');
// tobaccoShop.showTotal()

// console.log(tobaccoShop);


//  Bank Account
class BankAccount {
    _actions = [];
    constructor(name, contract) {
        this.name = name;
        this.contract = contract;
    }
}


class BankUser extends BankAccount {

    constructor(name, contract, pin) {
        super(name, contract)
        this.pin = pin;
    }

    addDeposit(amount) {
        this._actions.push(amount);
        return this;
    }

    withdrawal(amount) {
        this._actions.push(-amount);
        return this;
    }

    showTransactions() {
        return console.log(this._actions);
    }

    changePin(newPin) {
        this._pin = newPin;
        this._pin = this.pin;
    }

    showTotal() {
        return this._actions.reduce((acc, current) => acc + current, 0);
    }

}

const newUser = new BankUser('alex', 2021, 4444);

newUser.addDeposit(100);
newUser.addDeposit(45);
newUser.withdrawal(450);

// newUser.changePin(4546)

// newUser.showTransactions();

// console.log(newUser.showTotal());

// console.log(newUser);



class Hotel {
    constructor(name, address, city) {
        this.name = name;
        this.address = address;
        this.city = city;
    }

    printInfo() {
        return console.log(`${this.name} is hotel  on address ${this.address}  in ${this.city}`);
    }
}


class Apartment extends Hotel {
    constructor(name, address, city, stars) {
        super(name, address, city);
        this.stars = stars;
    }

    welcomeMessage() {
        return console.log(`We are ${this.name} from ${this.city} and we have ${this.stars} stars`);
    }

    printStars() {
        return console.log(`${this.stars} stars we have`);
    }
}


const sun = new Apartment('sun', 'address NN', 'Novi Sad', 4);
// sun.welcomeMessage();
// sun.printInfo();
// sun.printStars();



class Message {
    constructor(sender, reciver, messageBody) {
        this.sender = sender;
        this.reciver = reciver;
        this.messageBody = messageBody;
    }
    printMessage() {
        return console.log(`${this.sender} send message ${this.messageBody} to ${this.reciver} `);
    }
}


class SMSMessage extends Message {
    constructor(sender, reciver, messageBody, phoneNumSender, phoneNumReciver) {
        super(sender, reciver, messageBody);
        this.phoneNumSender = phoneNumSender;
        this.phoneNumReciver = phoneNumReciver;
    };

    printMessage() {
        return console.log(`${this.sender} from ${this.phoneNumSender} send message ${this.messageBody} to ${this.reciver} on ${this.phoneNumReciver}`);
    }
}

const firstMessage = new SMSMessage('alex', 'ted', 'lorem', 634, 660);
// firstMessage.printMessage();


class Email extends Message {
    constructor(sender, reciver, messageBody, emailSender, emailReciver) {
        super(sender, reciver, messageBody)
        this.emailSender = emailSender;
        this.emailReciver = emailReciver;
    }

    printEmail(signature) {
        return console.log(`${this.sender} from ${this.emailSender} ${this.messageBody} to ${this.reciver} on ${this.emailReciver} sing ${this.singReciver(signature)}`);
    }

    singReciver(signature) {
        return signature;
    }
}

const email = new Email('rod', 'clarck', 'here is mail', '@gmail.comTest', '@fireFox.com');

// email.printEmail('myNewSing1415');