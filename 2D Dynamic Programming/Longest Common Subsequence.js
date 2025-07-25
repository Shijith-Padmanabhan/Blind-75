

// Longest Common Subsequence
// Given two strings text1 and text2, return the length of the longest common subsequence between the two strings if one exists, otherwise return 0.

// A subsequence is a sequence that can be derived from the given sequence by deleting some or no elements without changing the relative order of the remaining characters.

// For example, "cat" is a subsequence of "crabt".
// A common subsequence of two strings is a subsequence that exists in both strings.

// Example 1:

// Input: text1 = "cat", text2 = "crabt" 

// Output: 3 
// Explanation: The longest common subsequence is "cat" which has a length of 3.

// Example 2:

// Input: text1 = "abcd", text2 = "abcd"

// Output: 4
// Example 3:

// Input: text1 = "abcd", text2 = "efgh"

// Output: 0
// Constraints:

// 1 <= text1.length, text2.length <= 1000
// text1 and text2 consist of only lowercase English characters.

class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1, text2) {
        const dp = Array.from({length: text1.length + 1}, () => new Array(text2.length + 1).fill(0));
        for(let i = text1.length - 1; i >= 0; i-- ){
            for(let j = text2.length - 1; j >=0; j--){
                if(text1.charAt(i) === text2.charAt(j)){
                    console.log(i,j)
                    dp[i][j] = 1 + dp[i + 1][j + 1];
                }
                else {
                    dp[i][j] = Math.max(
                        dp[i][j + 1],
                        dp[i + 1][j]
                    )
                }
            }
        }
        return dp[0][0];
    }
}
