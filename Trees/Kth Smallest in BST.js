// Kth Smallest Integer in BST
// Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) in the tree.

// A binary search tree satisfies the following constraints:

// The left subtree of every node contains only nodes with keys less than the node's key.
// The right subtree of every node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees are also binary search trees.
// Example 1:



// Input: root = [2,1,3], k = 1

// Output: 1
// Example 2:



// Input: root = [4,3,5,2,null], k = 4

// Output: 5
// Constraints:

// 1 <= k <= The number of nodes in the tree <= 1000.
// 0 <= Node.val <= 1000

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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        let n = 0;
        const dfs = (node) => {
            if(!node) return null;
            const left = dfs(node.left);
            if(left !== null ) return left;
            n++;
            if(n===k) {
                return node.val;
            }

            return dfs(node.right);
        }
        return  dfs(root);
    }
}
