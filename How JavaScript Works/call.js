'use strict';

//   Call Stack and Execution contest

const name = 'John';

const first = () => {
    let a = 1;
    const b = second(7, 8);
    a = a + b;
    return a;
}

function second(x, y) {
    var c = 2;
    return c;
}

const x = first()