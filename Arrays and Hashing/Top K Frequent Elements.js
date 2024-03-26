
// Top K Frequent Elements
// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]

// Constraints:

// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104
// k is in the range [1, the number of unique elements in the array].
// It is guaranteed that the answer is unique.

/**
 * 
 * @param {*} nums 
 * @param {*} k 
 * @returns 
 */
const topKFrequent = (nums, k) => {
    const numMap = new Map();
    const arrayOfFrequency = new Array().fill(0);
    const output = [];

    nums.forEach(num => {
        const freq = numMap.get(num) || 0;
        numMap.set(num, freq+1);
    });

    for (const [num, freq] of numMap) {
        const prev = arrayOfFrequency[freq] || [];
        prev.push(num);
        arrayOfFrequency[freq] = prev;
    }

    arrayOfFrequency.reverse();
    
    for (const freqNums of arrayOfFrequency) {
        if(k >= 1) {
            if(freqNums) {
                for(const el of freqNums) {
                    output.push(el);
                    k--;
                }
            }
        }
        else {
            break;
        }
    }

    return output;
}