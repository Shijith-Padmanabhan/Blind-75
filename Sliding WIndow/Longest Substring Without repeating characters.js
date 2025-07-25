// Longest Substring Without Repeating Characters
// Given a string s, find the length of the longest substring without duplicate characters.

// A substring is a contiguous sequence of characters within a string.

// Example 1:

// Input: s = "zxyzxyz"

// Output: 3
// Explanation: The string "xyz" is the longest without duplicate characters.

// Example 2:

// Input: s = "xxxx"

// Output: 1
// Constraints:

// 0 <= s.length <= 1000
// s may consist of printable ASCII characters.

class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const uniqueString = new Set();
        let l = 0;
        let res = 0;
        for(let r = 0; r < s.length; r++){
            while(uniqueString.has(s[r])){
                uniqueString.delete(s[l]);
                l++;
            }
            uniqueString.add(s[r]);
            res = Math.max(res, r-l + 1);
        }
        return res;
    }
}
