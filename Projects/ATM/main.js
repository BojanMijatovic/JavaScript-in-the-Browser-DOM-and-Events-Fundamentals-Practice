const account = [{
    name: 'Alex',
    deposit: 2000,
    transactions: []
}]

const [{ name, deposit, transactions }] = account;

const amount = document.querySelector('.amount');
const addAmountBtn = document.querySelector('.add-amount');
const accountInfo = document.querySelector('.info');
const userName = document.querySelector('.username');
const accountTransactions = document.querySelector('.account');


addAmountBtn.addEventListener('click', () => {
    transactions.push(Number(amount.value));
    amount.value = '';
    console.log(transactions);

    accountTransactions.innerHTML = '';


    // print status
    transactions.forEach((money, id) => {
        const moneyDiv = document.createElement('div');
        moneyDiv.innerHTML = `<div>
                                                <p>${id + 1} - ${money}$</p>
                                              </div>`;
        accountTransactions.append(moneyDiv);
    })

    //  reduce
    const showTotal = () => {
        const test = transactions.reduce((acc, current) => acc + current, 0)
        return test;
    }


    accountInfo.innerHTML = ''
    account.map(user => {
        const info = document.createElement('div');
        info.innerHTML = `<div>
          <h3>Welcome ${user.name} you now have on account ${showTotal(deposit, Number(amount.value))}$</h3>
          </div>`
        accountInfo.append(info);
    })
})