  // Class Graph
class Graph {
  constructor(isDirected = false) {
    this.adjList = {};
    this.isDirected = isDirected;
  }

  // Add a vertex if it doesn't exist
  addVertex(vertex) {
    if (!this.adjList[vertex]) {
      this.adjList[vertex] = [];
    }
  }

  // Add an edge
  addEdge(v1, v2) {
    this.addVertex(v1);
    this.addVertex(v2);

    this.adjList[v1].push(v2);

    if (!this.isDirected) {
      this.adjList[v2].push(v1);
    }
  }

  // Remove an edge
  removeEdge(v1, v2) {
    this.adjList[v1] = this.adjList[v1].filter((v) => v !== v2);

    if (!this.isDirected) {
      this.adjList[v2] = this.adjList[v2].filter((v) => v !== v1);
    }
  }

  // Check if an edge exists
  hasEdge(v1, v2) {
    return this.adjList[v1]?.includes(v2) || false;
  }

  // Print the graph
  printGraph() {
    for (let vertex in this.adjList) {
      console.log(`${vertex} -> ${this.adjList[vertex].join(", ")}`);
    }
  }

  // Depth-First Search (DFS)
  dfs(start) {
    const visited = {};
    const result = [];

    const dfsHelper = (vertex) => {
      if (!vertex) return;
      visited[vertex] = true;
      result.push(vertex);

      this.adjList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          dfsHelper(neighbor);
        }
      });
    };

    dfsHelper(start);
    console.log("DFS:", result.join(" -> "));
  }

  // Breadth-First Search (BFS)
  bfs(start) {
    const visited = {};
    const queue = [start];
    const result = [];

    visited[start] = true;

    while (queue.length) {
      const vertex = queue.shift();
      result.push(vertex);

      this.adjList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }

    console.log("BFS:", result.join(" -> "));
  }
}




   //Testing the Graph


   // Undirected graph example
const graph = new Graph(false);

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");

console.log("Graph:");
graph.printGraph();

graph.dfs("A");
graph.bfs("A");