/**
 * https://leetcode.com/problems/two-sum-iv-input-is-a-bst/
 * 
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 *
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
*/

var findTarget = function(root, k) {
    let map = {};
    let flag = false;
  
    const aux = (node) => {
      if(node){
        if(map[k - node.val]){
          flag = true
          return
        }
        map[node.val] = true
        aux(node.left)
        aux(node.right)
      }
    }
  
    aux(root)
    return flag
};

console.log(findTarget([5, 3, 6, 2, 4, null, 7], 9));