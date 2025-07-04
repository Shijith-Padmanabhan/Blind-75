// Climbing Stairs
// You are given an integer n representing the number of steps to reach the top of a staircase. You can climb with either 1 or 2 steps at a time.

// Return the number of distinct ways to climb to the top of the staircase.

// Example 1:

// Input: n = 2

// Output: 2
// Explanation:

// 1 + 1 = 2
// 2 = 2
// Example 2:

// Input: n = 3

// Output: 3
// Explanation:

// 1 + 1 + 1 = 3
// 1 + 2 = 3
// 2 + 1 = 3
// Constraints:

// 1 <= n <= 30
// O(n) time and space
class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        const dp = new Array(n).fill(-1);
        const dfs = (i) => {
            if( i >=n ) return i == n;
            if(dp[i] != -1) {
                return dp[i];
            }
            return dp[i] = dfs(i+1) + dfs(i+2);
        }
    return dfs(0)
    }
}

//Constant space
class ConstantSpaceSolution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        let first = 1;
        let second = 1;
        for(let i = 0; i < n; i++){
            let temp = second;
            second = first + second;
            first = temp;
        }
        return second;
    }
}