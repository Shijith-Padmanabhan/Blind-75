// Binary Tree Level Order Traversal
// Given a binary tree root, return the level order traversal of it as a nested list, where each sublist contains the values of nodes at a particular level in the tree, from left to right.

// Example 1:



// Input: root = [1,2,3,4,5,6,7]

// Output: [[1],[2,3],[4,5,6,7]]
// Example 2:

// Input: root = [1]

// Output: [[1]]
// Example 3:

// Input: root = []

// Output: []
// Constraints:

// 0 <= The number of nodes in both trees <= 1000.
// -1000 <= Node.val <= 1000


/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[][]}
     */
    levelOrder(root) {
        let result = [];
        if(!root) return result;
        const q = [root];

        while(q.length){
            let level = [];
            const length = q.length;
            for(let i = 0; i < length; i++){
                //console.log(q)
                let poppedNode = q.shift();
                if(poppedNode !== null) 
                {
                    level.push(poppedNode.val);
                    q.push(poppedNode.left);
                    q.push(poppedNode.right)
                };
            }
            if(level.length > 0) result.push(level)
        }
        return result;
    }
}
