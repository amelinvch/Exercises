'use strict';

/**
 *@param {string} path
 @return {boolean}
 */

function isPathCrossing(path) {
    const array = [];
    createArray(array, path);
    addArray(array, path);
    return array;

}

function createArray(array, path) {
    if (path.length > array.length) {
        let arr = [];
        for (let i = 0; i < path.length; i++) {
            arr.push('0');
            array.push(arr);
        }
    }
}

function addArray(array, path, i = 1) {
    console.log(path.slice(i - 1, i));
    if (i < path.length) {
        path.substr(i, path.length);
        return addArray(array, path, ++i);
    }
}

console.log(isPathCrossing('NEWE'));