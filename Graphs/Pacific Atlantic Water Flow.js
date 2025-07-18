// Pacific Atlantic Water Flow
// You are given a rectangular island heights where heights[r][c] represents the height above sea level of the cell at coordinate (r, c).

// The islands borders the Pacific Ocean from the top and left sides, and borders the Atlantic Ocean from the bottom and right sides.

// Water can flow in four directions (up, down, left, or right) from a cell to a neighboring cell with height equal or lower. Water can also flow into the ocean from cells adjacent to the ocean.

// Find all cells where water can flow from that cell to both the Pacific and Atlantic oceans. Return it as a 2D list where each element is a list [r, c] representing the row and column of the cell. You may return the answer in any order.

// Example 1:



// Input: heights = [
//   [4,2,7,3,4],
//   [7,4,6,4,7],
//   [6,3,5,3,6]
// ]

// Output: [[0,2],[0,4],[1,0],[1,1],[1,2],[1,3],[1,4],[2,0]]
// Example 2:

// Input: heights = [[1],[1]]

// Output: [[0,0],[0,1]]
// Constraints:

// 1 <= heights.length, heights[r].length <= 100
// 0 <= heights[r][c] <= 1000


class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        const rows = heights.length;
        const columns = heights[0].length;
        const pacific = Array.from({ length: rows }, () => 
                  Array(columns).fill(false));
        const atlantic = Array.from({ length: rows }, () => 
                  Array(columns).fill(false));
        const dfs = (r, c, visit, previousHeight) => {
            const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
            if(
                r >= 0
                && c >= 0
                && r < rows
                && c < columns
                && !visit[r][c]
                && heights[r][c] >= previousHeight
            ) {
                visit[r][c] = true;
                for(const [dr, dc] of directions) {
                    const nc = c + dc;
                    const nr = r + dr;
                    dfs(nr, nc, visit, heights[r][c]);
                }

            }
        }

        for(let c = 0; c < columns; c++){
            //console.log(heights[1][0])
            dfs(0, c, pacific, heights[0][c]); // top
            dfs(rows - 1, c, atlantic, heights[rows - 1][c]) // bottom
        }

        for(let r = 0; r < rows; r++ ) {
            dfs(r, 0 , pacific, heights[r][0]); // left
            dfs(r, columns - 1, atlantic, heights[r][columns - 1]) // right
        }

        let res = [];
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < columns; c++) {
                if (pacific[r][c] && atlantic[r][c]) {
                    res.push([r, c]);
                }
            }
        }
        return res;
}
}