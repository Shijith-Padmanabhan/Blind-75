// Palindromic Substrings
// Given a string s, return the number of substrings within s that are palindromes.

// A palindrome is a string that reads the same forward and backward.

// Example 1:

// Input: s = "abc"

// Output: 3
// Explanation: "a", "b", "c".

// Example 2:

// Input: s = "aaa"

// Output: 6
// Explanation: "a", "a", "a", "aa", "aa", "aaa". Note that different substrings are counted as different palindromes even if the string contents are the same.

// Constraints:

// 1 <= s.length <= 1000
// s consists of lowercase English letters.

class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        let res = 0;
        for(let i = 0; i < s.length; i++){
            res += this.countPalindrome(s, i, i);
            res += this.countPalindrome(s, i, i+1);
        }
        return res;
    }
    countPalindrome = (s, l, r) => {
        let count = 0;
        while( l >= 0 && r < s.length && s[l] == s[r]  ) {
            count++;
            l -= 1;
            r += 1;
        }
        return count;
    }
}
