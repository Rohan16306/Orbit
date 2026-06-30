# Graphify Quick Prompts

Use package name `graphifyy` (double `y`) for installation.

## 1) First Run (Build the graph)

Inside the project folder:

```powershell
C:\Users\Rohan\AppData\Local\Python\pythoncore-3.14-64\Scripts\graphify.exe update .
```

This generates/refreshes `./graphify-out` with `graph.json`, `graph.html`, and `GRAPH_REPORT.md`.

## 2) Handover Prompt (new AI session)

Use this when switching models/agents:

```text
I have a Graphify knowledge graph of this project stored in ./graphify-out.
Please reference graph.json and GRAPH_REPORT.md in that folder to understand
the project structure, dependencies, and logic. Do not re-scan raw files first;
use the graph as primary context.
```

## 3) Deep Query Prompts

- "Show me the end-to-end flow of how a user places an order, from React frontend to Spring Boot controller and database."
- "If I change backend AuthService logic, which frontend components or API routes are affected?"
- "Based on the graph, identify circular dependencies or God Nodes that should be split."
- "Give me a path from Login page to main dashboard, listing every function and file involved."

## 4) Set and Forget

- Cursor: use `.cursorrules` (already added in repo root)
- Claude: use `CLAUDE.md` (already added in repo root)
