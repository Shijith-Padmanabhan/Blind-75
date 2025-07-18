// Course Schedule
// You are given an array prerequisites where prerequisites[i] = [a, b] indicates that you must take course b first if you want to take course a.

// The pair [0, 1], indicates that must take course 1 before taking course 0.

// There are a total of numCourses courses you are required to take, labeled from 0 to numCourses - 1.

// Return true if it is possible to finish all courses, otherwise return false.

// Example 1:

// Input: numCourses = 2, prerequisites = [[0,1]]

// Output: true
// Explanation: First take course 1 (no prerequisites) and then take course 0.

// Example 2:

// Input: numCourses = 2, prerequisites = [[0,1],[1,0]]

// Output: false
// Explanation: In order to take course 1 you must take course 0, and to take course 0 you must take course 1. So it is impossible.

// Constraints:

// 1 <= numCourses <= 1000
// 0 <= prerequisites.length <= 1000
// All prerequisite pairs are unique.


class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const preRequisiteMap = new Map();
        for(let i = 0; i < numCourses; i++) {
            preRequisiteMap.set(i, []);
        }
        for(const [crs, pre] of prerequisites) {
            preRequisiteMap.get(crs).push(pre);
        }
        const visited = new Set();

        const dfs = (course) => {
            if(visited.has(course)) return false;
            const preReq = preRequisiteMap.get(course);
            if(preReq.length === 0) return true

            visited.add(course);
            for(const pre of preReq) {
                if(!dfs(pre)) return false;
            }
            visited.delete(course);
            preRequisiteMap.set(course, []);
            return true;
        }
        for(let i = 0; i < numCourses; i++) {
            if(!dfs(i)){
                return false;
            }
        }
        return true;
    }
}

