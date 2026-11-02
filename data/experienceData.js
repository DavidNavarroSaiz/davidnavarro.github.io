export const experienceData = [
	{
		id: 'svitla-roadie',
		company: 'Svitla Systems',
		client: 'Roadie',
		position: 'Sr. ML/AI Engineer',
		period: 'Nov 2025 – Present',
		employmentPeriod: 'Aug 2025 – Present',
		duration: '1+ year',
		location: 'Remote',
		type: 'Client engagement · Full-time',
		status: 'current',
		chapter: 'reliable',
		domains: ['Production AI Agents', 'Agent Orchestration', 'Reliability Engineering', 'AI Evaluation', 'RAG & Tool Integration'],
		specialties: ['Stateful agents', 'Authorization gates', 'Tool verification', 'Regression evaluation'],
		responsibilities: [
			'Build and operate Roadie’s stateful conversational AI workflows through Svitla Systems, from LangGraph orchestration to verified backend actions.',
			'Own authorization and confirmation boundaries, multilingual interaction, tool execution, governed responses, and recovery paths for operational customer interactions.',
		],
		workstreams: [
			{
				label: 'Roadie · Operational AI Agents',
				period: 'Nov 2025 – Present',
				maturity: 'Production workflow',
				responsibility: 'Connect conversational interpretation to explicit state transitions, authorized tools, confirmation gates, and verified outcomes.',
				implementation: 'LangGraph orchestration, retrieval and tool integration, traces, regression scenarios, and structured error recovery.',
			},
		],
		editorialNote: {
			label: 'Field note / 01',
			quote: 'The model is one part of the system. Reliability lives in the decisions around it.',
			body: 'A useful agent is not only conversational; it knows when to retrieve, when to ask, when to act, and how to verify what happened.',
		},
		summary:
			'I build Roadie’s production conversational AI agents through Svitla Systems, combining LangGraph orchestration, retrieval, tool operations, multilingual interaction, and governed responses.',
		context:
			'Roadie workflows need to move from a natural-language request to a safe, observable backend action. The engineering challenge is preserving state and context while making authorization, confirmation, evidence, and recovery explicit at every operational boundary.',
		evidence:
			'Designed, implemented, and shipped production AI agent workflows supporting operational customer interactions. Evaluation datasets, regression scenarios, and trace analysis guide the continued development of adjacent workflows.',
		ownership: [
			'Designed LangGraph state machines with deterministic eligibility rules, confirmation gates, authorized tools, and explicit transitions.',
			'Built layered validation for action eligibility, tool-result verification, governed responses, timeout handling, retries, and recoverable failures.',
			'Created evaluation datasets and repeatable experiments with retrieval ranking, RAGAS, DeepEval, Opik traces, and human-review scenarios.',
			'Instrumented retrieved context, tool outcomes, and regression cases so failures could be diagnosed across interpretation, execution, and response.',
		],
		decisions: [
			'Kept policy and business rules deterministic so the model interprets requests without becoming the authority for irreversible actions.',
			'Separated retrieval quality, agent behavior, safety, and response quality into inspectable evaluation concerns.',
			'Used structured outcomes and recovery classification to distinguish a tool problem from a workflow problem.',
		],
		technologies: ['LangGraph', 'Python', 'RAGAS', 'DeepEval', 'Opik', 'Vector retrieval', 'Synthetic QA'],
		impact: [
			{
				label: 'Shipped scope',
				value: 'Roadie production agent workflows',
				detail: 'Stateful conversational interaction, governed actions, evaluation experiments, and operational debugging.',
			},
		],
		relatedProjectIds: [17, 20],
		companyLogo: '/images/companies/svitla.png',
		companyUrl: 'https://svitla.com',
	},
	{
		id: 'svitla-360training',
		company: 'Svitla Systems',
		client: '360Training',
		position: 'Sr. ML/AI Engineer — Computer Vision',
		period: 'Aug – Nov 2025',
		employmentPeriod: 'Aug 2025 – Present',
		duration: '4 months',
		location: 'Remote',
		type: 'Client engagement · Full-time',
		status: 'completed',
		chapter: 'reliable',
		domains: ['Computer Vision', 'Applied Machine Learning', 'Real-time Inference', 'Model Experimentation', 'MLOps'],
		specialties: ['Multimodal proctoring', 'Temporal features', 'Model comparison', 'Reproducible experiments'],
		responsibilities: [
			'Led design and deployment of production-grade computer-vision and proctoring ML systems for a 360Training client engagement.',
			'Own the experimentation and inference path across annotation, feature engineering, model comparison, Python services, and monitoring integration.',
		],
		workstreams: [
			{
				label: '360Training · Visual Proctoring',
				period: 'Aug – Nov 2025',
				maturity: 'Production and experimentation',
				responsibility: 'Combine face detection, gaze estimation, yaw/pitch angles, head movement, and temporal behavior features for multimodal proctoring signals.',
				implementation: 'CVAT annotation workflows, DVC datasets, MLflow tracking, model comparison, Python inference, and Node.js/JavaScript real-time heuristics.',
			},
		],
		summary:
			'I led computer-vision experimentation and inference work for 360Training’s visual-proctoring systems, connecting multimodal signals to reproducible model development and monitoring.',
		context:
			'Proctoring behavior varies across people, cameras, and operating conditions. The system needed robust temporal signals and a reproducible way to compare models, tune edge cases, and move useful inference into a service and dashboard workflow.',
		evidence:
			'The relevant proctoring workflow recorded 45% fewer false positives, 40% faster deployment, and 50% less model-selection time across the scoped experimental pipeline.',
		implementationGroups: [
			{
				label: 'Production computer vision systems',
				items: [
					'Built multimodal proctoring features from face detection, gaze estimation, yaw/pitch angles, head movement, and temporal behavior.',
					'Implemented real-time heuristics and inference services with JavaScript/Node.js, plus React and TypeScript monitoring integration.',
				],
			},
			{
				label: 'Data engineering and experimentation',
				items: [
					'Authored CVAT annotation guides and workflows, managed reproducible datasets with DVC, and built statistical and temporal feature pipelines.',
					'Applied systematic hyperparameter optimization and evaluation procedures to improve robustness across operating conditions.',
				],
			},
			{
				label: 'Model development and MLOps',
				items: [
					'Trained and compared XGBoost, LightGBM, Random Forest, Logistic Regression, neural networks, and relevant deep-learning approaches using multiple evaluation signals.',
					'Used MLflow for experiment tracking, model versioning, and artifact management; developed a Python inference service and contributed to deployment decisions.',
				],
			},
		],
		ownership: [],
		decisions: [
			'Kept annotation, dataset versioning, feature engineering, and model evaluation explicit so improvements could be reproduced rather than attributed to a single score.',
			'Combined temporal behavior with frame-level signals because isolated detections were not enough to represent proctoring context.',
			'Used model comparison to choose an appropriate operating point for the workflow instead of assuming the most complex model was best.',
		],
		technologies: ['Python', 'Node.js', 'JavaScript', 'React', 'TypeScript', 'CVAT', 'DVC', 'MLflow', 'XGBoost', 'LightGBM'],
		impact: [
			{
				label: 'Scoped result',
				value: '−45% false positives',
				detail: 'Reported result from the relevant 360Training proctoring workflow.',
			},
			{ label: 'Deployment', value: '40% faster', detail: 'Reported workflow improvement.' },
			{ label: 'Selection cycle', value: '50% less time', detail: 'Reported reduction in model-selection time.' },
		],
		relatedProjectIds: [10],
		companyLogo: '/images/companies/svitla.png',
		companyUrl: 'https://svitla.com',
	},
	{
		id: 'kmeleon',
		company: 'Kmeleon',
		position: 'Generative AI Engineer',
		period: 'Jan 2025 – Aug 2025',
		duration: '8 months',
		location: 'Remote',
		type: 'Full-time',
		status: 'completed',
		chapter: 'connected',
		domains: ['AI Agents & Evaluation', 'RAG & AI Platforms'],
		specialties: ['Multi-agent orchestration', 'MCP integrations', 'LLMOps', 'Azure delivery'],
		responsibilities: [
			'Contribute to the architecture of configurable conversational and multi-agent systems, enterprise knowledge retrieval, Microsoft Teams integration, and Azure delivery.',
			'Own infrastructure, vector-database administration, ingestion, MCP integration, and functional validation across the platform’s reusable engineering surface.',
		],
		summary:
			'I helped design configurable conversational and multi-agent systems that connect enterprise knowledge, Microsoft Teams, Azure DevOps operations, and reusable cloud infrastructure.',
		context:
			'The platform needed to support different agent configurations without creating a bespoke application for each workflow. The engineering challenge was to make orchestration, retrieval, integrations, approvals, infrastructure, and testing reusable while keeping the system understandable to the teams configuring it.',
		evidence:
			'Internal platform delivery with reusable enterprise foundations, Azure infrastructure, and functional tests that verified the exposed integration boundaries.',
		ownership: [
			'Built multi-agent workflows with LangChain and PydanticAI, including memory, tools, and collaborative task handoffs.',
			'Designed vector-backed ingestion and retrieval paths so configurable agents could work from shared enterprise knowledge rather than isolated prompts.',
			'Integrated MCP servers and Microsoft Teams so agents could work through familiar enterprise channels.',
			'Implemented the Azure DevOps MCP server operations and functional tests for creating, assigning, reading, and deleting work items, plus document-ingestion verification.',
			'Administered vector-backed knowledge and ingestion paths, established Azure infrastructure and IaC, and contributed to maintainable LLMOps practices.',
			'Contributed to human-in-the-loop approval flows and preparation of a reusable internal solution without representing it as a commercial Marketplace launch.',
		],
		decisions: [
			'Used typed configuration and explicit tool boundaries to keep agent variations composable instead of hard-coding each workflow.',
			'Treated approvals and external integrations as first-class workflow steps rather than hidden prompt behavior.',
			'Kept infrastructure definitions versioned with the platform so environment changes were reviewable.',
		],
		technologies: ['LangChain', 'PydanticAI', 'Azure AI', 'MCP', 'Microsoft Teams', 'LLMOps', 'Bicep'],
		impact: [
			{
				label: 'Platform scope',
				value: 'Configurable agent workflows',
				detail: 'Reusable orchestration, integrations, approvals, and deployment foundations for enterprise use cases.',
			},
			{ label: 'Time-to-deploy', value: '< 1 hour', detail: 'Reported platform outcome for customer setup; not a universal guarantee.' },
		],
		relatedProjectIds: [1, 12],
		companyLogo: '/images/companies/kmeleon.png',
		companyUrl: 'https://www.kmeleon.tech',
	},
	{
		id: 'southdesk',
		company: 'Southdesk',
		position: 'Machine Learning Engineer',
		period: 'Apr 2024 – Jan 2025',
		duration: '10 months',
		location: 'Remote',
		type: 'Full-time',
		status: 'completed',
		chapter: 'connected',
		domains: ['RAG & AI Platforms'],
		specialties: ['RAG systems', 'Vector retrieval', 'Data enrichment', 'Workflow automation'],
		responsibilities: [
			'Build AI-native business workflows for lead generation, qualification, outreach, reporting, recruitment, and customer operations.',
			'Own integrations across semantic retrieval, enrichment, CRM automation, scraping, and delivery pipelines so business data becomes repeatable workflow input.',
		],
		summary:
			'I built applied AI workflows for lead generation, qualification, outreach, reporting, and recruitment. The work connected unstructured business data to organized CRM actions and automated communication.',
		context:
			'The engineering question was how AI could make business processes more intelligent, integrated, and efficient. I worked across extraction, candidate organization, semantic search, CRM integration, and automation so scattered information could move through repeatable workflows.',
		evidence:
			'Built and integrated repeatable business workflows for outreach, recruitment, reporting, and CRM operations, with the relevant project metrics retained in their original scope.',
		ownership: [
			'Built lead-generation and qualification workflows, including cold-email and cold-call automation where supported by the engagement scope, outreach, and AI-generated monthly reporting.',
			'Organized and enriched candidate data, then used semantic retrieval and ranking with Qdrant to find people whose experience was relevant to open positions.',
			'Connected structured outputs to GoHighLevel CRM and workflow automation for recruitment, lead-generation, and customer operations.',
			'Built web-scraping and data-extraction paths with Selenium, Apify, and n8n, with Azure Pipelines and FastAPI patterns for repeatable delivery.',
		],
		decisions: [
			'Separated extraction and enrichment from CRM actions so source data could be organized before automation changed a record.',
			'Applied RAG and vector retrieval specifically to candidate search and recommendation, where relevant experience had to be found across distributed profiles.',
			'Kept workflow components replaceable so outreach, reporting, recruitment, and lead operations could evolve without rewriting the retrieval layer.',
		],
		technologies: ['RAG', 'Qdrant', 'FastAPI', 'Azure Pipelines', 'GoHighLevel', 'Selenium', 'Apify', 'n8n'],
		impact: [
			{
				label: 'Delivery',
				value: '40% shorter deployment cycles',
				detail: 'Reported in the existing project record alongside automated retrieval and CRM workflows.',
			},
			{ label: 'Lead conversion', value: '+2%', detail: 'Reported outcome from the relevant lead-generation workflow.' },
		],
		relatedProjectIds: [2, 5, 6, 7],
		companyLogo: '/images/companies/southdesk.png',
		companyUrl: 'https://southdesk.net',
	},
	{
		id: 'el-sol',
		company: 'El Sol',
		position: 'Machine Learning Team Leader',
		period: 'Jun 2023 – Apr 2024',
		duration: '11 months',
		location: 'Remote',
		type: 'Full-time',
		status: 'completed',
		chapter: 'connected',
		domains: ['RAG & AI Platforms', 'Technical Leadership'],
		specialties: ['Document intelligence', 'Retrieval and reranking', 'MLOps', 'Technical leadership'],
		responsibilities: [
			'Lead a team delivering infrastructure architecture, backend services, document intelligence, retrieval, and cloud implementation for education and community workflows.',
			'Own the path from heterogeneous ingestion and reranking to automatic form completion, personalized reports, healthcare-plan generation, deployment, and operational handoff.',
		],
		summary:
			'I led a team building AI infrastructure and document-intelligence services for an education and community organization, from cloud provisioning and backend delivery to retrieval-grounded forms, reports, and healthcare plans.',
		context:
			'The challenge was to make heterogeneous documents useful to staff while giving the team an operable path from infrastructure and ingestion to grounded outputs. The platform needed filtering, reranking, application interfaces, service integration, and deployment patterns the team could maintain.',
		evidence:
			'Team delivery across resource discovery and document workflows, including the existing records’ 160+ users, approximately 100 documents per month, and reported acceleration outcomes.',
		ownership: [
			'Led development of conversational AI and document-intelligence workflows with LangChain, FastAPI, React, TypeScript, and Node.',
			'Implemented multi-format ingestion, vector retrieval, filters, and reranking for program guides and operational documents.',
			'Connected Azure Speech and generated automatic forms, personalized reports, recommendations, and healthcare plans around retrieved knowledge.',
			'Architected and provisioned AI services, then coordinated deployment through AKS, App Service, and Container Apps with CI/CD practices.',
		],
		decisions: [
			'Used retrieval filters and reranking to keep domain answers grounded in the right program context.',
			'Built the application layer around the workflow staff already used instead of exposing a model-only interface.',
			'Balanced delivery speed with operational ownership by standardizing deployment and monitoring patterns for the team.',
		],
		technologies: ['LangChain', 'FastAPI', 'React', 'PGVector', 'Azure Speech', 'AKS', 'CI/CD'],
		impact: [
			{ label: 'Users', value: '160+', detail: 'Users supported by the resource-discovery workflow.' },
			{ label: 'Throughput', value: '~100 documents/month', detail: 'Document-processing volume in the existing project record.' },
			{ label: 'Resource discovery', value: '50% faster', detail: 'Existing project record also reports 40% faster deployment cycles.' },
			{ label: 'Deployment cycles', value: '40% acceleration', detail: 'Reported outcome from the team’s MLOps and CI/CD work.' },
		],
		relatedProjectIds: [6, 8, 9],
		companyLogo: '/images/companies/elsol.png',
		companyUrl: 'https://elsolnec.org',
	},
	{
		id: 'university-of-magdalena-covid-rx',
		company: 'University of Magdalena',
		position: 'Applied ML Researcher — COVID-Rx',
		period: '2020 – 2021',
		duration: '1 year',
		location: 'Colombia',
		type: 'Research project',
		status: 'completed',
		chapter: 'foundations',
		overlapNote: 'Concurrent research project during the Intecol SAS tenure.',
		domains: ['Computer Vision'],
		specialties: ['CNN experimentation', 'Medical imaging', 'Model evaluation', 'Explainability'],
		responsibilities: [
			'Conduct applied research on public chest X-ray classification, keeping dataset preparation, preprocessing, model comparison, and interpretation explicit.',
			'Build the experimental and application interfaces needed to inspect probability outputs and model behavior, with experiment tracking for repeatable comparison.',
		],
		summary:
			'I developed a research and application workflow for comparing CNN architectures on a public chest X-ray classification task. The work covered dataset preparation, preprocessing, model evaluation, probability outputs, and visual explanation.',
		context:
			'Comparing image classifiers required keeping data decisions, architecture-specific preprocessing, metrics, and user-facing interpretation separate. I built the workflow as an applied research system, not as a claim of clinical validation or deployment.',
		evidence:
			'Applied research prototype using public data; the reported 96% result is an experiment metric within this workflow, not a clinical performance claim.',
		ownership: [
			'Curated a working dataset of more than 36,000 public chest X-ray images across COVID-19, healthy, and pneumonia classes.',
			'Trained and compared ten CNN families in PyTorch, including VGG19, DenseNet, MobileNet, EfficientNet, ResNet, and Xception.',
			'Implemented preprocessing, augmentation, evaluation, model-comparison, and MLflow experiment-tracking paths for repeatable experiments.',
			'Built PyQt desktop and Flask web interfaces for probability outputs and heatmap-based visual explanation.',
		],
		decisions: [
			'Compared multiple architectures rather than treating a single model score as the conclusion.',
			'Kept preprocessing and evaluation choices explicit because they change what a model comparison means.',
			'Presented heatmaps as model-behavior inspection, not evidence of clinical correctness.',
		],
		technologies: ['PyTorch', 'CNN', 'OpenCV', 'PyQt', 'Flask', 'MLflow', 'Medical imaging', 'Model evaluation'],
		impact: [
			{ label: 'Dataset', value: '36k+ chest X-rays', detail: 'Public multi-class image sources used for the research workflow.' },
			{ label: 'Comparison', value: '10 CNN architectures', detail: 'Reported experiment scope across model families.' },
			{ label: 'Reported result', value: '96% accuracy', detail: 'Historical project result; this is an experiment metric, not clinical validation.' },
		],
		relatedProjectIds: [3],
		companyLogo: '/images/companies/universidad-magdalena.png',
		companyUrl: 'https://unimagdalena.edu.co',
	},
	{
		id: 'intecol-sas',
		company: 'Intecol SAS',
		position: 'Computer Vision Engineer & Team Lead',
		period: 'May 2019 – Apr 2023',
		duration: '4 years',
		location: 'Colombia',
		type: 'Full-time',
		status: 'completed',
		chapter: 'foundations',
		domains: ['Computer Vision', 'Technical Leadership'],
		specialties: ['Industrial imaging', 'Real-time CV', 'PLC/HMI integration', '3D measurement'],
		responsibilities: [
			'Design industrial computer-vision systems from initial requirements through cameras, optics, illumination, models, plant interfaces, and delivery constraints.',
			'Lead approximately ten engineers across architecture, requirements, project delivery, technical reviews, mentoring, and customer-facing constraints.',
		],
		summary:
			'I led hands-on industrial computer-vision delivery across 30+ projects, from physical imaging design and model development to PLC integration, measurement systems, delivery planning, and mentoring a team of approximately ten engineers.',
		context:
			'Industrial vision has to work with real optics, illumination, hardware, throughput, maintenance, and plant interfaces. I moved between deterministic image processing, learned models, thermography, 3D sensing, edge execution, PLC/HMI integration, and the physical constraints that determine whether a system works outside the lab.',
		evidence:
			'Industrial delivery across the reported project scope, with representative detection and false-alarm outcomes retained for the relevant systems.',
		implementationGroups: [
			{
				label: 'Physical machine-vision system design',
				items: [
					'Designed projects from inspection requirements, selecting industrial cameras and sensors, lenses for field of view, working distance, and resolution, and lighting for reliable acquisition.',
					'Accounted for operating conditions, maintenance, throughput, installation constraints, calibration, and physical access before model selection.',
				],
			},
			{
				label: 'Software and model development',
				items: [
					'Developed systems with C#, C++, and Python, using OpenCV and classical image-processing methods alongside learned models.',
					'Built classification and object-detection solutions with PyTorch, TensorFlow, and Keras, integrating acquisition, preprocessing, inference, and application logic.',
				],
			},
			{
				label: 'Industrial automation and operator interfaces',
				items: [
					'Connected inspection results to PLCs and plant control systems, including reject mechanisms, alarms, and operational outputs.',
					'Built graphical interfaces for control, monitoring, and result visualization under real-time execution constraints.',
				],
			},
			{
				label: 'Thermography and 3D measurement',
				items: [
					'Configured thermographic imaging for thermal defects, hotspots, people detection, and temperature-screening use cases without representing them as medically validated fever diagnosis.',
					'Integrated 3D laser profilers and Time-of-Flight cameras for dimensional and distance measurement, working through calibration, sensor placement, precision, and physical constraints.',
				],
			},
			{
				label: 'Technical leadership',
				items: [
					'Led approximately ten engineers across architecture, budgets, delivery planning, client requirements, technical reviews, mentoring, and more than thirty industrial computer-vision projects.',
				],
			},
		],
		ownership: [],
		decisions: [
			'Started with the physical scene and plant constraints because model quality cannot compensate for poor capture or an unusable installation.',
			'Chose classical CV, deep learning, or a hybrid according to latency, variation, explainability, maintenance, and the cost of an operational error.',
			'Used labeling and retraining loops to keep systems adaptable instead of treating delivery as a one-time model handoff.',
		],
		technologies: ['C#', 'C++', 'Python', 'PyTorch', 'TensorFlow', 'Keras', 'YOLO', 'OpenCV', 'PLC/HMI', 'Thermography', '3D laser', 'ToF cameras'],
		impact: [
			{ label: 'Leadership', value: '10 engineers', detail: 'Team leadership across architecture, delivery, and technical mentoring.' },
			{ label: 'Delivery', value: '30+ industrial CV projects', detail: 'Scope reported in the supplied professional background.' },
			{ label: 'Reported outcomes', value: '+30% detection · −45% false alarms', detail: 'Representative results from relevant systems, not a universal claim across every project.' },
		],
		relatedProjectIds: [10, 22],
		companyLogo: '/images/companies/intecol.png',
	},
];

// Keep the public profile claim stable across static builds and browser hydration.
// Refresh this value deliberately when the portfolio narrative is reviewed.
export const experienceYears = 7;

export const experienceChapters = {
	foundations: {
		label: 'Foundations',
		years: '2019–2023',
		accent: '#C58B69',
	},
	connected: {
		label: 'Connected Systems',
		years: '2023–2025',
		accent: '#A97946',
	},
	reliable: {
		label: 'Reliable AI',
		years: '2025–present',
		accent: '#96A18D',
	},
};

export const industryDomains = [...new Set(experienceData.flatMap((experience) => experience.domains))];

const employerNames = new Set(
	experienceData
		.filter((experience) => experience.type !== 'Research project')
		.map((experience) => experience.company)
);
const relatedCaseStudyIds = new Set(
	experienceData.flatMap((experience) => experience.relatedProjectIds)
);

export const experienceStats = {
	totalYears: `${experienceYears}+`,
	companies: employerNames.size,
	employers: employerNames.size,
	engagements: experienceData.filter((experience) => experience.type !== 'Research project').length,
	researchEntries: experienceData.filter((experience) => experience.type === 'Research project').length,
	entries: experienceData.length,
	technologies: [...new Set(experienceData.flatMap((exp) => exp.technologies))].length,
	relatedCaseStudies: relatedCaseStudyIds.size,
	leadership: experienceData.filter((exp) => exp.domains.includes('Technical Leadership')).length,
};
