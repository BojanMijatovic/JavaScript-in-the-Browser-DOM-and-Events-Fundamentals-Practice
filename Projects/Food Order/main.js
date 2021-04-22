'use strict';

// buttons
const pizzaBtn = document.querySelector('.pizza');
const beerBtn = document.querySelector('.beer');
const hamburgerBtn = document.querySelector('.hamburger');
const totalBtn = document.querySelector('.total');
const sortBtn = document.querySelector('.sort');
const filterBtn = document.querySelector('.filter');

//  lists
const orderList = document.querySelector('.order-list');
const totalList = document.querySelector('.totalAmount');
const filterList = document.querySelector('.filter-list');

// inputs
const filterInput = document.querySelector('.filterPrice');

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
    orderList.innerHTML = '';
    items.forEach((item, id) => {
        const order = document.createElement('p');
        order.textContent = `${id + 1} You have ${item.orderedItem} on price ${item.priceTotal}$`;
        orderList.append(order);
    });
})


// total
const calcTotal = (orders) => orders.reduce((acc, current) => acc + current.priceTotal, 0);


//  sort by price
const sortByPrice = (orders) => orders.sort((a, b) => a.priceTotal - b.priceTotal);


// filter by price
const filterByPrice = (orders, price) => orders.filter(order => order.priceTotal > price);



// Event Listeners

// pizza
pizzaBtn.addEventListener('click', () => {
    orderItem(pizza, 1);
    showOrder(orders)
})


//  beer 
beerBtn.addEventListener('click', () => {
    orderItem(beer, 1);
    showOrder(orders)
})


//   show total 
totalBtn.addEventListener('click', () => {
    totalList.textContent = `${calcTotal(orders)}$`;
})


//  show sorted
sortBtn.addEventListener('click', () => {
    console.log(sortByPrice(orders));
    showOrder(orders);
})


//  show filtered 
filterBtn.addEventListener('click', () => {
    const filteredList = filterByPrice(orders, Number(filterInput.value));
    showOrder(filteredList)
})