let longestCommonPrefix = function(strs) {
    let result = "";
    for (let i = 0; i < strs[0].length; i++) {
        for (let j = 1; j < strs.length; j++) {
            const curr = strs[j];
            const prev = strs[j - 1];
            if (curr[i] !== prev[i] || curr[i] === undefined || prev[i] === undefined) { return result; }
        }
        result += strs[0][i];
    }
    return result;
};
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
// console.log(longestCommonPrefix(["flower", "flow", "flight"]));