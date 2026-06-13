// Depth First Search (DFS) implementation for AST instrumentation testing

const graph = {
  A: ["B", "C"],
  B: ["D"],
  C: ["E"],
  D: [],
  E: []
};

function dfs(node, visited = new Set()) {
  visited.add(node);
  console.log(node);

  for (const neighbor of graph[node]) {
    if (!visited.has(neighbor)) {
      dfs(neighbor, visited);
    }
  }
}

dfs("A");