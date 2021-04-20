// const num1 = 2;
// const num = 2.0;
// console.log(num === num1);
// console.log(0.1 + 0.2 === 0.3);
// console.log(0.1 + 0.2);



//  Type coercion

// console.log(typeof(23 + ''));
// console.log(+'23');



//  Parse int and float

// let a = 1.3;
// console.log(Number.parseFloat(a));



//  MATH OBJECT

// Math max, min, PI
// round , trunc , ceil , floor , random , toFixed(2)


// console.log(Math.max(1, 2, 355, 6, 7, 8, 9));
// console.log(Math.min(1, 2, 355, 6, 7, 8, 9));



// Remainder Operator

const num = BigInt(21313);
// console.log(num);
const s = Math.sqrt(Number(BigInt(16)));
// console.log(s);



//  DATES

// const date = new Date();
// console.log(date.getDate(), date.getDay(), date.toLocaleString());



//  TIMERS and INTERVAL TIMERS


setTimeout(() => {
    // console.log(`Pizza is ready`);
}, 1000);

setTimeout(() => {
    // console.log(`Test this`);
}, 1000);


const arr = ['name', 'lastName'];

setTimeout((n, l) => {
    console.log(`Now is little clear with set time out with ${n} and ${l}`);
}, 1000, ...arr);

// console.log(a = 2);

//  clear timer

const ingredients = ['tomato', 'olive'];
const makePizza = setTimeout((ing1, ing2) => {
    console.log(`Here is pizza with ${ing1} and ${ing2}`);
}, 2000, ...ingredients);

// if (ingredients.includes('olive')) {
//     clearTimeout(makePizza);
// }

let time = 70;




// INTERVAL
const int = setInterval(() => {
    let min = Math.trunc(time / 60);
    let sec = time % 60;
    // const date = new Date();
    // console.log(`${date.getSeconds()} , ${date.getMinutes()}`);
    // console.log(`${--time}`);
    time--;

    if (sec === 0 && min === 0) {
        min--;
        console.log(`End of time`);
        clearInterval(int);
    }

    console.log(`Min ${min}`);
    console.log(`Sec ${sec}`);
}, 1000);

// clearInterval(int);