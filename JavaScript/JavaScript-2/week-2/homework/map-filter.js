'use strict';

function doubleOddNumbers(numbers) {
    // Replace this comment and the next line with your code
    //filtered even numbers
    const oddNumber = numbers.filter((odd) => odd % 2 !== 0);
    //multiply the value to 2 using map
    numbers = oddNumber.map((double) => double * 2);
    return numbers;
}

const myNumbers = [1, 2, 3, 4];
console.log(doubleOddNumbers(myNumbers));

// Do not change or remove anything below this line
module.exports = {
    myNumbers,
    doubleOddNumbers,
};