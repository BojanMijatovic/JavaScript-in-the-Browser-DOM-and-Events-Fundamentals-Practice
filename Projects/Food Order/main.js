'use strict';

const pizzaBtn = document.querySelector('.pizza');
const beerBtn = document.querySelector('.beer');
const hamburgerBtn = document.querySelector('.hamburger');
const totalBtn = document.querySelector('.total');
const orderList = document.querySelector('.order-list');

const orders = [];
const pizza = {
    name: 'pizza',
    price: 40
}



let orderedItems = 0;

const orderFood = (menuItem) => {
    const orderTest = document.createElement('p');
    orderTest.textContent = `You ordered ${menuItem.name} price is ${menuItem.price * (++orderedItems)}`;

    orderList.append(orderTest);
    orders.push({
        items: menuItem.name,
        price: menuItem.price * (orderedItems)
    })
}


// pizza
pizzaBtn.addEventListener('click', () => {
    orderFood(pizza);
    console.log(orders);
})

//  total 
totalBtn.addEventListener('click', () => {
    orderList.innerHTML = '';
    return orders.map(order => console.log(`You have ${order.items} and total is ${order.price}$`));
})

//  beer 
beerBtn.addEventListener('click', () => {
    const orderBeer = document.createElement('p');

})