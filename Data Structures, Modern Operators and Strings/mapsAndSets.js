'use strict';

//      Sets
//  work without duplicate on iterable values arrays, strings, objects
// all values are unique
const orders = new Set(['pasta', 'pizza', 'tomato', 'pasta', 'garlic bread', 'tomato', 'risotto'])
console.log(orders);

const str = new Set('test');
console.log(str);

//      methods on SET
//  in set there are no index of value
orders.size(); // length
orders.has(); //true or false
orders.add(); // add value
orders.delete(); // remove value
orders.clear(); // remove all values