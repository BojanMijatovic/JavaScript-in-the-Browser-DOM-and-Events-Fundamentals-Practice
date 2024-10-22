'use strict';

//  Classes


// 4 Principles

//  abstraction
//  encapsulation
//  inheritance
//  polymorphism


//      4 Steps 

//  1. New {} empty object is created
//  2. function is called and , this  keyWord point on empty obj
//  3. empty obj is linked to prototype
//  4. function automatic return  object 


//  constructor function

//        1 step
const Person = function(name, birthYear) {
        // 2 step
        this.name = name;
        this.birthYear = birthYear;
    }
    // 4 step return and stored  object in alex const
const alex = new Person('Alex', 1987);
// console.log(alex);
const ted = new Person('Ted', 2000);
//                  3 step sets this proto object  to PROTO PROPERTY of constructor function
// console.log(ted.__proto__);

//  PROTOTYPES
// console.log(Person.prototype);
// Person.prototype.calcAge = function() { console.log(2021 - this.birthYear) };

// alex.calcAge();
// console.log(alex.__proto__);


// Person.prototype.job = false;
// console.log(alex.__proto__);
// console.log(alex);

//      TOP of prototype chain is Object.prototype
// console.log(alex.__proto__.__proto__);
// console.log(alex.name);


const arr = [1, 2, 3];

// console.log(arr.__proto__.__proto__ === Object.prototype);
// console.log(arr.__proto__ === Array.prototype);
// console.log(Array.__proto__.__proto__ === Object.prototype);

Array.prototype.startTest = function() {
    return ['test', '1', 2];
}

// console.log(arr.startTest());



//  Example 1
// const Car = function(make, speed) {
//     this.make = make;
//     this.speed = speed;
// };

// Car.prototype.accelerate = function() {
//     this.speed += 10;
// }

// Car.prototype.break = function() {
//     this.speed -= 5;
// }
// const bmw = new Car('bmw', 100);

// console.log(bmw);
// bmw.accelerate();
// console.log(bmw);

// const mercedes = new Car('mercedes', 200);
// mercedes.__proto__.color = 'red';
// console.log(bmw.__proto__);
// console.log(Car.prototype);


//      ES6 Classes

// !      IMPORTANT 
//  1 Classes are NOT hoisted
//  ES6 Classes are functions!
//  classes are executed in strict mode always

//  class expression  
const newExpression = class {}

//  class declaration
class newDeclaration {}

class newPerson {
    constructor(name, lastName) {
        this.name = name;
        this.lastName = lastName
    }
    showSport() {
        console.log(`${this.name} have sport ${this.sport}`);
    }



}

const jordan = new newPerson('michel', 'jordan');
// console.log(jordan);

// newPerson.prototype.sport = 'basketball';

// jordan.showSport();



// const user = {
//     name: 'alex',
//     movements: [123, 331, 131, 333, ],
//     // getters
//     get latest() {
//         console.log(`${this.movements}`);
//     },
//     // setters
//     set latest(move) {
//         this.movements.push(move)
//     }
// }

// user.latest = 74;
// user.latest;


// class User {
//     constructor(name, lastName) {
//         this.name = name,
//             this.lastName = lastName
//     }

//     set name(newName) {
//         return this._name = newName
//     }

//     get name() {
//         return console.log(this._name);
//     }
// }

// const test = new User('ted', 'fee');
// console.log(test);

// test.name;



const newUserProto = {
    showName() {
        return console.log(`Hi ${this.name}`);
    }
}

const will = Object.create(newUserProto);
// console.log(will);
// console.log(newUserProto);
// console.log(will.__proto__.__proto__ === Object.prototype);

will.name = 'will';

// will.showName();

const userProto = {
    showName() {
        return console.log(`Hey from new Object ${this.name}`);
    }
}

const rex = Object.create(userProto);
// console.log(rex);
rex.name = 'rex';
// rex.showName();
// console.log(rex.__proto__ === userProto);


//  Practice
class Car {
    constructor(name, speed) {
        this.name = name;
        this.speed = speed;
    }
    set speedUs(speed) {
        return console.log(`In miles ${this.speed = speed /= 1.6} miles/h`);
    }
    get speedUs() {
        console.log(`In km is ${this.speed *= 1.6} kh/h`);
    }
}

const audi = new Car('audi', 120);
// console.log(audi);
// audi.speedUs = 100;
// audi.speedUs;
// console.log(audi);


//  FROM PERSON CLASS
Person.prototype.calcAge = function(years) {
    return console.log(`${this.firstName} have ${2021 - years} years`);
}


// const Student = function(firstName, lastName, course) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.course = course;
// }

// const mike = new Student('Mike', 'Green', 'cs');
// console.log(mike);

// mike.__proto__.introduce = function() {
//     return console.log(`Hey I am ${this.firstName} ${this.lastName}`);
// }

// mike.introduce();

//  Inheritance Between "Classes": Constructor Functions
// Student.prototype = Object.create(Person.prototype);

// Student.prototype.courseName = function() {
//     return console.log(`${this.firstName} is on ${this.course}`);
// }

// const peter = new Student('Peter', 'Williams', 'Math');
// peter.courseName();

// peter.calcAge(1987);
// console.log(peter.__proto__);


//  Example 
const ev = function(model, speed, charge) {
    Person.call(this, model, speed, charge);
    this.charge = charge;
}

ev.prototype = Object.create(Person.prototype);

const tesla = new ev('tesla', 100, 22);

// console.log(tesla);

tesla.__proto__.accelerate = function() {
    this.birthYear += 20;
    this.charge--;
    return console.log(`Current speed ${this.birthYear}  and battery now have ${this.charge}`);
}

// tesla.accelerate();
// tesla.accelerate();


//  Inheritance Between  ES6 Classes
class User {
    constructor(name, lastName, birthYear) {
            this.name = name;
            this.lastName = lastName;
            this.birthYear = birthYear;
        }
        // set name(newName) {
        //     return this._name = newName
        // }
        // get name() {
        //     return console.log(this._name);
        // }
    calcAge() {
        return console.log(`Now I have ${2021 - this.birthYear} years`);
    }
}


class Student extends User {
    constructor(name, lastName, birthYear, course) {
        //  always need to happen first
        super(name, lastName, birthYear);
        this.course = course;
    }

    introduce() {
        return console.log(`Hi all I am ${this.name} ${this.lastName}`);
    }
}

const nick = new Student('Nick', 'Cave', 1987, 'React');
// console.log(nick);
// nick.introduce();

// nick.calcAge();

// console.log(nick.__proto__ === Student.prototype);


const testPersonProto = {
    initTest(name, lastName, birthYear) {
        this.name = name;
        this.lastName = lastName;
        this.birthYear = birthYear;
    },
    calcAge() {
        return console.log(`${2021 - this.birthYear}`);
    }
}

const initPerson = Object.create(testPersonProto);
initPerson.initTest('Mary', 'Poppins', 1987);

// console.log(initPerson);
// initPerson.calcAge();


//  bank Account Example 


// Encapsulation: Private Class Fields and Methods
// 1) Public fields
// 2) Private fields
// 3) Public methods
//  4) Private methods


class bankAccount {

    // 1)  Public fields
    //  present ONLY on INSTANCES of class

    locale = navigator.language;

    //  2) Private fields
    // #movements = []; for now ONLY SUPPORTED on goggle chrome
    _movements = [];

    constructor(owner, amount, pin) {
        this.owner = owner;
        this.amount = amount;

        //  practice is to use underscore if property is need to bee protected
        //  Protected value
        // this._movements = [];
        this._pin = pin;
        // this.locale = navigator.language;
    }

    // 3) PUBLIC METHODS
    //  Methods are added to PROTOTYPE
    deposit(value) {
        this._movements.push(value);
        return this;
    }

    withdraw(value) {
        this._movements.push(-value);

        //  this means to return hole object account1 then we can chaining the methods
        //  example account.withdraw(100).deposit(5410).deposit(48);
        return this;
    }

    approveLoan() {
        return true;
    }

    getMovements() {
        this._movements;
        return this;
    }

    requestLoan(value) {
        if (this.approveLoan()) {
            this._movements.push(value);
            console.log(`Loan approved`);
            return this;
        }
    }

    //  4) PRIVATE METHODS
    // #privateMethod(){} ALSO WITH # 


    //  static METHODS
    // Available ONLY on CLASSES
    static welcomeMessage() {
        return console.log(`Here is bank :) `);
    }
}

const account1 = new bankAccount('alex', 1000, 4444);
account1.deposit(34);
account1.withdraw(20);
account1.requestLoan(500);
account1.welcomeMessage;

bankAccount.welcomeMessage();

console.log(account1);

account1.deposit(450).deposit(485).deposit(87);