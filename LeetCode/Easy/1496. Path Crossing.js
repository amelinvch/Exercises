'use strict';

/**
 *@param {string} path
 @return {boolean}
 */

function isPathCrossing(path) {
    const array = [
        [0, 0],
    ];
    return addArray(array, path);
}

function addArray(array, path, i = 0) {
    pushCords(array, path, i);
    if (proverka(array, i)) {
        return true;
    } else
    if (i < path.length) {
        return addArray(array, path, ++i);
    } else {
        return false;
    }
}

function pushCords(array, path, i) {
    switch (path.slice(i - 1, i)) {
        case 'N':
            array.push([array[i - 1][0], array[i - 1][1] + 1]);
            break;
        case 'S':
            array.push([array[i - 1][0], array[i - 1][1] - 1]);
            break;
        case 'W':
            array.push([array[i - 1][0] + 1, array[i - 1][1]]);
            break;
        case 'E':
            array.push([array[i - 1][0] - 1, array[i - 1][1]]);
            break;
    }
}

function proverka(array, i) {
    for (let ind = 0; ind < array.length - 1; ind++) {
        if (array[ind][0] == array[i][0] && array[ind][1] == array[i][1]) {
            return true;
        }
    }

}

console.log(isPathCrossing('NES'));