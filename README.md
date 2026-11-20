# Smart Route Finder – Algorithm Explorer

A browser-based Design and Analysis of Algorithms project that compares four shortest-path approaches on a weighted, undirected sample graph.

## Algorithms
- **Brute Force:** enumerates simple paths; exponential, for small graphs.
- **Dijkstra:** finds shortest paths for non-negative weights. This starter uses array-based selection, so its complexity is O(V² + E).
- **Bellman-Ford:** supports negative edges and detects reachable negative cycles.
- **A\*:** uses f(n)=g(n)+h(n). This starter sets h(n)=0 (admissible and consistent), so it behaves like Dijkstra. A meaningful heuristic needs suitable node coordinates and a lower-bound distance estimate.

## Structure
```text
Smart-Route-Finder/
├── index.html
├── style.css
├── script.js
├── algorithms/
│   ├── graph.js
│   ├── brute-force.js
│   ├── dijkstra.js
│   ├── bellman-ford.js
│   └── astar.js
├── assets/images/
└── README.md
```

## Run
1. Extract the ZIP and open the folder in VS Code.
2. Start `index.html` using the Live Server extension. ES modules require a local web server; do not open via `file://`.
3. Select start and destination, then click **Find routes**.

## Sample graph
A–B: 4, A–C: 2, B–D: 5, C–D: 8, C–E: 10, D–E: 2 km. A shortest route from A to E is A → B → D → E (11 km).

Operation counters are educational counts, not reliable execution-time benchmarks. All algorithms receive the same graph and endpoints.
## Deploy
Push the folder to a public GitHub repository. Go to Settings → Pages → Deploy from a branch → `main` → `/ (root)` → Save.
