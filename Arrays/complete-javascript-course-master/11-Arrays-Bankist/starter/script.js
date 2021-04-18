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


//  work on APP



const printMovements = function(movements) {
    containerMovements.innerHTML = '';
    movements.forEach(function(movement, id) {
        const type = movement > 0 ? 'deposit' : 'withdrawal'
        const html = `
          <div class="movements__row">
          <div class="movements__type movements__type--${type}">${id + 1} ${type}</div>
      <div class="movements__value" >${movement}</div >
        </div>
  `;
        containerMovements.insertAdjacentHTML('afterbegin', html);
    })
}



//  user
const createUsernames = function(accounts) {
    //                                              create new array
    /* for every account we first put all to lower case then split name and last name and mapping to new array where we need first letter
    and we create new key in obj account     --- acc.userName ---
     */
    accounts.forEach(function(account) {
        account.userName = account.owner.toLowerCase().split(' ').map(letter => letter[0]).join('')
    })

}
createUsernames(accounts);



// balance
const calcDisplayBalance = function(account) {
    account.balance = account.movements.reduce((acc, currentMovement) => acc + currentMovement);
    return labelBalance.textContent = `${account.balance} EUR`;
}



//  changing
//  not so good practice not readable
const calcDisplaySummary = function(account) {
    // summary all income 
    const income = account.movements.filter(movement => movement > 0).reduce((acc, current) => acc + current, 0);
    labelSumIn.textContent = `${income}EUR`;
    // summary all outcome 
    const outcome = account.movements.filter(movement => movement < 0).reduce((acc, current) => acc + current, 0);
    labelSumOut.textContent = `${Math.abs(outcome)}EUR`;
    //  interest of bank
    const interest = account.movements.filter(movement => movement > 0).map(deposit => deposit * account.interestRate / 100).filter(interest => interest >= 1).reduce((acc, current) => acc + current, 0);
    labelSumInterest.textContent = interest;
}



//  UPDATE UI 
const updateUI = function(account) {

    //  display movements
    printMovements(account.movements);

    //  display balance
    calcDisplayBalance(account);

    //  display summary
    calcDisplaySummary(account);
}



// Event Handlers
//  LOGIN 
let currentAccount;
btnLogin.addEventListener('click', function(e) {
    //when is btn in form element default behavior is to page reload
    e.preventDefault();

    currentAccount = accounts.find(account => account.userName === inputLoginUsername.value);
    if (currentAccount && currentAccount.pin === Number(inputLoginPin.value)) {

        //  display welcome message
        labelWelcome.textContent = `Welcome ${currentAccount.owner.split(' ')[0]}`;
        containerApp.style.opacity = 100;

        inputLoginUsername.value = '';
        inputLoginPin.value = '';
        inputLoginPin.blur();

        updateUI(currentAccount);
    }

})



//  Transfer money 
btnTransfer.addEventListener('click', function(e) {
    e.preventDefault();

    const amountTransfer = Number(inputTransferAmount.value);
    const receiverAccount = accounts.find(acc => acc.userName === inputTransferTo.value);

    inputTransferAmount.value = '';
    inputTransferTo.value = '';

    if (amountTransfer > 0 && currentAccount.balance >= amountTransfer && receiverAccount.userName !== currentAccount.userName) {
        //  transfer happens here
        currentAccount.movements.push(-amountTransfer);
        receiverAccount.movements.push(amountTransfer);

        updateUI(currentAccount);
    }
})



// loan
btnLoan.addEventListener('click', function(e) {
    e.preventDefault();
    const loanAmount = Number(inputLoanAmount.value);
    const requestLoan = currentAccount.movements.some(movement => movement >= loanAmount / 10)

    if (loanAmount > 0 && requestLoan) {
        // add loan 
        currentAccount.movements.push(loanAmount);
    }
    updateUI(currentAccount);
    inputLoanAmount.value = '';
})



//  Close account
btnClose.addEventListener('click', function(e) {
    e.preventDefault();

    const user = inputCloseUsername.value;
    const pin = Number(inputClosePin.value);
    if (currentAccount.userName === user && currentAccount.pin === pin) {
        const removeAcc = accounts.findIndex(acc => acc.userName === currentAccount.userName);
        accounts.splice(removeAcc, 1);

        inputCloseUsername.value = '';
        inputClosePin.value = '';

        containerApp.style.opacity = 0;
    }
})




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
// High Order FUNCTION! forEach
// method executes a provided function once for each array element. We have 3 parameters SINGLE ITEM, ITERATOR and ARRAY
// movements.forEach(function(movement, id) {
//     if (movement > 0) {
//         return console.log(`${ id } Deposit ${ movement } `);
//     } else {
//         return console.log(`${ id } Withdraw ${ movement } `);
//     }
// })



//  forEach with Maps and Sets
const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
]);

// currencies.forEach(function(item, key) {
//     console.log(`${ key } ${ item } `);
// })



//  MAP METHOD
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const euroToUsd = 1.1;
// arrow function
const usdMovement = movements.map(movement => movement * euroToUsd)

// callback function
// const usdMovement = movements.map(function (move) {
//     return move * euroToUsd;
// })

// console.log(usdMovement);

const newArr = [];
for (const move of movements) {
    newArr.push(move * euroToUsd);
}

// console.log(newArr);


const movementsDescription = movements.map((move, id) => {
        //  shorter way to return
        return `${id + 1} ${move > 1 ? 'deposit' : 'withdrawal'} ${move}`

        //  this way 

        // if (move > 0) {
        //     return `${id + 1} deposit ${move}$`;
        // } else {
        //     return `${id + 1} withdrawal ${move}`;
        // }
    })
    // console.log(movementsDescription);



//  FILTER METHOD 
//  return new array
const deposits = movements.filter(amount => amount > 0);
// console.log(deposits);
const withdrawals = movements.filter(amount => amount < 0);
// console.log(withdrawals);




// REDUCE METHOD
//  return one value !!!
//                                                          accumulator => snowball
// const balance = movements.reduce((accumulator, current, currentIndex) => {
//     console.log(`${currentIndex} ${current}`);
//     return accumulator + current;
// }, 0);

// console.log(balance);

// show max 
/*if we don't supply the initial value of the accumulator to reduce() method, it will be the value of the first element in the array and iteration will start from the second element
                                                                                     for initial value is nice to be first value off array 
*/
const max = movements.reduce((acc, current) => Math.max(acc, current), movements[0]);
// console.log(max);



//  METHOD CHANGING
//  Pipeline
const totalInUSD = movements.filter(movement => movement > 0).map(move => move * euroToUsd).reduce((acc, current) => acc + current, 0);
// console.log(totalInUSD);



// FIND METHOD
//  returns first element of array which is in condition and first ELEMENT
const firstWithdrawal = movements.find(movement => movement < 0);
// console.log(firstWithdrawal);


// const findAccount = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(findAccount);

const account = (acc, name) => acc.find(acc => acc.owner === name);
// console.log(account(accounts, 'Jessica Davis'));

const test = movements.some(movement => movement > 0);
console.log(test);



//  Sort Method
console.log(movements);

movements.sort((a, b) => a - b);
console.log(movements);

movements.sort((a, b) => b - a);
console.log(movements);