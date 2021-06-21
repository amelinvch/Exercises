const smallerNumbersThanCurrent = function(nums) {
    let array = [];
    for (let i = 0; i < nums.length; i++) {
        let count = 0;
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] > nums[j]) {
                count++;
            }
        }
        array.push(count);
    }
    return array;
};

// var smallerNumbersThanCurrent = function(nums, j = 1) {
//     let result = new Array(nums.length).fill(0)
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] < nums[j]) {result[j]++;}
//                 if (nums[j] < nums[i]) {result[i]++;}

//         }
//     }
//     return result;

// };

console.log(smallerNumbersThanCurrent([4, 2, 3, 1]));