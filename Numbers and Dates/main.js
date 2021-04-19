const num1 = 2;
const num = 2.0;
// console.log(num === num1);
// console.log(0.1 + 0.2 === 0.3);
// console.log(0.1 + 0.2);



//  Type coercion

// console.log(typeof(23 + ''));
// console.log(+'23');



//  Parse int and float

let a = 1.3;
// console.log(Number.parseFloat(a));



//  MATH OBJECT

// Math max, min, PI
// round , trunc , ceil , floor , random , toFixed(2)


// console.log(Math.max(1, 2, 355, 6, 7, 8, 9));
// console.log(Math.min(1, 2, 355, 6, 7, 8, 9));


// Remainder Operator

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

arr.forEach((num, id) => {
    if (num % 2 === 0) {
        return console.log(`Num ${id + 1} is even`);
    } else if (num % 1 === 0) {
        return console.log(`Num ${id + 1} is odd`);
    }
})