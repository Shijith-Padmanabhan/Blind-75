// Graph Valid Tree
// Solved 
// Given n nodes labeled from 0 to n - 1 and a list of undirected edges (each edge is a pair of nodes), write a function to check whether these edges make up a valid tree.

// Example 1:

// Input:
// n = 5
// edges = [[0, 1], [0, 2], [0, 3], [1, 4]]

// Output:
// true
// Example 2:

// Input:
// n = 5
// edges = [[0, 1], [1, 2], [2, 3], [1, 3], [1, 4]]

// Output:
// false
// Note:

// You can assume that no duplicate edges will appear in edges. Since all edges are undirected, [0, 1] is the same as [1, 0] and thus will not appear together in edges.
// Constraints:

// 1 <= n <= 100
// 0 <= edges.length <= n * (n - 1) / 2

class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    dfs(visited, node, parent, adj) {
        for(const nei of adj[node]){
            if(nei === parent) continue;
            if(visited.has(nei)) return false;
            visited.add(nei);
            this.dfs(visited, nei, node, adj);
        }
    }
    validTree(n, edges) {
        if(edges.length > n - 1) return false;
        const adj = Array.from({length: n}, () => []);
        for(const [u,v] of edges) {
            adj[u].push(v);
            adj[v].push(u);
        }

        const visited = new Set();
        const node = 0;
        const parent = -1;
        visited.add(node);
        this.dfs(visited, node, parent, adj)
        console.log(visited)
        return visited.size === n;
    }
}
