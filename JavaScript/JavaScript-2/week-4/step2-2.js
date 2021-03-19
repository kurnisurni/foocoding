'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
    const numbers = [];

    for (let i = startIndex; i <= stopIndex; i++) { numbers.push(i); }

    numbers.forEach(number => {
        sayThree = threeCallback(number);
        sayFive = fiveCallback(number);

    });

}

function sayThree(number) {
    if (number % 3 == 0) {
        console.log('Say three!');
    }
}

function sayFive(number) {
    if (number % 5 == 0) {
        console.log('Say five!');
    }
}

threeFive(10, 15, sayThree, sayFive);

// Do not change or remove anything below this line
module.exports = threeFive;