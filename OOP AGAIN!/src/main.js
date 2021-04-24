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


Person.prototype.job = false;
// console.log(alex.__proto__);
// console.log(alex);

//      TOP of prototype chain is Object.prototype
// console.log(alex.__proto__.__proto__);
console.log(alex.name);


const arr = [1, 2, 3];

console.log(arr.__proto__.__proto__ === Object.prototype);
console.log(arr.__proto__ === Array.prototype);
console.log(Array.__proto__.__proto__ === Object.prototype);

Array.prototype.startTest = function() {
    return ['test', '1', 2];
}


console.log(arr.startTest());