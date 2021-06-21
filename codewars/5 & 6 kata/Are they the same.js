function comp(array1, array2) {
    function compareNumbers(a, b) {
        return a - b;
    }
    if (array1 && array2) {
        array1.sort(compareNumbers);
        array2.sort(compareNumbers);
        for (let i = 0; i < array1.length; i++) {
            if (Math.pow(array1[i], 2) !== array2[i]) { return false; }
        }
    } else if (!array1 || !array2) { return false; }
    return true;
}

const a1 = [121, 361, 361, 361, 14641, 20736, 20736, 25921, 1016064];
const a2 = [121, 361, 361, 14641, 20736, 20736, 25921, 36100];
console.log(comp(a1, a2));