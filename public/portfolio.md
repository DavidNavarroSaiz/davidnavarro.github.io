# David Navarro — Senior AI Engineer

> Machine-readable public portfolio profile. Use stable project IDs when referring to case studies.

## Professional summary

Senior AI Engineer specializing in production AI agents, LLM evaluation, AI platforms, retrieval infrastructure, and applied machine learning.

## Engineering specializations

- Production AI agents and agent orchestration
- AI evaluation, reliability, and reproducible experimentation
- RAG, vector retrieval, and document intelligence
- Applied machine learning and computer vision
- MLOps, cloud delivery, and technical leadership

## Public profile and CVs

- Website: [https://davidnavarrosaiz.github.io/davidnavarro.github.io](https://davidnavarrosaiz.github.io/davidnavarro.github.io)
- About: [https://davidnavarrosaiz.github.io/davidnavarro.github.io/about/](https://davidnavarrosaiz.github.io/davidnavarro.github.io/about/)
- Senior AI Engineer CV: [https://davidnavarrosaiz.github.io/davidnavarro.github.io/files/CV_DavidNavarro_Senior_AI_Engineer.pdf](https://davidnavarrosaiz.github.io/davidnavarro.github.io/files/CV_DavidNavarro_Senior_AI_Engineer.pdf)
- Senior AI Engineer — Evaluation & Research CV: [https://davidnavarrosaiz.github.io/davidnavarro.github.io/files/CV_DavidNavarro_Senior_AI_Engineer_Evaluation_Research.pdf](https://davidnavarrosaiz.github.io/davidnavarro.github.io/files/CV_DavidNavarro_Senior_AI_Engineer_Evaluation_Research.pdf)
- LinkedIn: [https://www.linkedin.com/in/david-navarro-19b91b198/](https://www.linkedin.com/in/david-navarro-19b91b198/)
- GitHub: [https://github.com/DavidNavarroSaiz](https://github.com/DavidNavarroSaiz)

## Experience history

- 7+ years represented in the current public data model.
- 5 distinct employers, 6 employment/client engagements, and 1 separate research entry.

### Employers and client engagements

#### Svitla Systems

##### Roadie client engagement

- Period: Nov 2025 – Present
- Employment period: Aug 2025 – Present
- Duration: 1+ year
- Status: current
- Location: Remote
- Context: Roadie workflows need to move from a natural-language request to a safe, observable backend action. The engineering challenge is preserving state and context while making authorization, confirmation, evidence, and recovery explicit at every operational boundary.
- Responsibilities:
  - Build and operate Roadie’s stateful conversational AI workflows through Svitla Systems, from LangGraph orchestration to verified backend actions.
  - Own authorization and confirmation boundaries, multilingual interaction, tool execution, governed responses, and recovery paths for operational customer interactions.
- Contributions:
  - Designed LangGraph state machines with deterministic eligibility rules, confirmation gates, authorized tools, and explicit transitions.
  - Built layered validation for action eligibility, tool-result verification, governed responses, timeout handling, retries, and recoverable failures.
  - Created evaluation datasets and repeatable experiments with retrieval ranking, RAGAS, DeepEval, Opik traces, and human-review scenarios.
  - Instrumented retrieved context, tool outcomes, and regression cases so failures could be diagnosed across interpretation, execution, and response.
- Technical decisions:
  - Kept policy and business rules deterministic so the model interprets requests without becoming the authority for irreversible actions.
  - Separated retrieval quality, agent behavior, safety, and response quality into inspectable evaluation concerns.
  - Used structured outcomes and recovery classification to distinguish a tool problem from a workflow problem.
- Technologies:
  - LangGraph
  - Python
  - RAGAS
  - DeepEval
  - Opik
  - Vector retrieval
  - Synthetic QA
- Evidence and scope: Designed, implemented, and shipped production AI agent workflows supporting operational customer interactions. Evaluation datasets, regression scenarios, and trace analysis guide the continued development of adjacent workflows.
- Outcomes:
  - Shipped scope: Roadie production agent workflows — Stateful conversational interaction, governed actions, evaluation experiments, and operational debugging.
- Related public projects:
  - Project 17 — Policy-Governed AI Agents: [https://davidnavarrosaiz.github.io/davidnavarro.github.io/projects/17/](https://davidnavarrosaiz.github.io/davidnavarro.github.io/projects/17/)
  - Project 20 — AI Agent Evaluation & Experimentation Framework: [https://davidnavarrosaiz.github.io/davidnavarro.github.io/projects/20/](https://davidnavarrosaiz.github.io/davidnavarro.github.io/projects/20/)

##### 360Training client engagement

- Period: Aug – Nov 2025
- Employment period: Aug 2025 – Present
- Duration: 4 months
- Status: completed
- Location: Remote
- Context: Proctoring behavior varies across people, cameras, and operating conditions. The system needed robust temporal signals and a reproducible way to compare models, tune edge cases, and move useful inference into a service and dashboard workflow.
- Responsibilities:
  - Led design and deployment of production-grade computer-vision and proctoring ML systems for a 360Training client engagement.
  - Own the experimentation and inference path across annotation, feature engineering, model comparison, Python services, and monitoring integration.
- Technical decisions:
  - Kept annotation, dataset versioning, feature engineering, and model evaluation explicit so improvements could be reproduced rather than attributed to a single score.
  - Combined temporal behavior with frame-level signals because isolated detections were not enough to represent proctoring context.
  - Used model comparison to choose an appropriate operating point for the workflow instead of assuming the most complex model was best.
- Technologies:
  - Python
  - Node.js
  - JavaScript
  - React
  - TypeScript
  - CVAT
  - DVC
  - MLflow
  - XGBoost
  - LightGBM
- Evidence and scope: The relevant proctoring workflow recorded 45% fewer false positives, 40% faster deployment, and 50% less model-selection time across the scoped experimental pipeline.
- Outcomes:
  - Scoped result: −45% false positives — Reported result from the relevant 360Training proctoring workflow.
  - Deployment: 40% faster — Reported workflow improvement.
  - Selection cycle: 50% less time — Reported reduction in model-selection time.
- Related public projects:
  - Project 10 — Industrial Computer Vision Systems: [https://davidnavarrosaiz.github.io/davidnavarro.github.io/projects/10/](https://davidnavarrosaiz.github.io/davidnavarro.github.io/projects/10/)

#### Kmeleon

##### Generative AI Engineer

- Period: Jan 2025 – Aug 2025
- Duration: 8 months
- Status: completed
- Location: Remote
- Context: The platform needed to support different agent configurations without creating a bespoke application for each workflow. The engineering challenge was to make orchestration, retrieval, integrations, approvals, infrastructure, and testing reusable while keeping the system understandable to the teams configuring it.
- Responsibilities:
  - Contribute to the architecture of configurable conversational and multi-agent systems, enterprise knowledge retrieval, Microsoft Teams integration, and Azure delivery.
  - Own infrastructure, vector-database administration, ingestion, MCP integration, and functional validation across the platform’s reusable engineering surface.
- Contributions:
  - Built multi-agent workflows with LangChain and PydanticAI, including memory, tools, and collaborative task handoffs.
  - Designed vector-backed ingestion and retrieval paths so configurable agents could work from shared enterprise knowledge rather than isolated prompts.
  - Integrated MCP servers and Microsoft Teams so agents could work through familiar enterprise channels.
  - Implemented the Azure DevOps MCP server operations and functional tests for creating, assigning, reading, and deleting work items, plus document-ingestion verification.
  - Administered vector-backed knowledge and ingestion paths, established Azure infrastructure and IaC, and contributed to maintainable LLMOps practices.
  - Contributed to human-in-the-loop approval flows and preparation of a reusable internal solution without representing it as a commercial Marketplace launch.
- Technical decisions:
  - Used typed configuration and explicit tool boundaries to keep agent variations composable instead of hard-coding each workflow.
  - Treated approvals and external integrations as first-class workflow steps rather than hidden prompt behavior.
  - Kept infrastructure definitions versioned with the platform so environment changes were reviewable.
- Technologies:
  - LangChain
  - PydanticAI
  - Azure AI
  - MCP
  - Microsoft Teams
  - LLMOps
  - Bicep
- Evidence and scope: Internal platform delivery with reusable enterprise foundations, Azure infrastructure, and functional tests that verified the exposed integration boundaries.
- Outcomes:
  - Platform scope: Configurable agent workflows — Reusable orchestration, integrations, approvals, and deployment foundations for enterprise use cases.
  - Time-to-deploy: < 1 hour — Reported platform outcome for customer setup; not a universal guarantee.
- Related public projects:
  - Project 1 — PM AI Agent: [https://davidnavarrosaiz.github.io/davidnavarro.github.io/projects/1/](https://davidnavarrosaiz.github.io/davidnavarro.github.io/projects/1/)
  - Project 12 — MCP Azure DevOps Server: [https://davidnavarrosaiz.github.io/davidnavarro.github.io/projects/12/](https://davidnavarrosaiz.github.io/davidnavarro.github.io/projects/12/)

#### Southdesk

##### Machine Learning Engineer

- Period: Apr 2024 – Jan 2025
- Duration: 10 months
- Status: completed
- Location: Remote
- Context: The engineering question was how AI could make business processes more intelligent, integrated, and efficient. I worked across extraction, candidate organization, semantic search, CRM integration, and automation so scattered information could move through repeatable workflows.
- Responsibilities:
  - Build AI-native business workflows for lead generation, qualification, outreach, reporting, recruitment, and customer operations.
  - Own integrations across semantic retrieval, enrichment, CRM automation, scraping, and delivery pipelines so business data becomes repeatable workflow input.
- Contributions:
  - Built lead-generation and qualification workflows, including cold-email and cold-call automation where supported by the engagement scope, outreach, and AI-generated monthly reporting.
  - Organized and enriched candidate data, then used semantic retrieval and ranking with Qdrant to find people whose experience was relevant to open positions.
  - Connected structured outputs to GoHighLevel CRM and workflow automation for recruitment, lead-generation, and customer operations.
  - Built web-scraping and data-extraction paths with Selenium, Apify, and n8n, with Azure Pipelines and FastAPI patterns for repeatable delivery.
- Technical decisions:
  - Separated extraction and enrichment from CRM actions so source data could be organized before automation changed a record.
  - Applied RAG and vector retrieval specifically to candidate search and recommendation, where relevant experience had to be found across distributed profiles.
  - Kept workflow components replaceable so outreach, reporting, recruitment, and lead operations could evolve without rewriting the retrieval layer.
- Technologies:
  - RAG
  - Qdrant
  - FastAPI
  - Azure Pipelines
  - GoHighLevel
  - Selenium
  - Apify
  - n8n
- Evidence and scope: Built and integrated repeatable business workflows for outreach, recruitment, reporting, and CRM operations, with the relevant project metrics retained in their original scope.
- Outcomes:
  - Delivery: 40% shorter deployment cycles — Reported in the existing project record alongside automated retrieval and CRM workflows.
  - Lead conversion: +2% — Reported outcome from the relevant lead-generation workflow.
- Related public projects:
  - Project 2 — Candidate Recommendation System: [https://davidnavarrosaiz.github.io/davidnavarro.github.io/projects/2/](https://davidnavarrosaiz.github.io/davidnavarro.github.io/projects/2/)
  - Project 5 — Automatic Lead Management: [https://davidnavarrosaiz.github.io/davidnavarro.github.io/projects/5/](https://davidnavarrosaiz.github.io/davidnavarro.github.io/projects/5/)
  - Project 6 — AI-Generated Monthly Reports: [https://davidnavarrosaiz.github.io/davidnavarro.github.io/projects/6/](https://davidnavarrosaiz.github.io/davidnavarro.github.io/projects/6/)
  - Project 7 — Lead Generation System: [https://davidnavarrosaiz.github.io/davidnavarro.github.io/projects/7/](https://davidnavarrosaiz.github.io/davidnavarro.github.io/projects/7/)

#### El Sol

##### Machine Learning Team Leader

- Period: Jun 2023 – Apr 2024
- Duration: 11 months
- Status: completed
- Location: Remote
- Context: The challenge was to make heterogeneous documents useful to staff while giving the team an operable path from infrastructure and ingestion to grounded outputs. The platform needed filtering, reranking, application interfaces, service integration, and deployment patterns the team could maintain.
- Responsibilities:
  - Lead a team delivering infrastructure architecture, backend services, document intelligence, retrieval, and cloud implementation for education and community workflows.
  - Own the path from heterogeneous ingestion and reranking to automatic form completion, personalized reports, healthcare-plan generation, deployment, and operational handoff.
- Contributions:
  - Led development of conversational AI and document-intelligence workflows with LangChain, FastAPI, React, TypeScript, and Node.
  - Implemented multi-format ingestion, vector retrieval, filters, and reranking for program guides and operational documents.
  - Connected Azure Speech and generated automatic forms, personalized reports, recommendations, and healthcare plans around retrieved knowledge.
  - Architected and provisioned AI services, then coordinated deployment through AKS, App Service, and Container Apps with CI/CD practices.
- Technical decisions:
  - Used retrieval filters and reranking to keep domain answers grounded in the right program context.
  - Built the application layer around the workflow staff already used instead of exposing a model-only interface.
  - Balanced delivery speed with operational ownership by standardizing deployment and monitoring patterns for the team.
- Technologies:
  - LangChain
  - FastAPI
  - React
  - PGVector
  - Azure Speech
  - AKS
  - CI/CD
- Evidence and scope: Team delivery across resource discovery and document workflows, including the existing records’ 160+ users, approximately 100 documents per month, and reported acceleration outcomes.
- Outcomes:
  - Users: 160+ — Users supported by the resource-discovery workflow.
  - Throughput: ~100 documents/month — Document-processing volume in the existing project record.
  - Resource discovery: 50% faster — Existing project record also reports 40% faster deployment cycles.
  - Deployment cycles: 40% acceleration — Reported outcome from the team’s MLOps and CI/CD work.
- Related public projects:
  - Project 6 — AI-Generated Monthly Reports: [https://davidnavarrosaiz.github.io/davidnavarro.github.io/projects/6/](https://davidnavarrosaiz.github.io/davidnavarro.github.io/projects/6/)
  - Project 8 — Healthcare Resource Recommender System: [https://davidnavarrosaiz.github.io/davidnavarro.github.io/projects/8/](https://davidnavarrosaiz.github.io/davidnavarro.github.io/projects/8/)
  - Project 9 — Community Health Workers Platform: [https://davidnavarrosaiz.github.io/davidnavarro.github.io/projects/9/](https://davidnavarrosaiz.github.io/davidnavarro.github.io/projects/9/)

#### Intecol SAS

##### Computer Vision Engineer & Team Lead

- Period: May 2019 – Apr 2023
- Duration: 4 years
- Status: completed
- Location: Colombia
- Context: Industrial vision has to work with real optics, illumination, hardware, throughput, maintenance, and plant interfaces. I moved between deterministic image processing, learned models, thermography, 3D sensing, edge execution, PLC/HMI integration, and the physical constraints that determine whether a system works outside the lab.
- Responsibilities:
  - Design industrial computer-vision systems from initial requirements through cameras, optics, illumination, models, plant interfaces, and delivery constraints.
  - Lead approximately ten engineers across architecture, requirements, project delivery, technical reviews, mentoring, and customer-facing constraints.
- Technical decisions:
  - Started with the physical scene and plant constraints because model quality cannot compensate for poor capture or an unusable installation.
  - Chose classical CV, deep learning, or a hybrid according to latency, variation, explainability, maintenance, and the cost of an operational error.
  - Used labeling and retraining loops to keep systems adaptable instead of treating delivery as a one-time model handoff.
- Technologies:
  - C#
  - C++
  - Python
  - PyTorch
  - TensorFlow
  - Keras
  - YOLO
  - OpenCV
  - PLC/HMI
  - Thermography
  - 3D laser
  - ToF cameras
- Evidence and scope: Industrial delivery across the reported project scope, with representative detection and false-alarm outcomes retained for the relevant systems.
- Outcomes:
  - Leadership: 10 engineers — Team leadership across architecture, delivery, and technical mentoring.
  - Delivery: 30+ industrial CV projects — Scope reported in the supplied professional background.
  - Reported outcomes: +30% detection · −45% false alarms — Representative results from relevant systems, not a universal claim across every project.
- Related public projects:
  - Project 10 — Industrial Computer Vision Systems: [https://davidnavarrosaiz.github.io/davidnavarro.github.io/projects/10/](https://davidnavarrosaiz.github.io/davidnavarro.github.io/projects/10/)
  - Project 22 — Industrial Machine Vision — Course & Practical Labs: [https://davidnavarrosaiz.github.io/davidnavarro.github.io/projects/22/](https://davidnavarrosaiz.github.io/davidnavarro.github.io/projects/22/)

### Research

#### Applied ML Researcher — COVID-Rx — University of Magdalena

- Period: 2020 – 2021
- Duration: 1 year
- Status: completed
- Location: Colombia
- Context: Comparing image classifiers required keeping data decisions, architecture-specific preprocessing, metrics, and user-facing interpretation separate. I built the workflow as an applied research system, not as a claim of clinical validation or deployment.
- Responsibilities:
  - Conduct applied research on public chest X-ray classification, keeping dataset preparation, preprocessing, model comparison, and interpretation explicit.
  - Build the experimental and application interfaces needed to inspect probability outputs and model behavior, with experiment tracking for repeatable comparison.
- Contributions:
  - Curated a working dataset of more than 36,000 public chest X-ray images across COVID-19, healthy, and pneumonia classes.
  - Trained and compared ten CNN families in PyTorch, including VGG19, DenseNet, MobileNet, EfficientNet, ResNet, and Xception.
  - Implemented preprocessing, augmentation, evaluation, model-comparison, and MLflow experiment-tracking paths for repeatable experiments.
  - Built PyQt desktop and Flask web interfaces for probability outputs and heatmap-based visual explanation.
- Technical decisions:
  - Compared multiple architectures rather than treating a single model score as the conclusion.
  - Kept preprocessing and evaluation choices explicit because they change what a model comparison means.
  - Presented heatmaps as model-behavior inspection, not evidence of clinical correctness.
- Technologies:
  - PyTorch
  - CNN
  - OpenCV
  - PyQt
  - Flask
  - MLflow
  - Medical imaging
  - Model evaluation
- Evidence and scope: Applied research prototype using public data; the reported 96% result is an experiment metric within this workflow, not a clinical performance claim.
- Outcomes:
  - Dataset: 36k+ chest X-rays — Public multi-class image sources used for the research workflow.
  - Comparison: 10 CNN architectures — Reported experiment scope across model families.
  - Reported result: 96% accuracy — Historical project result; this is an experiment metric, not clinical validation.
- Related public projects:
  - Project 3 — COVID-Rx Chest X-ray Classification Prototype: [https://davidnavarrosaiz.github.io/davidnavarro.github.io/projects/3/](https://davidnavarrosaiz.github.io/davidnavarro.github.io/projects/3/)
- Overlap note: Concurrent research project during the Intecol SAS tenure.

## Projects

### Project 1 — PM AI Agent

- Public URL: [https://davidnavarrosaiz.github.io/davidnavarro.github.io/projects/1/](https://davidnavarrosaiz.github.io/davidnavarro.github.io/projects/1/)
- Category: LLMs and RAG
- Published: Feb 2025
- Project period: Feb 2025 – Aug 2025
- Status: Public project record
- Role: AI Engineer & Developer
- Description: I built an AI project-management assistant that connected Microsoft Teams conversations with project knowledge and Azure DevOps actions. The team used it internally to organize work while we prepared the underlying infrastructure for possible distribution as a reusable offering; it was not a commercial marketplace launch.
- Problem: I wanted to reduce the manual coordination around questions that already had answers somewhere: who owns a task, what changed, which work is blocked, and what should happen after a meeting. A useful assistant had to connect knowledge with actions, not just summarize a document and leave the user to update the project by hand.
- Technologies: LangChain, AutoGen, FastAPI, Azure OpenAI, Microsoft Graph API, Microsoft Teams, PGVector, Azure Bot Framework, Docker, Application Insights
- Conceptual illustration:
  - Image URL: [https://davidnavarrosaiz.github.io/davidnavarro.github.io/_next/static/media/pm-ai-agent-system-architecture.71bf9b2c.webp](https://davidnavarrosaiz.github.io/davidnavarro.github.io/_next/static/media/pm-ai-agent-system-architecture.71bf9b2c.webp)
  - Alt text: Conceptual editorial illustration of PM AI Agent showing Microsoft Teams conversations, agent orchestration, enterprise knowledge retrieval, MCP project operations, and Azure DevOps integration; not a deployed-system screenshot.
  - Caption: Conceptual illustration — Microsoft Teams conversations, agent orchestration, enterprise knowledge retrieval, MCP project operations, and Azure DevOps integration. The factual architecture diagram below remains the technical source.
- Contributions:
  - Built a sophisticated PM Agent that integrates with Microsoft Teams and Bot Framework channels, providing AI-powered project management capabilities including natural language event creation, calendar management, and intelligent project assistance.
  - Implemented comprehensive calendar and meeting management features with Microsoft Graph API integration, including conflict detection, business hours validation, and automatic Teams meeting creation.
  - Developed document intelligence capabilities with vector search and retrieval, enabling teams to find and analyze project documents efficiently using PGVector and LangChain.
  - Established LLMOps best practices and architected a scalable, auditable Azure AI platform with Application Insights for centralized logging and monitoring.
- Implementation:
  - End-to-end architecture and infrastructure: I designed and implemented the system architecture, provisioned the Azure services, and set up the infrastructure as code.
  - Knowledge and ingestion infrastructure: I built the document ingestion workflows, administered the PGVector vector database, and organized the project, document, and conversation data behind retrieval.
  - Teams integration: I integrated the agent with Microsoft Teams, keeping it reachable through other Bot Framework channels.
  - MCP server and agent integration: I developed an MCP server exposing Azure DevOps tools — work-item retrieval, assignment reads, project-specific assignments for selected team members, deletion, and other implemented tools — and integrated the agent with it.
  - Calendar and meeting management: Microsoft Graph integration covers natural-language event creation, conflict detection, business-hours validation, and automatic Teams meeting creation.
  - Functional testing: I functionally tested the integrated system, including automated checks of the Azure DevOps integrations and the document infrastructure described under Evaluation and operations.
- Public evidence:
  - Prompt-driven tool tests: Automated functional tests submitted prompts to the agent requesting specific Azure DevOps operations and verified that the agent invoked the corresponding tools with real effects.
  - Creation and assignment verification: Tests verified that requested work items and project-specific assignments for selected team members were actually created.
  - Read and deletion checks: Tests verified task-reading operations against actual assignments and confirmed that deletions through the supported tools took effect.
  - Remaining tool coverage: The other exposed Azure DevOps tools were exercised through the same prompt-and-verify loop.
  - Document-ingestion verification: Automated tests for the RAG and document infrastructure verified that documents were successfully ingested.
  - Scope and limits: These tests verify functional behavior — that the requested operation actually happened. They are not benchmark evaluations: no retrieval-relevance metrics, formal datasets, production availability figures, or reliability guarantees are claimed.
- Related project IDs: 16, 19, 17, 14

### Project 2 — Candidate Recommendation System

- Public URL: [https://davidnavarrosaiz.github.io/davidnavarro.github.io/projects/2/](https://davidnavarrosaiz.github.io/davidnavarro.github.io/projects/2/)
- Category: LLMs and RAG
- Published: 2025
- Project period: 2025
- Status: Public project record
- Role: Machine Learning Engineer
- Description: Retrieval and LLM ranking over candidate profiles, returning shortlists with explanations for recruiters.
- Problem: Recruiters need to match a job description against hundreds of candidate profiles without losing the reasoning behind a shortlist.
- Technologies: Python, FastAPI, Streamlit, Qdrant, LangChain, LLMs, Vector Search, RAG, Docker, CI/CD
- Conceptual illustration:
  - Image URL: [https://davidnavarrosaiz.github.io/davidnavarro.github.io/_next/static/media/candidate-recommendation-editorial-cover.a692f72c.webp](https://davidnavarrosaiz.github.io/davidnavarro.github.io/_next/static/media/candidate-recommendation-editorial-cover.a692f72c.webp)
  - Alt text: Conceptual editorial illustration of semantic candidate recommendation showing a job brief, candidate knowledge base, vector retrieval, structured comparison, ranked recommendations, and supporting evidence; not genuine candidate records or experimental rankings.
  - Caption: Conceptual illustration — semantic retrieval, structured candidate comparison, ranked recommendations, and supporting evidence. The depicted records and rankings are illustrative, not experimental results.
- Contributions:
  - Built a comprehensive RAG system processing 700+ professional resumes and job descriptions, implementing vector search with Qdrant and LLM enrichment to extract metadata and improve candidate matching accuracy.
  - Developed intelligent candidate ranking algorithm that analyzes job descriptions, processes candidate profiles, and provides top 10-20 ranked candidates with detailed explanations of strengths and weaknesses for HR decision-making.
  - Implemented FastAPI backend with Streamlit frontend for seamless user experience, enabling HR managers to input job descriptions and receive intelligent candidate recommendations with filtering capabilities.
  - Established CI/CD pipeline reducing deployment time by 40% and enabling faster iterations, improving system responsiveness and allowing rapid feature deployment for the candidate recommendation platform.

### Project 3 — COVID-Rx Chest X-ray Classification Prototype

- Public URL: [https://davidnavarrosaiz.github.io/davidnavarro.github.io/projects/3/](https://davidnavarrosaiz.github.io/davidnavarro.github.io/projects/3/)
- Category: Computer Vision
- Published: Dec 2020
- Project period: Dec 2020 – Nov 2021
- Status: Public project record
- Role: COVID-Rx Diagnosis CV Engineer
- Description: I built a research and application workflow for comparing ten CNN families on a public chest X-ray classification task, then exposed the selected experiments through both a PyQt desktop interface and a Flask web interface. The project combined dataset preparation, repeatable preprocessing, model comparison, probability outputs, and visual explanation.
- Problem: Comparing image classifiers is not only a matter of choosing a larger network. Data sources, class balance, resize policy, normalization, model family, training configuration, evaluation metrics, and user-facing interpretation all affect what the comparison means. I needed a workflow that could register experiments and make model behavior inspectable without presenting it as a clinical diagnostic device.
- Technologies: PyTorch, Python, PyQt, OpenCV, Flask, VGG19, DenseNet, MobileNet, AlexNet, EfficientNet, InceptionV3, ResNet, Xception, CNN, Deep Learning
- Conceptual illustration:
  - Image URL: [https://davidnavarrosaiz.github.io/davidnavarro.github.io/_next/static/media/covid-rx-editorial-cover.6230062f.webp](https://davidnavarrosaiz.github.io/davidnavarro.github.io/_next/static/media/covid-rx-editorial-cover.6230062f.webp)
  - Alt text: Conceptual editorial illustration for COVID-Rx showing chest X-ray preprocessing, convolutional feature extraction, CNN model families, and comparative evaluation; not a clinical screenshot or measured benchmark chart.
  - Caption: Conceptual illustration — chest X-ray preprocessing, CNN feature extraction, and comparative evaluation. Embedded charts are illustrative, not experimental results.
- Contributions:
  - Curated a comprehensive dataset of 36k+ chest X-ray images from multiple sources including 10,000+ COVID-19 cases, 15,000+ healthy cases, and 11,000+ pneumonia cases, ensuring robust model training.
  - Trained and benchmarked 10 state-of-the-art CNN architectures (VGG19, DenseNet, MobileNet, AlexNet, EfficientNet, InceptionV3, ResNet, RexNet, Inception-ResNet, Xception) achieving >90% accuracy in COVID-19 detection.
  - Developed dual-interface prototype: PyQt desktop application and Flask web application, enabling users to upload X-ray images and inspect model probabilities for the evaluated classes.
  - Implemented explainability features with heatmap visualizations showing image regions associated with model output, providing an inspection aid without claiming clinical decision support or diagnostic validity.
- Technical decisions:
  - Separate comparison from clinical claims: A reported accuracy figure belongs to the project experiment and dataset context. It is not a clinical validation claim, deployment approval, or evidence that the system can replace a radiologist.
  - Use heatmaps as an inspection aid: CAM-family maps can reveal whether the model appears to use plausible image regions, but remain an interpretability aid and not a guarantee that the prediction is correct.
- Implementation:
  - Make the data policy explicit: I treated the public sources, class composition, image dimensions, normalization, and dataset preparation as part of the experiment definition. A metric is meaningful only in the context of the data policy that produced it.
  - Compare model families under a shared interface: The project brought ten CNN families into one PyTorch application flow so architecture changes could be compared through the same prediction and presentation path.
  - Register metrics instead of relying on memory: Experiment tracking was part of the owner-reported workflow, including MLflow. I do not invent a leaderboard, split strategy, or exact metric table that is not present in the public source.
  - Connect inference to an inspectable interface: The desktop and web interfaces expose probabilities and heatmaps so a user can inspect the output instead of receiving an opaque class label.
- Public evidence:
  - Public dataset scope: The public README describes more than 10,000 COVID-19 images, more than 15,000 healthy images, and more than 11,000 pneumonia images, for roughly 36,000 images in total.
  - Ten architectures retained: The implementation reference includes VGG19, DenseNet, MobileNet, AlexNet, EfficientNet, InceptionV3, ResNet, RexNet, Inception-ResNet, and Xception.
  - Existing project metric: The existing portfolio record reports more than 90% accuracy for the selected experiments. Because the public source does not provide a complete comparison table and split protocol, this is not presented as a clinical result or model ranking.
- Limitations and scope:
  - Research and application prototype: The project demonstrates model comparison and interface behavior. It does not establish clinical validation, regulatory approval, prospective performance, or safe use as a diagnostic service.
  - Public evidence is incomplete: The public repository does not expose a complete MLflow configuration, run registry, split protocol, or full metric table, so those details remain intentionally bounded.
- Evidence links:
  - Public source repository: [https://github.com/DavidNavarroSaiz/CovidRX_Interface](https://github.com/DavidNavarroSaiz/CovidRX_Interface)

### Project 4 — AbogacIA - AI Legal Platform

- Public URL: [https://davidnavarrosaiz.github.io/davidnavarro.github.io/projects/4/](https://davidnavarrosaiz.github.io/davidnavarro.github.io/projects/4/)
- Category: LLMs and RAG
- Published: 2025
- Status: In Development
- Description: I shaped AbogacIA as a domain-aware professional knowledge and writing assistant for Colombian legal work. It combines document ingestion, semantic retrieval, similar-case discovery, context-aware questions, and drafting support so a lawyer can work from relevant sources instead of starting from an empty page.
- Problem: Legal work requires more than a generic chat response: the assistant needs to retrieve relevant sentences, codes, constitutional material, and regulations, then keep the user’s case context in view while suggesting sources or draft content. The system is an assistive workflow, not an autonomous legal decision-maker and not a guarantee of legal correctness.
- Technologies: Python, FastAPI, MongoDB, Chroma, Vector Database, Graph Database, LangChain, LangGraph, Selenium, OpenAI, RAG, Web Scraping
- Conceptual illustration:
  - Image URL: [https://davidnavarrosaiz.github.io/davidnavarro.github.io/_next/static/media/abogacia-editorial-cover.8f93caba.webp](https://davidnavarrosaiz.github.io/davidnavarro.github.io/_next/static/media/abogacia-editorial-cover.8f93caba.webp)
  - Alt text: Conceptual editorial illustration for AbogacIA showing legal knowledge retrieval, related cases, and assisted document drafting; not an actual legal-system architecture diagram or legal advice.
  - Caption: Conceptual illustration — legal retrieval, case context, and drafting support. It does not represent proprietary system state or guarantee legal correctness.
- Contributions:
  - Automatic Legal Document Analysis: When users upload case documents and descriptions, the system automatically identifies relevant regulations, rights, and specific articles that may be violated or related to the case.
  - Similar Case Recommendations: Provides lawyers with a comprehensive view of similar judicial sentences and precedents, helping them understand how similar cases were resolved in the past.
  - Intelligent Q&A System: Enables lawyers to ask questions about their case, recommended cases, or legal regulations, receiving accurate answers powered by RAG and LangGraph technology.
  - Document Generation: Allows construction of legal documents based on collected information, case analysis, and relevant regulations, streamlining the document creation process.
  - Advanced Database Architecture: Implemented vector database (Chroma) for semantic search and similarity matching, and graph database for complex legal relationships and precedent connections, enabling sophisticated legal document retrieval and analysis.
- Technical decisions:
  - Use retrieval as evidence support: The architecture emphasizes potentially relevant source material and similar cases rather than implying that an LLM can independently determine the correct legal outcome.
  - Treat other domains as a direction: The retrieval-and-context pattern could be adapted to medicine or psychology in principle, but those extensions are conceptual and do not represent implemented or validated domain capabilities here.
- Implementation:
  - Retrieve before writing: The assistant first looks for potentially relevant legal documents, cases, regulations, rights, and articles so drafting can begin from a source-aware context.
  - Keep case context visible: Uploaded documents, user descriptions, questions, retrieved passages, and similar cases form the working context for the professional workflow.
  - Separate support from decision-making: The system helps research, compare, explain, and draft. A lawyer still reviews sources, interprets the law, and decides what belongs in a final document.
- Public evidence:
  - Implemented prototype scope: The existing project record documents legal-source ingestion, semantic retrieval, similar-case recommendations, Q&A, document generation, Chroma, graph-oriented data, and LangGraph orchestration.
  - Professional review remains central: The public case describes an assistive research and writing workflow, not legal advice, guaranteed correctness, regulatory compliance, or an autonomous decision system.
- Limitations and scope:
  - No correctness guarantee: Retrieval and generated drafts can be incomplete, outdated, or wrong. A qualified professional must verify sources, interpretation, and final wording.
  - Cross-domain work is conceptual: Nothing in this case establishes medical or psychological diagnosis, treatment guidance, or validated deployment outside the documented legal domain.

### Project 5 — Automatic Lead Management

- Public URL: [https://davidnavarrosaiz.github.io/davidnavarro.github.io/projects/5/](https://davidnavarrosaiz.github.io/davidnavarro.github.io/projects/5/)
- Category: AI Automation
- Published: 2025
- Status: Active Development
- Description: Lead capture and outreach across email and SMS, with HubSpot sync and GPT-written replies.
- Technologies: Python, FastAPI, HubSpot, Twilio, OpenAI, SMTP, GPT, CRM Integration, Lead Generation, Email Automation
- Conceptual illustration:
  - Image URL: [https://davidnavarrosaiz.github.io/davidnavarro.github.io/_next/static/media/automatic-lead-management-editorial.fef6459f.webp](https://davidnavarrosaiz.github.io/davidnavarro.github.io/_next/static/media/automatic-lead-management-editorial.fef6459f.webp)
  - Alt text: Conceptual editorial illustration of automatic lead management showing lead sources, AI orchestration, CRM integration, automated email/SMS communication, and assignment stages; not a screenshot or actual customer records.
  - Caption: Conceptual illustration — lead capture, GPT-assisted communication, CRM actions, and lifecycle stages. It is not a screenshot or actual customer data.
- Contributions:
  - FastAPI Backend: Built a modern web framework for handling HTTP requests and responses efficiently, providing robust API endpoints for lead generation and processing.
  - Multi-Channel Communication: Integrated Twilio for SMS messaging and SMTP for email communication, enabling real-time communication with leads across multiple channels.
  - HubSpot CRM Integration: Seamlessly integrated with HubSpot CRM API to manage lead data, including creation, retrieval, updating, and deletion of contacts for comprehensive lead management.
  - GPT-Powered Automation: Incorporated OpenAI GPT for creating automatic and personalized responses to emails and SMS, analyzing lead inquiries and generating relevant and engaging responses to enhance lead interaction.

### Project 6 — AI-Generated Monthly Reports

- Public URL: [https://davidnavarrosaiz.github.io/davidnavarro.github.io/projects/6/](https://davidnavarrosaiz.github.io/davidnavarro.github.io/projects/6/)
- Category: AI Automation
- Published: 2025
- Status: Production
- Description: Automated reporting pipeline that collects a month of property data and drafts client-ready documents in Google Docs.
- Technologies: Make.com, OpenAI, Google Sheets, Google Drive, Google Docs, CircleBack, Fireflies, Zapier, Email Automation, Report Generation, Data Processing, LLMs
- Conceptual illustration:
  - Image URL: [https://davidnavarrosaiz.github.io/davidnavarro.github.io/_next/static/media/ai-generated-monthly-reports-editorial.11d6c44d.webp](https://davidnavarrosaiz.github.io/davidnavarro.github.io/_next/static/media/ai-generated-monthly-reports-editorial.11d6c44d.webp)
  - Alt text: Conceptual editorial illustration of AI-generated monthly reports showing source materials, structured extraction, report generation, and publishing workflow; not an actual client report or measured result.
  - Caption: Conceptual illustration — source-material collection, structured processing, monthly report generation, and document publishing. It is not an actual client report or measured result.
- Contributions:
  - Automated Data Collection: Built comprehensive system that automatically collects property data including emails (stored in Google Sheets), photos (uploaded to Google Drive), meeting summaries (generated via CircleBack and Fireflies), and event descriptions throughout the month.
  - AI-Powered Report Generation: Created intelligent system using LLMs to process all collected data and automatically generate comprehensive monthly property reports with proper formatting and client-ready presentation.
  - Google Docs Integration: Implemented automated report upload to Google Docs with proper formatting, enabling seamless document sharing and client presentation while maintaining professional standards.
  - Workflow Optimization: Designed automation workflows that reduce manual processing time by 80%, allowing property managers to focus on evaluation and improvement of final reports rather than data collection and formatting.

### Project 7 — Lead Generation System

- Public URL: [https://davidnavarrosaiz.github.io/davidnavarro.github.io/projects/7/](https://davidnavarrosaiz.github.io/davidnavarro.github.io/projects/7/)
- Category: AI Automation
- Published: 2025
- Status: Production
- Description: Self-hosted n8n workflows that identify ideal customer profiles, enrich company data, and run personalized cold-email campaigns.
- Technologies: n8n, Apollo, Smartleads, Selenium, OpenAI, GoHighLevel, Web Scraping, Lead Generation, Cold Email, Data Extraction, ICP Identification, Email Automation
- Conceptual illustration:
  - Image URL: [https://davidnavarrosaiz.github.io/davidnavarro.github.io/_next/static/media/lead-generation-system-editorial.16193f15.webp](https://davidnavarrosaiz.github.io/davidnavarro.github.io/_next/static/media/lead-generation-system-editorial.16193f15.webp)
  - Alt text: Conceptual editorial illustration of a lead generation system showing ICP discovery, company research, and outreach/CRM handoff; not a screenshot or actual prospect data.
  - Caption: Conceptual illustration — ICP discovery, company research, personalized outreach, and CRM handoff. It is not a screenshot or actual prospect data.
- Contributions:
  - Self-Hosted n8n Platform: Implemented and configured self-hosted n8n automation platform within the company infrastructure, providing complete control over automation workflows and data processing.
  - Apollo ICP Extraction: Built automated workflows to extract potential Ideal Customer Profiles from Apollo database, identifying high-value prospects based on company size, industry, and other relevant criteria.
  - Company Data Scraping: Developed Selenium-based automation to scrape company websites and extract relevant business information, then used LLMs to process and structure the data for personalized outreach.
  - Smartleads Cold Email Integration: Created AI-powered email generation system that produces personalized subject lines and email bodies, automatically sending targeted outreach via Smartleads and pushing qualified leads to GoHighLevel CRM upon response.

### Project 8 — Healthcare Resource Recommender System

- Public URL: [https://davidnavarrosaiz.github.io/davidnavarro.github.io/projects/8/](https://davidnavarrosaiz.github.io/davidnavarro.github.io/projects/8/)
- Category: LLMs and RAG
- Published: 2024
- Project period: 2024
- Status: Public project record
- Role: Machine Learning Team Leader
- Description: Permissions-aware resource hub with RAG search, built for community health workers and their teams.
- Technologies: React, FastAPI, LangChain, LangSmith, PGVector, Redis, RabbitMQ, Azure Bicep, Azure OpenAI, RAG, Vector Search, CI/CD
- Conceptual illustration:
  - Image URL: [https://davidnavarrosaiz.github.io/davidnavarro.github.io/_next/static/media/healthcare-resource-recommender-editorial.c5cca132.webp](https://davidnavarrosaiz.github.io/davidnavarro.github.io/_next/static/media/healthcare-resource-recommender-editorial.c5cca132.webp)
  - Alt text: Conceptual editorial illustration of a permission-aware healthcare resource recommender showing multimodal resources, semantic context, and role-aware retrieval; not a patient record or clinical recommendation.
  - Caption: Conceptual illustration — multimodal resource ingestion, semantic retrieval, and permission-aware access for healthcare teams. It does not represent a patient record or a clinical recommendation.
- Contributions:
  - Permissions-Aware Platform: Built tiered-access system where CHWs and staff can upload/consume resources based on user roles and plans, ensuring appropriate content access and security controls for different organizational levels.
  - Advanced RAG Implementation: Applied sophisticated RAG tactics including query rewriting, sub-queries, filters, document research tasks, and reranking to deliver 50% faster resource discovery compared to manual filters and search, serving 160+ active users.
  - Document Processing Pipeline: Delivered automated pipeline handling ~100 documents/month with LLM-based analysis and insight generation, enabling continuous content updates and intelligent resource recommendations for new and updated materials.
  - Infrastructure & CI/CD: Implemented Azure Bicep for three isolated environments (dev/QA/prod) with comprehensive Azure Pipelines including tests, evaluations, linting, and quality gates, accelerating release cycles by 40% through automated deployment processes.

### Project 9 — Community Health Workers Platform

- Public URL: [https://davidnavarrosaiz.github.io/davidnavarro.github.io/projects/9/](https://davidnavarrosaiz.github.io/davidnavarro.github.io/projects/9/)
- Category: LLMs and RAG
- Published: 2024 – 2025
- Project period: 2024 – 2025
- Status: Public project record
- Role: Machine Learning Team Leader
- Description: Speech-to-forms assistant that transcribes home visits and drafts structured reports and care plans.
- Technologies: FastAPI, Azure Language Services, Azure OpenAI, Python, LLMs, Speech Recognition, Azure Bicep, Azure Container Registry, Azure Key Vault, CI/CD, Form Automation, Report Generation
- Conceptual illustration:
  - Image URL: [https://davidnavarrosaiz.github.io/davidnavarro.github.io/_next/static/media/community-health-workers-editorial.aafa623c.webp](https://davidnavarrosaiz.github.io/davidnavarro.github.io/_next/static/media/community-health-workers-editorial.aafa623c.webp)
  - Alt text: Conceptual editorial illustration of a community health workers platform showing speech-to-form capture, visit reports, contextual data access, and care-plan drafting; not an actual patient record or clinical outcome.
  - Caption: Conceptual illustration — speech-to-form capture, structured visit reporting, contextual access, and care-plan drafting. It is not an actual patient record or clinical outcome.
- Contributions:
  - Speech-to-Forms Automation: Built real-time assistant using Azure Cognitive Services (Speech) to transcribe conversations during home visits, with LLMs extracting structured fields to automatically populate dynamic forms, eliminating manual data entry.
  - Intelligent Report Generation: Developed LLM-powered system that analyzes conversation data and stored patient information to automatically generate comprehensive visit reports and personalized care plans for each individual, significantly reducing drafting time.
  - Secure Data Orchestration: Implemented FastAPI backend with secure access to user and context data from the application, ensuring data privacy while enabling intelligent form enrichment and report generation.
  - Infrastructure & CI/CD: Implemented Azure Bicep for multi-environment deployment with comprehensive Azure Pipelines including tests, evaluations, linting, and quality gates, accelerating release cycles by 40% through automated deployment processes.

### Project 10 — Industrial Computer Vision Systems

- Public URL: [https://davidnavarrosaiz.github.io/davidnavarro.github.io/projects/10/](https://davidnavarrosaiz.github.io/davidnavarro.github.io/projects/10/)
- Category: Computer Vision / Industrial Automation
- Published: May 2019
- Project period: May 2019 – April 2023
- Status: Public project record
- Role: Computer Vision Engineer
- Description: I spent almost four years building computer-vision systems for industrial environments. One of the most important things I learned is that the model is only one part of a machine-vision system. Camera selection, optics, lighting, timing, and integration with the production line can matter just as much as the algorithm.
- Problem: An inspection system has to make a useful decision from imperfect physical evidence and then fit into a moving production process. A defect may be smaller than the available pixels, reflections may change with the material or lighting, and a correct classification is still operationally useless if the trigger, PLC signal, operator interface, or reject mechanism is unreliable. The engineering problem was to design the complete path instead of treating inference as the product.
- Technologies: Camera and optics design, Industrial lighting, PyTorch, TensorFlow, Keras, OpenCV, Python, C++, React, PLCs, C#, CVAT, 3D and thermal imaging
- Conceptual illustration:
  - Image URL: [https://davidnavarrosaiz.github.io/davidnavarro.github.io/_next/static/media/industrial-computer-vision-editorial-cover.44c9a5bb.webp](https://davidnavarrosaiz.github.io/davidnavarro.github.io/_next/static/media/industrial-computer-vision-editorial-cover.44c9a5bb.webp)
  - Alt text: Conceptual editorial illustration of industrial computer-vision inspection showing camera and lens selection, engineered illumination, image processing stages, inspection decisions, and PLC factory automation; not a photograph of a deployed customer installation.
  - Caption: Conceptual illustration — industrial camera inspection, optics and illumination, processing stages, and factory automation. It represents recurring system patterns, not a photograph of a deployed customer installation.
- Contributions:
  - Developed and deployed real-time CV pipelines for defect detection, product fill checks, surface anomalies, and PPE compliance analytics, improving incident detection by 30% and reducing false alarms by 45%.
  - Built robust data/labeling workflows using CVAT, automated retraining, and OpenCV post-processing to meet factory latency/throughput constraints.
  - Architected imaging stacks (illumination, sensors, 3D scanners, thermal/LiDAR) and deployed an Optical Gas Imaging solution with PLC alarms, reducing time-to-detection of hazardous leaks.
  - Integrated CV modules with PLCs and C# HMIs to enable real-time defect rejection at production speed, complemented with a React-based console for live video overlays and dashboards.
- Technical decisions:
  - Design the image before tuning the model: A higher-capacity model cannot recover information that the camera, lens, trigger, or lighting never captured. Improving the evidence often produced a more reliable system than adding algorithmic complexity.
  - Choose deterministic or learned processing deliberately: Classical computer vision was easier to inspect and maintain for explicit geometry; learned models were valuable when the variation was difficult to enumerate. The decision depended on data, explainability, maintenance, and the operating environment.
  - Set thresholds around operational consequences: A false negative and a false positive do not cost the same thing in every line. I treated operating thresholds as part of the system design, not just a model-training afterthought.
- Implementation:
  - Start with the physical scene: I translated inspection requirements into imaging constraints: field of view, smallest defect, required resolution, working distance, focal length, depth of field, acquisition speed, and the likely sources of reflection or environmental variation. Camera and lighting cost mattered, but so did repeatability and serviceability on the factory floor.
  - Use deterministic vision when the structure is explicit: Filtering, contrast enhancement, thresholding, morphology, contour extraction, blob analysis, calibration, regions of interest, and geometric measurements were useful when the appearance and rule were stable. This kept the system understandable and avoided training a model for a problem that could be measured directly.
  - Build data and learned models when variation demands it: For changing product appearance, orientation, lighting, or background conditions, I worked with labeling workflows, CNN/YOLO-style training, error analysis, and operating thresholds. The right threshold depended on the cost of missing a defect versus stopping the line for a false alarm.
  - Integrate the decision into the line: The systems connected real-time acquisition and processing with operator interfaces, PLC/HMI communication, alarms, and rejection mechanisms. Desktop, C#, React, and lower-level integration choices varied with the installation rather than being prescribed as one universal stack.
  - Lead delivery across a portfolio of projects: I led a team of 10 engineers across more than 30 industrial computer-vision projects. The work ranged across defect detection, fill checks, surface anomalies, PPE compliance, and specialized imaging where the inspection required it.
- Public evidence:
  - Owner-reported engineering scope: The project record covers almost four years of industrial machine-vision engineering, technical leadership for a 10-engineer team, and delivery across more than 30 projects.
  - Reported operational outcomes: Existing project evidence reports a 30% improvement in incident detection and a 45% reduction in false alarms for the relevant systems. These figures are not generalized to every installation, customer, or inspection task.
  - Technical evidence retained: The portfolio retains representative computer-vision images and the documented stack of acquisition, CVAT labeling, OpenCV processing, learned models, PLC/HMI integration, and specialized imaging. Customer names, factory imagery, and private equipment details remain excluded.
- Limitations and scope:
  - Projects used different stacks: The portfolio spans multiple installations. It would be inaccurate to imply that every project used YOLO, thermal or 3D imaging, React, PLC rejection, or the same camera and lighting configuration.
  - Factory details stay private: The public case focuses on reusable engineering decisions and representative outcomes rather than customer identities, line layouts, equipment configurations, or proprietary inspection rules.
- Related project IDs: 14, 17, 15, 16, 22

### Project 11 — RealTime Voice Agent

- Public URL: [https://davidnavarrosaiz.github.io/davidnavarro.github.io/projects/11/](https://davidnavarrosaiz.github.io/davidnavarro.github.io/projects/11/)
- Category: LLMs and RAG
- Published: Mar 2025
- Project period: Jan 2025 – Ongoing
- Status: Public project record
- Role: Lead AI Engineer & Backend Developer
- Description: Low-latency voice agent over WebSockets and Twilio, with real-time prompt control and multi-agent tool calling.
- Technologies: FastAPI, Uvicorn, OpenAI Realtime API, OpenAI, Azure OpenAI, Twilio, WebRTC, AutoGen, Docker, OpenAPI/Swagger
- Conceptual illustration:
  - Image URL: [https://davidnavarrosaiz.github.io/davidnavarro.github.io/_next/static/media/realtime-voice-agent-editorial.16be037c.webp](https://davidnavarrosaiz.github.io/davidnavarro.github.io/_next/static/media/realtime-voice-agent-editorial.16be037c.webp)
  - Alt text: Conceptual editorial illustration of a real-time voice agent showing bidirectional audio, WebSockets, agent runtime, and tool actions; not a live call trace or measured latency result.
  - Caption: Conceptual illustration — bidirectional audio, WebSocket transport, agent runtime, and tool actions. It is not a live call trace or measured latency result.
- Contributions:
  - Built a fully containerized FastAPI server with real-time voice streaming and WebSocket communication, supporting natural, low-latency conversations.
  - Integrated OpenAI's Realtime API and Twilio Media Streams to allow AI-powered phone calls with bidirectional voice processing and response generation.
  - Implemented an agent swarm system using AutoGen framework, enabling multi-agent collaboration and function calling for dynamic real-time responses.
  - Deployed secure and scalable containers with Azure Container Registry and enforced best practices in CORS, environment management, and API security.
  - Developed a comprehensive frontend application for real-time prompt modification and agent testing, enabling live interaction with the voice agent and dynamic prompt adjustments.
  - Successfully deployed the complete system with telephone number integration, allowing users to call and interact with the AI agent through a standard phone number for real-world testing and usage.
  - Added system health endpoints, error monitoring, and performance tracking to ensure reliable deployment in production environments.

### Project 12 — MCP Azure DevOps Server

- Public URL: [https://davidnavarrosaiz.github.io/davidnavarro.github.io/projects/12/](https://davidnavarrosaiz.github.io/davidnavarro.github.io/projects/12/)
- Category: LLMs and RAG
- Published: Mar 2025
- Project period: Feb 2025 – Ongoing
- Status: Public project record
- Role: AI Engineer & Backend Developer
- Description: Model Context Protocol server that lets AI assistants query and manage Azure DevOps work items in natural language.
- Technologies: FastMCP, Azure DevOps REST API, Azure DevOps Python SDK, Python 3.11, Server-Sent Events (SSE), Docker, OpenAI / Claude Integration, pytest, uv
- Conceptual illustration:
  - Image URL: [https://davidnavarrosaiz.github.io/davidnavarro.github.io/_next/static/media/mcp-azure-devops-server-editorial.1b51d1f7.webp](https://davidnavarrosaiz.github.io/davidnavarro.github.io/_next/static/media/mcp-azure-devops-server-editorial.1b51d1f7.webp)
  - Alt text: Conceptual editorial illustration of an MCP Azure DevOps server showing natural-language requests, a protocol boundary, structured tool calls, and Azure DevOps work-item operations; not a screenshot or a claim of repository or build-pipeline execution.
  - Caption: Conceptual illustration — MCP request handling and structured Azure DevOps work-item operations. It does not depict repository or build-pipeline execution.
- Contributions:
  - Forked and enhanced Microsoft's Azure DevOps MCP repository with custom improvements, additional integrations, and tailored services to meet specific workflow requirements while maintaining compatibility with the original MCP protocol.
  - Implemented modular feature sets for work items, teams, and project management, enabling AI assistants to perform complex DevOps queries with natural language.
  - Integrated with the Azure DevOps Python API and secured authentication using Personal Access Tokens (PAT) with least-privilege scopes.
  - Developed an asynchronous MCP client using SSE (Server-Sent Events) for efficient, low-latency communication between the agent and server.
  - Containerized the application with Docker and provided full deployment support via Docker Compose, enabling reproducible environments and scalability.
  - Documented 20+ MCP tools for AI-assisted project management, including querying sprints, managing tasks, analyzing team velocity, and mapping dependencies.

### Project 13 — CCTV Safety Detection

- Public URL: [https://davidnavarrosaiz.github.io/davidnavarro.github.io/projects/13/](https://davidnavarrosaiz.github.io/davidnavarro.github.io/projects/13/)
- Category: Computer Vision / Edge AI
- Published: 2023
- Project period: 2023
- Status: Public project record
- Role: ML Engineer & Full-Stack Developer
- Description: On-prem GPU pipeline that checks PPE and safety rules across live CCTV streams and alerts supervisors.
- Technologies: YOLO (custom fine-tuning), PyTorch + CUDA, OpenCV / FFmpeg, FastAPI, React Dashboard, WebSockets, PostgreSQL, Docker, GPU Edge Server
- Conceptual illustration:
  - Image URL: [https://davidnavarrosaiz.github.io/davidnavarro.github.io/_next/static/media/cctv-safety-detection-editorial.e4ac35a8.webp](https://davidnavarrosaiz.github.io/davidnavarro.github.io/_next/static/media/cctv-safety-detection-editorial.e4ac35a8.webp)
  - Alt text: Conceptual editorial illustration of CCTV safety detection with fixed-camera observation, PPE and spatial safety zones, and human review; not detection output or a customer installation.
  - Caption: Conceptual illustration — fixed-camera safety observation, PPE and spatial rules, and review flow. It is not a detection result or a photograph of a deployed installation.
- Contributions:
  - Built a comprehensive dataset of 10,000+ CCTV images and fine-tuned YOLO models to detect persons, safety helmets, goggles, vests (with color classification), forklifts/lift cars, and ladders with high accuracy.
  - Deployed on a local GPU server (air-gapped for security) with <200ms per-frame latency and parallel inference across 3 cameras, ensuring real-time safety monitoring without network dependencies.
  - Implemented intelligent rule engine for real-world safety policies including missing PPE detection, incorrect vest color identification, person-forklift distance thresholds, forklift parking compliance, safe ladder handling, and mandatory truck safety nets during movement.
  - Created a comprehensive web admin UI to tune confidence/sensitivity per class, define safety zones and distance thresholds, review safety events, and visualize KPIs including compliance rates, false positives, and incidents by shift/zone.
  - Established real-time alerting system via email/SMS/WhatsApp to supervisors with incident snapshots and timeline links, including smart cooldowns and deduplication to reduce alert fatigue while maintaining safety oversight.
  - Designed a resilient streaming pipeline (RTSP ingest → batching → GPU inference → rule evaluation → alerting) with comprehensive watchdogs, auto-reconnect capabilities, and rolling logs for compliance audits and system monitoring.

### Project 14 — Parallel Document Ingestion Pipeline

- Public URL: [https://davidnavarrosaiz.github.io/davidnavarro.github.io/projects/14/](https://davidnavarrosaiz.github.io/davidnavarro.github.io/projects/14/)
- Category: RAG Infrastructure / Distributed Systems
- Published: Oct 2024
- Project period: Aug 2024 – Dec 2024
- Status: Public project record
- Role: AI Infrastructure Engineer
- Description: A distributed ingestion service that turns large collections of PDFs, text, and mixed-format documents into vector embeddings for RAG systems, built around FastAPI intake, Celery workers, RabbitMQ messaging, Marker parsing, and pgVector storage.
- Problem: RAG systems are only as good as the documents feeding them. Large PDF collections are slow to parse, chunk, and embed, and long-running batch jobs are hard to observe while they run.
- Technologies: Marker API, Celery Distributed Tasks, RabbitMQ Queues, FastAPI, pgVector, Redis, Docker Compose, OpenAI Embeddings
- Conceptual illustration:
  - Image URL: [https://davidnavarrosaiz.github.io/davidnavarro.github.io/_next/static/media/parallel-document-ingestion-editorial.ffbed87e.webp](https://davidnavarrosaiz.github.io/davidnavarro.github.io/_next/static/media/parallel-document-ingestion-editorial.ffbed87e.webp)
  - Alt text: Conceptual editorial illustration of a parallel document ingestion pipeline showing FastAPI intake, RabbitMQ queues, Celery workers, Marker parsing, and pgVector retrieval storage; not an actual production dashboard or measured throughput.
  - Caption: Conceptual illustration — parallel document intake, queued workers, structured parsing, and vector storage. The authentic project gallery and technical diagram remain the implementation evidence.
- Contributions:
  - Integrated Marker API to convert unstructured PDFs into structured JSON chunks optimized for vector database ingestion, enabling seamless processing of complex document formats.
  - Implemented robust asynchronous task orchestration using Celery and RabbitMQ, allowing horizontal scaling of ingestion workers and fault-tolerant document processing.
  - Achieved 80% reduction in ingestion time per user by parallelizing document processing across distributed task queues, significantly improving user experience and system throughput.
  - Designed a modular FastAPI service that automatically routes upload jobs into worker queues, monitors progress in real-time, and updates user dashboards with processing status and completion metrics.
  - Enabled scalable ingestion for multi-user RAG systems, supporting thousands of documents per user without performance degradation through intelligent queue management and resource allocation.
  - Containerized the complete stack using Docker Compose for reproducible deployment across environments with isolated worker scaling, ensuring consistent performance and easy maintenance.
- Technical decisions:
  - Queued workers instead of synchronous processing: Upload intake is decoupled from parsing and embedding through Celery workers and RabbitMQ queues, so workers scale horizontally and document processing stays fault-tolerant.
  - Marker for document parsing: Marker converts complex unstructured PDFs into structured JSON chunks suited to vector-database ingestion.
- Implementation:
  - FastAPI intake service: A modular FastAPI service accepts uploads and automatically routes them as jobs into the worker queues.
  - Celery workers and RabbitMQ messaging: Asynchronous task orchestration with Celery and RabbitMQ decouples intake from processing, allows horizontal scaling of ingestion workers, and keeps document processing fault-tolerant.
  - Document extraction with Marker: Marker converts unstructured PDFs into structured JSON chunks optimized for vector-database ingestion, covering PDFs, text, and mixed formats.
  - Embeddings and vector storage: Parsed chunks are embedded with OpenAI embeddings and written to pgVector, where they serve downstream RAG retrieval.
  - Progress monitoring and dashboards: The service monitors jobs in real time and updates user dashboards with processing status and completion metrics.
  - Containerized deployment: The complete stack is containerized with Docker Compose for reproducible deployment with isolated worker scaling.
- Public evidence:
  - Progress observability: Upload jobs are monitored in real time, with dashboards reporting processing status and completion metrics.
  - Failure visibility: The pipeline tracks processing progress and failures rather than running as an opaque batch job.
- Related project IDs: 19, 16, 15, 1

### Project 15 — Coding Agent Evaluation Workbench

- Public URL: [https://davidnavarrosaiz.github.io/davidnavarro.github.io/projects/15/](https://davidnavarrosaiz.github.io/davidnavarro.github.io/projects/15/)
- Category: AI Evaluation / Engineering Systems
- Published: Oct 2026
- Status: Internal Engineering / Evaluation Tooling
- Contribution: Evaluation framework and methodology
- Description: I built an internal, UI-driven workbench to compare coding-agent runs under reproducible conditions. Each evaluation starts with a shared reference task and prompts, records the selected tool, model and version, tester, date, scenario, model profile, and environment, then guides the evaluator through setup, execution, evidence collection, review, and export. The workbench is not an autonomous judge or a leaderboard; it preserves the evidence needed to explain a result later.
- Problem: Comparing coding agents is harder than giving them the same prompt and checking which one finishes first. A run can produce convincing code while failing tests, ignoring a security constraint, or quietly changing the scope. I needed a way to hold the task and starting conditions steady, then reconstruct what happened months later instead of relying on a final screenshot or someone’s notes.
- Conceptual illustration:
  - Image URL: [https://davidnavarrosaiz.github.io/davidnavarro.github.io/_next/static/media/coding-agent-evaluation-v2.0401e082.webp](https://davidnavarrosaiz.github.io/davidnavarro.github.io/_next/static/media/coding-agent-evaluation-v2.0401e082.webp)
  - Alt text: Conceptual illustration of a coding-agent evaluation workbench with a clean baseline, captured run evidence, deterministic checks, and comparative reporting; not a screenshot, benchmark result, or measured interface.
  - Caption: Conceptual illustration — reproducible coding-agent evaluation and evidence flow. It does not depict measured benchmark results or a production interface.
- Technical decisions:
  - Hold the reference task steady: I used the same versioned task and prompts for comparable runs, then recorded any follow-up scenario rather than silently changing the task mid-experiment.
  - Keep automated signals separate from judgment: Build, test, lint, coverage, type, security, and authorization evidence stays distinct from rubric review. A passing test suite is useful evidence, not a complete measure of engineering quality.
  - Evidence before summary: I retained metadata, configuration, diffs, logs, transcripts, test results, rubric decisions, and reviewer notes before assembling a comparison. That makes it possible to challenge a conclusion instead of trusting a headline score.
  - Treat the LLM reviewer as advisory: An LLM can surface a bug or suggest a rubric interpretation, but the human evaluator remains responsible for the final assessment and for deciding whether the evidence supports it.
- Implementation:
  - Separate repositories and experiment branches: I kept the benchmark/reference repository separate from the evaluation repository. Each experiment used its own Git branch so the reference task, generated patch, and run artifacts stayed tied to one reproducible setup.
  - Guided run setup: The UI captured the tool, model and version, tester, date, scenario, model profile, environment, shared reference task, and prompts before execution. The wizard made the process repeatable for someone who did not design the benchmark.
  - Execution and evidence capture: During a run I recorded elapsed time, interventions, self-corrections, questions, execution logs, the conversation transcript, configuration, code diffs, and resulting artifacts. That context matters when a run needs to be reconstructed later.
  - Objective verification: The evaluation ran code execution and CI checks for builds, linting, tests, coverage, type checks, and required constraints. These signals are repeatable, but they do not answer every architectural or security question.
  - Human and advisory review: A human evaluator reviewed architecture, maintainability, testing, documentation, security, and policy violations against anchored rubrics. An optional LLM reviewer could identify possible bugs, add notes, and suggest rubric scores, but I treated it as a second opinion rather than ground truth.
  - Export and comparison: The workbench exported an evidence bundle and structured experiment comparison so a conclusion could be traced back to the branch, prompt, transcript, code diff, CI result, rubric decision, and evaluator note.
- Public evidence:
  - Implementation correctness: Generated changes were checked against task requirements through deterministic functional checks and recorded test results.
  - Code quality and execution behavior: Code-quality checks and observed execution behavior provided complementary signals for comparative assessment.
  - Security and authorization: Security and authorization reviews provided a distinct review path for findings that deterministic checks could not establish on their own.
  - Traceable comparison: Run artifacts and structured assessment supported comparisons between runs without publishing internal scores, rankings, or private evaluation results.
- Limitations and scope:
  - Manual and semi-automated work: Execution, follow-up scenarios, and parts of assessment involved manual or semi-automated operations; the workbench is not described as fully autonomous.
  - Model and version variability: Comparisons remain sensitive to model, prompt, task, and environment versioning, which is why the workbench records task and run context.
  - Limits of automated quality assessment: Deterministic checks provide repeatable evidence but do not replace structured human or advisory assessment of security, authorization, and engineering quality.
  - Public-disclosure boundary: Specific internal check counts, leaderboard details, scores, rankings, private evaluation results, and internal experiment artifacts are excluded pending explicit disclosure approval.
- Related project IDs: 17, 16, 14, 19

### Project 16 — Enterprise AI Workspace

- Public URL: [https://davidnavarrosaiz.github.io/davidnavarro.github.io/projects/16/](https://davidnavarrosaiz.github.io/davidnavarro.github.io/projects/16/)
- Category: LLMs and RAG
- Published: 2026
- Status: Professional enterprise engineering project
- Role: AI Platform Engineer
- Description: I worked on extending a LibreChat-based conversational AI workspace into a more useful enterprise platform: one that could combine configured agents, retrieval, persistence, integrations, and cloud application services without making every capability implicitly executable. The work crossed the visible product surface and the less visible decisions around authorization, deployment, and operational boundaries.
- Problem: A conversational interface is only the entry point. The workspace also needs a dependable way to configure agents, retrieve organizational context, persist the right data, connect approved integrations, and keep users inside the capabilities they are allowed to use. I treated those boundaries as part of the product rather than as deployment details to solve later.
- Technologies: LibreChat, AWS ECS, AWS Fargate, Application Load Balancer, Amazon RDS for PostgreSQL, pgvector, Amazon S3, HMAC authorization
- Conceptual illustration:
  - Image URL: [https://davidnavarrosaiz.github.io/davidnavarro.github.io/_next/static/media/enterprise-ai-workspace-editorial.55011ca2.webp](https://davidnavarrosaiz.github.io/davidnavarro.github.io/_next/static/media/enterprise-ai-workspace-editorial.55011ca2.webp)
  - Alt text: Conceptual illustration of an enterprise AI workspace with users, agents, retrieval, cloud infrastructure, integrations, and controlled capabilities; not a deployed infrastructure diagram or product screenshot.
  - Caption: Conceptual illustration — an enterprise AI workspace, retrieval layer, cloud application surface, integrations, and capability boundaries. The diagrams below show the technical relationships at a shareable level.
- Technical decisions:
  - Extend an existing open-source application: Extending an existing conversational application gave me a useful product foundation. The trade-off was inheriting an upstream lifecycle while concentrating engineering effort on enterprise configuration, agent integration, persistence, and operational boundaries.
  - Keep application and retrieval responsibilities distinct: I kept the conversational surface and retrieval-oriented persistence related but distinct. That separation made access easier to reason about and avoided implying that every application capability should directly reach stored organizational content.
  - Use PostgreSQL and pgvector for retrieval persistence: PostgreSQL with pgvector provided a familiar persistence substrate for retrieval workflows. It also made data management, indexing, configuration, and access boundaries explicit operational responsibilities.
  - Restrict high-risk capabilities by default: I treated application preview and code execution as bounded capabilities rather than as inevitable extensions of chat. The deeper execution design needed its own identity, session, workspace, and artifact controls.
  - Document the architecture at a safe abstraction level: I documented the useful engineering relationships at a level that can be shared: application, retrieval, persistence, integration, and authorization. Employer-owned topology, identifiers, private prompts, exact policies, and operational statistics remain out of scope.
- Implementation:
  - LibreChat-based application extension: I customized and extended an existing LibreChat-based workspace for an enterprise context. That let me focus my contribution on platform integration and capability boundaries rather than rebuilding a conversational shell.
  - Agent configuration and integration: I configured agent behavior and integration surfaces within the workspace, keeping permissions and service contracts explicit instead of treating every connected API as automatically available to an agent.
  - AWS application infrastructure: I worked across containerized application hosting and Application Load Balancer integration. The public case keeps deployment identifiers, network rules, scaling settings, and account details generalized.
  - Retrieval and persistence infrastructure: I integrated PostgreSQL with pgvector for retrieval-oriented persistence and object storage for approved content workflows. The important engineering concern was keeping retrieval, persistence, and access responsibilities understandable without exposing private schemas or data volumes.
  - Authorization and capability controls: I implemented or extended HMAC-based authorization boundaries and treated preview and execution as distinct capabilities with explicit restrictions. Code execution required a deeper identity and workspace design, which I document separately in Project 21.
  - Operational configuration: I worked across application configuration, storage, retrieval, access, and deployment concerns. I keep the narrative focused on the boundaries I handled rather than implying ownership of every surrounding team or employer responsibility.
- Public evidence:
  - Application behavior and integration checks: I validated configured application paths and agent/integration behavior at the implementation boundary. No user-adoption metric, performance benchmark, or production SLA is published.
  - Persistence and retrieval checks: I checked retrieval-oriented persistence paths involving RDS PostgreSQL with pgvector and the S3 integration at the configured implementation boundary. Schema, volume, and index details remain private.
  - Infrastructure configuration validation: I validated the relevant ECS/Fargate and Application Load Balancer configuration surfaces within project scope without claiming a complete topology, autoscaling profile, or monitoring coverage.
  - Authorization and capability verification: I verified the documented authorization and capability boundaries, including HMAC mechanisms and restricted or disabled surfaces. Exact policies and secrets are intentionally omitted.
- Limitations and scope:
  - Anonymized professional context: The employer, customer, private repositories, domains, account identifiers, and internal configuration are intentionally not identified.
  - Inherited application lifecycle: Extending an open-source application reduces the need to build a conversational shell but introduces upstream compatibility and maintenance considerations.
  - Managed persistence responsibility: RDS PostgreSQL and pgvector provide a practical retrieval substrate while leaving data management, indexing, access, and operational configuration as ongoing responsibilities.
  - Bounded capability surface: Restricted preview and disabled general code execution reduce feature breadth but make the public capability boundary more honest and safer to describe.
  - No public metrics or guarantees: This case does not disclose costs, latency, throughput, check counts, production availability, monitoring coverage, or other private operational measurements.
- Related project IDs: 21, 1, 17, 19

### Project 17 — Policy-Governed AI Agents

- Public URL: [https://davidnavarrosaiz.github.io/davidnavarro.github.io/projects/17/](https://davidnavarrosaiz.github.io/davidnavarro.github.io/projects/17/)
- Category: Production AI Engineering / Agent Reliability
- Published: 2026
- Status: Professional production engineering experience, anonymized
- Role: Staff AI Engineer / Agent Reliability
- Description: I worked on reusable foundations for conversational agents that could interact with operational systems without leaving authorization and failure handling to the language model. Each agent could have its own business workflow, but the platform needed a consistent way to interpret requests, resolve context, control state, execute tools, verify outcomes, and communicate safely. My contribution covered the relevant workflow and reliability workstreams, not an entire company platform.
- Problem: Getting a language model to answer a question is one problem. Giving it the ability to act on someone’s behalf is another: it can misunderstand the request, select the wrong entity, skip a required confirmation, or describe a failed operation as successful. I needed the system—not a persuasive model response—to decide whether an action was allowed and whether it actually happened.
- Technologies: LangGraph, LLM orchestration, Structured tool calls, State-transition validation, Scenario regression testing, Trace inspection
- Conceptual illustration:
  - Image URL: [https://davidnavarrosaiz.github.io/davidnavarro.github.io/_next/static/media/policy-governed-ai-agents-editorial.6b8153aa.webp](https://davidnavarrosaiz.github.io/davidnavarro.github.io/_next/static/media/policy-governed-ai-agents-editorial.6b8153aa.webp)
  - Alt text: Conceptual illustration of policy-governed AI agents moving through stateful orchestration, authorization checks, verified actions, and escalation paths; not a private production state machine or product screenshot.
  - Caption: Conceptual illustration — stateful orchestration, authorization boundaries, verified actions, and escalation. It does not reproduce a private workflow or policy.
- Technical decisions:
  - Deterministic transitions over unconstrained action selection: Explicit workflow states made the allowed progression visible and testable, while the language model remained responsible for interpretation rather than directly deciding that an operational action had completed.
  - Separate reasoning from operational execution: Keeping LLM reasoning distinct from structured tool execution created a control boundary for authorization, confirmation, result inspection, and escalation.
  - Verify before communicating success: A tool call or model-generated statement was not treated as proof of completion. The workflow required an observed, structured outcome before presenting supported success to the user.
  - Govern the response after execution: I treated routine responses, sensitive outcomes, adjudication or revision passes, refusals, degraded behavior, and escalation as separate response paths. Not every turn needed the same level of review, but every path needed explicit semantics.
  - Treat confirmation as conditional control: Confirmation was modeled as a boundary for applicable consequential actions rather than an indiscriminate interaction step, preserving usability without removing the control.
  - Use scenarios and traces to find failure modes: Scenario-based regression and trace inspection exposed negative, ambiguous, and state-transition failures more usefully than relying on aggregate scores or a single happy-path demonstration.
- Implementation:
  - Stateful orchestration with LangGraph: I contributed to LangGraph-based workflow architecture with explicit states and controlled transitions, keeping the workflow understandable and testable rather than relying on unconstrained model-driven action selection.
  - Context and entity resolution: I implemented and refined the resolution of relevant context and entities before action paths could proceed, reducing ambiguity at the boundary between conversational interpretation and operational execution.
  - Authorization and verified actions: I worked on eligibility and policy checks, confirmation where required, authorized tool execution, structured outcomes, and verification before a success response was communicated.
  - Reliability improvements: I improved predictable handling for negative, ambiguous, failed, and incomplete paths, including clarification or escalation instead of silently treating an unverified operation as successful.
  - Multilingual response handling: I worked with English, Spanish, and French response handling while keeping action semantics, guardrails, and state transitions independent from the wording shown to the user. Where language coverage or rollout was incomplete, I treated that as a test boundary rather than assuming production parity.
  - Scenario-based evaluation and trace analysis: I contributed to scenario-based tests, regression coverage, state-transition validation, tool-result verification, trace inspection, and failure analysis without publishing internal datasets, counts, or production metrics.
  - Bounded engineering ownership: My ownership covered workflow architecture, implementation, reliability improvements, and evaluation within the relevant workstreams; I do not claim ownership of the entire employer AI platform.
- Public evidence:
  - Scenario-based tests: I used scenario-based cases to exercise normal, negative, ambiguous, and failure paths without exposing the internal regression dataset or test counts.
  - State-transition validation: Workflow state and transition behavior were inspected as first-class reliability concerns, including whether a path could proceed, stop, clarify, or escalate.
  - Tool-result verification: The evaluation approach distinguished a requested operation from an observed result so that a tool response or failure could be handled explicitly.
  - Trace inspection and failure analysis: Trace review helped identify interpretation, context, transition, execution, and verification failures without claiming a formal benchmark or universal coverage.
- Limitations and scope:
  - Probabilistic interpretation remains: Stateful orchestration constrains progression but does not make language-model interpretation perfectly correct or deterministic.
  - Policy definitions are external and changeable: The workflow can expose control points, but the quality and maintenance of eligibility criteria remain dependent on the surrounding business and operational context.
  - Context resolution can remain ambiguous: Incomplete, conflicting, or multilingual inputs may require clarification or escalation; this case does not claim a complete language or entity-coverage matrix.
  - Verification depends on observable outcomes: A workflow can verify only what its operational boundary exposes, so verification is not a guarantee that every downstream business effect is known.
  - No perfect safety or correctness claim: The approach reduces avoidable unsupported actions and makes failure paths more explicit; it does not claim zero failure risk, perfect policy compliance, or universal correctness.
- Related project IDs: 15, 16, 1, 19

### Project 18 — Professional Cases — AI-Powered Professional Practice Scenarios

- Public URL: [https://davidnavarrosaiz.github.io/davidnavarro.github.io/projects/18/](https://davidnavarrosaiz.github.io/davidnavarro.github.io/projects/18/)
- Category: Independent AI Product Engineering / Knowledge Systems
- Published: 2026
- Status: Independent Project — In Development
- Description: Professional Cases is an independent product under development for experienced and retired professionals who want to continue exercising professional judgment through realistic, profession-specific practice scenarios and respectful feedback. The verified repository contains a Next.js/React web surface, a FastAPI backend, knowledge and content tooling, case generation, semantic evaluation, and a partially integrated Senior runtime. The browser Senior experience still uses deterministic mock BFF routes, so this case does not present the product as launched or publicly available.
- Problem: Professional knowledge arrives as heterogeneous documents, images, terminology, and domain context. Turning that material into useful practice requires more than retrieving a paragraph: the system needs traceable ingestion, searchable evidence, topic diversity, case seeds, generated narratives, quality checks, and feedback grounded in the professional work. The product goal is to preserve dignity and professional identity without reducing the experience to a generic quiz, an AI chatbot, or unsupported claims about learning outcomes.
- Technologies: Next.js / React, Python / FastAPI, PostgreSQL / pgvector, Redis / Celery, LangGraph, Google GenAI client, PyMuPDF, scikit-learn, Alembic
- Conceptual illustration:
  - Image URL: [https://davidnavarrosaiz.github.io/davidnavarro.github.io/_next/static/media/professional-cases-editorial.581312f2.webp](https://davidnavarrosaiz.github.io/davidnavarro.github.io/_next/static/media/professional-cases-editorial.581312f2.webp)
  - Alt text: Conceptual editorial illustration for Professional Cases showing documents, images, knowledge organization, case generation, and assessment. Audio and video symbols are visual motifs only; the current implementation is text-first and does not claim speech support.
  - Caption: Conceptual editorial artwork — documents, images, knowledge organization, scenario generation, and assessment. The audio/video symbols are not evidence of implemented modalities; the verified product boundary is text-first and in development.
- Technical decisions:
  - Keep Admin/Content Studio separate from Senior UX: Knowledge authoring, clustering, generated-case review, and operations need dense inspection surfaces. The Senior experience needs a calm, readable, judgment-oriented flow; combining those surfaces would obscure both responsibilities.
  - Preserve provenance and safe projections: The backend stores evidence, runs, specifications, and internal evaluation data, but browser-facing projections are assembled field by field. Hidden answers, rubrics, prompts, evaluator confidence, and generation metadata are not treated as Senior-visible data.
  - Use hybrid retrieval with diversity controls: Lexical matching handles exact professional terms while vector search supports semantic recall. Per-document limits, clusters, and seed rotation reduce the risk that one source dominates every generated case.
  - Make the generation graph inspectable: Separate generation phases and persisted node runs make failure, quality judgments, image decisions, and refinement behavior visible to the content workflow instead of hiding everything behind one provider call.
  - Make scoring deterministic at the server boundary: The provider supplies constrained dimension judgments; the backend validates ids and evidence references and computes the weighted 1–100 result. This keeps scoring rules in an auditable contract rather than delegating the final number to the model.
  - Fail closed when authored content is incomplete: A missing evaluation specification or subject-knowledge contract is an explicit incomplete-content error. The system does not invent a generic rubric, patient reply, or fallback score to make the flow appear complete.
- Implementation:
  - Modular product boundary: I worked across the Next.js/React web surface and the FastAPI/Python backend while keeping Admin/Content Studio concerns separate from the calmer Senior runtime. The repository uses explicit domain modules instead of collapsing knowledge, generation, evaluation, and runtime state into one client abstraction.
  - Evidence-grounded knowledge pipeline: I implemented and refined the path from supported document sources through extraction, Markdown-aware chunking, metadata, embeddings, image captions, pgvector persistence, hybrid retrieval, and related-image context. The pipeline exposes status and failure information instead of treating ingestion as an opaque batch.
  - Stateful case generation: I built the LangGraph generation path around material sufficiency, narrative generation, metadata extraction, image evaluation, quality judges, aggregation, optional refinement, finalization, and discard handling. Generated cases retain evidence references, quality metadata, node runs, and review state for Admin inspection.
  - Rubric and evaluation contracts: I separated the internal case-authored evaluation specification from provider output and the Senior-safe result. Evidence references are validated against the submitted work, the weighted overall score is assembled deterministically on the server, and malformed or hallucinated output does not receive a silent repair or fallback score.
  - Durable runtime foundations: I extended the backend runtime around assignment-owned state, authorization, idempotent conclusion submission, durable text messages, authored subject knowledge, finding persistence, leases, and explicit provider failure categories. Private notes and evaluator internals remain outside the evaluation input contract.
  - Bounded product claims: I kept voice, rewards, production browser cutover, and unverified multimedia capabilities outside the implemented claim set. The product remains independent and in development; no adoption, learning, clinical, or production-availability outcome is claimed.
- Public evidence:
  - Targeted backend coverage: The repository includes unit coverage for knowledge metadata, clustering, case-generation nodes and service behavior, evaluation contracts and service behavior, case-subject contracts, provider errors, and seed rotation. The focused suite exercised for this review passed 94 tests with one environment-specific test deselected.
  - Integration coverage exists in the repository: Integration suites cover authentication, knowledge upload and ingestion jobs, KB search, clustering, case-generation routes, evaluation persistence, Senior runtime authorization, and subject conversation behavior. They require the repository Docker Compose test database and were not run while that stack was stopped.
  - Failure and security boundaries are tested: The source and tests cover ownership checks, idempotency, provider failure, malformed structured output, hallucinated fact or evidence references, missing authored contracts, and the absence of private notes from provider inputs.
  - Current validation finding: The full unit run reached 140 passing tests but exposed one Windows locale failure while loading the UTF-8 patient_names.json file in a narrative-generator error-path test. That unrelated repository issue was not changed as part of this portfolio integration.
- Limitations and scope:
  - Independent product remains in development: There is no public launch, adoption evidence, learning-improvement evidence, clinical effectiveness claim, or production availability claim in this case study.
  - Senior browser cutover is incomplete: The backend runtime and production conversation boundary exist, but the Next.js Senior BFF still uses deterministic mock routes. The current case therefore describes backend foundations and not a fully production-backed browser journey.
  - Case authoring contracts remain a product dependency: The conversation engine requires case-authored subject_knowledge_json, and semantic evaluation requires evaluation_spec_json. The current generation pipeline does not yet produce the subject contract, so not every generated case is conversable.
  - Voice and rewards are not delivered capabilities: Voice is explicitly deferred and no speech provider was found. Reward configuration exists at the profile level, but a reward ledger, event flow, and Senior presentation were not found.
  - Provider and environment boundaries: Provider-backed behavior depends on configured credentials and the Docker test stack. This portfolio case does not publish benchmark scores, user counts, latency, adoption, or other quality metrics.
- Related project IDs: 19, 14, 1, 16

### Project 19 — AI Digital Twin — Contextual Knowledge, GraphRAG & Retrieval Evaluation

- Public URL: [https://davidnavarrosaiz.github.io/davidnavarro.github.io/projects/19/](https://davidnavarrosaiz.github.io/davidnavarro.github.io/projects/19/)
- Category: Retrieval Engineering / AI Evaluation
- Published: Retrieval evaluation
- Status: Retrieval evaluation — source access pending
- Description: I became interested in the digital-twin problem through knowledge rather than avatars. A useful assistant would need to connect projects, people, dates, emails, meetings, and decisions, then recover the context behind a question instead of matching a few similar words. I focused on organizing contextual knowledge and comparing retrieval strategies; I am not presenting this as human-equivalent memory or as proof that every workplace integration is complete.
- Problem: Professional knowledge is spread across documents, projects, dates, emails, meetings, and other records. Vector search is useful when the wording of a question differs from the source, but semantic similarity can miss who worked on a project, which meeting led to a decision, or how one event relates to another. I investigated whether graph-enhanced retrieval adds useful relationships over vector RAG, and what the quality and response-time trade-offs look like for different question types.
- Technologies: Vector database, Metadata filtering, Vector RAG, GraphRAG, DeepEval, LLM-as-evaluator
- Conceptual illustration:
  - Image URL: [https://davidnavarrosaiz.github.io/davidnavarro.github.io/_next/static/media/ai-digital-twin-retrieval-collage.b59851e5.webp](https://davidnavarrosaiz.github.io/davidnavarro.github.io/_next/static/media/ai-digital-twin-retrieval-collage.b59851e5.webp)
  - Alt text: Conceptual editorial collage for AI Digital Twin showing project, document, meeting, and email archives connected to vector retrieval, GraphRAG, combined approaches, and retrieval evaluation.
  - Caption: Conceptual editorial artwork — contextual archives and retrieval experiments. It is not an architecture export, benchmark chart, or claim of human-equivalent memory.
- Technical decisions:
  - Compare retrieval strategies instead of assuming graph value: The central engineering question is empirical: determine when relationship-aware context adds value over vector similarity and where the additional complexity may not justify itself.
  - Use contextual metadata as part of retrieval reasoning: Projects, dates, source types, emails, and meetings provide context that can narrow or qualify a retrieval request. I leave the exact filter order and implementation unspecified.
  - Evaluate by question type: A single aggregate result could hide where vector, graph, or combined retrieval helps. I compared question types, but the specific categories and results remain private or unavailable.
  - Treat prompt changes as evaluation-driven: Prompt refinement is presented as a response to observed evaluation behavior, not as a claim that wording alone solved retrieval quality or latency trade-offs.
  - Do not imply automatic runtime routing: I describe comparable retrieval experiments, not an automatic router that selects a strategy for every question. That distinction remains until implementation evidence supports it.
- Implementation:
  - Contextual knowledge organization: I organized the work around projects, dates, emails, meetings, and other context so retrieval could reflect more than semantic similarity alone. The exact schema, indexing code, and storage technology are not part of this public case.
  - Retrieval strategy experimentation: I compared vector RAG, GraphRAG, and a combined GraphRAG plus vector RAG strategy as retrieval engineering experiments.
  - Evaluation design: I compared the strategies across question types, measured response time, and assessed answer quality with DeepEval and an LLM-as-evaluator approach.
  - Prompt refinement: The experiments informed prompt improvements. I do not claim a particular score increase or universally superior retrieval strategy without the underlying artifacts.
- Public evidence:
  - Engineering activities: The work covered contextual knowledge organization, metadata filtering, vector RAG, GraphRAG, combined retrieval, response-time measurement, DeepEval/LLM-as-evaluator assessment, question-type comparison, and prompt refinement.
  - Source repository access: The implementation repositories were not available for this portfolio case, so I am keeping database, graph, extraction, fusion, and runtime details at the level described above.
  - Historical architecture plan: The Arabic-first Azure Phase 1 plan is separate from this retrieval study. I do not present its services as deployed Digital Twin infrastructure.
  - Publication boundary: I have excluded private evaluation questions, scores, latency statistics, personal records, employer-specific results, credentials, endpoints, and benchmark charts.
- Limitations and scope:
  - Implementation details require source access: I do not identify the exact vector database, graph store, entity/relation extraction, traversal, fusion, reranking, prompt construction, session handling, tests, or evaluation artifacts in this case.
  - No human-equivalent memory claim: Contextual organization and retrieval do not establish human-like memory, consciousness, autonomy, or reliable long-term memory.
  - No universal retrieval winner: The case does not claim that vector RAG, GraphRAG, or the combined approach consistently wins without approved comparative results.
  - No deployment claim from the Azure proposal: Azure Document Intelligence, Azure AI Search, Azure OpenAI, Azure PostgreSQL, Azure Storage, Container Apps, Terraform, Langfuse, RAGAS, and other plan references belong to a separate proposal and are not presented as deployed here.
  - Private corpus and evaluation artifacts: The underlying personal-context corpus and evaluation artifacts require sanitization and owner approval before any detailed results or examples become public.
- Related project IDs: 14, 16, 1, 15

### Project 20 — AI Agent Evaluation & Experimentation Framework

- Public URL: [https://davidnavarrosaiz.github.io/davidnavarro.github.io/projects/20/](https://davidnavarrosaiz.github.io/davidnavarro.github.io/projects/20/)
- Category: Agent Evaluation / Reliability Engineering
- Published: 2025 – 2026
- Status: Internal engineering evaluation tooling
- Role: AI Evaluation Engineer
- Description: I built a reusable evaluation platform for the question that follows any agent change: did the system improve, and where? The platform was designed to connect to a knowledge base through a small source contract, generate evaluation data from that source, run any compatible agent, and compare experiments with the same dataset and metric configuration. That made it possible to evaluate retrieval agents, tool-using agents, and multi-step workflows without coupling the runner to one implementation.
- Problem: Manual testing makes it too easy to remember successful conversations and forget the awkward ones. Evaluation also becomes misleading when a dataset is built from one store while the agent searches another, or when every agent is forced into a response shape that hides retrieval and tool behavior. I needed a layer that preserved source context, normalized different agent outputs, and made the same experiment easy to repeat after a prompt, retrieval, model, or workflow change.
- Technologies: Python, YAML configuration, KB adapters, Metric registry, RAGAS, DeepEval, Opik, LangGraph, pytest
- Conceptual illustration:
  - Image URL: [https://davidnavarrosaiz.github.io/davidnavarro.github.io/_next/static/media/ai-agent-evaluation-editorial.c98a6faa.webp](https://davidnavarrosaiz.github.io/davidnavarro.github.io/_next/static/media/ai-agent-evaluation-editorial.c98a6faa.webp)
  - Alt text: Conceptual editorial illustration of AI agent evaluation with datasets, agent traces, deterministic checks, LLM-based evaluation, experiment comparison, and reproducibility; not a benchmark result or product screenshot.
  - Caption: Conceptual illustration — datasets, traces, metric families, experiment comparison, and reproducibility. It does not show measured benchmark results.
- Technical decisions:
  - Make the knowledge-base boundary interchangeable: The builder should not care whether chunks come from a local vector store or an external knowledge base. A shared export-and-search contract keeps dataset creation and evaluation aligned while leaving the storage implementation replaceable.
  - Keep dataset methodology visible: Single-chunk, multi-chunk, and topic-based questions expose different failure modes. Recording the strategy, supporting chunks, source version, and retrieval context makes it possible to compare results without pretending every example measures the same behavior.
  - Use deterministic checks for hard contracts: Exact structured-output, action-trace, forbidden-action, invalid-parameter, and workflow-outcome checks are repeatable and easy to explain. They are the right tool when the contract is explicit, but they cannot judge every useful variation in a natural-language answer.
  - Compare metrics without hiding their assumptions: Reference-answer and semantic metrics help with meaning and groundedness, retrieval metrics need reliable context identities, and agent-specific metrics need traces or structured fields. I kept thresholds, weights, and metric inputs explicit so a comparison explains what was measured instead of collapsing everything into an unexplained score.
  - Make observability optional: The evaluation runner should still be useful without a live observability service. Optional tracing and experiment inspection make runs easier to investigate, but they are not a claim that every experiment was continuously monitored in production.
- Implementation:
  - A knowledge-base boundary that stays interchangeable: I defined the dataset layer around a small source interface for bulk chunk retrieval and semantic search. That let the same builder use a local vector-store adapter or connect over HTTP to an external knowledge base, while keeping stable chunk identifiers and source metadata attached to each example. The practical requirement is explicit: a knowledge base must expose the fields needed for export and search; the evaluation logic itself is not tied to one vendor or storage engine.
  - Dataset generation through different methodologies: I supported three complementary ways to build evaluation data. Single-chunk generation creates focused baseline questions from one source chunk. Multi-chunk generation creates questions that require two to four chunks, grouped from the same document, adjacent sections, semantic neighbors, or precomputed clusters. Topic-based generation starts from realistic topic queries, retrieves relevant context, and asks the model to generate questions from that retrieved set. Each example keeps its supporting chunk IDs, answer context, source metadata, and generation method, so the dataset is inspectable rather than a bag of opaque prompts.
  - Any compatible agent can enter through the registry: Agents implement a common contract for running an input and reporting configuration. Registration keeps the experiment runner independent from the implementation, while the normalized output can carry the answer, retrieved IDs and text, tool calls, raw trace, latency, and metadata. The reference implementations cover deterministic RAG, tool-using ReAct, and supervisor-based multi-agent workflows; the same path can be extended with a custom agent adapter.
  - Metrics are registered by family and selected by contract: The metric registry made it possible to add and configure checks without changing the runner. The available families cover answer quality and grounding, retrieval ranking and recall, exact structured outputs, tool-call and workflow correctness, routing and escalation, safety and guardrails, runtime errors, latency, token usage, and response length. Thresholds and weights are explicit, and a metric is only meaningful when the selected agent exposes the evidence it needs.
  - Experiments that can be compared, not just executed: An experiment configuration selects the agent, dataset, metric definitions, thresholds, sample limits, and optional observability. Running the same dataset against different agent versions, prompts, retrieval strategies, or metric configurations produces JSON, CSV, and Markdown artifacts with per-example results, per-metric mean and pass-rate statistics, weighted summaries, timing, and failures. That makes it possible to compare experiments and metrics side by side without publishing private scores.
- Public evidence:
  - Interchangeable source and registration boundaries: The implementation separates knowledge-base adapters, dataset strategies, agent registration, metric registration, experiment execution, and observability. Those boundaries are testable independently and keep the runner from depending on one knowledge base or one agent architecture.
  - Dataset and metric evidence: Generated examples retain their supporting chunk identities, source metadata, strategy, and expected answer. Evaluation results retain configuration, outputs, timing, runtime failures, metric details, and comparison artifacts, which makes a failure inspectable rather than hidden behind a single average.
  - Experiment comparison: Run artifacts are structured for comparison across agent, prompt, retrieval, and metric configuration changes. I am intentionally not publishing private scores, rankings, benchmark results, or internal dataset examples.
- Limitations and scope:
  - Knowledge-base compatibility is explicit: The platform can work with different knowledge bases through the shared source contract, but a source still needs reliable bulk export, semantic search, stable chunk identities, and the metadata required by the selected metrics.
  - Generated datasets still need review: Synthetic generation improves coverage but does not remove the need for spot checks. Simple word-overlap validation is not sufficient for every multi-chunk answer, so dataset quality remains part of the evaluation design.
  - Metrics are contract-dependent: Not every agent exposes retrieved context, action traces, workflow outcomes, or reference fields. A metric should be applied only when its inputs and semantics are valid for that experiment.
  - Model-assisted assessment varies: LLM-based judges and semantic metrics introduce evaluator-model and prompt sensitivity. They complement deterministic checks; they do not remove the need for failure inspection or human judgment.
  - No public benchmark claim: The public case excludes private prompts, datasets, scores, rankings, model comparisons, and customer results. It documents the evaluation capability and design decisions rather than a headline improvement.
  - No continuous-monitoring claim: Opik integration supports optional tracing and experiment inspection; it does not by itself establish a continuously monitored production system.
- Related project IDs: 15, 16, 17, 19

### Project 21 — Secure AI Code Execution & Workspace Isolation

- Public URL: [https://davidnavarrosaiz.github.io/davidnavarro.github.io/projects/21/](https://davidnavarrosaiz.github.io/davidnavarro.github.io/projects/21/)
- Category: AI Security / Execution Boundaries
- Published: 2026
- Status: Controlled implementation — broader rollout gated
- Role: AI Platform Engineer
- Description: Adding code execution to an AI workspace sounds straightforward until the code is not trusted. I approached the problem from identity and workspace boundaries first: how do I know which user owns a session, what files that session should see, whether the intended workspace is actually mounted, and what artifacts can safely return to the application?
- Problem: Code execution creates a different trust boundary from text generation. A request can be authenticated and still be routed to the wrong workspace, attached to an unexpected filesystem, or allowed to survive longer than intended. I needed the execution path to verify ownership and runtime state before allowing a managed interpreter session to work with persistent files.
- Technologies: AWS Bedrock AgentCore Code Interpreter, TypeScript / Fastify CodeAPI adapter, JWT-derived ownership, Persistent EFS workspaces, Managed sessions, Filesystem safety checks, Infrastructure as code, Automated security tests
- Conceptual illustration:
  - Image URL: [https://davidnavarrosaiz.github.io/davidnavarro.github.io/_next/static/media/secure-ai-code-execution-editorial.05b12f5c.webp](https://davidnavarrosaiz.github.io/davidnavarro.github.io/_next/static/media/secure-ai-code-execution-editorial.05b12f5c.webp)
  - Alt text: Conceptual editorial illustration of secure AI code execution showing authenticated requests, a controlled runtime, verified workspace mounts, persistent artifacts, and gated results; not a production architecture diagram.
  - Caption: Conceptual illustration — runtime boundaries, workspace ownership, persistence, and verified outputs. It does not imply perfect isolation or completed production deployment.
- Technical decisions:
  - Reject caller-supplied workspace identity: Trusting a workspace ID in the request would make the most important authorization decision part of the user input. Deriving ownership from verified identity gives the gateway one authoritative starting point.
  - Separate execution from the chat application: A dedicated execution service makes runtime, filesystem, session, and artifact controls visible as their own boundary. It also avoids making the conversational application responsible for arbitrary interpreter lifecycle details.
  - Separate AgentCore execution from Sandpack previews: AgentCore Code Interpreter is the server-side code-execution path. Sandpack is the preview path for generated React or artifact output, protected by a separate HTTP authorization sidecar. Treating the two as the same sandbox would overstate what either boundary proves.
  - Persist workspaces, keep sessions ephemeral: Persistent owner-scoped storage supports useful files and artifacts, while managed interpreter sessions can remain short-lived. The trade-off is that the attachment and cleanup lifecycle must be verified instead of assumed.
  - Fail closed on unexpected runtime state: If the session, mount, or filesystem state does not match the authorized request, the safer behavior is to deny execution and surface a controlled failure rather than guessing which workspace was intended.
  - Be honest about the shared-role boundary: The design reduces accidental cross-owner access and incorrect routing at the application boundary. A shared interpreter resource and shared execution role are not a strong security boundary against mutually hostile users who can abuse those credentials, so I describe this as a controlled internal design rather than a hostile-tenant sandbox.
- Implementation:
  - Integrate the CodeAPI Translator with AgentCore: I implemented and tested a TypeScript/Fastify CodeAPI adapter for AWS Bedrock AgentCore Code Interpreter. The translator is the application-facing boundary: it verifies identity and prepares the execution request, while AgentCore is the managed service that actually runs the code.
  - Derive ownership from authenticated identity: I kept workspace ownership on the server side. The execution request does not get to nominate an arbitrary workspace identity; the CodeAPI Translator resolves the owner from verified authentication context and uses that result for the rest of the flow.
  - Bind sessions to workspaces: I treated session creation and storage attachment as one relationship to verify. Before execution, the path checks that the intended owner-scoped access point is present and that the session state matches what the application authorized.
  - Harden filesystem and lifecycle behavior: The implementation includes bounded filesystem operations, storage restrictions, session lifecycle handling, EFS access-point checks, and validation that rejects unexpected mounts or session states rather than attempting to recover silently.
  - Keep file and artifact handling explicit: Uploads, downloads, and generated artifacts remain part of the security boundary. The execution service should return only artifacts associated with the verified workspace and expected session flow.
  - Keep artifact previews separate from code execution: The Sandpack preview path is a different capability: an ECS/Fargate-hosted bundler sits behind an HTTP authorization sidecar for generated React and artifact previews. That sidecar protects preview requests; it is not the AgentCore Code Interpreter and does not provide general-purpose hostile-code sandboxing.
  - Prepare infrastructure and security tests: I worked with infrastructure-as-code preparation and automated security-oriented tests for ownership and filesystem behavior. The implementation work is documented separately from staging activation and broader user routing.
- Public evidence:
  - Source-level implementation: The documented source components include the TypeScript/Fastify CodeAPI adapter for AgentCore, owner-bound EFS workspace resolution, session and mount checks, and automated tests for the ownership, filesystem, and artifact boundaries described here. The public case omits private resource names, policies, paths, credentials, and topology.
  - Security-oriented test coverage: I exercised the cases that matter when identity and runtime state disagree: incorrect ownership, unexpected filesystem access, invalid mounts, and unsafe session conditions should be rejected rather than allowed to drift into execution.
  - Rollout status: The source-level components and automated tests were reported complete, and the infrastructure configuration was reviewed. The handover did not confirm complete staging activation, full end-to-end rollout, or production deployment of the multi-owner architecture.
- Limitations and scope:
  - AgentCore, translator, and storage are separate components: AgentCore Code Interpreter runs code, the translator mediates application requests, and EFS persists workspaces. ECS/Fargate hosts the translator; it is not accurate to describe AgentCore itself as an ECS service or to treat EFS as the execution sandbox.
  - Sandpack is an artifact-preview boundary: The Sandpack bundler and HTTP authorization sidecar support generated artifact previews. They are not the same implementation as AgentCore Code Interpreter and are not presented as a general-purpose hostile-code sandbox.
  - Not a hostile-tenant isolation claim: A shared managed interpreter resource and associated shared execution role can still expose residual risk to mutually hostile users who can abuse those credentials. Application-level ownership checks reduce routing mistakes; they do not remove that threat model.
  - Controlled internal scope: The selected architecture was designed for a controlled internal environment. I do not describe it as unrestricted secure execution, a zero-trust sandbox, or a production-grade multitenancy guarantee.
  - Activation remained gated: Implementation and tests are not the same as a completed rollout. Broader routing, staging activation, acceptance, and production deployment required separate operational gates that were not confirmed in the available handover context.
  - Private infrastructure details stay private: The published case intentionally excludes IAM policies, resource identifiers, filesystem paths, endpoints, account structure, credentials, and proprietary threat-model details.
- Related project IDs: 16, 20, 17, 15

### Project 22 — Industrial Machine Vision — Course & Practical Labs

- Public URL: [https://davidnavarrosaiz.github.io/davidnavarro.github.io/projects/22/](https://davidnavarrosaiz.github.io/davidnavarro.github.io/projects/22/)
- Category: Computer Vision / Engineering Education
- Published: 2022
- Status: Public collaborative course materials
- Role: Co-designer and instructor
- Description: I co-designed and delivered a public industrial machine-vision course with practical material that moves from pixels and image operators to cameras, optics, lighting, factory communication, and learned models. The repository is a collaborative teaching artifact: its value is the learning path and hands-on material, not an individual authorship claim.
- Problem: Machine vision is often taught as either image processing or model training, while real systems require both technical layers plus physical imaging and industrial integration. The course connects those layers so a learner can understand why field of view, lens choice, illumination, calibration, feature design, dataset construction, and communication all affect the final inspection behavior.
- Technologies: Python, OpenCV, PyTorch, Image processing, Optics and cameras, Industrial lighting, Thermography, 3D and smart cameras, Industrial communications, CNNs and deep learning
- Conceptual illustration:
  - Image URL: [https://davidnavarrosaiz.github.io/davidnavarro.github.io/_next/static/media/industrial-machine-vision-course-editorial.82d5d005.webp](https://davidnavarrosaiz.github.io/davidnavarro.github.io/_next/static/media/industrial-machine-vision-course-editorial.82d5d005.webp)
  - Alt text: Conceptual editorial illustration for the Industrial Machine Vision Course showing industrial camera systems, optical principles, field-of-view diagrams, image-processing exercises, and practical inspection education; not a photograph of the actual course or classroom.
  - Caption: Conceptual editorial artwork — industrial cameras, optics, field of view, image processing, and inspection education. The authentic course labs and diagrams remain available in the gallery below.
- Contributions:
  - Digital image processing: pixels, RGB and bit depth, filtering, edges, brightness and contrast, histograms, binarization, morphology, connected components, and shape or texture features.
  - Dimensioning systems: cameras, lenses, optics, field of view, resolution, depth of field, lighting, polarization, filters, thermography, optical gas imaging, 3D, hyperspectral and multispectral approaches.
  - Industrial integration: PC and smart cameras, FPGA and memory considerations, Ethernet/TCP/IP/PROFINET, and practical machine-vision communication exercises.
  - Machine and deep learning: feature-based classification, dataset construction, classical ML, neural networks, PyTorch, CNNs, evaluation, labs, and a final project.
- Technical decisions:
  - Teach the system, not only the model: The course keeps physical image formation, deterministic processing, industrial communication, and learned inference in one progression so the model is understood as one component of a larger system.
  - Preserve collaborative authorship: I describe the course as co-designed and collaboratively delivered. The public repository is linked as the source of the modules, notebooks, slides, and labs rather than presented as an exclusively authored work.
- Implementation:
  - Digital image processing: The first module builds from pixel representation and basic transformations through filtering, histograms, thresholding, morphology, connected components, and feature extraction such as size, curvature, circularity, perimeter, bounding boxes, centroids, texture, and moments.
  - Physical vision-system design: The material treats cameras, CCD/CMOS sensors, lenses, field of view, resolution, depth of field, illumination, polarization, filters, thermography, optical gas imaging, 3D, hyperspectral, multispectral, and stereo methods as system-design choices.
  - Practical industrial labs: The repository includes practical material around visible-camera and illumination setups, thermography, Gocator 3D work, Cognex smart-camera work, and industrial communication concepts.
  - Applied machine learning: Dataset construction, feature-based prediction and classification, basic ML, neural networks, PyTorch notebooks, CNNs, evaluation, and a final project complete the path.
- Public evidence:
  - Repository structure: The public repository contains README-described modules, notebooks, slide material, practical labs, and a final-project structure covering image processing, industrial vision, and machine learning.
  - Authentic visual material: The gallery uses selected images copied from the public course repository. They are learning material, not portfolio-generated illustrations or evidence of a specific production installation.
- Limitations and scope:
  - Collaborative course artifact: The case does not claim exclusive authorship, student counts, completion rates, or learning outcomes that are not documented in the public source.
  - Educational examples are not production guarantees: The labs and examples teach transferable concepts. They do not by themselves establish a production-ready inspection system, sensor specification, or industrial performance result.
- Evidence links:
  - Public course repository: [https://github.com/DavidNavarroSaiz/MachineVision-in-the-industry-Course](https://github.com/DavidNavarroSaiz/MachineVision-in-the-industry-Course)
- Related project IDs: 10, 3, 13

## Data boundaries

This export describes the public portfolio only. It omits credentials, internal prompts, customer operational thresholds, private rankings, unpublished infrastructure, and confidential employer information. Conceptual editorial artwork is identified as illustration in the corresponding project record; it is not treated as architecture or benchmark evidence.

Schema version: 1.0.0
