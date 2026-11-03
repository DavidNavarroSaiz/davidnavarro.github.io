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

## Policy-Governed AI Agents diagrams

The Policy-Governed AI Agents case study uses generalized reliability diagrams rather than an employer workflow export:

- `policy-governed-agents-architecture.mmd` / `.svg` — model-assisted interpretation separated from deterministic operational control.
- `policy-governed-agents-sequence.mmd` / `.svg` — a generic verified-action lifecycle with clarification and escalation paths.

These sources intentionally omit private policies, workflow identifiers, API routes, payloads, tool names, regression datasets, and production metrics.

## Professional Cases diagrams

The Professional Cases case study uses current implementation evidence and separates remaining browser integration work:

- `professional-cases-ingestion-generation.mmd` / `.svg` — document and image ingestion, retrieval, clustering, LangGraph generation, and admin review.
- `professional-cases-evaluation-feedback.mmd` / `.svg` — authorized text runtime, rubric/spec validation, semantic evaluation, deterministic score assembly, safe failure paths, and the planned browser feedback boundary.

These sources intentionally omit user counts, provider guarantees, production deployment claims, audio/video support, and reward functionality that was not found in the implementation.

## AI Digital Twin diagrams

The AI Digital Twin case study uses publication-safe specifications grounded in owner-confirmed engineering activities because the named source repositories were unavailable during the evidence audit:

- `digital-twin-contextual-retrieval.mmd` / `.svg` — contextual records, metadata filtering, vector RAG, GraphRAG, combined retrieval, and evidence passed to answer generation.
- `digital-twin-retrieval-evaluation.mmd` / `.svg` — question-type comparison of vector RAG, GraphRAG, and combined retrieval with measured response time, DeepEval/LLM-as-evaluator review, and prompt refinement.

These sources intentionally omit private records, exact schemas, vector or graph-store products, entity-extraction rules, fusion behavior, automatic routing, deployment claims, metric names, scores, latency statistics, and benchmark charts.

## AI Agent Evaluation and Secure Execution diagrams

Stage 8B adds two publication-safe technical sources:

- `agent-evaluation-framework.mmd` / `.svg` — dataset preparation, reusable agent execution, evidence capture, selective metric evaluation, run comparison, and optional Opik inspection.
- `secure-agent-code-execution.mmd` / `.svg` — authenticated ownership, session and mount validation, managed interpreter execution, owner-scoped persistent storage, verified artifacts, and fail-closed behavior.

These diagrams intentionally omit private datasets, prompts, scores, resource identifiers, IAM policies, filesystem paths, credentials, account structure, and proprietary deployment topology. The secure-execution diagram explicitly preserves the residual limitation of a shared managed interpreter resource and shared execution role.
