export const experienceData = [
	{
		id: 'svitla-systems',
		company: 'Svitla Systems',
		position: 'Sr. ML/AI Engineer',
		period: 'Aug 2025 – Present',
		duration: '1+ year',
		location: 'Remote',
		type: 'Full-time',
		status: 'current',
		domains: ['AI Agents & Evaluation', 'RAG & AI Platforms', 'Technical Leadership'],
		specialties: ['Governed agents', 'Evaluation design', 'RAG reliability', 'Tool verification'],
		summary:
			'I work on production agent systems that combine policy-governed orchestration, retrieval, tool operations, and evaluation. My scope spans runtime reliability, experiment design, and trace-based debugging.',
		context:
			'The central engineering challenge is allowing a stateful, multilingual assistant to act on business workflows while keeping authorization, confirmation, evidence, and failure handling explicit. I also build the evaluation loop needed to understand whether retrieval, decisions, tool results, and responses are behaving as intended.',
		ownership: [
			'Designed LangGraph agent workflows with deterministic eligibility rules, confirmation gates, authorized tools, and explicit state transitions.',
			'Built layered validation around action eligibility, tool-result verification, and response adjudication rather than relying on a single model decision.',
			'Designed synthetic QA and configurable evaluation experiments using RAGAS, DeepEval, retrieval ranking, and repeatable run records.',
			'Instrumented traces, retrieved context, tool outcomes, and human-review scenarios with Opik to make failures diagnosable.',
		],
		decisions: [
			'Kept policy and business rules deterministic so the model interprets requests without becoming the authority for irreversible actions.',
			'Used structured outcomes, timeout handling, retry classification, and fallbacks to separate recoverable tool failures from workflow failures.',
			'Treated retrieval quality, agent behavior, safety, and response quality as related but separately inspectable evaluation concerns.',
		],
		technologies: ['LangGraph', 'Python', 'RAGAS', 'DeepEval', 'Opik', 'Vector retrieval', 'Synthetic QA'],
		impact: [
			{
				label: 'Scope',
				value: 'Production agent + evaluation',
				detail: 'Shared runtime foundations, governed actions, evaluation experiments, and operational debugging.',
			},
		],
		relatedProjectIds: [17, 20],
		companyLogo: '/images/companies/svitla.png',
		companyUrl: 'https://svitla.com',
	},
	{
		id: '360training',
		company: '360Training',
		position: 'Machine Learning Engineer — Computer Vision & ML',
		period: 'Aug 2025 – Nov 2025',
		duration: '4 months',
		location: 'Remote',
		type: 'Concurrent engagement',
		status: 'completed',
		overlapNote: 'Concurrent with the Svitla Systems role.',
		domains: ['Computer Vision'],
		specialties: ['Behavioral CV', 'Model comparison', 'Dataset versioning', 'Video inference'],
		summary:
			'I worked on multi-signal proctoring models that combined face detection, gaze, head pose, and temporal behavior features. The work compared classical and neural approaches and tightened the path from labeled data to inference.',
		context:
			'Exam-integrity signals are noisy when treated in isolation. The engineering problem was to compare complementary features and model families while keeping data labeling, evaluation, and runtime heuristics understandable to the teams operating the system.',
		ownership: [
			'Combined face detection, gaze, head pose, and temporal behavior features for suspicious-behavior modeling.',
			'Compared XGBoost, LightGBM, random forests, logistic regression, and neural models against the same evaluation goals.',
			'Worked with CVAT, DVC, and MLflow for annotation, dataset versioning, experiment records, and model comparison.',
			'Connected model outputs to inference heuristics designed for practical video-processing behavior.',
		],
		decisions: [
			'Used multiple behavioral signals so a single noisy frame or detector did not decide an outcome alone.',
			'Kept classical baselines in the comparison to make trade-offs in robustness, interpretability, and runtime visible.',
			'Separated data and experiment versioning from the inference heuristics so changes could be traced.',
		],
		technologies: ['Python', 'Computer Vision', 'XGBoost', 'LightGBM', 'CVAT', 'DVC', 'MLflow'],
		impact: [
			{
				label: 'Evaluation scope',
				value: 'Multi-signal behavior modeling',
				detail: 'A practical comparison of feature combinations and model families for video-based proctoring.',
			},
			{ label: 'False positives', value: '45% reduction', detail: 'Reported result from the relevant proctoring pipeline.' },
			{ label: 'Deployment speed', value: '40% faster', detail: 'Reported result from the relevant proctoring workflow.' },
			{ label: 'Model selection', value: '50% less time', detail: 'Reported reduction in time spent comparing candidate models.' },
		],
		relatedProjectIds: [],
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
		domains: ['AI Agents & Evaluation', 'RAG & AI Platforms'],
		specialties: ['Multi-agent orchestration', 'MCP integrations', 'LLMOps', 'Azure delivery'],
		summary:
			'I designed configurable multi-agent systems with memory, tools, collaborative workflows, and enterprise integration points. I also helped turn the platform into an operable Azure-based system with repeatable LLMOps practices.',
		context:
			'The product challenge was to support different agent configurations without creating a separate bespoke application for each workflow. That meant making agent behavior, integrations, approvals, and infrastructure reusable while keeping the system understandable to the teams configuring it.',
		ownership: [
			'Built multi-agent workflows with LangChain and PydanticAI, including memory, tools, and collaborative task handoffs.',
			'Integrated MCP servers and Microsoft Teams so agents could work through familiar enterprise channels.',
			'Established Azure infrastructure and maintainable LLMOps practices for configuration, deployment, and monitoring.',
			'Contributed to human-in-the-loop approval flows and packaging work for a reusable enterprise solution.',
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
		relatedProjectIds: [1],
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
		domains: ['RAG & AI Platforms'],
		specialties: ['RAG systems', 'Vector retrieval', 'Data enrichment', 'Workflow automation'],
		summary:
			'I built retrieval and enrichment workflows for recruitment, lead generation, and customer operations. The work connected unstructured web and business data to structured CRM actions and automated communication.',
		context:
			'The recurring problem was not simply finding text; it was turning scattered prospect and operational information into data that downstream workflows could use. I worked across retrieval, extraction, CRM integration, and automation so the handoffs were repeatable.',
		ownership: [
			'Designed RAG and vector-retrieval workflows with Qdrant for search, enrichment, and personalized communication.',
			'Connected structured outputs to GoHighLevel CRM and workflow automation for recruitment and lead-generation operations.',
			'Built web-scraping and data-extraction paths with Selenium, Apify, and n8n.',
			'Used Azure Pipelines and FastAPI patterns to keep feature delivery and service changes repeatable.',
		],
		decisions: [
			'Separated extraction and enrichment from CRM actions so source data could be reviewed before automation changed a record.',
			'Used retrieval where context was distributed across documents and web sources, then normalized the result for operational systems.',
			'Kept automation components replaceable so the platform could support different business workflows without rewriting the retrieval layer.',
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
		relatedProjectIds: [],
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
		domains: ['RAG & AI Platforms', 'Technical Leadership'],
		specialties: ['Document intelligence', 'Retrieval and reranking', 'MLOps', 'Technical leadership'],
		summary:
			'I led a team building conversational AI and document-intelligence systems for an education and community organization. I owned the path from multi-format ingestion and retrieval to usable forms, reports, and recommendations.',
		context:
			'The challenge was to make heterogeneous documents useful to staff without turning the assistant into an untraceable answer generator. The platform needed ingestion, filtering, reranking, speech and application interfaces, plus a deployment path the team could operate.',
		ownership: [
			'Led development of conversational AI and document-intelligence workflows with LangChain, FastAPI, React, TypeScript, and Node.',
			'Implemented multi-format ingestion, vector retrieval, filters, and reranking for program guides and operational documents.',
			'Connected Azure Speech and generated forms, reports, and recommendations around retrieved knowledge.',
			'Coordinated deployment through AKS, App Service, and Container Apps with CI/CD practices.',
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
		relatedProjectIds: [],
		companyLogo: '/images/companies/elsol.png',
		companyUrl: 'https://elsolnec.org',
	},
	{
		id: 'university-of-magdalena-covid-rx',
		company: 'University of Magdalena',
		position: 'Applied ML Researcher — COVID-Rx',
		period: 'Dec 2020 – Nov 2021',
		duration: '1 year',
		location: 'Colombia',
		type: 'Research project',
		status: 'completed',
		overlapNote: 'Concurrent research project during the Intecol SAS tenure.',
		domains: ['Computer Vision'],
		specialties: ['CNN experimentation', 'Medical imaging', 'Model evaluation', 'Explainability'],
		summary:
			'I developed a research and application workflow for comparing CNN architectures on a public chest X-ray classification task. The work covered dataset preparation, preprocessing, model evaluation, probability outputs, and visual explanation.',
		context:
			'Comparing image classifiers required keeping data decisions, architecture-specific preprocessing, metrics, and user-facing interpretation separate. I built the workflow as an applied research system, not as a claim of clinical validation or deployment.',
		ownership: [
			'Curated a working dataset of more than 36,000 public chest X-ray images across COVID-19, healthy, and pneumonia classes.',
			'Trained and compared ten CNN families in PyTorch, including VGG19, DenseNet, MobileNet, EfficientNet, ResNet, and Xception.',
			'Built PyQt desktop and Flask web interfaces for probability outputs and heatmap-based visual explanation.',
			'Implemented preprocessing, augmentation, evaluation, and model-comparison paths for repeatable experiments.',
		],
		decisions: [
			'Compared multiple architectures rather than treating a single model score as the conclusion.',
			'Kept preprocessing and evaluation choices explicit because they change what a model comparison means.',
			'Presented heatmaps as model-behavior inspection, not evidence of clinical correctness.',
		],
		technologies: ['PyTorch', 'CNN', 'OpenCV', 'PyQt', 'Flask', 'Medical imaging', 'Model evaluation'],
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
		domains: ['Computer Vision', 'Technical Leadership'],
		specialties: ['Industrial imaging', 'Real-time CV', 'PLC/HMI integration', 'Team leadership'],
		summary:
			'I led industrial computer-vision delivery from imaging design and model development through integration with automation systems. The role combined technical architecture, client requirements, delivery planning, and mentoring a 10-engineer team across 30+ projects.',
		context:
			'Industrial vision has to work with real optics, illumination, hardware, throughput, and plant interfaces. I worked across classical image processing, CNN and YOLO models, edge execution, PLC/HMI integration, and the operational details needed to turn a lab model into a usable system.',
		ownership: [
			'Led a 10-engineer team and owned architecture, planning, client requirements, budgets, reviews, and delivery quality.',
			'Designed imaging systems involving camera selection, optics, illumination, sensors, and 3D scanners.',
			'Built CNN, YOLO, PyTorch, TensorFlow, Python, and C++ solutions for inspection, safety, and human-behavior use cases.',
			'Connected vision software to real-time execution, PLC/HMI interfaces, monitoring systems, and automated retraining workflows.',
		],
		decisions: [
			'Started with the imaging conditions and plant constraints because model quality cannot compensate for poor capture.',
			'Chose classical CV, deep learning, or a hybrid according to latency, variation, explainability, and maintenance needs.',
			'Used labeling and retraining loops to keep deployed systems adaptable instead of treating delivery as a one-time model handoff.',
		],
		technologies: ['Python', 'C++', 'PyTorch', 'TensorFlow', 'YOLO', 'OpenCV', 'PLC/HMI', 'CVAT'],
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

export const industryDomains = [
	'AI Agents & Evaluation',
	'RAG & AI Platforms',
	'Computer Vision',
	'Technical Leadership',
];

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
	roles: experienceData.length,
	technologies: [...new Set(experienceData.flatMap((exp) => exp.technologies))].length,
	relatedCaseStudies: relatedCaseStudyIds.size,
	leadership: experienceData.filter((exp) => exp.domains.includes('Technical Leadership')).length,
};
