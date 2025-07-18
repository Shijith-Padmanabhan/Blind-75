// Clone Graph
// Solved 
// Given a node in a connected undirected graph, return a deep copy of the graph.

// Each node in the graph contains an integer value and a list of its neighbors.

// class Node {
//     public int val;
//     public List<Node> neighbors;
// }
// The graph is shown in the test cases as an adjacency list. An adjacency list is a mapping of nodes to lists, used to represent a finite graph. Each list describes the set of neighbors of a node in the graph.

// For simplicity, nodes values are numbered from 1 to n, where n is the total number of nodes in the graph. The index of each node within the adjacency list is the same as the node's value (1-indexed).

// The input node will always be the first node in the graph and have 1 as the value.

// Example 1:



// Input: adjList = [[2],[1,3],[2]]

// Output: [[2],[1,3],[2]]
// Explanation: There are 3 nodes in the graph.
// Node 1: val = 1 and neighbors = [2].
// Node 2: val = 2 and neighbors = [1, 3].
// Node 3: val = 3 and neighbors = [2].

// Example 2:



// Input: adjList = [[]]

// Output: [[]]
// Explanation: The graph has one node with no neighbors.

// Example 3:

// Input: adjList = []

// Output: []
// Explanation: The graph is empty.

// Constraints:

// 0 <= The number of nodes in the graph <= 100.
// 1 <= Node.val <= 100
// There are no duplicate edges and no self-loops in the graph.

/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        const oldToNew = new Map();
        return this.dfs(node, oldToNew);
    }

    dfs(node, oldToNew) {
        if(!node) return null

        if(oldToNew.has(node)){
            return oldToNew.get(node)
        }

        const copy = new Node(node.val);
        oldToNew.set(node, copy);

        for(const nei of node.neighbors){
            copy.neighbors.push(this.dfs(nei, oldToNew));
        }

        return copy;
}
}
