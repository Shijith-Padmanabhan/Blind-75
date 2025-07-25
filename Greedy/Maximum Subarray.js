// Maximum Subarray
// Given an array of integers nums, find the subarray with the largest sum and return the sum.

// A subarray is a contiguous non-empty sequence of elements within an array.

// Example 1:

// Input: nums = [2,-3,4,-2,2,1,-1,4]

// Output: 8
// Explanation: The subarray [4,-2,2,1,-1,4] has the largest sum 8.

// Example 2:

// Input: nums = [-1]

// Output: -1
// Constraints:

// 1 <= nums.length <= 1000
// -1000 <= nums[i] <= 1000

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let maxSub = nums[0];
        let currSum = 0;
        for(let num of nums) {
            if(currSum < 0) currSum = 0;
            currSum += num;
            maxSub = Math.max(maxSub, currSum)
        }
        return maxSub
    }
}
