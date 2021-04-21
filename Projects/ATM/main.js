'use strict';

const account = [{
    name: 'Alex',
    deposit: null,
    transactions: []
}]

const [{ name, deposit, transactions }] = account;

const amount = document.querySelector('.amount');
const addAmountBtn = document.querySelector('.add-amount');
const accountInfo = document.querySelector('.info');
const userName = document.querySelector('.username');
const sortTransactions = document.querySelector('.sort');
const accountTransactions = document.querySelector('.account');
const filteredBtn = document.querySelector('.filtered');

addAmountBtn.addEventListener('click', () => {
    transactions.push(Number(amount.value));
    amount.value = '';
    console.log(transactions);

    accountTransactions.innerHTML = '';

    // print status
    printMoneyTransactions();

    //  reduce
    const showTotal = () => transactions.reduce((acc, current) => acc + current, 0)

    //  print info
    accountInfo.innerHTML = ''
    account.map(user => {
        const info = document.createElement('div');
        info.innerHTML = `<div>
          <h3>Welcome ${user.name} you now have on account ${showTotal(deposit, Number(amount.value))}$</h3>
          </div>`
        accountInfo.append(info);
    })
})


//  print transactions
const printMoneyTransactions = () => {
    transactions.forEach((money, id) => {
        const moneyDiv = document.createElement('div');
        moneyDiv.innerHTML = `<div>
                                                <p>${id + 1} : ${money}$</p>
                                              </div>`;
        accountTransactions.append(moneyDiv);
    })
}


//  sorting
sortTransactions.addEventListener('click', () => {
    transactions.sort((a, b) => a - b)
    accountTransactions.innerHTML = '';
    printMoneyTransactions(transactions);
})



//  filtered
filteredBtn.addEventListener('click', () => {
    const filterValue = Number(document.querySelector('.filter').value);
    transactions.filter(money => money > filterValue).map(test => {
        const testDiv = document.createElement('p');
        testDiv.textContent = `Greater value from ${filterValue} is ${test}`;
        return accountTransactions.append(testDiv)
    });
})