//Group Anagrams.

// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:

// Input: strs = [""]
// Output: [[""]]
// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]

// Constraints:

// 1 <= strs.length <= 104
// 0 <= strs[i].length <= 100
// strs[i] consists of lowercase English letters.

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs, map = new Map()) {
    if (!strs.length) return [];
    createAnagramMap(strs, map);
    return [...map.values()];
};

const createAnagramMap = (strs, map) => {
    for (const og of strs) {
        const hashedVal = getHash(og);
        const values = map.get(hashedVal) || [];
        values.push(og);
        map.set(hashedVal, values);
    }
}

const getHash = og => {
    const freqArray = new Array(26).fill(0);
    for (const char of og) {
        const charCode = getCode(char);
        freqArray[charCode]++;
    }
    return freqArray.toString();
}

/**
 * Function to return charcode for char in integer
 * @param {*} char 
 * @returns 
 */
const getCode = char => char.charCodeAt(0) - 'a'.charCodeAt(0);