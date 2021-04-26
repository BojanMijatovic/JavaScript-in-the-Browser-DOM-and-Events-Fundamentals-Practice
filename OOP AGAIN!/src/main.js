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
const Car = function(make, speed) {
    this.make = make;
    this.speed = speed;
};

Car.prototype.accelerate = function() {
    this.speed += 10;
}

Car.prototype.break = function() {
    this.speed -= 5;
}
const bmw = new Car('bmw', 100);

// console.log(bmw);
bmw.accelerate();
// console.log(bmw);

const mercedes = new Car('mercedes', 200);
// mercedes.__proto__.color = 'red';
// console.log(bmw.__proto__);
// console.log(Car.prototype);


//      ES6 Classes

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

    // !      IMPORTANT 
    //  1 Classes are NOT hoisted
    //  ES6 Classes are functions!
    //  classes are executed in strict mode always

}

const jordan = new newPerson('michel', 'jordan');
// console.log(jordan);

// newPerson.prototype.sport = 'basketball';

// jordan.showSport();


/*
Rent a car aplikacija je takodje dobra tema, vise razlicitih vozila, termini, kalendar i ostale stvari koje mozes da iskomplikujes dovoljno da bi mogao da provezbas. Web shop isto

Najbolje gradjevinsko preduzeće, gde ces imati firmu, rirma će imati radike, mehanizaciju i materijal, projekte
Što se nasledjivanja tiče možeš da imaš razne kategorije radnika, mašina, i projekata...
*/


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


class User {
    constructor(name, lastName) {
        this.name = name,
            this.lastName = lastName
    }

    set name(newName) {
        return this._name = newName
    }

    get name() {
        return console.log(this._name);
    }
}

const test = new User('ted', 'fee');
// console.log(test);

// test.name;



const newUserProto = {
    showName() {
        return console.log(`Hi ${this.name}`);
    }
}

const will = Object.create(newUserProto);
console.log(will);
console.log(newUserProto);
console.log(will.__proto__.__proto__ === Object.prototype);

will.name = 'will';

will.showName();