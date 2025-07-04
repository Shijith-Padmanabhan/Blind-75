// Longest Palindromic Substring
// Solved 
// Given a string s, return the longest substring of s that is a palindrome.

// A palindrome is a string that reads the same forward and backward.

// If there are multiple palindromic substrings that have the same length, return any one of them.

// Example 1:

// Input: s = "ababd"

// Output: "bab"
// Explanation: Both "aba" and "bab" are valid answers.

// Example 2:

// Input: s = "abbc"

// Output: "bb"
// Constraints:

// 1 <= s.length <= 1000
// s contains only digits and English letters.



class Solution {
  /**
   * @param {string} s
   * @return {string}
   */
  longestPalindrome(s) {
    let res = "";
    let resLength = 0;

    for (let i = 0; i < s.length; i++) {
      //odd
      let r = i;
      let l = i;
      while (l >= 0 && r < s.length && s.charAt(l) === s.charAt(r)) {
        if (r - l > resLength) {
          res = s.substring(l, r + 1);
          resLength = r - l + 1;
        }
        l -= 1;
        r += 1;
      }
      //even
      r = i + 1;
      l = i;
      while (l >= 0 && r < s.length && s.charAt(l) === s.charAt(r)) {
        if (r - l > resLength) {
          res = s.substring(l, r + 1);
          resLength = r - l + 1;
        }
        l -= 1;
        r += 1;
      }
    }
    return res;
  }
}
