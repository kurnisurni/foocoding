'use strict';

const values = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c', 'z', '3', 5];

function makeUnique(arr) {
    const filterArray = () => {
        return [...new Set(arr)]
    }
    return filterArray();
}

const uniqueValues = makeUnique(values);
console.log(uniqueValues);

// Do not change or remove anything below this line
module.exports = makeUnique;