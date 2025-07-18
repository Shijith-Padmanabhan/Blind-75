
// Number of Islands
// Solved 
// Given a 2D grid grid where '1' represents land and '0' represents water, count and return the number of islands.

// An island is formed by connecting adjacent lands horizontally or vertically and is surrounded by water. You may assume water is surrounding the grid (i.e., all the edges are water).

// Example 1:

// Input: grid = [
//     ["0","1","1","1","0"],
//     ["0","1","0","1","0"],
//     ["1","1","0","0","0"],
//     ["0","0","0","0","0"]
//   ]
// Output: 1
// Example 2:

// Input: grid = [
//     ["1","1","0","0","1"],
//     ["1","1","0","0","1"],
//     ["0","0","1","0","0"],
//     ["0","0","0","1","1"]
//   ]
// Output: 4
// Constraints:

// 1 <= grid.length, grid[i].length <= 100
// grid[i][j] is '0' or '1'.


class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const rows = grid.length;
        const columns = grid[0].length;
        let islands = 0;
        for(let r = 0; r < rows; r++ ) {
            for(let c = 0; c < columns; c++) {
                if(grid[r][c] === '1'){
                    this.bfs(r, c, rows, columns, grid);
                    islands++;
                }
            }
        }
        return islands;
    }
    bfs(r,c, rows, columns, grid) {
        const directions = [[0,1], [0,-1], [1,0], [-1,0]];
        const q = new Queue;
        q.push([r,c]);
        grid[r][c] = '0';

        while(!q.isEmpty()) {
            const [row, col] = q.pop();
            for(const [dr,dc] of directions) {
                const nr = row + dr;
                const nc = col + dc;
                if(
                    nr >= 0
                    && nc >= 0
                    && nr < rows 
                    && nc < columns
                    && grid[nr][nc] === '1'
                ) {
                    q.push([nr,nc]);
                    grid[nr][nc] = '0';
                }
            }
        }
    }
}
