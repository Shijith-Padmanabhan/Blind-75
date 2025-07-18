// Subtree of Another Tree
// Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.

// A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be considered as a subtree of itself.

// Example 1:



// Input: root = [1,2,3,4,5], subRoot = [2,4,5]

// Output: true
// Example 2:



// Input: root = [1,2,3,4,5,null,null,6], subRoot = [2,4,5]

// Output: false
// Constraints:

// 0 <= The number of nodes in both trees <= 100.
// -100 <= root.val, subRoot.val <= 100


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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        if(!subRoot) return true;
        if(!root) return false;
        if(this.isSameTree(root,subRoot)) return true;
        return(
            this.isSubtree(root.left, subRoot)
            || this.isSubtree(root.right, subRoot)
        ) 
    }
    isSameTree(root,subRoot) {
        if(!root && !subRoot) return true;
        if(!root || !subRoot || subRoot.val !== root.val) return false;
        return (
            this.isSameTree(root.left, subRoot.left)
            && this.isSameTree(root.right, subRoot.right)
        )
    }

}
