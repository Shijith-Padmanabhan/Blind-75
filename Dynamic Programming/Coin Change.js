// Coin Change
// You are given an integer array coins representing coins of different denominations (e.g. 1 dollar, 5 dollars, etc) and an integer amount representing a target amount of money.

// Return the fewest number of coins that you need to make up the exact target amount. If it is impossible to make up the amount, return -1.

// You may assume that you have an unlimited number of each coin.

// Example 1:

// Input: coins = [1,5,10], amount = 12

// Output: 3
// Explanation: 12 = 10 + 1 + 1. Note that we do not have to use every kind coin available.

// Example 2:

// Input: coins = [2], amount = 3

// Output: -1
// Explanation: The amount of 3 cannot be made up with coins of 2.

// Example 3:

// Input: coins = [1], amount = 0

// Output: 0
// Explanation: Choosing 0 coins is a valid way to make up 0.

// Constraints:

// 1 <= coins.length <= 10
// 1 <= coins[i] <= 2^31 - 1
// 0 <= amount <= 10000

class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        const dp = new Array(amount+1).fill(Infinity);
        dp[0] = 0;
        for(let i = 1; i <= amount; i++ ){
            for(let c = 0; c < coins.length; c++){
                if(i - coins[c] >= 0){
                    dp[i] = Math.min(dp[i], 1 + dp[i - coins[c]])
                }
            }
        }
        return dp[amount] < Infinity ? dp[amount] : -1
    }
}
