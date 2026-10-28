# Coding-agent evaluation workbench diagrams

These are owner-review drafts for the Coding Agent Evaluation Workbench case study. The Mermaid files are the editable source; the SVG files are static drafts integrated into the published case study at medium and larger breakpoints. They remain intentionally outside `public/`; the case study keeps a readable HTML fallback for narrow/mobile layouts.

Current placement:

- `coding-agent-evaluation-workflow.svg` — directly below the System architecture summary on medium and larger viewports.
- `coding-agent-evaluation-artifacts.svg` — below the workflow diagram as a compact evidence-map figure on medium and larger viewports.

On narrow/mobile viewports, the case study renders the accessible HTML diagrams instead so the content remains readable without requiring a wide visual canvas.

## Enterprise AI Workspace diagrams

The Enterprise AI Workspace case study uses publication-safe logical diagrams rather than internal infrastructure exports:

- `enterprise-ai-workspace-architecture.mmd` / `.svg` — application, hosting, persistence, integration, and capability boundaries.
- `enterprise-ai-workspace-retrieval.mmd` / `.svg` — approved content, retrieval preparation, vector persistence, and context retrieval.

These diagrams intentionally omit private topology, IAM policies, resource identifiers, schemas, retry behavior, monitoring coverage, and production guarantees.
