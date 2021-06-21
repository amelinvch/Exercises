//https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c/train/javascript

var maxSequence = function(arr) {
    if (arr.length == 0) {
        return 0;
    } else {
        let arrSum = [arr[0]];
        let maxSum = 0;
        for (let ind = 1; ind < arr.length; ind++) {
            for (let indSum = 0; indSum < arrSum.length; indSum++) {
                arrSum[indSum] += arr[ind];

                if (maxSum < arrSum[indSum]) {
                    maxSum = arrSum[indSum];
                }
            }
            arrSum.push(arr[ind]);
            if (maxSum < arr[ind]) {
                maxSum = arr[ind];
            }
        }
        if (maxSum <= 0) { return 0; }
        return maxSum;

    }
};
console.log(maxSequence([-11, -45, -47, 7, -41, 5, -15, -1, 22, -34, -18, 10, 2]));
// console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSequence([-1, -1, -1, -10]));
// console.log(maxSequence([]));