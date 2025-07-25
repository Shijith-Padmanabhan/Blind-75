// Jump Game
// You are given an integer array nums where each element nums[i] indicates your maximum jump length at that position.

// Return true if you can reach the last index starting from index 0, or false otherwise.

// Example 1:

// Input: nums = [1,2,0,1,0]

// Output: true
// Explanation: First jump from index 0 to 1, then from index 1 to 3, and lastly from index 3 to 4.

// Example 2:

// Input: nums = [1,2,1,0,1]

// Output: false
// Constraints:

// 1 <= nums.length <= 1000
// 0 <= nums[i] <= 1000

class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    // dp
    // canJump(nums) {
    //     const n = nums.length;
    //     const dp = new Array(n).fill(false);
    //     dp[n-1] = true;
    //     for(let i = n - 2; i >= 0; i--){
    //         const end = Math.min(n, i + nums[i] + 1)
    //         for(let j = i; j < end; j++){
    //             if(dp[j]) {
    //                 dp[i] = true;
    //                 break;
    //             }
    //         }
    //     }
    //     return dp[0];
    // }
    // greedy
     canJump(nums) {
        let goal = nums.length - 1;
        for( let i = nums.length - 2; i >= 0; i-- ){
            if(i + nums[i] >= goal) {
                goal = i;
            }
        }
        return goal === 0;
     }
}
