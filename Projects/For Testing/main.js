'use strict';

//  create rgb color
const randomRgb = () => Math.trunc(Math.random() * 266 + 1);

const randomColor = (str1, str2, str3) => `rgb(${str1()},${str2()},${str3()})`;


console.log(randomColor(randomRgb, randomRgb, randomRgb));