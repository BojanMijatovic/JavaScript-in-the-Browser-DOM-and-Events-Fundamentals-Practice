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
    // 4 step return and stored 
const alex = new Person('Alex', 1987);
// console.log(alex);
const ted = new Person('Ted', 2000);