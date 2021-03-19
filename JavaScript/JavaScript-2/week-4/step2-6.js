'use strict';

const arr2d = [
    [1, 2],
    [3, 4],
    [5, 6]
];
const arr3d = [
    [
        [1, 2],
        [3, 4]
    ],
    [
        [5, 6],
        [7, 8]
    ]
];

function flattenArray2d(arr) {
    return arr.reduce((acc, val) => acc.concat(val), []);
}

function flattenArray3d(arr) {
    return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenArray3d(val)) : acc.concat(val), []);
}

console.log(flattenArray2d(arr2d)); // -> [1, 2, 3, 4, 5, 6]
console.log(flattenArray3d(arr3d)); // -> [1, 2, 3, 4, 5, 6, 7, 8]

// Do not change or remove anything below this line
module.exports = {
    flattenArray2d,
    flattenArray3d,
};