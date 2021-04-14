'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
};

const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};

const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};

const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES





/////////////////////////////////////////////////

//      METHODS

//  start with simple array methods

const arr = ['a', 'b', 'c', 'd', 'e', 'f']

//  Slice Method
//  this method will return new array and don't mutate old array
// console.log(arr.slice(2));
//  end parameter is not included in new array

//  Splice Method
// second parameter is indicating the number of elements in the array to remove from start or first parameter.
// console.log(arr.splice(0, 3, 'Test', 'name', 'ana'));
//  change original array 

//  Reverse Method
//method that reverse array , mutating the original, and returning a reference to the array.
arr.reverse();

//  Concat Method

const arr2 = ['g', 'h', 't', 'i', 'p']

// method is used to merge two or more arrays.This method does not change the existing arrays, but instead returns a new array.
const letters = arr.concat(arr2);
// console.log(letters);

//  Join Method
// Specifies a string to separate each pair of adjacent elements of the array. The separator is converted to a string if necessary
// console.log(letters.join('-'));

//  For Each Method

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// High Order FUNCTION! forEach
// method executes a provided function once for each array element. We have 3 parameters SINGLE ITEM, ITERATOR and ARRAY
// movements.forEach(function(movement, id) {
//     if (movement > 0) {
//         return console.log(`${id} Deposit ${movement}`);
//     } else {
//         return console.log(`${id} Withdraw ${movement}`);
//     }
// })

//  forEach with Maps and Sets
const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
]);

currencies.forEach(function(item, key) {
    console.log(`${key} ${item}`);
})