// Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

// Note that the same word in the dictionary may be reused multiple times in the segmentation.

 

// Example 1:

// Input: s = "leetcode", wordDict = ["leet","code"]
// Output: true
// Explanation: Return true because "leetcode" can be segmented as "leet code".
// Example 2:

// Input: s = "applepenapple", wordDict = ["apple","pen"]
// Output: true
// Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
// Note that you are allowed to reuse a dictionary word.
// Example 3:

// Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
// Output: false
 

// Constraints:

// 1 <= s.length <= 300
// 1 <= wordDict.length <= 1000
// 1 <= wordDict[i].length <= 20
// s and wordDict[i] consist of only lowercase English letters.
// All the strings of wordDict are unique.

// My Solution
// /**
//  * @param {string} s
//  * @param {string[]} wordDict
//  * @return {boolean}
//  */
// var wordBreak = function(s, wordDict) {
//     let str = s;
//         for(const word of wordDict) {
//             while(str.includes(word)){
//                 str = str.replace(word, '');
//             }
//         }
//         return str.length === 0;
// };

 class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
        const dp = new Array(s.length + 1).fill(false);
        const sLength = s.length;
        dp[sLength] = true;
        for(let i = sLength; i >=0; i--){
            for(const word of wordDict){
                const wLength = word.length;
                if(
                    i + wLength <= sLength
                    && s.slice(i,i + wLength) === word
                ) {
                    dp[i] = dp[i + wLength];
                }
                if(dp[i]) break;
            }
        }
        return dp[0];
    }
}
