'use strict';

const x = 9;

function f1(val) {
    val = val + 1;
    return val;
}

f1(x);

console.log(x);

const y = { x: 9 };

function f2(val) {
    val.x = val.x + 1;
    return val;
}

f2(y);

console.log(y);

// Add your explanation as a comment here
// f1 passed argument from x to val and print x out. But x type is const , that's why the result is 9.
// f2 passed argument from const y by using constructor val.x
// We can't change const value, but by using constructor can change the value of x and print out x:10