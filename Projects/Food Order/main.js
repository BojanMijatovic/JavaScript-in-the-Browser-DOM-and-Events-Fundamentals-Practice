'use strict';

const pizzaBtn = document.querySelector('.pizza');
const beerBtn = document.querySelector('.beer');
const hamburgerBtn = document.querySelector('.hamburger');
const totalBtn = document.querySelector('.total');
const orderList = document.querySelector('.order-list');
const totalAmount = document.querySelector('.totalAmount');

const orders = [];

const pizza = {
    name: 'pizza',
    price: 14
}

const beer = {
    name: 'beer',
    price: 4
}







//  order
const orderItem = (item, num) => {
    orders.push({
        orderedItem: item.name,
        priceTotal: item.price * (num++)
    })
}

//  show 
const showOrder = ((items) => {
    items.forEach((item, id) => console.log(` ${id + 1} You have ${item.orderedItem} on price ${item.priceTotal}$`))
})


// pizza
pizzaBtn.addEventListener('click', () => {
    orderItem(pizza, 1);
    console.log(orders);
    showOrder(orders)
    console.log(calcTotal(orders));
})



//  beer 
beerBtn.addEventListener('click', () => {
    orderItem(beer, 1);
    console.log(orders);
    showOrder(orders)
    console.log(calcTotal(orders));
})

//  total 
const calcTotal = (orders) => orders.reduce((acc, current) => acc + current.priceTotal, 0);

console.log(calcTotal(orders));

totalBtn.addEventListener('click', () => {
    return console.log(`Your total is ${calcTotal(orders)}`);
})