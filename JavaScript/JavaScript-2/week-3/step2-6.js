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
    // return arr.reduce((acc, val) => acc.concat(val), []);
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(...arr[i]);
    }
}

function flattenArray3d(arr) {
    // arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenArray3d(val)) : acc.concat(val), []);
    const newArr = [];

    for (let i = 0; i < arr.length; i++) {
        newArr.push(...arr[i]);
    }
    return flattenArray2d(newArr);
}

console.log(flattenArray2d(arr2d)); // -> [1, 2, 3, 4, 5, 6]
console.log(flattenArray3d(arr3d)); // -> [1, 2, 3, 4, 5, 6, 7, 8]

// Do not change or remove anything below this line
module.exports = {
    flattenArray2d,
    flattenArray3d,
};