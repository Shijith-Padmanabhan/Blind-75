
// Valid Anagram.
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const map = new Map();
    const isEqual = s.length === t.length;
    if(!isEqual) return false;

    addToMap(s, map);
    substractFromMap(t, map);
    return checkMap(map);
};

const addToMap = (str, map) => {
    for(let char of str){
        const count = ( map.get(char) || 0) + 1;
        map.set(char, count);
    }
}

const substractFromMap = (str, map) => {
    for(let char of str){
        const c = map.get(char);
        if (!c) continue;
        const count = c - 1;
        map.set(char, count); 
    }
}

const checkMap = (map) => {
    for (let [char, count] of map){
        const isEqual = count === 0;
        if (!isEqual) return false;
    }
    return true
}