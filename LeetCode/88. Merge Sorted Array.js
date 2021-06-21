const nums1 = [1, 2, 3, 0, 0, 0];
const m = 3;
const nums2 = [2, 5, 6];
const n = 3;

function merge(nums1, m, nums2, n) {
    let j = 0;
    for (let i = m; i < m + n; i++) {
        nums1[i] = nums2[j];
        j++;
    }

    function compareNumbers(a, b) {
        return a - b;
    }
    return nums1.sort(compareNumbers);
}
console.log(merge(nums1, m, nums2, n));