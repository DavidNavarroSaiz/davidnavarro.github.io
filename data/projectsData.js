import { v4 as uuidv4 } from 'uuid';
import {
	FiFacebook,
	FiInstagram,
	FiLinkedin,
	FiTwitter,
	FiYoutube,
} from 'react-icons/fi';

// Optimized raster variants (WebP) + hand-authored architecture diagrams.
// Originals are preserved in public/images for reference.
import pm1_640 from '../assets/images/pm1-640.webp';
import rg1_640 from '../assets/images/rg1-640.webp';
import covidRxEditorialCover from '../assets/images/covid-rx-editorial-cover.webp';
import abo1_640 from '../assets/images/abo1-640.webp';
import abogaciaEditorialCover from '../assets/images/abogacia-editorial-cover.webp';
import lead3_640 from '../assets/images/lead3-640.webp';
import make2_640 from '../assets/images/make2-640.webp';
import make1_640 from '../assets/images/make1-640.webp';
import health1_640 from '../assets/images/health1-640.webp';
import speech1_640 from '../assets/images/speech1-640.webp';
import int4_640 from '../assets/images/int4-640.webp';
import realtime1_640 from '../assets/images/realtime1-640.webp';
import mcp1_640 from '../assets/images/mcp1-640.webp';
import cctv1_640 from '../assets/images/cctv1-640.webp';
import rg1_960 from '../assets/images/rg1-960.webp';
import rg2_960 from '../assets/images/rg2-960.webp';
import rg3_960 from '../assets/images/rg3-960.webp';
import cov3_960 from '../assets/images/cov3-960.webp';
import cov4_960 from '../assets/images/cov4-960.webp';
import cov1_960 from '../assets/images/cov1-960.webp';
import abo1_960 from '../assets/images/abo1-960.webp';
import abo2_960 from '../assets/images/abo2-960.webp';
import abo3_960 from '../assets/images/abo3-960.webp';
import lead3_960 from '../assets/images/lead3-960.webp';
import lead1_960 from '../assets/images/lead1-960.webp';
import lead2_960 from '../assets/images/lead2-960.webp';
import make2_960 from '../assets/images/make2-960.webp';
import make22_960 from '../assets/images/make22-960.webp';
import ai1_960 from '../assets/images/ai1-960.webp';
import make10_960 from '../assets/images/make10-960.webp';
import make1_960 from '../assets/images/make1-960.webp';
import health1_960 from '../assets/images/health1-960.webp';
import health2_960 from '../assets/images/health2-960.webp';
import health3_960 from '../assets/images/health3-960.webp';
import speech1_960 from '../assets/images/speech1-960.webp';
import speech2_960 from '../assets/images/speech2-960.webp';
import speech3_960 from '../assets/images/speech3-960.webp';
import int4_960 from '../assets/images/int4-960.webp';
import int2_960 from '../assets/images/int2-960.webp';
import int1_960 from '../assets/images/int1-960.webp';
import realtime1_960 from '../assets/images/realtime1-960.webp';
import realtime2_960 from '../assets/images/realtime2-960.webp';
import realtime3_960 from '../assets/images/realtime3-960.webp';
import mcp1_960 from '../assets/images/mcp1-960.webp';
import mcp3_960 from '../assets/images/mcp3-960.webp';
import cctv1_960 from '../assets/images/cctv1-960.webp';
import cctv2_960 from '../assets/images/cctv2-960.webp';
import cctv3_960 from '../assets/images/cctv3-960.webp';
import pmArch from '../assets/images/pm-architecture.svg';
import markerArch from '../assets/images/marker-architecture.svg';
import codingAgentEvaluationCover from '../assets/images/coding-agent-evaluation-v2.webp';
import pmEditorialCover from '../assets/images/pm-ai-agent-editorial.webp';
import enterpriseAiWorkspaceCover from '../assets/images/enterprise-ai-workspace-editorial.webp';
import policyGovernedAgentsCover from '../assets/images/policy-governed-ai-agents-editorial.webp';
import professionalCasesCover from '../assets/images/professional-cases-editorial.webp';
import digitalTwinCover from '../assets/images/ai-digital-twin-retrieval-collage.webp';
import evaluationWorkflowDiagram from '../docs/diagrams/coding-agent-evaluation-workflow.svg';
import evaluationArtifactsDiagram from '../docs/diagrams/coding-agent-evaluation-artifacts.svg';
import enterpriseWorkspaceArchitecture from '../docs/diagrams/enterprise-ai-workspace-architecture.svg';
import enterpriseWorkspaceRetrieval from '../docs/diagrams/enterprise-ai-workspace-retrieval.svg';
import policyGovernedAgentsArchitecture from '../docs/diagrams/policy-governed-agents-architecture.svg';
import policyGovernedAgentsSequence from '../docs/diagrams/policy-governed-agents-sequence.svg';
import professionalCasesIngestionDiagram from '../docs/diagrams/professional-cases-ingestion-generation.svg';
import professionalCasesEvaluationDiagram from '../docs/diagrams/professional-cases-evaluation-feedback.svg';
import digitalTwinRetrievalDiagram from '../docs/diagrams/digital-twin-contextual-retrieval.svg';
import digitalTwinEvaluationDiagram from '../docs/diagrams/digital-twin-retrieval-evaluation.svg';
import evaluationFrameworkDiagram from '../docs/diagrams/agent-evaluation-framework.svg';
import secureExecutionDiagram from '../docs/diagrams/secure-agent-code-execution.svg';
import aiAgentEvaluationCover from '../assets/images/ai-agent-evaluation-editorial.webp';
import secureAiCodeExecutionCover from '../assets/images/secure-ai-code-execution-editorial.webp';
import machineVisionCourseMorphology from '../assets/images/machine-vision-course-morphology.png';
import machineVisionCourseAlignment from '../assets/images/machine-vision-course-alignment.png';
import machineVisionCourseStructuringElements from '../assets/images/machine-vision-course-structuring-elements.png';

export const projectsData = [
	{
		id: 1,
		title: 'PM AI Agent',
		url: 'pm-ai-agent',
		category: 'LLMs and RAG',
		summary:
			'A Microsoft Teams agent that coordinates project work through Microsoft Graph, document retrieval, and structured tool calls.',
		img: pm1_640,
		relatedProjectIds: [16, 19, 17, 14],
		featured: {
			rank: 1,
			problem:
				'Project status, calendars, and documents are spread across Teams and project tools, so routine coordination takes manual effort.',
			approach:
				'A conversational agent that uses Microsoft Graph for calendar checks and meeting creation, PGVector for document retrieval, and structured tool calls for project actions, instrumented with Application Insights.',
			disciplines: ['Agentic workflows', 'LLM tooling', 'Azure platform'],
			alt: 'PM AI Agent architecture: Microsoft Teams channels, a language-model agent, knowledge retrieval, an MCP server for Azure DevOps, and calendar APIs.',
		},
		ProjectHeader: {
			title: 'PM AI Agent',
			publishDate: 'Feb 2025',
			tags: 'AI / Project Management / Teams Integration',
		},
		ProjectInfo: {
			ClientHeading: 'About Project',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'Type',
					details: 'AI Project Management Tool',
				},
				{
					id: uuidv4(),
					title: 'Role',
					details: 'AI Engineer & Developer',
				},
				{
					id: uuidv4(),
					title: 'Duration',
					details: 'Feb 2025 – Aug 2025',
				},
				{
					id: uuidv4(),
					title: 'Technologies',
					details: 'Microsoft Teams, Azure OpenAI, FastAPI',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'Designed and deployed a sophisticated AI-powered Project Manager bot that integrates with Microsoft Teams and other Bot Framework channels. This system combines advanced language model capabilities with comprehensive project management tools to provide intelligent project assistance, including calendar and meeting management.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'LangChain',
						'AutoGen',
						'FastAPI',
						'Azure OpenAI',
						'Microsoft Graph API',
						'Microsoft Teams',
						'PGVector',
						'Azure Bot Framework',
						'Docker',
						'Application Insights',
					],
				},
			],
			ProjectDetailsHeading: 'Key Achievements',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						'Built a sophisticated PM Agent that integrates with Microsoft Teams and Bot Framework channels, providing AI-powered project management capabilities including natural language event creation, calendar management, and intelligent project assistance.',
				},
				{
					id: uuidv4(),
					details:
						'Implemented comprehensive calendar and meeting management features with Microsoft Graph API integration, including conflict detection, business hours validation, and automatic Teams meeting creation.',
				},
				{
					id: uuidv4(),
					details:
						'Developed document intelligence capabilities with vector search and retrieval, enabling teams to find and analyze project documents efficiently using PGVector and LangChain.',
				},
				{
					id: uuidv4(),
					details:
						'Established LLMOps best practices and architected a scalable, auditable Azure AI platform with Application Insights for centralized logging and monitoring.',
				},
			],
			SocialSharingHeading: 'Share This',
		},
		// Optional engineering case study. Projects without this field keep
		// the legacy detail layout. Every section is optional and is only
		// rendered when present; add a section only with verified content.
		caseStudy: {
			editorialCover: {
				img: pmEditorialCover,
				alt: 'Conceptual illustration of conversational project-management requests, knowledge retrieval, MCP tool integration, and task operations; not the production architecture or a product screenshot.',
				caption:
					'Conceptual illustration — conversational requests, retrieval, MCP tools, and project-management operations. The factual system architecture remains documented below.',
			},
			overview:
				'I built an AI project-management assistant that connected Microsoft Teams conversations with project knowledge and Azure DevOps actions. The team used it internally to organize work while we prepared the underlying infrastructure for possible distribution as a reusable offering; it was not a commercial marketplace launch.',
			problem:
				'I wanted to reduce the manual coordination around questions that already had answers somewhere: who owns a task, what changed, which work is blocked, and what should happen after a meeting. A useful assistant had to connect knowledge with actions, not just summarize a document and leave the user to update the project by hand.',
			architecture: {
				summary:
					'I connected Microsoft Teams and other Bot Framework channels to a language-model agent, a document-ingestion and PGVector retrieval path, a dedicated MCP server for Azure DevOps, and Microsoft Graph for calendar checks and meeting creation. The important boundary was between the model interpreting a request and a tool changing project state: the agent could look up work items, create and assign tasks, delete supported items, and verify the resulting operation through functional tests.',
				components: [
					{
						name: 'Teams and Bot Framework channels',
						role: 'Entry point for user conversations.',
					},
					{
						name: 'Language model agent',
						role: 'Interprets requests and selects which tool to call. Built with Azure OpenAI, LangChain and AutoGen behind a FastAPI service.',
					},
					{
						name: 'Knowledge and ingestion infrastructure',
						role: 'Document ingestion workflows and PGVector administration over organized project, document, and conversation data.',
					},
					{
						name: 'MCP server for Azure DevOps',
						role: 'Exposes Azure DevOps tools to the agent: work-item retrieval, assignment reads, project-specific assignments for selected team members, deletion, and other implemented tools. Detailed separately in the MCP Azure DevOps Server project notes.',
					},
					{
						name: 'Microsoft Graph API',
						role: 'Calendar checks and meeting creation.',
					},
					{
						name: 'Supporting infrastructure',
						role: 'Service provisioning, infrastructure as code, and centralized logging and monitoring with Application Insights.',
					},
				],
				diagram: {
					img: pmArch,
					alt: 'Architecture diagram. A language-model agent receives requests from Microsoft Teams and Bot Framework channels, retrieves project knowledge through ingestion and PGVector, acts on Azure DevOps through an MCP server, and manages calendars through the Microsoft Graph API.',
					caption:
						'System overview: channels, language model, and the three backend integrations.',
				},
			},
			implementation: [
				{
					title: 'End-to-end architecture and infrastructure',
					body: 'I designed and implemented the system architecture, provisioned the Azure services, and set up the infrastructure as code.',
				},
				{
					title: 'Knowledge and ingestion infrastructure',
					body: 'I built the document ingestion workflows, administered the PGVector vector database, and organized the project, document, and conversation data behind retrieval.',
				},
				{
					title: 'Teams integration',
					body: 'I integrated the agent with Microsoft Teams, keeping it reachable through other Bot Framework channels.',
				},
				{
					title: 'MCP server and agent integration',
					body: 'I developed an MCP server exposing Azure DevOps tools — work-item retrieval, assignment reads, project-specific assignments for selected team members, deletion, and other implemented tools — and integrated the agent with it.',
				},
				{
					title: 'Calendar and meeting management',
					body: 'Microsoft Graph integration covers natural-language event creation, conflict detection, business-hours validation, and automatic Teams meeting creation.',
				},
				{
					title: 'Functional testing',
					body: 'I functionally tested the integrated system, including automated checks of the Azure DevOps integrations and the document infrastructure described under Evaluation and operations.',
				},
			],
			evidence: [
				{
					title: 'Prompt-driven tool tests',
					body: 'Automated functional tests submitted prompts to the agent requesting specific Azure DevOps operations and verified that the agent invoked the corresponding tools with real effects.',
				},
				{
					title: 'Creation and assignment verification',
					body: 'Tests verified that requested work items and project-specific assignments for selected team members were actually created.',
				},
				{
					title: 'Read and deletion checks',
					body: 'Tests verified task-reading operations against actual assignments and confirmed that deletions through the supported tools took effect.',
				},
				{
					title: 'Remaining tool coverage',
					body: 'The other exposed Azure DevOps tools were exercised through the same prompt-and-verify loop.',
				},
				{
					title: 'Document-ingestion verification',
					body: 'Automated tests for the RAG and document infrastructure verified that documents were successfully ingested.',
				},
				{
					title: 'Scope and limits',
					body: 'These tests verify functional behavior — that the requested operation actually happened. They are not benchmark evaluations: no retrieval-relevance metrics, formal datasets, production availability figures, or reliability guarantees are claimed.',
				},
			],
		},
	},
	{
		id: 2,
		title: 'Candidate Recommendation System',
		url: 'candidate-recommendation-system',
		category: 'LLMs and RAG',
		summary:
			'Retrieval and LLM ranking over candidate profiles, returning shortlists with explanations for recruiters.',
		img: rg1_640,
		featured: {
			rank: 3,
			problem:
				'Recruiters need to match a job description against hundreds of candidate profiles without losing the reasoning behind a shortlist.',
			approach:
				'A retrieval pipeline indexes resumes in Qdrant, enriches profiles with LLM-derived metadata, and ranks candidates against the role with explanations and filters in a FastAPI and Streamlit application.',
			disciplines: ['Retrieval systems', 'LLM ranking', 'Product ML'],
			alt: 'Candidate recommendation architecture showing resumes, RAG retrieval, LLM enrichment, metadata extraction, vector search, and ranked candidate explanations.',
		},
		ProjectHeader: {
			title: 'Candidate Recommendation System',
			publishDate: 'Apr 2024',
			tags: 'AI / RAG / HR Tech',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Candidate Recommendation System',
				img: rg1_960,
			},
			{
				id: uuidv4(),
				title: 'Candidate Recommendation System',
				img: rg2_960,
			},
			{
				id: uuidv4(),
				title: 'Candidate Recommendation System',
				img: rg3_960,
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Project',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'Type',
					details: 'HR Tech Platform',
				},
				{
					id: uuidv4(),
					title: 'Role',
					details: 'Machine Learning Engineer',
				},
				{
					id: uuidv4(),
					title: 'Duration',
					details: 'April 2024 – Feb 2025',
				},
				{
					id: uuidv4(),
					title: 'Technologies',
					details: 'Python, FastAPI, Streamlit, Qdrant',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'Designed and deployed an intelligent Candidate Recommendation System that processes a database of 700+ professionals to match job descriptions with the most suitable candidates. The system uses RAG architecture with vector search, LLM enrichment, and intelligent filtering to provide HR managers with top 10-20 ranked candidates, including detailed explanations of strengths and weaknesses.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'Python',
						'FastAPI',
						'Streamlit',
						'Qdrant',
						'LangChain',
						'LLMs',
						'Vector Search',
						'RAG',
						'Docker',
						'CI/CD',
					],
				},
			],
			ProjectDetailsHeading: 'Key Achievements',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						'Built a comprehensive RAG system processing 700+ professional resumes and job descriptions, implementing vector search with Qdrant and LLM enrichment to extract metadata and improve candidate matching accuracy.',
				},
				{
					id: uuidv4(),
					details:
						'Developed intelligent candidate ranking algorithm that analyzes job descriptions, processes candidate profiles, and provides top 10-20 ranked candidates with detailed explanations of strengths and weaknesses for HR decision-making.',
				},
				{
					id: uuidv4(),
					details:
						'Implemented FastAPI backend with Streamlit frontend for seamless user experience, enabling HR managers to input job descriptions and receive intelligent candidate recommendations with filtering capabilities.',
				},
				{
					id: uuidv4(),
					details:
						'Established CI/CD pipeline reducing deployment time by 40% and enabling faster iterations, improving system responsiveness and allowing rapid feature deployment for the candidate recommendation platform.',
				},
			],
			SocialSharingHeading: 'Share This',
		},
	},
	{
		id: 3,
		title: 'COVID-Rx Diagnosis System',
		url: 'covid-rx-diagnosis',
		category: 'Computer Vision',
		summary:
			'Chest X-ray diagnosis across ten CNN architectures, with heatmaps that show clinicians where the model is looking.',
		img: covidRxEditorialCover,
		ProjectHeader: {
			title: 'COVID-Rx Diagnosis System',
			publishDate: 'Dec 2020',
			tags: 'Computer Vision / Healthcare',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'COVID-Rx Diagnosis System',
				img: cov3_960,
			},
			{
				id: uuidv4(),
				title: 'COVID-Rx Diagnosis System',
				img: cov4_960,
			},
			{
				id: uuidv4(),
				title: 'COVID-Rx Diagnosis System',
				img: cov1_960,
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Project',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'Institution',
					details: 'University of Magdalena',
				},
				{
					id: uuidv4(),
					title: 'Role',
					details: 'COVID-Rx Diagnosis CV Engineer',
				},
				{
					id: uuidv4(),
					title: 'Duration',
					details: 'Dec 2020 – Nov 2021',
				},
				{
					id: uuidv4(),
					title: 'Dataset',
					details: '36k+ chest X-ray images',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'Developed a comprehensive COVID-19 and pneumonia diagnosis system using chest X-ray images. The project addresses the critical need for accessible, accurate, and cost-effective COVID-19 detection tools. Built both desktop (PyQt) and web applications that allow users to upload chest X-ray images and receive AI-powered diagnoses with heatmap visualizations showing areas of concern.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'PyTorch',
						'Python',
						'PyQt',
						'OpenCV',
						'Flask',
						'VGG19',
						'DenseNet',
						'MobileNet',
						'AlexNet',
						'EfficientNet',
						'InceptionV3',
						'ResNet',
						'Xception',
						'CNN',
						'Deep Learning',
					],
				},
			],
			ProjectDetailsHeading: 'Key Achievements',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						'Curated a comprehensive dataset of 36k+ chest X-ray images from multiple sources including 10,000+ COVID-19 cases, 15,000+ healthy cases, and 11,000+ pneumonia cases, ensuring robust model training.',
				},
				{
					id: uuidv4(),
					details:
						'Trained and benchmarked 10 state-of-the-art CNN architectures (VGG19, DenseNet, MobileNet, AlexNet, EfficientNet, InceptionV3, ResNet, RexNet, Inception-ResNet, Xception) achieving >90% accuracy in COVID-19 detection.',
				},
				{
					id: uuidv4(),
					details:
						'Developed dual-interface system: PyQt desktop application and Flask web application, enabling healthcare professionals to upload X-ray images and receive AI-powered diagnoses with probability scores.',
				},
				{
					id: uuidv4(),
					details:
						'Implemented explainable AI features with heatmap visualizations showing areas of concern in chest X-rays, providing transparency and supporting clinical decision-making for radiologists.',
				},
			],
			SocialSharingHeading: 'Share This',
		},
		caseStudy: {
			editorialCover: {
				img: covidRxEditorialCover,
				alt: 'Conceptual editorial illustration for COVID-Rx showing chest X-ray preprocessing, convolutional feature extraction, CNN model families, and comparative evaluation; not a clinical screenshot or measured benchmark chart.',
				caption:
					'Conceptual illustration — chest X-ray preprocessing, CNN feature extraction, and comparative evaluation. Embedded charts are illustrative, not experimental results.',
			},
			showCapabilityMatrix: false,
			headerFacts: ['Role', 'Duration', 'Dataset'],
			overview:
				'I built a research and application workflow for comparing ten CNN families on a public chest X-ray classification task, then exposed the selected experiments through both a PyQt desktop interface and a Flask web interface. The project combined dataset preparation, repeatable preprocessing, model comparison, probability outputs, and visual explanation.',
			problem:
				'Comparing image classifiers is not only a matter of choosing a larger network. Data sources, class balance, resize policy, normalization, model family, training configuration, evaluation metrics, and user-facing interpretation all affect what the comparison means. I needed a workflow that could register experiments and make model behavior inspectable without presenting it as a clinical diagnostic device.',
			architecture: {
				summary:
					'The system moved from a multi-class chest X-ray dataset through model-specific preprocessing and ten PyTorch CNN implementations into evaluation records, probability outputs, and CAM-family heatmaps. The public source is an implementation reference, not a complete clinical validation protocol.',
				workflow: {
					title: 'From dataset assembly to comparable experiments',
					summary: 'Data decisions, model runs, metrics, and explanation remain separate parts of the evaluation.',
					steps: [
						{
							title: 'Dataset assembly',
							mode: 'Controlled input',
							type: 'controlled',
							description: 'Combine public COVID-19, healthy, and pneumonia image sources into a working dataset of more than 36,000 images.',
						},
						{
							title: 'Preprocessing policy',
							mode: 'Controlled input',
							type: 'controlled',
							description: 'Resize images to each architecture’s expected input and apply ImageNet-style normalization where the model pipeline expects it.',
						},
						{
							title: 'Ten model families',
							mode: 'Automated checks',
							type: 'automated',
							description: 'Compare VGG19, DenseNet, MobileNet, AlexNet, EfficientNet, InceptionV3, ResNet, RexNet, Inception-ResNet, and Xception.',
						},
						{
							title: 'Metrics and experiment records',
							mode: 'Captured evidence',
							type: 'captured',
							description: 'Register runs and compare available accuracy and classification metrics. The owner reports MLflow use; the public repository does not expose a complete tracking configuration.',
						},
						{
							title: 'Inference and visual explanation',
							mode: 'Automated checks',
							type: 'automated',
							description: 'Return class probabilities in PyQt or Flask and generate CAM-family heatmaps to show which image regions influenced the output.',
						},
					],
				},
				components: [
					{
						name: 'Public image sources',
						role: 'More than 10,000 COVID-19, more than 15,000 healthy, and more than 11,000 pneumonia images described in the public README.',
					},
					{
						name: 'PyTorch model comparison',
						role: 'Ten CNN implementations share the application workflow while retaining architecture-specific input handling.',
					},
					{
						name: 'Metrics and run registration',
						role: 'Experiment records make comparisons possible; exact ranking and split protocol are not asserted without public evidence.',
					},
					{
						name: 'CAM-family explanations',
						role: 'Heatmaps help inspect model attention; they are not proof of clinical correctness.',
					},
				],
			},
			gallery: [
				{
					title: 'Evaluation concept and model families',
					img: cov3_960,
					alt: 'Conceptual COVID-Rx project illustration showing a comparison of neural-network model families.',
					caption: 'Conceptual illustration of the evaluation workflow; it is not a clinical benchmark chart.',
				},
				{
					title: 'CNN experiment comparison',
					img: cov4_960,
					alt: 'Conceptual illustration showing CNN architectures used in the chest X-ray experiment comparison.',
					caption: 'Editorial summary of the comparison, not a measured results table.',
				},
				{
					title: 'Application output with heatmap',
					img: cov1_960,
					alt: 'COVID-Rx application interface showing a chest X-ray, model probabilities, and an explanatory heatmap.',
					caption: 'Representative application evidence. Heatmaps show model attention and do not establish clinical diagnosis or radiologist equivalence.',
				},
			],
			implementationTitle: 'How I structured the comparison',
			implementation: [
				{
					title: 'Make the data policy explicit',
					body: 'I treated the public sources, class composition, image dimensions, normalization, and dataset preparation as part of the experiment definition. A metric is meaningful only in the context of the data policy that produced it.',
				},
				{
					title: 'Compare model families under a shared interface',
					body: 'The project brought ten CNN families into one PyTorch application flow so architecture changes could be compared through the same prediction and presentation path.',
				},
				{
					title: 'Register metrics instead of relying on memory',
					body: 'Experiment tracking was part of the owner-reported workflow, including MLflow. I do not invent a leaderboard, split strategy, or exact metric table that is not present in the public source.',
				},
				{
					title: 'Connect inference to an inspectable interface',
					body: 'The desktop and web interfaces expose probabilities and heatmaps so a user can inspect the output instead of receiving an opaque class label.',
				},
			],
			decisionsTitle: 'Engineering decisions and boundaries',
			decisions: [
				{
					title: 'Separate comparison from clinical claims',
					body: 'A reported accuracy figure belongs to the project experiment and dataset context. It is not a clinical validation claim, deployment approval, or evidence that the system can replace a radiologist.',
				},
				{
					title: 'Use heatmaps as an inspection aid',
					body: 'CAM-family maps can reveal whether the model appears to use plausible image regions, but remain an interpretability aid and not a guarantee that the prediction is correct.',
				},
			],
			evidenceTitle: 'Technical evidence',
			evidence: [
				{
					title: 'Public dataset scope',
					body: 'The public README describes more than 10,000 COVID-19 images, more than 15,000 healthy images, and more than 11,000 pneumonia images, for roughly 36,000 images in total.',
				},
				{
					title: 'Ten architectures retained',
					body: 'The implementation reference includes VGG19, DenseNet, MobileNet, AlexNet, EfficientNet, InceptionV3, ResNet, RexNet, Inception-ResNet, and Xception.',
				},
				{
					title: 'Existing project metric',
					body: 'The existing portfolio record reports more than 90% accuracy for the selected experiments. Because the public source does not provide a complete comparison table and split protocol, this is not presented as a clinical result or model ranking.',
				},
			],
			limitations: [
				{
					title: 'Research and application prototype',
					body: 'The project demonstrates model comparison and interface behavior. It does not establish clinical validation, regulatory approval, prospective performance, or safe use as a diagnostic service.',
				},
				{
					title: 'Public evidence is incomplete',
					body: 'The public repository does not expose a complete MLflow configuration, run registry, split protocol, or full metric table, so those details remain intentionally bounded.',
				},
			],
			links: [
				{
					label: 'Public source repository',
					href: 'https://github.com/DavidNavarroSaiz/CovidRX_Interface',
				},
			],
		},
	},
	{
		id: 4,
		title: 'AbogacIA - AI Legal Platform',
		url: 'abogacia-ai-legal-platform',
		category: 'LLMs and RAG',
		summary:
			'Legal research platform that finds relevant Colombian case law, recommends precedents, and helps draft documents.',
		img: abogaciaEditorialCover,
		ProjectHeader: {
			title: 'AbogacIA - AI Legal Platform',
			publishDate: '2024',
			tags: 'AI / Legal Tech / RAG',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'AbogacIA - AI Legal Platform',
				img: abo1_960,
			},
			{
				id: uuidv4(),
				title: 'AbogacIA - AI Legal Platform',
				img: abo2_960,
			},
			{
				id: uuidv4(),
				title: 'AbogacIA - AI Legal Platform',
				img: abo3_960,
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Project',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'Type',
					details: 'Legal Tech Platform',
				},
				{
					id: uuidv4(),
					title: 'Domain',
					details: 'Colombian Legal System',
				},
				{
					id: uuidv4(),
					title: 'Status',
					details: 'In Development',
				},
				{
					id: uuidv4(),
					title: 'Technologies',
					details: 'FastAPI, MongoDB, Chroma, LangGraph',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'Developed AbogacIA, an innovative AI-powered legal research platform designed to assist Colombian lawyers with comprehensive legal support. The system automatically scrapes and processes legal documents from Colombian judiciary websites, including court sentences, national codes, constitution, and regulations, providing intelligent assistance for legal case analysis and document generation.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'Python',
						'FastAPI',
						'MongoDB',
						'Chroma',
						'Vector Database',
						'Graph Database',
						'LangChain',
						'LangGraph',
						'Selenium',
						'OpenAI',
						'RAG',
						'Web Scraping',
					],
				},
			],
			ProjectDetailsHeading: 'Key Features',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						'Automatic Legal Document Analysis: When users upload case documents and descriptions, the system automatically identifies relevant regulations, rights, and specific articles that may be violated or related to the case.',
				},
				{
					id: uuidv4(),
					details:
						'Similar Case Recommendations: Provides lawyers with a comprehensive view of similar judicial sentences and precedents, helping them understand how similar cases were resolved in the past.',
				},
				{
					id: uuidv4(),
					details:
						'Intelligent Q&A System: Enables lawyers to ask questions about their case, recommended cases, or legal regulations, receiving accurate answers powered by RAG and LangGraph technology.',
				},
				{
					id: uuidv4(),
					details:
						'Document Generation: Allows construction of legal documents based on collected information, case analysis, and relevant regulations, streamlining the document creation process.',
				},
				{
					id: uuidv4(),
					details:
						'Advanced Database Architecture: Implemented vector database (Chroma) for semantic search and similarity matching, and graph database for complex legal relationships and precedent connections, enabling sophisticated legal document retrieval and analysis.',
				},
			],
			SocialSharingHeading: 'Share This',
		},
		caseStudy: {
			editorialCover: {
				img: abogaciaEditorialCover,
				alt: 'Conceptual editorial illustration for AbogacIA showing legal knowledge retrieval, related cases, and assisted document drafting; not an actual legal-system architecture diagram or legal advice.',
				caption:
					'Conceptual illustration — legal retrieval, case context, and drafting support. It does not represent proprietary system state or guarantee legal correctness.',
			},
			showCapabilityMatrix: true,
			headerFacts: ['Type', 'Domain', 'Status'],
			overview:
				'I shaped AbogacIA as a domain-aware professional knowledge and writing assistant for Colombian legal work. It combines document ingestion, semantic retrieval, similar-case discovery, context-aware questions, and drafting support so a lawyer can work from relevant sources instead of starting from an empty page.',
			problem:
				'Legal work requires more than a generic chat response: the assistant needs to retrieve relevant sentences, codes, constitutional material, and regulations, then keep the user’s case context in view while suggesting sources or draft content. The system is an assistive workflow, not an autonomous legal decision-maker and not a guarantee of legal correctness.',
			capabilitySummary:
				'The implemented prototype centers on retrieval, case context, similar-case discovery, Q&A, and document generation. Extensions to medicine or psychology are conceptual directions only; they are not presented as implemented or clinically validated capabilities.',
			capabilityMatrix: [
				{
					title: 'Document ingestion and semantic retrieval',
					status: 'Implemented',
					description: 'FastAPI, Selenium, MongoDB, and Chroma support ingestion and semantic search across the documented legal sources.',
				},
				{
					title: 'Similar-case discovery',
					status: 'Implemented',
					description: 'The existing project record describes recommendations of similar judicial sentences and precedents for professional review.',
				},
				{
					title: 'Relevant regulations and relationships',
					status: 'Partial',
					description: 'The prototype surfaces potentially relevant regulations, rights, articles, and relationships; it does not claim an exhaustive legal rule engine.',
				},
				{
					title: 'Context-aware drafting support',
					status: 'Implemented',
					description: 'Q&A and document-generation flows use retrieved knowledge and case information to help construct draft material for human review.',
				},
				{
					title: 'Medicine and psychology extensions',
					status: 'Planned',
					description: 'Cross-domain adaptation is a conceptual extensibility direction, not an implemented or validated capability of this case.',
				},
			],
			architecture: {
				summary:
					'The prototype combines public-source collection, document processing, vector retrieval in Chroma, graph-oriented relationship support, and LangGraph orchestration. Retrieved context feeds professional Q&A and drafting flows while the user remains responsible for reviewing the material.',
				workflow: {
					title: 'From legal source to draft support',
					summary: 'Retrieval and case context precede generation so the assistant can show where its suggestions come from.',
					steps: [
						{
							title: 'Collect and process legal sources',
							mode: 'Controlled input',
							type: 'controlled',
							description: 'Process the documented judiciary sources, court sentences, national codes, constitution, and regulations used by the prototype.',
						},
						{
							title: 'Retrieve relevant knowledge',
							mode: 'Automated checks',
							type: 'automated',
							description: 'Use vector similarity and relationship-oriented data access to find potentially relevant sources and similar cases.',
						},
						{
							title: 'Apply case context',
							mode: 'Captured evidence',
							type: 'captured',
							description: 'Combine the user’s case description, uploaded documents, retrieved passages, and prior questions into the working context.',
						},
						{
							title: 'Draft and review',
							mode: 'Manual / assisted review',
							type: 'assisted',
							description: 'Generate Q&A responses or draft documents for a lawyer to verify, edit, and use with professional judgment.',
						},
					],
				},
				components: [
					{
						name: 'Source ingestion',
						role: 'Selenium and Python workflows collect and process the legal documents described in the project record.',
					},
					{
						name: 'Semantic retrieval',
						role: 'Chroma and vector search surface relevant passages and similar documents for the current case.',
					},
					{
						name: 'Relationship context',
						role: 'Graph-oriented data supports connections among cases, regulations, rights, and articles without claiming exhaustive legal reasoning.',
					},
					{
						name: 'LangGraph workflow',
						role: 'Orchestrates retrieval, Q&A, and drafting steps while keeping the system in an assistive workflow.',
					},
				],
			},
			gallery: [
				{
					title: 'Legal research workspace',
					img: abo1_960,
					alt: 'AbogacIA project interface illustrating a legal research and retrieval workspace.',
					caption: 'Representative project interface for assisted legal research; it is not a guarantee of legal correctness.',
				},
				{
					title: 'Relevant case and source context',
					img: abo2_960,
					alt: 'AbogacIA project interface showing retrieved legal case or source context.',
					caption: 'The prototype brings potentially relevant sources and similar cases into the professional review workflow.',
				},
				{
					title: 'Drafting support flow',
					img: abo3_960,
					alt: 'AbogacIA project interface showing context-aware document drafting support.',
					caption: 'Generated material remains draft support for human verification, not autonomous legal advice.',
				},
			],
			implementationTitle: 'How I framed the assistant',
			implementation: [
				{
					title: 'Retrieve before writing',
					body: 'The assistant first looks for potentially relevant legal documents, cases, regulations, rights, and articles so drafting can begin from a source-aware context.',
				},
				{
					title: 'Keep case context visible',
					body: 'Uploaded documents, user descriptions, questions, retrieved passages, and similar cases form the working context for the professional workflow.',
				},
				{
					title: 'Separate support from decision-making',
					body: 'The system helps research, compare, explain, and draft. A lawyer still reviews sources, interprets the law, and decides what belongs in a final document.',
				},
			],
			decisionsTitle: 'Boundaries and extensibility',
			decisions: [
				{
					title: 'Use retrieval as evidence support',
					body: 'The architecture emphasizes potentially relevant source material and similar cases rather than implying that an LLM can independently determine the correct legal outcome.',
				},
				{
					title: 'Treat other domains as a direction',
					body: 'The retrieval-and-context pattern could be adapted to medicine or psychology in principle, but those extensions are conceptual and do not represent implemented or validated domain capabilities here.',
				},
			],
			evidenceTitle: 'Project evidence',
			evidence: [
				{
					title: 'Implemented prototype scope',
					body: 'The existing project record documents legal-source ingestion, semantic retrieval, similar-case recommendations, Q&A, document generation, Chroma, graph-oriented data, and LangGraph orchestration.',
				},
				{
					title: 'Professional review remains central',
					body: 'The public case describes an assistive research and writing workflow, not legal advice, guaranteed correctness, regulatory compliance, or an autonomous decision system.',
				},
			],
			limitations: [
				{
					title: 'No correctness guarantee',
					body: 'Retrieval and generated drafts can be incomplete, outdated, or wrong. A qualified professional must verify sources, interpretation, and final wording.',
				},
				{
					title: 'Cross-domain work is conceptual',
					body: 'Nothing in this case establishes medical or psychological diagnosis, treatment guidance, or validated deployment outside the documented legal domain.',
				},
			],
		},
	},
	{
		id: 5,
		title: 'Automatic Lead Management',
		url: 'automatic-lead-management',
		category: 'AI Automation',
		summary:
			'Lead capture and outreach across email and SMS, with HubSpot sync and GPT-written replies.',
		img: lead3_640,
		ProjectHeader: {
			title: 'Automatic Lead Management',
			publishDate: '2024',
			tags: 'AI / Lead Generation / CRM Integration',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Automatic Lead Management',
				img: lead3_960,
			},
			{
				id: uuidv4(),
				title: 'Automatic Lead Management',
				img: lead1_960,
			},
			{
				id: uuidv4(),
				title: 'Automatic Lead Management',
				img: lead2_960,
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Project',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'Type',
					details: 'Lead Management Platform',
				},
				{
					id: uuidv4(),
					title: 'Domain',
					details: 'Sales Automation',
				},
				{
					id: uuidv4(),
					title: 'Status',
					details: 'Active Development',
				},
				{
					id: uuidv4(),
					title: 'Technologies',
					details: 'FastAPI, HubSpot, Twilio, OpenAI',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'Developed a comprehensive Lead Generation and Management System that automates the process of generating, capturing, and managing leads for businesses. The system integrates multiple technologies to streamline lead generation, facilitate communication through emails and SMS, and leverage GPT for creating automatic and personalized responses to enhance lead engagement.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'Python',
						'FastAPI',
						'HubSpot',
						'Twilio',
						'OpenAI',
						'SMTP',
						'GPT',
						'CRM Integration',
						'Lead Generation',
						'Email Automation',
					],
				},
			],
			ProjectDetailsHeading: 'Key Features',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						'FastAPI Backend: Built a modern web framework for handling HTTP requests and responses efficiently, providing robust API endpoints for lead generation and processing.',
				},
				{
					id: uuidv4(),
					details:
						'Multi-Channel Communication: Integrated Twilio for SMS messaging and SMTP for email communication, enabling real-time communication with leads across multiple channels.',
				},
				{
					id: uuidv4(),
					details:
						'HubSpot CRM Integration: Seamlessly integrated with HubSpot CRM API to manage lead data, including creation, retrieval, updating, and deletion of contacts for comprehensive lead management.',
				},
				{
					id: uuidv4(),
					details:
						'GPT-Powered Automation: Incorporated OpenAI GPT for creating automatic and personalized responses to emails and SMS, analyzing lead inquiries and generating relevant and engaging responses to enhance lead interaction.',
				},
			],
			SocialSharingHeading: 'Share This',
		},
	},
		{
			id: 6,
			title: 'AI-Generated Monthly Reports',
			url: 'ai-generated-monthly-reports',
			category: 'AI Automation',
			summary:
				'Automated reporting pipeline that collects a month of property data and drafts client-ready documents in Google Docs.',
		img: make2_640,
			ProjectHeader: {
				title: 'AI-Generated Monthly Reports',
				publishDate: '2024',
				tags: 'AI / Automation / Report Generation',
			},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'AI-Generated Monthly Reports',
				img: make2_960,
			},
			{
				id: uuidv4(),
				title: 'AI-Generated Monthly Reports',
				img: make22_960,
			},
			{
				id: uuidv4(),
				title: 'AI-Generated Monthly Reports',
				img: ai1_960,
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Project',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'Type',
					details: 'AI Report Generation Platform',
				},
				{
					id: uuidv4(),
					title: 'Domain',
					details: 'Property Management & Business Intelligence',
				},
				{
					id: uuidv4(),
					title: 'Status',
					details: 'Production',
				},
				{
					id: uuidv4(),
					title: 'Technologies',
					details: 'Make.com, OpenAI, Google Suite, CircleBack',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'Developed an intelligent AI-powered monthly report generation system that automates property management data collection and analysis. Built comprehensive automation workflows using Make.com, Google Suite, and OpenAI to centralize property data including emails, photos, meeting summaries, and events, then automatically generate detailed monthly reports for clients. The system significantly reduces manual workload by automating data collection, processing, and report formatting.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'Make.com',
						'OpenAI',
						'Google Sheets',
						'Google Drive',
						'Google Docs',
						'CircleBack',
						'Fireflies',
						'Zapier',
						'Email Automation',
						'Report Generation',
						'Data Processing',
						'LLMs',
					],
				},
			],
			ProjectDetailsHeading: 'Key Features',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						'Automated Data Collection: Built comprehensive system that automatically collects property data including emails (stored in Google Sheets), photos (uploaded to Google Drive), meeting summaries (generated via CircleBack and Fireflies), and event descriptions throughout the month.',
				},
				{
					id: uuidv4(),
					details:
						'AI-Powered Report Generation: Created intelligent system using LLMs to process all collected data and automatically generate comprehensive monthly property reports with proper formatting and client-ready presentation.',
				},
				{
					id: uuidv4(),
					details:
						'Google Docs Integration: Implemented automated report upload to Google Docs with proper formatting, enabling seamless document sharing and client presentation while maintaining professional standards.',
				},
				{
					id: uuidv4(),
					details:
						'Workflow Optimization: Designed automation workflows that reduce manual processing time by 80%, allowing property managers to focus on evaluation and improvement of final reports rather than data collection and formatting.',
				},
			],
			SocialSharingHeading: 'Share This',
		},
	},
		{
			id: 7,
			title: 'n8n Lead Generation System',
			url: 'n8n-lead-generation-system',
			category: 'AI Automation',
			summary:
				'Self-hosted n8n workflows that identify ideal customer profiles, enrich company data, and run personalized cold-email campaigns.',
		img: make1_640,
			ProjectHeader: {
				title: 'n8n Lead Generation System',
				publishDate: '2024',
				tags: 'n8n / Lead Generation / Cold Email / Automation',
			},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'n8n Lead Generation System',
				img: make1_960,
			},
			{
				id: uuidv4(),
				title: 'n8n Lead Generation System',
				img: make10_960,
			},
			{
				id: uuidv4(),
				title: 'n8n Lead Generation System',
				img: ai1_960,
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Project',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'Type',
					details: 'Self-Hosted Automation Platform',
				},
				{
					id: uuidv4(),
					title: 'Domain',
					details: 'Lead Generation & Cold Outreach',
				},
				{
					id: uuidv4(),
					title: 'Status',
					details: 'Production',
				},
				{
					id: uuidv4(),
					title: 'Technologies',
					details: 'n8n, Apollo, Smartleads, Selenium',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'Implemented self-hosted n8n automation platform for lead generation and cold outreach. Built comprehensive automation workflows using Apollo for ICP identification, Selenium for company website scraping, and LLMs for data extraction and personalized email creation. Integrated Smartleads for cold email campaigns and GoHighLevel CRM for lead management, creating end-to-end lead generation and conversion pipeline.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'n8n',
						'Apollo',
						'Smartleads',
						'Selenium',
						'OpenAI',
						'GoHighLevel',
						'Web Scraping',
						'Lead Generation',
						'Cold Email',
						'Data Extraction',
						'ICP Identification',
						'Email Automation',
					],
				},
			],
			ProjectDetailsHeading: 'Key Features',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						'Self-Hosted n8n Platform: Implemented and configured self-hosted n8n automation platform within the company infrastructure, providing complete control over automation workflows and data processing.',
				},
				{
					id: uuidv4(),
					details:
						'Apollo ICP Extraction: Built automated workflows to extract potential Ideal Customer Profiles from Apollo database, identifying high-value prospects based on company size, industry, and other relevant criteria.',
				},
				{
					id: uuidv4(),
					details:
						'Company Data Scraping: Developed Selenium-based automation to scrape company websites and extract relevant business information, then used LLMs to process and structure the data for personalized outreach.',
				},
				{
					id: uuidv4(),
					details:
						'Smartleads Cold Email Integration: Created AI-powered email generation system that produces personalized subject lines and email bodies, automatically sending targeted outreach via Smartleads and pushing qualified leads to GoHighLevel CRM upon response.',
				},
			],
			SocialSharingHeading: 'Share This',
		},
	},
		{
			id: 8,
			title: 'Healthcare Resource Recommender System',
			url: 'healthcare-resource-recommender-system',
			category: 'LLMs and RAG',
			summary:
				'Permissions-aware resource hub with RAG search, built for community health workers and their teams.',
		img: health1_640,
			ProjectHeader: {
				title: 'Healthcare Resource Recommender System',
				publishDate: 'June 2023',
				tags: 'AI / RAG / Recommender System / Healthcare',
			},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Healthcare Resource Recommender System',
				img: health2_960,
			},
			{
				id: uuidv4(),
				title: 'Healthcare Resource Recommender System',
				img: health3_960,
			},
			{
				id: uuidv4(),
				title: 'Healthcare Resource Recommender System',
				img: health1_960,
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Project',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'Company',
					details: 'Healthcare Technology Platform',
				},
				{
					id: uuidv4(),
					title: 'Role',
					details: 'Machine Learning Team Leader',
				},
				{
					id: uuidv4(),
					title: 'Duration',
					details: 'June 2023 – April 2024',
				},
				{
					id: uuidv4(),
					title: 'Technologies',
					details: 'React, FastAPI, RAG, PGVector',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'Built Healthcare Resource HUB, a permissions-aware resource platform with tiered access controls for Community Health Workers. Implemented comprehensive ingestion service (FastAPI, Redis, RabbitMQ) for diverse content including videos, decks, images, PDFs, spreadsheets, audio, games, and external links. Applied LLMs to extract summaries, keywords, and entities, storing embeddings in PGVector for intelligent retrieval. Delivered production recommender-chatbot with advanced RAG tactics achieving 50% faster resource discovery and 160+ active users.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'React',
						'FastAPI',
						'LangChain',
						'LangSmith',
						'PGVector',
						'Redis',
						'RabbitMQ',
						'Azure Bicep',
						'Azure OpenAI',
						'RAG',
						'Vector Search',
						'CI/CD',
					],
				},
			],
			ProjectDetailsHeading: 'Key Features',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						'Permissions-Aware Platform: Built tiered-access system where CHWs and staff can upload/consume resources based on user roles and plans, ensuring appropriate content access and security controls for different organizational levels.',
				},
				{
					id: uuidv4(),
					details:
						'Advanced RAG Implementation: Applied sophisticated RAG tactics including query rewriting, sub-queries, filters, document research tasks, and reranking to deliver 50% faster resource discovery compared to manual filters and search, serving 160+ active users.',
				},
				{
					id: uuidv4(),
					details:
						'Document Processing Pipeline: Delivered automated pipeline handling ~100 documents/month with LLM-based analysis and insight generation, enabling continuous content updates and intelligent resource recommendations for new and updated materials.',
				},
				{
					id: uuidv4(),
					details:
						'Infrastructure & CI/CD: Implemented Azure Bicep for three isolated environments (dev/QA/prod) with comprehensive Azure Pipelines including tests, evaluations, linting, and quality gates, accelerating release cycles by 40% through automated deployment processes.',
				},
			],
			SocialSharingHeading: 'Share This',
		},
	},
	{
		id: 9,
		title: 'Community Health Workers Platform',
		url: 'community-health-workers-platform',
		category: 'LLMs and RAG',
		summary:
			'Speech-to-forms assistant that transcribes home visits and drafts structured reports and care plans.',
		img: speech1_640,
		ProjectHeader: {
			title: 'Community Health Workers Platform',
			publishDate: 'June 2023',
			tags: 'AI / Speech Recognition / Healthcare / Automation',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Community Health Workers Platform',
				img: speech2_960,
			},
			{
				id: uuidv4(),
				title: 'Community Health Workers Platform',
				img: speech1_960,
			},
			{
				id: uuidv4(),
				title: 'Community Health Workers Platform',
				img: speech3_960,
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Project',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'Company',
					details: 'Healthcare Technology Platform',
				},
				{
					id: uuidv4(),
					title: 'Role',
					details: 'Machine Learning Team Leader',
				},
				{
					id: uuidv4(),
					title: 'Duration',
					details: 'June 2023 – April 2024',
				},
				{
					id: uuidv4(),
					title: 'Technologies',
					details: 'FastAPI, Azure Language Services, LLMs',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'Led speech-to-forms assistant for community projects and home visits with dynamic forms and Azure Cognitive Services (Speech) for real-time conversation transcription. Built LLM-powered system that extracts structured fields, generates visit reports, and produces personalized care plans. Orchestrated via FastAPI with secure access to user/context data, significantly reducing manual data entry and drafting time.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'FastAPI',
						'Azure Language Services',
						'Azure OpenAI',
						'Python',
						'LLMs',
						'Speech Recognition',
						'Azure Bicep',
						'Azure Container Registry',
						'Azure Key Vault',
						'CI/CD',
						'Form Automation',
						'Report Generation',
					],
				},
			],
			ProjectDetailsHeading: 'Key Features',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						'Speech-to-Forms Automation: Built real-time assistant using Azure Cognitive Services (Speech) to transcribe conversations during home visits, with LLMs extracting structured fields to automatically populate dynamic forms, eliminating manual data entry.',
				},
				{
					id: uuidv4(),
					details:
						'Intelligent Report Generation: Developed LLM-powered system that analyzes conversation data and stored patient information to automatically generate comprehensive visit reports and personalized care plans for each individual, significantly reducing drafting time.',
				},
				{
					id: uuidv4(),
					details:
						'Secure Data Orchestration: Implemented FastAPI backend with secure access to user and context data from the application, ensuring data privacy while enabling intelligent form enrichment and report generation.',
				},
				{
					id: uuidv4(),
					details:
						'Infrastructure & CI/CD: Implemented Azure Bicep for multi-environment deployment with comprehensive Azure Pipelines including tests, evaluations, linting, and quality gates, accelerating release cycles by 40% through automated deployment processes.',
				},
			],
			SocialSharingHeading: 'Share This',
		},
	},
	{
		id: 10,
		title: 'Industrial Computer Vision Systems',
		url: 'industrial-computer-vision',
		category: 'Computer Vision / Industrial Automation',
		summary:
			'Industrial inspection and safety systems built from imaging design, classical computer vision, machine learning, edge software, and PLC/HMI integration.',
		img: int4_640,
		relatedProjectIds: [14, 17, 15, 16, 22],
		featured: {
			rank: 4,
			problem:
				'Factory inspection and safety checks need reliable vision under real production constraints: optics, lighting, throughput, hardware, and PLC integration.',
			approach:
				'End-to-end systems spanning camera and lighting design, calibration, classical image processing, learned detection pipelines, CVAT labeling workflows, and PLC/HMI integration for defect, fill, anomaly, and PPE checks.',
			disciplines: [
				'Applied computer vision',
				'Edge deployment',
				'Industrial integration',
			],
			alt: 'Industrial computer vision illustration showing a machine vision camera, CV algorithm, and product inspection.',
		},
		ProjectHeader: {
			title: 'Industrial Computer Vision Systems',
			publishDate: 'May 2019',
			tags: 'Computer Vision / Industrial Automation',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Industrial Computer Vision Systems',
				img: int2_960,
			},
			{
				id: uuidv4(),
				title: 'Industrial Computer Vision Systems',
				img: int4_960,
			},
			{
				id: uuidv4(),
				title: 'Industrial Computer Vision Systems',
				img: int1_960,
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Project',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'Company',
					details: 'Intecol SAS',
				},
				{
					id: uuidv4(),
					title: 'Role',
					details: 'Computer Vision Engineer',
				},
				{
					id: uuidv4(),
					title: 'Duration',
					details: 'May 2019 – April 2023',
				},
				{
					id: uuidv4(),
					title: 'Team Size',
					details: '10 engineers',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'Lead a 10-engineer team across more than 30 industrial computer-vision projects, taking inspection systems from physical imaging requirements through algorithms, operator software, and factory integration.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'Camera and optics design',
						'Industrial lighting',
						'PyTorch',
						'TensorFlow',
						'Keras',
						'OpenCV',
						'Python',
						'C++',
						'React',
						'PLCs',
						'C#',
						'CVAT',
						'3D and thermal imaging',
					],
				},
			],
			ProjectDetailsHeading: 'Key Achievements',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						'Developed and deployed real-time CV pipelines for defect detection, product fill checks, surface anomalies, and PPE compliance analytics, improving incident detection by 30% and reducing false alarms by 45%.',
				},
				{
					id: uuidv4(),
					details:
						'Built robust data/labeling workflows using CVAT, automated retraining, and OpenCV post-processing to meet factory latency/throughput constraints.',
				},
				{
					id: uuidv4(),
					details:
						'Architected imaging stacks (illumination, sensors, 3D scanners, thermal/LiDAR) and deployed an Optical Gas Imaging solution with PLC alarms, reducing time-to-detection of hazardous leaks.',
				},
				{
					id: uuidv4(),
					details:
						'Integrated CV modules with PLCs and C# HMIs to enable real-time defect rejection at production speed, complemented with a React-based console for live video overlays and dashboards.',
				},
			],
			SocialSharingHeading: 'Share This',
		},
		caseStudy: {
			showCapabilityMatrix: false,
			headerFacts: ['Role', 'Duration', 'Team Size'],
			overview:
				'I spent almost four years building computer-vision systems for industrial environments. One of the most important things I learned is that the model is only one part of a machine-vision system. Camera selection, optics, lighting, timing, and integration with the production line can matter just as much as the algorithm.',
			problem:
				'An inspection system has to make a useful decision from imperfect physical evidence and then fit into a moving production process. A defect may be smaller than the available pixels, reflections may change with the material or lighting, and a correct classification is still operationally useless if the trigger, PLC signal, operator interface, or reject mechanism is unreliable. The engineering problem was to design the complete path instead of treating inference as the product.',
			architecture: {
				summary:
					'I worked from the physical scene toward the software decision: define the defect or safety requirement, select the acquisition setup, calibrate the image, choose deterministic processing or a learned model, validate behavior under production variation, and integrate the result with the operator and line controls. The exact stack varied by installation; not every project used every camera type, model family, or specialized sensor.',
				workflow: {
					title: 'From physical evidence to production decision',
					summary: 'The recurring engineering path connected imaging constraints with algorithms, validation, and factory behavior.',
					steps: [
						{
							title: 'Inspection requirements and defect geometry',
							mode: 'Controlled input',
							type: 'controlled',
							description: 'Define what must be detected or measured, the smallest relevant defect, available cycle time, and the consequences of false positives or false negatives.',
						},
						{
							title: 'Camera, lens, resolution, and lighting',
							mode: 'Controlled input',
							type: 'controlled',
							description: 'Choose sensors, focal length, working distance, field of view, depth of field, illumination geometry, and contrast for the physical scene.',
						},
						{
							title: 'Acquisition and image preparation',
							mode: 'Captured evidence',
							type: 'captured',
							description: 'Synchronize triggers, calibrate regions of interest, and use filtering, contrast enhancement, thresholding, morphology, or geometric measurements where they are sufficient.',
						},
						{
							title: 'Classical CV or learned model',
							mode: 'Automated checks',
							type: 'automated',
							description: 'Use deterministic image processing for explicit geometry and stable appearance; use labeled CNN/YOLO-style models when learned variation handling is justified.',
						},
						{
							title: 'Operator and factory integration',
							mode: 'Automated checks',
							type: 'automated',
							description: 'Connect inspection outcomes to desktop or web interfaces, PLC/HMI signals, alarms, and rejection mechanisms at production speed.',
						},
					],
				},
				components: [
					{
						name: 'Image acquisition and optics',
						role: 'Camera, lens, working-distance, resolution, depth-of-field, trigger, and lighting decisions shaped the quality of the evidence before inference.',
					},
					{
						name: 'Classical computer vision',
						role: 'Preprocessing, contrast, thresholding, morphology, contours, blobs, calibration, regions of interest, and measurements handled explicit visual structure.',
					},
					{
						name: 'Machine learning and deep learning',
						role: 'Labeled datasets and CNN/YOLO-style models addressed variable appearance, orientation, lighting, and product conditions when deterministic rules were not enough.',
					},
					{
						name: 'Industrial software and controls',
						role: 'Real-time acquisition, operator interfaces, PLC/HMI communication, alarms, and line decisions turned image evidence into an operational response.',
					},
				],
			},
			gallery: [
				{
					title: 'Inspection and operator-facing evidence',
					img: int2_960,
					alt: 'Industrial computer-vision project image showing a production inspection interface or visual inspection result.',
					caption: 'Representative project evidence from the existing portfolio gallery; customer-specific equipment and factory details are intentionally not disclosed.',
				},
				{
					title: 'Machine-vision system integration',
					img: int4_960,
					alt: 'Industrial machine-vision system evidence showing inspection imagery and engineering integration.',
					caption: 'The software decision was only one part of the system; acquisition, timing, operator feedback, and line integration had to work together.',
				},
				{
					title: 'Applied industrial vision result',
					img: int1_960,
					alt: 'Applied industrial computer-vision result from an inspection or safety-monitoring workflow.',
					caption: 'Representative visual evidence, not a universal template for every installation.',
				},
			],
			implementationTitle: 'What I worked across',
			implementation: [
				{
					title: 'Start with the physical scene',
					body: 'I translated inspection requirements into imaging constraints: field of view, smallest defect, required resolution, working distance, focal length, depth of field, acquisition speed, and the likely sources of reflection or environmental variation. Camera and lighting cost mattered, but so did repeatability and serviceability on the factory floor.',
				},
				{
					title: 'Use deterministic vision when the structure is explicit',
					body: 'Filtering, contrast enhancement, thresholding, morphology, contour extraction, blob analysis, calibration, regions of interest, and geometric measurements were useful when the appearance and rule were stable. This kept the system understandable and avoided training a model for a problem that could be measured directly.',
				},
				{
					title: 'Build data and learned models when variation demands it',
					body: 'For changing product appearance, orientation, lighting, or background conditions, I worked with labeling workflows, CNN/YOLO-style training, error analysis, and operating thresholds. The right threshold depended on the cost of missing a defect versus stopping the line for a false alarm.',
				},
				{
					title: 'Integrate the decision into the line',
					body: 'The systems connected real-time acquisition and processing with operator interfaces, PLC/HMI communication, alarms, and rejection mechanisms. Desktop, C#, React, and lower-level integration choices varied with the installation rather than being prescribed as one universal stack.',
				},
				{
					title: 'Lead delivery across a portfolio of projects',
					body: 'I led a team of 10 engineers across more than 30 industrial computer-vision projects. The work ranged across defect detection, fill checks, surface anomalies, PPE compliance, and specialized imaging where the inspection required it.',
				},
			],
			decisionsTitle: 'Engineering decisions and trade-offs',
			decisions: [
				{
					title: 'Design the image before tuning the model',
					body: 'A higher-capacity model cannot recover information that the camera, lens, trigger, or lighting never captured. Improving the evidence often produced a more reliable system than adding algorithmic complexity.',
				},
				{
					title: 'Choose deterministic or learned processing deliberately',
					body: 'Classical computer vision was easier to inspect and maintain for explicit geometry; learned models were valuable when the variation was difficult to enumerate. The decision depended on data, explainability, maintenance, and the operating environment.',
				},
				{
					title: 'Set thresholds around operational consequences',
					body: 'A false negative and a false positive do not cost the same thing in every line. I treated operating thresholds as part of the system design, not just a model-training afterthought.',
				},
			],
			evidenceTitle: 'Scope and evidence',
			evidence: [
				{
					title: 'Owner-reported engineering scope',
					body: 'The project record covers almost four years of industrial machine-vision engineering, technical leadership for a 10-engineer team, and delivery across more than 30 projects.',
				},
				{
					title: 'Reported operational outcomes',
					body: 'Existing project evidence reports a 30% improvement in incident detection and a 45% reduction in false alarms for the relevant systems. These figures are not generalized to every installation, customer, or inspection task.',
				},
				{
					title: 'Technical evidence retained',
					body: 'The portfolio retains representative computer-vision images and the documented stack of acquisition, CVAT labeling, OpenCV processing, learned models, PLC/HMI integration, and specialized imaging. Customer names, factory imagery, and private equipment details remain excluded.',
				},
			],
			limitations: [
				{
					title: 'Projects used different stacks',
					body: 'The portfolio spans multiple installations. It would be inaccurate to imply that every project used YOLO, thermal or 3D imaging, React, PLC rejection, or the same camera and lighting configuration.',
				},
				{
					title: 'Factory details stay private',
					body: 'The public case focuses on reusable engineering decisions and representative outcomes rather than customer identities, line layouts, equipment configurations, or proprietary inspection rules.',
				},
			],
		},
	},
	{
		id: 11,
		title: 'RealTime Voice Agent',
		url: 'realtime-voice-agent',
		category: 'LLMs and RAG',
		summary:
			'Low-latency voice agent over WebSockets and Twilio, with real-time prompt control and multi-agent tool calling.',
		img: realtime1_640,
		ProjectHeader: {
			title: 'RealTime Voice Agent',
			publishDate: 'Mar 2025',
			tags: 'AI / Realtime Voice / FastAPI',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Realtime Audio Streaming',
				img: realtime1_960,
			},
			{
				id: uuidv4(),
				title: 'Real time Server Architecture',
				img: realtime2_960,
			},
			{
				id: uuidv4(),
				title: 'WebSocket Voice Pipeline',
				img: realtime3_960,
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Project',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'Type',
					details: 'Realtime AI Voice Server',
				},
				{
					id: uuidv4(),
					title: 'Role',
					details: 'Lead AI Engineer & Backend Developer',
				},
				{
					id: uuidv4(),
					title: 'Duration',
					details: 'Jan 2025 – Ongoing',
				},
				{
					id: uuidv4(),
					title: 'Technologies',
					details: 'FastAPI, WebSocket, Twilio, OpenAI Realtime API, Docker, Azure',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'Developed a comprehensive real-time AI voice agent system with backend API, frontend application, and telephone integration. The project enables seamless voice-based interactions through WebSockets and Twilio phone integration, powered by OpenAI\'s Realtime API and AutoGen multi-agent framework. Includes a frontend application for real-time prompt modification and testing, with full deployment supporting telephone number access.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'FastAPI',
						'Uvicorn',
						'OpenAI Realtime API',
						'OpenAI',
						'Azure OpenAI',
						'Twilio',
						'WebRTC',
						'AutoGen',
						'Docker',
						'OpenAPI/Swagger',
					],
				},
			],
			ProjectDetailsHeading: 'Key Achievements',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						'Built a fully containerized FastAPI server with real-time voice streaming and WebSocket communication, supporting natural, low-latency conversations.',
				},
				{
					id: uuidv4(),
					details:
						'Integrated OpenAI\'s Realtime API and Twilio Media Streams to allow AI-powered phone calls with bidirectional voice processing and response generation.',
				},
				{
					id: uuidv4(),
					details:
						'Implemented an agent swarm system using AutoGen framework, enabling multi-agent collaboration and function calling for dynamic real-time responses.',
				},
				{
					id: uuidv4(),
					details:
						'Deployed secure and scalable containers with Azure Container Registry and enforced best practices in CORS, environment management, and API security.',
				},
				{
					id: uuidv4(),
					details:
						'Developed a comprehensive frontend application for real-time prompt modification and agent testing, enabling live interaction with the voice agent and dynamic prompt adjustments.',
				},
				{
					id: uuidv4(),
					details:
						'Successfully deployed the complete system with telephone number integration, allowing users to call and interact with the AI agent through a standard phone number for real-world testing and usage.',
				},
				{
					id: uuidv4(),
					details:
						'Added system health endpoints, error monitoring, and performance tracking to ensure reliable deployment in production environments.',
				},
			],
			SocialSharingHeading: 'Share This',
		},
	},
	{
		id: 12,
		title: 'MCP Azure DevOps Server',
		url: 'mcp-azure-devops-server',
		category: 'LLMs and RAG',
		summary:
			'Model Context Protocol server that lets AI assistants query and manage Azure DevOps work items in natural language.',
		img: mcp1_640,
		ProjectHeader: {
			title: 'MCP Azure DevOps Server',
			publishDate: 'Mar 2025',
			tags: 'Model Context Protocol / Azure DevOps / FastAPI',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'MCP Azure DevOps Server',
				img: mcp1_960,
			},
			{
				id: uuidv4(),
				title: 'MCP Client Interaction',
				img: mcp3_960,
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Project',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'Type',
					details: 'AI Integration Server for Azure DevOps',
				},
				{
					id: uuidv4(),
					title: 'Role',
					details: 'AI Engineer & Backend Developer',
				},
				{
					id: uuidv4(),
					title: 'Duration',
					details: 'Feb 2025 – Ongoing',
				},
				{
					id: uuidv4(),
					title: 'Technologies',
					details: 'Python, FastMCP, Azure DevOps API, Docker, MCP SDK',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'Developed an enhanced Model Context Protocol (MCP) server based on Microsoft\'s Azure DevOps MCP repository (https://github.com/microsoft/azure-devops-mcp), customized and improved for specific requirements. This project enables AI assistants like GPT-4 and Claude to interact seamlessly with Azure DevOps services using natural language, bridging LLMs and enterprise APIs while adding custom integrations and services tailored to specific workflow needs.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'FastMCP',
						'Azure DevOps REST API',
						'Azure DevOps Python SDK',
						'Python 3.11',
						'Server-Sent Events (SSE)',
						'Docker',
						'OpenAI / Claude Integration',
						'pytest',
						'uv',
					],
				},
			],
			ProjectDetailsHeading: 'Key Achievements',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						'Forked and enhanced Microsoft\'s Azure DevOps MCP repository with custom improvements, additional integrations, and tailored services to meet specific workflow requirements while maintaining compatibility with the original MCP protocol.',
				},
				{
					id: uuidv4(),
					details:
						'Implemented modular feature sets for work items, teams, and project management, enabling AI assistants to perform complex DevOps queries with natural language.',
				},
				{
					id: uuidv4(),
					details:
						'Integrated with the Azure DevOps Python API and secured authentication using Personal Access Tokens (PAT) with least-privilege scopes.',
				},
				{
					id: uuidv4(),
					details:
						'Developed an asynchronous MCP client using SSE (Server-Sent Events) for efficient, low-latency communication between the agent and server.',
				},
				{
					id: uuidv4(),
					details:
						'Containerized the application with Docker and provided full deployment support via Docker Compose, enabling reproducible environments and scalability.',
				},
				{
					id: uuidv4(),
					details:
						'Documented 20+ MCP tools for AI-assisted project management, including querying sprints, managing tasks, analyzing team velocity, and mapping dependencies.',
				},
			],
			SocialSharingHeading: 'Share This',
		},
	},
	{
		id: 13,
		title: 'CCTV Safety Detection',
		url: 'cctv-safety-detection',
		category: 'Computer Vision / Edge AI',
		summary:
			'On-prem GPU pipeline that checks PPE and safety rules across live CCTV streams and alerts supervisors.',
		img: cctv1_640,
		ProjectHeader: {
			title: 'CCTV Safety Detection',
			publishDate: 'Nov 2024',
			tags: 'YOLO / PPE Detection / On-Prem GPU',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Safety Dashboard',
				img: cctv1_960,
			},
			{
				id: uuidv4(),
				title: 'YOLO Inference Pipeline',
				img: cctv2_960,
			},
			{
				id: uuidv4(),
				title: 'Alarm Rules & Alerts',
				img: cctv3_960,
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Project',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'Type',
					details: 'Industrial Safety Monitoring System',
				},
				{
					id: uuidv4(),
					title: 'Role',
					details: 'ML Engineer & Full-Stack Developer',
				},
				{
					id: uuidv4(),
					title: 'Duration',
					details: 'Jul 2024 – Jan 2025',
				},
				{
					id: uuidv4(),
					title: 'Technologies',
					details: 'YOLOv5/YOLOv8, Python, OpenCV, CUDA, FastAPI, React, WebSockets, PostgreSQL, Docker',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'Deployed an on-premises, real-time computer vision system that enforces PPE compliance and operational safety rules across multiple CCTV streams. The system features configurable safety policies, live monitoring dashboards, and automated supervisor alerts, ensuring workplace safety through AI-powered surveillance and real-time violation detection.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'YOLO (custom fine-tuning)',
						'PyTorch + CUDA',
						'OpenCV / FFmpeg',
						'FastAPI',
						'React Dashboard',
						'WebSockets',
						'PostgreSQL',
						'Docker',
						'GPU Edge Server',
					],
				},
			],
			ProjectDetailsHeading: 'Key Achievements',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						'Built a comprehensive dataset of 10,000+ CCTV images and fine-tuned YOLO models to detect persons, safety helmets, goggles, vests (with color classification), forklifts/lift cars, and ladders with high accuracy.',
				},
				{
					id: uuidv4(),
					details:
						'Deployed on a local GPU server (air-gapped for security) with <200ms per-frame latency and parallel inference across 3 cameras, ensuring real-time safety monitoring without network dependencies.',
				},
				{
					id: uuidv4(),
					details:
						'Implemented intelligent rule engine for real-world safety policies including missing PPE detection, incorrect vest color identification, person-forklift distance thresholds, forklift parking compliance, safe ladder handling, and mandatory truck safety nets during movement.',
				},
				{
					id: uuidv4(),
					details:
						'Created a comprehensive web admin UI to tune confidence/sensitivity per class, define safety zones and distance thresholds, review safety events, and visualize KPIs including compliance rates, false positives, and incidents by shift/zone.',
				},
				{
					id: uuidv4(),
					details:
						'Established real-time alerting system via email/SMS/WhatsApp to supervisors with incident snapshots and timeline links, including smart cooldowns and deduplication to reduce alert fatigue while maintaining safety oversight.',
				},
				{
					id: uuidv4(),
					details:
						'Designed a resilient streaming pipeline (RTSP ingest → batching → GPU inference → rule evaluation → alerting) with comprehensive watchdogs, auto-reconnect capabilities, and rolling logs for compliance audits and system monitoring.',
				},
			],
			SocialSharingHeading: 'Share This',
		},
	},
	{
		id: 14,
		title: 'Parallel Document Ingestion Pipeline',
		url: 'marker-ingestion-pipeline',
		category: 'RAG Infrastructure / Distributed Systems',
		summary:
			'Distributed ingestion service that parses PDFs, generates embeddings, and tracks progress for large RAG corpora.',
		img: markerArch,
		relatedProjectIds: [19, 16, 15, 1],
		featured: {
			rank: 2,
			problem:
				'RAG systems are only as good as the documents feeding them. Large PDF collections are slow to parse, chunk, embed, and keep observable.',
			approach:
				'A FastAPI service routes uploads into Celery workers through RabbitMQ, converts documents with Marker into structured JSON, and writes embeddings to pgVector with progress and failure tracking.',
			disciplines: [
				'RAG infrastructure',
				'Distributed processing',
				'Data pipelines',
			],
			alt: 'Parallel ingestion flow: FastAPI routes uploads into queued Celery workers that parse, embed, and store vectors in pgVector.',
		},
		ProjectHeader: {
			title: 'Parallel Document Ingestion Pipeline',
			publishDate: 'Oct 2024',
			tags: 'Marker API / Celery / RabbitMQ / RAG',
		},
		ProjectInfo: {
			ClientHeading: 'About Project',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'Type',
					details: 'Scalable RAG Document Ingestion System',
				},
				{
					id: uuidv4(),
					title: 'Role',
					details: 'AI Infrastructure Engineer',
				},
				{
					id: uuidv4(),
					title: 'Duration',
					details: 'Aug 2024 – Dec 2024',
				},
				{
					id: uuidv4(),
					title: 'Technologies',
					details: 'Marker API, Celery, RabbitMQ, FastAPI, Docker, Redis, pgVector, OpenAI Embeddings',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'Built a high-performance, scalable document ingestion pipeline to process and vectorize large-scale unstructured data (PDFs, text, and mixed formats) using Marker API and distributed task orchestration. The system enables efficient RAG-based applications by parallelizing document processing, reducing ingestion time by 80%, and supporting thousands of documents per user without performance degradation.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'Marker API',
						'Celery Distributed Tasks',
						'RabbitMQ Queues',
						'FastAPI',
						'pgVector',
						'Redis',
						'Docker Compose',
						'OpenAI Embeddings',
					],
				},
			],
			ProjectDetailsHeading: 'Key Achievements',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						'Integrated Marker API to convert unstructured PDFs into structured JSON chunks optimized for vector database ingestion, enabling seamless processing of complex document formats.',
				},
				{
					id: uuidv4(),
					details:
						'Implemented robust asynchronous task orchestration using Celery and RabbitMQ, allowing horizontal scaling of ingestion workers and fault-tolerant document processing.',
				},
				{
					id: uuidv4(),
					details:
						'Achieved 80% reduction in ingestion time per user by parallelizing document processing across distributed task queues, significantly improving user experience and system throughput.',
				},
				{
					id: uuidv4(),
					details:
						'Designed a modular FastAPI service that automatically routes upload jobs into worker queues, monitors progress in real-time, and updates user dashboards with processing status and completion metrics.',
				},
				{
					id: uuidv4(),
					details:
						'Enabled scalable ingestion for multi-user RAG systems, supporting thousands of documents per user without performance degradation through intelligent queue management and resource allocation.',
				},
				{
					id: uuidv4(),
					details:
						'Containerized the complete stack using Docker Compose for reproducible deployment across environments with isolated worker scaling, ensuring consistent performance and easy maintenance.',
				},
			],
			SocialSharingHeading: 'Share This',
		},
		// Optional engineering case study (same template as project 1).
		// Only sections with record-supported content are rendered;
		// historical figures without documented methodology are left out.
		caseStudy: {
			overview:
				'A distributed ingestion service that turns large collections of PDFs, text, and mixed-format documents into vector embeddings for RAG systems, built around FastAPI intake, Celery workers, RabbitMQ messaging, Marker parsing, and pgVector storage.',
			problem:
				'RAG systems are only as good as the documents feeding them. Large PDF collections are slow to parse, chunk, and embed, and long-running batch jobs are hard to observe while they run.',
			architecture: {
				summary:
					'A FastAPI service accepts uploads and routes them as jobs into RabbitMQ queues. Celery workers parse documents with Marker into structured JSON, generate embeddings, and write vectors to pgVector, which serves downstream RAG retrieval. Progress and failures are tracked and surfaced on dashboards, and the full stack runs containerized with Docker Compose.',
				components: [
					{
						name: 'FastAPI service',
						role: 'Upload intake; routes jobs into worker queues and monitors progress in real time.',
					},
					{
						name: 'RabbitMQ queues',
						role: 'Task messaging between the intake service and the worker pool.',
					},
					{
						name: 'Celery workers',
						role: 'Asynchronous parsing and embedding; horizontal scaling with isolated worker scaling.',
					},
					{
						name: 'Marker parsing',
						role: 'Converts unstructured PDFs into structured JSON chunks optimized for vector-database ingestion.',
					},
					{
						name: 'pgVector and embeddings',
						role: 'Vector storage for downstream retrieval, populated with OpenAI embeddings.',
					},
					{
						name: 'Dashboards',
						role: 'Processing status and completion metrics for upload jobs.',
					},
					{
						name: 'Docker Compose',
						role: 'Containerized, reproducible deployment across environments.',
					},
				],
				diagram: {
					img: markerArch,
					alt: 'Pipeline diagram: FastAPI routes uploads into RabbitMQ queues consumed by Celery workers; parsed output flows as structured JSON into pgVector with OpenAI embeddings, while dashboards track tasks and metrics across a Docker Compose deployment.',
					caption:
						'Ingestion flow: intake, queued workers, vector storage, and progress dashboards.',
				},
			},
			implementation: [
				{
					title: 'FastAPI intake service',
					body: 'A modular FastAPI service accepts uploads and automatically routes them as jobs into the worker queues.',
				},
				{
					title: 'Celery workers and RabbitMQ messaging',
					body: 'Asynchronous task orchestration with Celery and RabbitMQ decouples intake from processing, allows horizontal scaling of ingestion workers, and keeps document processing fault-tolerant.',
				},
				{
					title: 'Document extraction with Marker',
					body: 'Marker converts unstructured PDFs into structured JSON chunks optimized for vector-database ingestion, covering PDFs, text, and mixed formats.',
				},
				{
					title: 'Embeddings and vector storage',
					body: 'Parsed chunks are embedded with OpenAI embeddings and written to pgVector, where they serve downstream RAG retrieval.',
				},
				{
					title: 'Progress monitoring and dashboards',
					body: 'The service monitors jobs in real time and updates user dashboards with processing status and completion metrics.',
				},
				{
					title: 'Containerized deployment',
					body: 'The complete stack is containerized with Docker Compose for reproducible deployment with isolated worker scaling.',
				},
			],
			decisions: [
				{
					title: 'Queued workers instead of synchronous processing',
					body: 'Upload intake is decoupled from parsing and embedding through Celery workers and RabbitMQ queues, so workers scale horizontally and document processing stays fault-tolerant.',
				},
				{
					title: 'Marker for document parsing',
					body: 'Marker converts complex unstructured PDFs into structured JSON chunks suited to vector-database ingestion.',
				},
			],
			evidence: [
				{
					title: 'Progress observability',
					body: 'Upload jobs are monitored in real time, with dashboards reporting processing status and completion metrics.',
				},
				{
					title: 'Failure visibility',
					body: 'The pipeline tracks processing progress and failures rather than running as an opaque batch job.',
				},
			],
		},
	},
	{
		id: 15,
		title: 'Coding Agent Evaluation Workbench',
		url: 'coding-agent-evaluation-workbench',
		category: 'AI Evaluation / Engineering Systems',
		summary:
			'Internal workbench for comparing coding-agent runs through versioned tasks, clean baselines, traceable run artifacts, deterministic checks, and structured assessment.',
		img: codingAgentEvaluationCover,
		imageAlt:
			'Conceptual editorial illustration of a coding-agent evaluation workbench with a clean baseline, captured run evidence, deterministic checks, and comparative reporting; not a screenshot or benchmark result.',
		relatedProjectIds: [17, 16, 14, 19],
		featured: {
			rank: 2,
			image: codingAgentEvaluationCover,
			problem:
				'Coding-agent comparisons need controlled tasks, clean baselines, traceable artifacts, and repeatable checks before a result can be interpreted responsibly.',
			approach:
				'A structured evaluation workbench separates task specification, agent execution, captured evidence, deterministic checks, and contextual assessment.',
			disciplines: ['Evaluation engineering', 'Reproducibility', 'Agent reliability'],
			alt: 'Conceptual coding-agent evaluation workbench showing clean baselines, run evidence, deterministic checks, and comparative assessment.',
		},
		ProjectHeader: {
			title: 'Coding Agent Evaluation Workbench',
			publishDate: 'Oct 2026',
			tags: 'AI Evaluation / Coding Agents / Reproducibility',
		},
		ProjectInfo: {
			ClientHeading: 'Project status',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'Type',
					details: 'Internal engineering evaluation workbench',
				},
				{
					id: uuidv4(),
					title: 'Contribution',
					details: 'Evaluation framework and methodology',
				},
				{
					id: uuidv4(),
					title: 'Status',
					details: 'Internal Engineering / Evaluation Tooling',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'Create a traceable, repeatable way to compare coding-agent runs on comparable software-engineering tasks without presenting the process as fully autonomous.',
			Technologies: [],
			ProjectDetailsHeading: 'Engineering scope',
			ProjectDetails: [],
			SocialSharingHeading: 'Share This',
		},
		caseStudy: {
			editorialCover: {
				img: codingAgentEvaluationCover,
				alt: 'Conceptual illustration of a coding-agent evaluation workbench with a clean baseline, captured run evidence, deterministic checks, and comparative reporting; not a screenshot, benchmark result, or measured interface.',
				caption:
					'Conceptual illustration — reproducible coding-agent evaluation and evidence flow. It does not depict measured benchmark results or a production interface.',
			},
			status: 'Internal Engineering / Evaluation Tooling',
			headerFacts: ['Type', 'Contribution', 'Status'],
			overview:
				'I built an internal, UI-driven workbench to compare coding-agent runs under reproducible conditions. Each evaluation starts with a shared reference task and prompts, records the selected tool, model and version, tester, date, scenario, model profile, and environment, then guides the evaluator through setup, execution, evidence collection, review, and export. The workbench is not an autonomous judge or a leaderboard; it preserves the evidence needed to explain a result later.',
			problem:
				'Comparing coding agents is harder than giving them the same prompt and checking which one finishes first. A run can produce convincing code while failing tests, ignoring a security constraint, or quietly changing the scope. I needed a way to hold the task and starting conditions steady, then reconstruct what happened months later instead of relying on a final screenshot or someone’s notes.',
			architecture: {
				summary:
					'I kept the benchmark/reference repository separate from the evaluation repository. Each experiment received its own Git branch and run artifacts, while the workbench walked the evaluator through task specification, a clean checkout, agent execution, evidence capture, deterministic checks, rubric review, and export. That separation lets me inspect the exact generated code, patch, CI output, and transcript instead of treating the final result as a black box.',
				workflow: {
					title: 'Evaluation lifecycle',
					summary:
						'The sequence below separates controlled inputs, captured evidence, repeatable checks, and human or assisted review.',
					figure: {
						img: evaluationWorkflowDiagram,
						alt: 'Coding-agent evaluation workflow from task specification and clean baseline through agent execution, run artifacts, deterministic checks, human or advisory assessment, and comparative reporting. Automated checks are distinct from manual or assisted review.',
						caption:
							'Workflow draft: controlled inputs and captured evidence lead into automated checks, contextual review, and comparative reporting.',
					},
					steps: [
						{
							title: 'Task specification',
							description: 'A versioned prompt and comparable engineering task define the run scope.',
							mode: 'Specified / versioned',
							type: 'controlled',
						},
						{
							title: 'Clean baseline',
							description: 'Each run starts from a clean, standardized full-stack reference codebase.',
							mode: 'Controlled input',
							type: 'controlled',
						},
						{
							title: 'Agent execution',
							description: 'A coding agent is run against the task, with follow-up scenarios where applicable.',
							mode: 'Manual / semi-automated',
							type: 'assisted',
						},
						{
							title: 'Run artifacts',
							description: 'Metadata, configuration, diffs, logs, transcripts, and test results are retained as evidence.',
							mode: 'Captured evidence',
							type: 'captured',
						},
						{
							title: 'Deterministic checks',
							description: 'Functional and code-quality checks provide repeatable signals about generated changes.',
							mode: 'Automated checks',
							type: 'automated',
						},
						{
							title: 'Human / advisory assessment',
							description: 'Security and authorization reviews, structured human assessment, and model-assisted assessment where applicable add context.',
							mode: 'Manual / assisted',
							type: 'assisted',
						},
						{
							title: 'Comparative reporting',
							description: 'Comparable runs are assembled into structured experiment reporting.',
							mode: 'Semi-automated',
							type: 'assisted',
						},
					],
				},
				artifactStructure: {
					title: 'Run evidence structure',
					summary:
						'Each run was interpreted through a bundle of configuration, execution, verification, and review evidence. The internal schema and repository names are intentionally not disclosed.',
					figure: {
						img: evaluationArtifactsDiagram,
						alt: 'Run evidence bundle branching into experiment metadata, execution logs and transcript, code diff and test results, deterministic functional and code-quality checks, security and authorization review, and human or advisory assessment.',
						caption:
							'Evidence map draft: captured artifacts, automated validation, and assisted review remain distinct within the run record.',
					},
					rootLabel: 'Run evidence bundle',
					items: [
						{
							title: 'Experiment metadata',
							description: 'Run configuration, task version, and execution context.',
							type: 'captured',
						},
						{
							title: 'Execution trace',
							description: 'Execution logs and transcripts from the coding-agent run.',
							type: 'captured',
						},
						{
							title: 'Generated changes',
							description: 'Code diffs and resulting test results.',
							type: 'captured',
						},
						{
							title: 'Deterministic checks',
							description: 'Functional and code-quality check outputs.',
							type: 'automated',
						},
						{
							title: 'Security review',
							description: 'Security and authorization review findings.',
							type: 'assisted',
						},
						{
							title: 'Assessment inputs',
							description: 'Structured human assessment and model-assisted assessment where applicable.',
							type: 'assisted',
						},
					],
				},
			},
			implementationTitle: 'How I ran an evaluation',
			implementation: [
				{
					title: 'Separate repositories and experiment branches',
					body: 'I kept the benchmark/reference repository separate from the evaluation repository. Each experiment used its own Git branch so the reference task, generated patch, and run artifacts stayed tied to one reproducible setup.',
				},
				{
					title: 'Guided run setup',
					body: 'The UI captured the tool, model and version, tester, date, scenario, model profile, environment, shared reference task, and prompts before execution. The wizard made the process repeatable for someone who did not design the benchmark.',
				},
				{
					title: 'Execution and evidence capture',
					body: 'During a run I recorded elapsed time, interventions, self-corrections, questions, execution logs, the conversation transcript, configuration, code diffs, and resulting artifacts. That context matters when a run needs to be reconstructed later.',
				},
				{
					title: 'Objective verification',
					body: 'The evaluation ran code execution and CI checks for builds, linting, tests, coverage, type checks, and required constraints. These signals are repeatable, but they do not answer every architectural or security question.',
				},
				{
					title: 'Human and advisory review',
					body: 'A human evaluator reviewed architecture, maintainability, testing, documentation, security, and policy violations against anchored rubrics. An optional LLM reviewer could identify possible bugs, add notes, and suggest rubric scores, but I treated it as a second opinion rather than ground truth.',
				},
				{
					title: 'Export and comparison',
					body: 'The workbench exported an evidence bundle and structured experiment comparison so a conclusion could be traced back to the branch, prompt, transcript, code diff, CI result, rubric decision, and evaluator note.',
				},
			],
			decisionsTitle: 'Engineering decisions',
			decisions: [
				{
					title: 'Hold the reference task steady',
					body: 'I used the same versioned task and prompts for comparable runs, then recorded any follow-up scenario rather than silently changing the task mid-experiment.',
				},
				{
					title: 'Keep automated signals separate from judgment',
					body: 'Build, test, lint, coverage, type, security, and authorization evidence stays distinct from rubric review. A passing test suite is useful evidence, not a complete measure of engineering quality.',
				},
				{
					title: 'Evidence before summary',
					body: 'I retained metadata, configuration, diffs, logs, transcripts, test results, rubric decisions, and reviewer notes before assembling a comparison. That makes it possible to challenge a conclusion instead of trusting a headline score.',
				},
				{
					title: 'Treat the LLM reviewer as advisory',
					body: 'An LLM can surface a bug or suggest a rubric interpretation, but the human evaluator remains responsible for the final assessment and for deciding whether the evidence supports it.',
				},
			],
			evidenceTitle: 'Evaluation and verification',
			evidence: [
				{
					title: 'Implementation correctness',
					body: 'Generated changes were checked against task requirements through deterministic functional checks and recorded test results.',
				},
				{
					title: 'Code quality and execution behavior',
					body: 'Code-quality checks and observed execution behavior provided complementary signals for comparative assessment.',
				},
				{
					title: 'Security and authorization',
					body: 'Security and authorization reviews provided a distinct review path for findings that deterministic checks could not establish on their own.',
				},
				{
					title: 'Traceable comparison',
					body: 'Run artifacts and structured assessment supported comparisons between runs without publishing internal scores, rankings, or private evaluation results.',
				},
			],
			limitations: [
				{
					title: 'Manual and semi-automated work',
					body: 'Execution, follow-up scenarios, and parts of assessment involved manual or semi-automated operations; the workbench is not described as fully autonomous.',
				},
				{
					title: 'Model and version variability',
					body: 'Comparisons remain sensitive to model, prompt, task, and environment versioning, which is why the workbench records task and run context.',
				},
				{
					title: 'Limits of automated quality assessment',
					body: 'Deterministic checks provide repeatable evidence but do not replace structured human or advisory assessment of security, authorization, and engineering quality.',
				},
				{
					title: 'Public-disclosure boundary',
					body: 'Specific internal check counts, leaderboard details, scores, rankings, private evaluation results, and internal experiment artifacts are excluded pending explicit disclosure approval.',
				},
			],
		},
	},
	{
		id: 16,
		title: 'Enterprise AI Workspace',
		url: 'enterprise-ai-workspace',
		category: 'LLMs and RAG',
		summary:
			'Enterprise conversational AI workspace based on LibreChat, extended with configured agents, retrieval infrastructure, and AWS application services under explicit capability boundaries.',
		img: enterpriseAiWorkspaceCover,
		imageAlt:
			'Conceptual illustration of an enterprise AI workspace connecting users, agents, retrieval, cloud infrastructure, integrations, and controlled capabilities; not a deployed infrastructure diagram.',
		relatedProjectIds: [21, 1, 17, 19],
		featured: {
			rank: 3,
			image: enterpriseAiWorkspaceCover,
			problem:
				'An enterprise conversational workspace must connect agents, retrieval, persistence, hosting, and integrations without turning every capability into an implicit execution surface.',
			approach:
				'An extended LibreChat-based workspace with configured agents, retrieval-oriented persistence, AWS application infrastructure, and explicit authorization and capability boundaries.',
			disciplines: ['Enterprise AI platforms', 'RAG infrastructure', 'Capability boundaries'],
			alt: 'Conceptual enterprise AI workspace connecting users, agents, retrieval, cloud infrastructure, integrations, and controlled capabilities.',
		},
		ProjectHeader: {
			title: 'Enterprise AI Workspace',
			publishDate: '2026',
			tags: 'AI Workspace / RAG / AWS Infrastructure',
		},
		ProjectInfo: {
			ClientHeading: 'Project status',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'Role',
					details: 'AI Platform Engineer',
				},
				{
					id: uuidv4(),
					title: 'Status',
					details: 'Professional enterprise engineering project',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'Extend an enterprise conversational AI workspace with agent capabilities, retrieval-oriented persistence, and cloud application infrastructure while maintaining explicit authorization and execution boundaries.',
			Technologies: [
				{
					title: 'Technologies',
					techs: [
						'LibreChat',
						'AWS ECS',
						'AWS Fargate',
						'Application Load Balancer',
						'Amazon RDS for PostgreSQL',
						'pgvector',
						'Amazon S3',
						'HMAC authorization',
					],
				},
			],
			ProjectDetailsHeading: 'Key implementation work',
			ProjectDetails: [],
			SocialSharingHeading: 'Share This',
		},
		caseStudy: {
			status: 'Professional enterprise engineering project',
			showCapabilityMatrix: false,
			headerFacts: ['Role', 'Status'],
			editorialCover: {
				img: enterpriseAiWorkspaceCover,
				alt: 'Conceptual illustration of an enterprise AI workspace with users, agents, retrieval, cloud infrastructure, integrations, and controlled capabilities; not a deployed infrastructure diagram or product screenshot.',
				caption:
					'Conceptual illustration — an enterprise AI workspace, retrieval layer, cloud application surface, integrations, and capability boundaries. The diagrams below show the technical relationships at a shareable level.',
			},
			overview:
				'I worked on extending a LibreChat-based conversational AI workspace into a more useful enterprise platform: one that could combine configured agents, retrieval, persistence, integrations, and cloud application services without making every capability implicitly executable. The work crossed the visible product surface and the less visible decisions around authorization, deployment, and operational boundaries.',
			problem:
				'A conversational interface is only the entry point. The workspace also needs a dependable way to configure agents, retrieve organizational context, persist the right data, connect approved integrations, and keep users inside the capabilities they are allowed to use. I treated those boundaries as part of the product rather than as deployment details to solve later.',
			architecture: {
				summary:
					'I worked across the application, hosting, retrieval, persistence, integration, and access boundaries. The diagrams are a logical responsibility view; they intentionally leave out private network topology, IAM policy details, scaling configuration, and monitoring coverage.',
				diagrams: [
					{
						title: 'High-level workspace architecture',
						img: enterpriseWorkspaceArchitecture,
						alt: 'Logical architecture connecting authenticated users, an application load balancer, ECS and Fargate application hosting, a LibreChat-based workspace, configured agents and integrations, controlled capabilities, RDS PostgreSQL with pgvector, Amazon S3 integration, and an HMAC authorization boundary. The diagram does not depict a complete network topology.',
						caption:
							'Logical responsibility view — application and service relationships are shown without private network, IAM, or resource details.',
					},
					{
						title: 'Retrieval and persistence flow',
						img: enterpriseWorkspaceRetrieval,
						alt: 'Retrieval flow from approved content and an Amazon S3 integration through retrieval preparation, RDS PostgreSQL with pgvector, context retrieval, and a configured workspace agent. Exact ingestion and indexing details are not disclosed.',
						caption:
							'Conceptual retrieval flow — exact schemas, chunking, indexing, and operational retry details remain private.',
					},
				],
				components: [
					{
						name: 'LibreChat-based workspace',
						role: 'I extended and configured the existing conversational application without claiming authorship of its upstream codebase.',
					},
					{
						name: 'Agents and integrations',
						role: 'Agent behavior, tools, and integration contracts configured within explicit workspace permissions.',
					},
					{
						name: 'ECS / Fargate and ALB',
						role: 'Containerized application hosting and entry-point integration across the cloud application boundary.',
					},
					{
						name: 'RDS PostgreSQL with pgvector',
						role: 'Persistence and vector retrieval substrate for knowledge-grounded workflows.',
					},
					{
						name: 'Amazon S3 integration',
						role: 'Object-storage integration for approved content and workspace workflows.',
					},
					{
						name: 'Access and capability controls',
						role: 'Authentication and authorization boundaries, HMAC mechanisms, restricted previews, and deliberately bounded execution surfaces.',
					},
				],
			},
			implementationTitle: 'My role and contributions',
			implementation: [
				{
					title: 'LibreChat-based application extension',
					body: 'I customized and extended an existing LibreChat-based workspace for an enterprise context. That let me focus my contribution on platform integration and capability boundaries rather than rebuilding a conversational shell.',
				},
				{
					title: 'Agent configuration and integration',
					body: 'I configured agent behavior and integration surfaces within the workspace, keeping permissions and service contracts explicit instead of treating every connected API as automatically available to an agent.',
				},
				{
					title: 'AWS application infrastructure',
					body: 'I worked across containerized application hosting and Application Load Balancer integration. The public case keeps deployment identifiers, network rules, scaling settings, and account details generalized.',
				},
				{
					title: 'Retrieval and persistence infrastructure',
					body: 'I integrated PostgreSQL with pgvector for retrieval-oriented persistence and object storage for approved content workflows. The important engineering concern was keeping retrieval, persistence, and access responsibilities understandable without exposing private schemas or data volumes.',
				},
				{
					title: 'Authorization and capability controls',
					body: 'I implemented or extended HMAC-based authorization boundaries and treated preview and execution as distinct capabilities with explicit restrictions. Code execution required a deeper identity and workspace design, which I document separately in Project 21.',
				},
				{
					title: 'Operational configuration',
					body: 'I worked across application configuration, storage, retrieval, access, and deployment concerns. I keep the narrative focused on the boundaries I handled rather than implying ownership of every surrounding team or employer responsibility.',
				},
			],
			decisionsTitle: 'Engineering decisions',
			decisions: [
				{
					title: 'Extend an existing open-source application',
					body: 'Extending an existing conversational application gave me a useful product foundation. The trade-off was inheriting an upstream lifecycle while concentrating engineering effort on enterprise configuration, agent integration, persistence, and operational boundaries.',
				},
				{
					title: 'Keep application and retrieval responsibilities distinct',
					body: 'I kept the conversational surface and retrieval-oriented persistence related but distinct. That separation made access easier to reason about and avoided implying that every application capability should directly reach stored organizational content.',
				},
				{
					title: 'Use PostgreSQL and pgvector for retrieval persistence',
					body: 'PostgreSQL with pgvector provided a familiar persistence substrate for retrieval workflows. It also made data management, indexing, configuration, and access boundaries explicit operational responsibilities.',
				},
				{
					title: 'Restrict high-risk capabilities by default',
					body: 'I treated application preview and code execution as bounded capabilities rather than as inevitable extensions of chat. The deeper execution design needed its own identity, session, workspace, and artifact controls.',
				},
				{
					title: 'Document the architecture at a safe abstraction level',
					body: 'I documented the useful engineering relationships at a level that can be shared: application, retrieval, persistence, integration, and authorization. Employer-owned topology, identifiers, private prompts, exact policies, and operational statistics remain out of scope.',
				},
			],
			capabilitySummary:
				'These labels describe the capability boundary I worked with; they do not assert a complete security policy or production posture.',
			capabilityMatrix: [
				{
					title: 'LibreChat-based workspace extension',
					status: 'Implemented',
					description: 'The existing open-source application was customized for the enterprise workspace; upstream authorship is not claimed.',
				},
				{
					title: 'Enterprise agent configuration and integration',
					status: 'Implemented',
					description: 'Agent behavior and integration surfaces were configured within the application boundary.',
				},
				{
					title: 'ECS / Fargate application infrastructure',
					status: 'Implemented',
					description: 'Application hosting responsibility is represented without account, network, or scaling details.',
				},
				{
					title: 'Application Load Balancer integration',
					status: 'Implemented',
					description: 'The application entry-point integration is included at a generalized deployment boundary.',
				},
				{
					title: 'RDS PostgreSQL with pgvector',
					status: 'Implemented',
					description: 'Retrieval-oriented persistence and vector storage are included without private schema or index details.',
				},
				{
					title: 'Amazon S3 integration',
					status: 'Implemented',
					description: 'Object-storage integration is documented at the capability boundary, without bucket or data identifiers.',
				},
				{
					title: 'HMAC-based authorization boundary',
					status: 'Implemented',
					description: 'HMAC-based request authorization was part of the integration boundary; exact secrets and policy definitions remain private.',
				},
				{
					title: 'Configured application, persistence, and integration checks',
					status: 'Validated',
					description: 'Validation covered configured engineering paths; no benchmark, load result, or complete production coverage claim is made.',
				},
				{
					title: 'Application-preview capabilities',
					status: 'Restricted',
					description: 'Preview-related surfaces were bounded rather than presented as broadly available to every workspace user or integration.',
				},
				{
					title: 'General code execution',
					status: 'Disabled',
					description: 'The public case treats general code execution as disabled; no unrestricted execution path is claimed.',
				},
			],
			evidenceTitle: 'Validation and operations',
			evidence: [
				{
					title: 'Application behavior and integration checks',
					body: 'I validated configured application paths and agent/integration behavior at the implementation boundary. No user-adoption metric, performance benchmark, or production SLA is published.',
				},
				{
					title: 'Persistence and retrieval checks',
					body: 'I checked retrieval-oriented persistence paths involving RDS PostgreSQL with pgvector and the S3 integration at the configured implementation boundary. Schema, volume, and index details remain private.',
				},
				{
					title: 'Infrastructure configuration validation',
					body: 'I validated the relevant ECS/Fargate and Application Load Balancer configuration surfaces within project scope without claiming a complete topology, autoscaling profile, or monitoring coverage.',
				},
				{
					title: 'Authorization and capability verification',
					body: 'I verified the documented authorization and capability boundaries, including HMAC mechanisms and restricted or disabled surfaces. Exact policies and secrets are intentionally omitted.',
				},
			],
			limitations: [
				{
					title: 'Anonymized professional context',
					body: 'The employer, customer, private repositories, domains, account identifiers, and internal configuration are intentionally not identified.',
				},
				{
					title: 'Inherited application lifecycle',
					body: 'Extending an open-source application reduces the need to build a conversational shell but introduces upstream compatibility and maintenance considerations.',
				},
				{
					title: 'Managed persistence responsibility',
					body: 'RDS PostgreSQL and pgvector provide a practical retrieval substrate while leaving data management, indexing, access, and operational configuration as ongoing responsibilities.',
				},
				{
					title: 'Bounded capability surface',
					body: 'Restricted preview and disabled general code execution reduce feature breadth but make the public capability boundary more honest and safer to describe.',
				},
				{
					title: 'No public metrics or guarantees',
					body: 'This case does not disclose costs, latency, throughput, check counts, production availability, monitoring coverage, or other private operational measurements.',
				},
			],
		},
	},
	{
		id: 17,
		title: 'Policy-Governed AI Agents',
		url: 'policy-governed-ai-agents',
		category: 'Production AI Engineering / Agent Reliability',
		summary:
			'I worked on reusable foundations for conversational agents that interpret requests, enforce authorization boundaries, execute guarded actions, and handle failure predictably.',
		img: policyGovernedAgentsCover,
		imageAlt:
			'Conceptual illustration of policy-governed AI agents moving through stateful orchestration, authorization checks, verified actions, and escalation paths; not a private production state machine.',
		relatedProjectIds: [15, 16, 1, 19],
		featured: {
			rank: 1,
			image: policyGovernedAgentsCover,
			problem:
				'A plausible natural-language response is not proof that an operational action was authorized, executed, or completed.',
			approach:
				'Stateful orchestration, explicit policy and confirmation boundaries, structured tool outcomes, verification, and predictable clarification or escalation paths.',
			disciplines: ['Production AI agents', 'Policy controls', 'Reliability engineering'],
			alt: 'Conceptual policy-governed AI agent workflow showing stateful orchestration, authorization checks, verified actions, and escalation paths.',
		},
		ProjectHeader: {
			title: 'Policy-Governed AI Agents',
			publishDate: '2026',
			tags: 'Stateful Agents / Policy / Reliability',
		},
		ProjectInfo: {
			ClientHeading: 'Project status',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'Role',
					details: 'Staff AI Engineer / Agent Reliability',
				},
				{
					id: uuidv4(),
					title: 'Status',
					details: 'Professional production engineering experience',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'Build conversational workflows that can interact with operational systems while respecting business constraints, verifying consequential actions, and handling ambiguity or failure predictably.',
			Technologies: [
				{
					title: 'Engineering practices',
					techs: [
						'LangGraph',
						'LLM orchestration',
						'Structured tool calls',
						'State-transition validation',
						'Scenario regression testing',
						'Trace inspection',
					],
				},
			],
			ProjectDetailsHeading: 'Key implementation work',
			ProjectDetails: [],
			SocialSharingHeading: 'Share This',
		},
		caseStudy: {
			status: 'Professional production engineering experience, anonymized',
			showCapabilityMatrix: false,
			headerFacts: ['Role', 'Status'],
			editorialCover: {
				img: policyGovernedAgentsCover,
				alt: 'Conceptual illustration of policy-governed AI agents moving through stateful orchestration, authorization checks, verified actions, and escalation paths; not a private production state machine or product screenshot.',
				caption:
					'Conceptual illustration — stateful orchestration, authorization boundaries, verified actions, and escalation. It does not reproduce a private workflow or policy.',
			},
			overview:
				'I worked on reusable foundations for conversational agents that could interact with operational systems without leaving authorization and failure handling to the language model. Each agent could have its own business workflow, but the platform needed a consistent way to interpret requests, resolve context, control state, execute tools, verify outcomes, and communicate safely. My contribution covered the relevant workflow and reliability workstreams, not an entire company platform.',
			problem:
				'Getting a language model to answer a question is one problem. Giving it the ability to act on someone’s behalf is another: it can misunderstand the request, select the wrong entity, skip a required confirmation, or describe a failed operation as successful. I needed the system—not a persuasive model response—to decide whether an action was allowed and whether it actually happened.',
			architecture: {
				summary:
					'I separated the workflow into layers. An input-safety boundary assessed the request; model-assisted interpretation and entity resolution identified what the person meant; explicit state controlled what could happen next; deterministic business and authorization checks gated consequential actions; guarded tools returned structured outcomes; and response governance decided whether to answer, clarify, refuse, degrade, or escalate. The diagrams are generalized so they do not expose private workflow or policy details.',
				diagrams: [
					{
						title: 'Governed workflow architecture',
						img: policyGovernedAgentsArchitecture,
						alt: 'Generalized governed workflow architecture separating model-assisted interpretation from deterministic operational control: user interaction, LLM interpretation, context and entity resolution, explicit workflow state, policy and confirmation boundary, authorized execution, verified result, and supported response or escalation.',
						caption:
							'Conceptual architecture — the language model proposes an interpretation while explicit state and control boundaries govern operational action.',
						mobileFallback: [
							{
								title: 'User interaction',
								description: 'A request enters the conversational workflow.',
							},
							{
								title: 'LLM interpretation',
								description: 'The model helps interpret intent without committing an operational action.',
							},
							{
								title: 'Context and entity resolution',
								description: 'Relevant context and entities are resolved before a workflow state is selected.',
							},
							{
								title: 'Explicit workflow state',
								description: 'Controlled state transitions define which next steps are available.',
							},
							{
								title: 'Policy and confirmation boundary',
								description: 'Eligibility and confirmation requirements are evaluated before consequential action.',
							},
							{
								title: 'Authorized execution and verification',
								description: 'An authorized operation produces a structured outcome that must be verified.',
							},
							{
								title: 'Supported response or escalation',
								description: 'The workflow communicates only a supported outcome or routes the case for clarification or escalation.',
							},
						],
					},
					{
						title: 'Verified action sequence',
						img: policyGovernedAgentsSequence,
						alt: 'Generalized verified-action sequence from interpreting a request through context resolution, eligibility and policy checks, confirmation where required, authorized execution, structured outcome verification, and communicating a supported result. Ambiguous or failed paths clarify or escalate.',
						caption:
							'Generic request lifecycle — ambiguous, ineligible, failed, or unverified paths do not become unsupported success messages.',
						mobileFallback: [
							{
								title: 'Interpret the request',
								description: 'Use model-assisted interpretation to identify the requested outcome.',
							},
							{
								title: 'Resolve context',
								description: 'Resolve relevant entities and current workflow state.',
							},
							{
								title: 'Check conditions',
								description: 'Evaluate eligibility and policy conditions before action.',
							},
							{
								title: 'Confirm when required',
								description: 'Request confirmation for applicable consequential actions.',
							},
							{
								title: 'Execute authorized operation',
								description: 'Call the authorized operation through a structured tool boundary.',
							},
							{
								title: 'Verify structured outcome',
								description: 'Inspect the observed result before communicating completion.',
							},
							{
								title: 'Communicate or escalate',
								description: 'Report only a supported outcome; clarify or escalate ambiguous or failed paths.',
							},
						],
					},
				],
				components: [
					{
						name: 'LangGraph workflow orchestration',
						role: 'Stateful workflow structure with explicit transitions and controlled next steps.',
					},
					{
						name: 'Context and entity resolution',
						role: 'Resolution of relevant context before the workflow is allowed to proceed.',
					},
					{
						name: 'Policy and confirmation boundary',
						role: 'Eligibility checks and confirmation requirements before consequential actions.',
					},
					{
						name: 'Authorized operational execution',
						role: 'Separation between model reasoning and structured tool execution.',
					},
					{
						name: 'Verified outcomes',
						role: 'Observed tool results determine whether success can be communicated.',
					},
					{
						name: 'Failure handling and escalation',
						role: 'Ambiguous, ineligible, failed, or unverified paths remain explicit.',
					},
				],
			},
			implementationTitle: 'What I built',
			implementation: [
				{
					title: 'Stateful orchestration with LangGraph',
					body: 'I contributed to LangGraph-based workflow architecture with explicit states and controlled transitions, keeping the workflow understandable and testable rather than relying on unconstrained model-driven action selection.',
				},
				{
					title: 'Context and entity resolution',
					body: 'I implemented and refined the resolution of relevant context and entities before action paths could proceed, reducing ambiguity at the boundary between conversational interpretation and operational execution.',
				},
				{
					title: 'Authorization and verified actions',
					body: 'I worked on eligibility and policy checks, confirmation where required, authorized tool execution, structured outcomes, and verification before a success response was communicated.',
				},
				{
					title: 'Reliability improvements',
					body: 'I improved predictable handling for negative, ambiguous, failed, and incomplete paths, including clarification or escalation instead of silently treating an unverified operation as successful.',
				},
				{
					title: 'Multilingual response handling',
					body: 'I worked with English, Spanish, and French response handling while keeping action semantics, guardrails, and state transitions independent from the wording shown to the user. Where language coverage or rollout was incomplete, I treated that as a test boundary rather than assuming production parity.',
				},
				{
					title: 'Scenario-based evaluation and trace analysis',
					body: 'I contributed to scenario-based tests, regression coverage, state-transition validation, tool-result verification, trace inspection, and failure analysis without publishing internal datasets, counts, or production metrics.',
				},
				{
					title: 'Bounded engineering ownership',
					body: 'My ownership covered workflow architecture, implementation, reliability improvements, and evaluation within the relevant workstreams; I do not claim ownership of the entire employer AI platform.',
				},
			],
			decisionsTitle: 'Engineering decisions',
			decisions: [
				{
					title: 'Deterministic transitions over unconstrained action selection',
					body: 'Explicit workflow states made the allowed progression visible and testable, while the language model remained responsible for interpretation rather than directly deciding that an operational action had completed.',
				},
				{
					title: 'Separate reasoning from operational execution',
					body: 'Keeping LLM reasoning distinct from structured tool execution created a control boundary for authorization, confirmation, result inspection, and escalation.',
				},
				{
					title: 'Verify before communicating success',
					body: 'A tool call or model-generated statement was not treated as proof of completion. The workflow required an observed, structured outcome before presenting supported success to the user.',
				},
				{
					title: 'Govern the response after execution',
					body: 'I treated routine responses, sensitive outcomes, adjudication or revision passes, refusals, degraded behavior, and escalation as separate response paths. Not every turn needed the same level of review, but every path needed explicit semantics.',
				},
				{
					title: 'Treat confirmation as conditional control',
					body: 'Confirmation was modeled as a boundary for applicable consequential actions rather than an indiscriminate interaction step, preserving usability without removing the control.',
				},
				{
					title: 'Use scenarios and traces to find failure modes',
					body: 'Scenario-based regression and trace inspection exposed negative, ambiguous, and state-transition failures more usefully than relying on aggregate scores or a single happy-path demonstration.',
				},
			],
			evidenceTitle: 'Reliability and evaluation',
			evidence: [
				{
					title: 'Scenario-based tests',
					body: 'I used scenario-based cases to exercise normal, negative, ambiguous, and failure paths without exposing the internal regression dataset or test counts.',
				},
				{
					title: 'State-transition validation',
					body: 'Workflow state and transition behavior were inspected as first-class reliability concerns, including whether a path could proceed, stop, clarify, or escalate.',
				},
				{
					title: 'Tool-result verification',
					body: 'The evaluation approach distinguished a requested operation from an observed result so that a tool response or failure could be handled explicitly.',
				},
				{
					title: 'Trace inspection and failure analysis',
					body: 'Trace review helped identify interpretation, context, transition, execution, and verification failures without claiming a formal benchmark or universal coverage.',
				},
			],
			limitations: [
				{
					title: 'Probabilistic interpretation remains',
					body: 'Stateful orchestration constrains progression but does not make language-model interpretation perfectly correct or deterministic.',
				},
				{
					title: 'Policy definitions are external and changeable',
					body: 'The workflow can expose control points, but the quality and maintenance of eligibility criteria remain dependent on the surrounding business and operational context.',
				},
				{
					title: 'Context resolution can remain ambiguous',
					body: 'Incomplete, conflicting, or multilingual inputs may require clarification or escalation; this case does not claim a complete language or entity-coverage matrix.',
				},
				{
					title: 'Verification depends on observable outcomes',
					body: 'A workflow can verify only what its operational boundary exposes, so verification is not a guarantee that every downstream business effect is known.',
				},
				{
					title: 'No perfect safety or correctness claim',
					body: 'The approach reduces avoidable unsupported actions and makes failure paths more explicit; it does not claim zero failure risk, perfect policy compliance, or universal correctness.',
				},
			],
		},
	},
	{
		id: 18,
		title: 'Professional Cases — AI-Powered Professional Practice Scenarios',
		url: 'professional-cases-ai-practice-scenarios',
		category: 'Independent AI Product Engineering / Knowledge Systems',
		summary:
			'Independent product under development for turning professional knowledge into practice scenarios, reviewable cases, and respectful rubric-based feedback.',
		img: professionalCasesCover,
		imageAlt:
			'Conceptual editorial illustration for Professional Cases: documents, images, knowledge organization, case generation, and assessment. Audio and video symbols are visual motifs, not proof of implemented speech capabilities.',
		relatedProjectIds: [19, 14, 1, 16],
		ProjectHeader: {
			title: 'Professional Cases — AI-Powered Professional Practice Scenarios',
			publishDate: 'In development',
			tags: 'Knowledge Systems / Case Generation / Evaluation',
		},
		ProjectInfo: {
			ClientHeading: 'Project status',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'Type',
					details: 'Independent project',
				},
				{
					id: uuidv4(),
					title: 'Status',
					details: 'Independent Project — In Development',
				},
				{
					id: uuidv4(),
					title: 'Scope',
					details: 'Knowledge, generation, evaluation, and backend runtime',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'Help experienced and retired professionals continue exercising professional judgment through realistic, profession-specific practice scenarios and respectful feedback, while keeping the current product boundary honest.',
			Technologies: [
				{
					title: 'Technologies',
					techs: [
						'Next.js / React',
						'Python / FastAPI',
						'PostgreSQL / pgvector',
						'Redis / Celery',
						'LangGraph',
						'Google GenAI client',
						'PyMuPDF',
						'scikit-learn',
						'Alembic',
					],
				},
			],
			ProjectDetailsHeading: 'Implementation evidence',
			ProjectDetails: [],
			SocialSharingHeading: 'Share This',
		},
		caseStudy: {
			status: 'Independent Project — In Development',
			headerFacts: ['Type', 'Status', 'Scope'],
			editorialCover: {
				img: professionalCasesCover,
				alt: 'Conceptual editorial illustration for Professional Cases showing documents, images, knowledge organization, case generation, and assessment. Audio and video symbols are visual motifs only; the current implementation is text-first and does not claim speech support.',
				caption:
					'Conceptual editorial artwork — documents, images, knowledge organization, scenario generation, and assessment. The audio/video symbols are not evidence of implemented modalities; the verified product boundary is text-first and in development.',
			},
			overview:
				'Professional Cases is an independent product under development for experienced and retired professionals who want to continue exercising professional judgment through realistic, profession-specific practice scenarios and respectful feedback. The verified repository contains a Next.js/React web surface, a FastAPI backend, knowledge and content tooling, case generation, semantic evaluation, and a partially integrated Senior runtime. The browser Senior experience still uses deterministic mock BFF routes, so this case does not present the product as launched or publicly available.',
			problem:
				'Professional knowledge arrives as heterogeneous documents, images, terminology, and domain context. Turning that material into useful practice requires more than retrieving a paragraph: the system needs traceable ingestion, searchable evidence, topic diversity, case seeds, generated narratives, quality checks, and feedback grounded in the professional work. The product goal is to preserve dignity and professional identity without reducing the experience to a generic quiz, an AI chatbot, or unsupported claims about learning outcomes.',
			architecture: {
				summary:
					'The current implementation is a modular web and backend monorepo. Admin and sponsor surfaces use Next.js/React; FastAPI modules own authentication, profiles, knowledge, generated cases, evaluation, and the Senior runtime; PostgreSQL with pgvector stores domain and retrieval data; Redis and Celery support background processing; and a centralized Google GenAI client forms the provider boundary. These diagrams show verified code paths, not the future deployment architecture or the full product design backlog.',
				diagrams: [
					{
						title: 'Knowledge ingestion and case-generation architecture',
						img: professionalCasesIngestionDiagram,
						alt: 'Current Professional Cases implementation path from admin PDF, TXT, or MD upload through extraction, chunking, metadata, embeddings, PostgreSQL with pgvector, hybrid search, KMeans clusters, case seeds, LangGraph generation, and admin review.',
						caption:
							'Current implementation evidence — document and image processing, retrieval, clustering, generation, and review. Speech, rewards, and public deployment are not represented as implemented.',
						mobileFallback: [
							{
								title: 'Admin upload and FastAPI intake',
								description: 'The current processor accepts PDF, TXT, and MD sources through the knowledge API.',
							},
							{
								title: 'Text and image extraction',
								description: 'PDF/text processing extracts searchable text and source images into local storage.',
							},
							{
								title: 'Chunking and metadata enrichment',
								description: 'Markdown-aware chunking, token accounting, and metadata extraction prepare knowledge records.',
							},
							{
								title: 'Text embeddings and image captions',
								description: 'Text embeddings plus caption and visual-embedding paths make source material retrievable.',
							},
							{
								title: 'PostgreSQL and pgvector',
								description: 'Chunks, images, clusters, seeds, cases, and generation runs persist in the backend data model.',
							},
							{
								title: 'Hybrid retrieval and diversity',
								description: 'Lexical and vector search combine with per-document diversity limits, clustering, and seed rotation.',
							},
							{
								title: 'LangGraph case generation',
								description: 'Material checks, narrative generation, metadata extraction, image evaluation, judges, aggregation, and finalization form the current graph.',
							},
							{
								title: 'Admin review and approval',
								description: 'Generated cases retain status, evidence, quality metadata, and review actions before assignment.',
							},
						],
					},
					{
						title: 'Evaluation and feedback lifecycle',
						img: professionalCasesEvaluationDiagram,
						alt: 'Current backend evaluation lifecycle from an approved generated case through authorized text runtime, persisted investigation, conclusion snapshot, evaluation specification validation, structured LLM judgments, deterministic score assembly, and persisted semantic evaluation result. Missing specifications and invalid output stop safely; browser feedback presentation remains planned.',
						caption:
							'Current backend evaluation path — the dashed browser feedback path is a remaining integration boundary, not a claim that the Senior browser is production-backed.',
						mobileFallback: [
							{
								title: 'Approved generated case',
								description: 'Only approved generated cases can start the current Senior runtime assignment path.',
							},
							{
								title: 'Authorized text runtime',
								description: 'Ownership and assignment status are checked through the authenticated sponsor boundary.',
							},
							{
								title: 'Persisted investigation',
								description: 'Text messages, findings, private notes, and conclusion drafts use durable assignment-owned records.',
							},
							{
								title: 'Conclusion snapshot',
								description: 'Submission creates an immutable conclusion snapshot and moves the assignment to evaluation.',
							},
							{
								title: 'Evaluation-spec gate',
								description: 'Missing or incomplete case-authored evaluation content stops explicitly instead of inventing generic feedback.',
							},
							{
								title: 'Structured semantic judgment',
								description: 'The provider returns dimension judgments and evidence references that are validated against the submitted work.',
							},
							{
								title: 'Deterministic score assembly',
								description: 'The backend computes the weighted overall score rather than trusting the provider to supply it.',
							},
							{
								title: 'Persisted evaluation result',
								description: 'The semantic result and score persist; browser BFF cutover and feedback presentation remain planned.',
							},
						],
					},
				],
				components: [
					{
						name: 'Next.js / React web surfaces',
						role: 'Admin and sponsor workflows exist; the browser Senior path still uses deterministic mock BFF routes.',
					},
					{
						name: 'FastAPI domain modules',
						role: 'Authentication, profiles, knowledge, generated cases, semantic evaluation, and Senior runtime routes form the backend boundary.',
					},
					{
						name: 'PostgreSQL + pgvector',
						role: 'Stores source documents, chunks, embeddings, images, clusters, seeds, cases, assignments, and evaluation state.',
					},
					{
						name: 'Redis + Celery workers',
						role: 'Supports queued ingestion, clustering, case generation, and other background jobs in the local stack.',
					},
					{
						name: 'Centralized LLM provider boundary',
						role: 'Structured generation, embeddings, retries, timeouts, and token accounting are centralized rather than duplicated per feature.',
					},
				],
			},
			capabilitySummary:
				'Status vocabulary: Validated means source-backed and covered by targeted tests; Implemented means the code path exists but is not fully validated end to end; Partial means only a slice is present; Planned means the repository describes the capability without a delivered implementation; Not found means no production implementation was found.',
			capabilityMatrix: [
				{
					title: 'Sponsor/admin authentication and role boundaries',
					status: 'Validated',
					description: 'FamilyAccount roles, bearer authentication, sponsor ownership, admin separation, and access checks are implemented and covered by auth/runtime tests.',
				},
				{
					title: 'PDF/TXT/MD knowledge ingestion',
					status: 'Validated',
					description: 'Extraction, chunking, metadata, embedding, image persistence, job status, and failure paths are implemented; repository tests cover ingestion and jobs.',
				},
				{
					title: 'Hybrid retrieval and related images',
					status: 'Validated',
					description: 'Lexical and vector chunk search combine with score diagnostics, per-document diversity limits, and page-aware related-image results.',
				},
				{
					title: 'KMeans clustering and case-seed rotation',
					status: 'Validated',
					description: 'Embedding validation, KMeans runs, cluster summaries, seed generation, and rotation logic are present with targeted tests and admin routes.',
				},
				{
					title: 'LangGraph case-generation workflow',
					status: 'Implemented',
					description: 'Material checks, narrative and metadata phases, image evaluation, quality judges, aggregation, optional refinement, finalization, and discard paths are implemented; full validation remains environment-sensitive.',
				},
				{
					title: 'Rubric-based semantic evaluation',
					status: 'Implemented',
					description: 'Versioned case specs, structured dimension judgments, evidence-reference validation, deterministic weighted scoring, persistence, and provider failure handling are implemented; end-to-end production orchestration remains incomplete.',
				},
				{
					title: 'Durable text Senior runtime',
					status: 'Partial',
					description: 'Assignment ownership, notes, drafts, conclusions, messages, findings, and idempotent state transitions exist in the backend, while the browser BFF has not been cut over.',
				},
				{
					title: 'Case-subject conversation engine',
					status: 'Partial',
					description: 'A provider-backed, profession-neutral text engine and messages API validate authored facts and fail closed; generation does not yet author subject knowledge for cases.',
				},
				{
					title: 'Production Senior browser cutover',
					status: 'Planned',
					description: 'The repository explicitly keeps the Next.js Senior BFF on deterministic mock routes until the production read-model and subject-knowledge boundaries are complete.',
				},
				{
					title: 'Speech-to-text and text-to-speech',
					status: 'Planned',
					description: 'Profile settings contain voice configuration, but the repository instructions defer voice and no production speech provider or interaction path was found.',
				},
				{
					title: 'Rewards and recognition ledger',
					status: 'Partial',
					description: 'A reward-mode profile setting exists, but no delivered reward ledger, event flow, or Senior reward presentation was found.',
				},
				{
					title: 'Audio/video case modalities',
					status: 'Not found',
					description: 'The current implementation supports document and image knowledge paths; the audio/video symbols in the editorial artwork are not implementation evidence.',
				},
			],
			implementationTitle: 'Engineering ownership',
			implementation: [
				{
					title: 'Modular product boundary',
					body: 'I worked across the Next.js/React web surface and the FastAPI/Python backend while keeping Admin/Content Studio concerns separate from the calmer Senior runtime. The repository uses explicit domain modules instead of collapsing knowledge, generation, evaluation, and runtime state into one client abstraction.',
				},
				{
					title: 'Evidence-grounded knowledge pipeline',
					body: 'I implemented and refined the path from supported document sources through extraction, Markdown-aware chunking, metadata, embeddings, image captions, pgvector persistence, hybrid retrieval, and related-image context. The pipeline exposes status and failure information instead of treating ingestion as an opaque batch.',
				},
				{
					title: 'Stateful case generation',
					body: 'I built the LangGraph generation path around material sufficiency, narrative generation, metadata extraction, image evaluation, quality judges, aggregation, optional refinement, finalization, and discard handling. Generated cases retain evidence references, quality metadata, node runs, and review state for Admin inspection.',
				},
				{
					title: 'Rubric and evaluation contracts',
					body: 'I separated the internal case-authored evaluation specification from provider output and the Senior-safe result. Evidence references are validated against the submitted work, the weighted overall score is assembled deterministically on the server, and malformed or hallucinated output does not receive a silent repair or fallback score.',
				},
				{
					title: 'Durable runtime foundations',
					body: 'I extended the backend runtime around assignment-owned state, authorization, idempotent conclusion submission, durable text messages, authored subject knowledge, finding persistence, leases, and explicit provider failure categories. Private notes and evaluator internals remain outside the evaluation input contract.',
				},
				{
					title: 'Bounded product claims',
					body: 'I kept voice, rewards, production browser cutover, and unverified multimedia capabilities outside the implemented claim set. The product remains independent and in development; no adoption, learning, clinical, or production-availability outcome is claimed.',
				},
			],
			decisionsTitle: 'Engineering decisions and trade-offs',
			decisions: [
				{
					title: 'Keep Admin/Content Studio separate from Senior UX',
					body: 'Knowledge authoring, clustering, generated-case review, and operations need dense inspection surfaces. The Senior experience needs a calm, readable, judgment-oriented flow; combining those surfaces would obscure both responsibilities.',
				},
				{
					title: 'Preserve provenance and safe projections',
					body: 'The backend stores evidence, runs, specifications, and internal evaluation data, but browser-facing projections are assembled field by field. Hidden answers, rubrics, prompts, evaluator confidence, and generation metadata are not treated as Senior-visible data.',
				},
				{
					title: 'Use hybrid retrieval with diversity controls',
					body: 'Lexical matching handles exact professional terms while vector search supports semantic recall. Per-document limits, clusters, and seed rotation reduce the risk that one source dominates every generated case.',
				},
				{
					title: 'Make the generation graph inspectable',
					body: 'Separate generation phases and persisted node runs make failure, quality judgments, image decisions, and refinement behavior visible to the content workflow instead of hiding everything behind one provider call.',
				},
				{
					title: 'Make scoring deterministic at the server boundary',
					body: 'The provider supplies constrained dimension judgments; the backend validates ids and evidence references and computes the weighted 1–100 result. This keeps scoring rules in an auditable contract rather than delegating the final number to the model.',
				},
				{
					title: 'Fail closed when authored content is incomplete',
					body: 'A missing evaluation specification or subject-knowledge contract is an explicit incomplete-content error. The system does not invent a generic rubric, patient reply, or fallback score to make the flow appear complete.',
				},
			],
			evidenceTitle: 'Verification and testing',
			evidence: [
				{
					title: 'Targeted backend coverage',
					body: 'The repository includes unit coverage for knowledge metadata, clustering, case-generation nodes and service behavior, evaluation contracts and service behavior, case-subject contracts, provider errors, and seed rotation. The focused suite exercised for this review passed 94 tests with one environment-specific test deselected.',
				},
				{
					title: 'Integration coverage exists in the repository',
					body: 'Integration suites cover authentication, knowledge upload and ingestion jobs, KB search, clustering, case-generation routes, evaluation persistence, Senior runtime authorization, and subject conversation behavior. They require the repository Docker Compose test database and were not run while that stack was stopped.',
				},
				{
					title: 'Failure and security boundaries are tested',
					body: 'The source and tests cover ownership checks, idempotency, provider failure, malformed structured output, hallucinated fact or evidence references, missing authored contracts, and the absence of private notes from provider inputs.',
				},
				{
					title: 'Current validation finding',
					body: 'The full unit run reached 140 passing tests but exposed one Windows locale failure while loading the UTF-8 patient_names.json file in a narrative-generator error-path test. That unrelated repository issue was not changed as part of this portfolio integration.',
				},
			],
			limitations: [
				{
					title: 'Independent product remains in development',
					body: 'There is no public launch, adoption evidence, learning-improvement evidence, clinical effectiveness claim, or production availability claim in this case study.',
				},
				{
					title: 'Senior browser cutover is incomplete',
					body: 'The backend runtime and production conversation boundary exist, but the Next.js Senior BFF still uses deterministic mock routes. The current case therefore describes backend foundations and not a fully production-backed browser journey.',
				},
				{
					title: 'Case authoring contracts remain a product dependency',
					body: 'The conversation engine requires case-authored subject_knowledge_json, and semantic evaluation requires evaluation_spec_json. The current generation pipeline does not yet produce the subject contract, so not every generated case is conversable.',
				},
				{
					title: 'Voice and rewards are not delivered capabilities',
					body: 'Voice is explicitly deferred and no speech provider was found. Reward configuration exists at the profile level, but a reward ledger, event flow, and Senior presentation were not found.',
				},
				{
					title: 'Provider and environment boundaries',
					body: 'Provider-backed behavior depends on configured credentials and the Docker test stack. This portfolio case does not publish benchmark scores, user counts, latency, adoption, or other quality metrics.',
				},
			],
		},
	},
	{
		id: 19,
		title: 'AI Digital Twin — Contextual Knowledge, GraphRAG & Retrieval Evaluation',
		url: 'ai-digital-twin-contextual-knowledge-retrieval-evaluation',
		category: 'Retrieval Engineering / AI Evaluation',
		summary:
			'I explored how contextual knowledge organization, vector RAG, GraphRAG, combined retrieval, and question-type evaluation can work together for professional context.',
		img: digitalTwinCover,
		imageAlt:
			'Conceptual editorial collage for AI Digital Twin showing contextual archives, projects, meetings, emails, vector retrieval, GraphRAG, and combined retrieval strategies.',
		relatedProjectIds: [14, 16, 1, 15],
		featured: {
			rank: 4,
			image: digitalTwinCover,
			problem:
				'Professional knowledge is distributed across projects, dates, emails, meetings, and other records, so semantic similarity alone may miss the context that makes retrieval useful.',
			approach:
				'I compared vector RAG, GraphRAG, and combined retrieval with response-time measurement, DeepEval/LLM evaluation, question-type comparison, and prompt refinement.',
			disciplines: ['Retrieval systems', 'GraphRAG', 'Evaluation engineering'],
			alt: 'Conceptual AI Digital Twin collage showing contextual archives, vector retrieval, GraphRAG, combined approaches, and retrieval evaluation.',
		},
		ProjectHeader: {
			title: 'AI Digital Twin — Contextual Knowledge, GraphRAG & Retrieval Evaluation',
			publishDate: 'Retrieval evaluation',
			tags: 'Contextual Knowledge / GraphRAG / DeepEval',
		},
		ProjectInfo: {
			ClientHeading: 'Project status',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'Type',
					details: 'Engineering project',
				},
				{
					id: uuidv4(),
					title: 'Status',
					details: 'Retrieval evaluation — source access pending',
				},
				{
					id: uuidv4(),
					title: 'Scope',
					details: 'Contextual retrieval and comparative evaluation',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'Explore when graph-enhanced retrieval adds value over vector-based RAG for distributed professional knowledge, and make the quality and latency trade-offs testable without implying human-equivalent memory.',
			Technologies: [
				{
					title: 'Confirmed methods and tools',
					techs: [
						'Vector database',
						'Metadata filtering',
						'Vector RAG',
						'GraphRAG',
						'DeepEval',
						'LLM-as-evaluator',
					],
				},
			],
			ProjectDetailsHeading: 'Evidence boundary',
			ProjectDetails: [],
			SocialSharingHeading: 'Share This',
		},
		caseStudy: {
			status: 'Retrieval evaluation — source access pending',
			showCapabilityMatrix: false,
			headerFacts: ['Type', 'Status', 'Scope'],
			editorialCover: {
				img: digitalTwinCover,
				alt: 'Conceptual editorial collage for AI Digital Twin showing project, document, meeting, and email archives connected to vector retrieval, GraphRAG, combined approaches, and retrieval evaluation.',
				caption:
					'Conceptual editorial artwork — contextual archives and retrieval experiments. It is not an architecture export, benchmark chart, or claim of human-equivalent memory.',
			},
			overview:
				'I became interested in the digital-twin problem through knowledge rather than avatars. A useful assistant would need to connect projects, people, dates, emails, meetings, and decisions, then recover the context behind a question instead of matching a few similar words. I focused on organizing contextual knowledge and comparing retrieval strategies; I am not presenting this as human-equivalent memory or as proof that every workplace integration is complete.',
			problem:
				'Professional knowledge is spread across documents, projects, dates, emails, meetings, and other records. Vector search is useful when the wording of a question differs from the source, but semantic similarity can miss who worked on a project, which meeting led to a decision, or how one event relates to another. I investigated whether graph-enhanced retrieval adds useful relationships over vector RAG, and what the quality and response-time trade-offs look like for different question types.',
			architecture: {
				summary:
					'I organized the work around contextual records, metadata filters, and vector representations, then compared vector RAG, GraphRAG, and a combined approach before passing retrieved evidence to answer generation. I leave the exact database, graph persistence, extraction pipeline, fusion mechanism, session model, and runtime routing unspecified because those implementation artifacts were not available for this case.',
				diagrams: [
					{
						title: 'Contextual knowledge organization and retrieval',
						img: digitalTwinRetrievalDiagram,
						alt: 'Conceptual model of contextual records organized with metadata and vector representations, compared through vector RAG, GraphRAG, and combined retrieval before evidence is passed to answer generation. Exact storage and graph construction details are not specified.',
						caption:
							'The visual summarizes the retrieval work I explored; vector-store and graph-construction technologies, extraction rules, fusion behavior, and automatic routing are intentionally left unspecified.',
						mobileFallback: [
							{
								title: 'Contextual records',
								description: 'Projects, dates, emails, meetings, and other knowledge records form the contextual categories I explored.',
							},
							{
								title: 'Metadata and vector organization',
								description: 'Metadata filtering and vector representations narrow the context; the exact schema and database product are not specified here.',
							},
							{
								title: 'Vector RAG',
								description: 'A semantic retrieval strategy included in the comparative engineering work.',
							},
							{
								title: 'GraphRAG',
								description: 'A relationship-aware retrieval strategy included in the comparison; graph construction details are not specified here.',
							},
							{
								title: 'Combined retrieval',
								description: 'A combined GraphRAG and vector RAG approach was evaluated as an experimental strategy.',
							},
							{
								title: 'Evidence to answer generation',
								description: 'Retrieved context supports answer generation; exact prompt and session implementation requires source verification.',
							},
						],
					},
					{
						title: 'Comparative retrieval evaluation methodology',
						img: digitalTwinEvaluationDiagram,
						alt: 'Conceptual evaluation flow comparing vector RAG, GraphRAG, and combined retrieval across question types, measuring response time and assessing answer quality through DeepEval and an LLM-as-evaluator before informing prompt revisions.',
						caption:
							'Conceptual methodology — no private question set, benchmark scores, latency statistics, or universal winning strategy are published.',
						mobileFallback: [
							{
								title: 'Question set by type',
								description: 'The experiments compared retrieval behavior across question types; exact categories require artifact review.',
							},
							{
								title: 'Three comparable retrieval runs',
								description: 'Vector RAG, GraphRAG, and combined GraphRAG plus vector RAG were evaluated as separate strategies.',
							},
							{
								title: 'Response time and answer quality',
								description: 'Execution/response times were measured and answer quality was evaluated; numeric results remain unpublished.',
							},
							{
								title: 'DeepEval and LLM-as-evaluator',
								description: 'DeepEval was used with an LLM-as-evaluator approach; exact judge prompts and metrics require source or artifact review.',
							},
							{
								title: 'Question-type comparison',
								description: 'The comparison investigated which retrieval strategy fit different question types rather than assuming one universal winner.',
							},
							{
								title: 'Prompt refinement and rerun',
								description: 'Evaluation findings informed prompt improvements; exact revisions and reproducibility artifacts are not published.',
							},
						],
					},
				],
				components: [
					{
						name: 'Contextual knowledge records',
					role: 'Projects, dates, emails, meetings, and related records form the contextual knowledge I explored.',
					},
					{
						name: 'Metadata filtering',
					role: 'Metadata narrows context appropriate to the question; exact fields and filter execution are not specified here.',
					},
					{
						name: 'Vector retrieval',
					role: 'Vector-based RAG was one of the retrieval strategies I compared; product and index details are not published.',
					},
					{
						name: 'Graph-enhanced retrieval',
						role: 'GraphRAG and a combined strategy were evaluated; entity extraction, graph persistence, and fusion details require source access.',
					},
					{
						name: 'Evaluation boundary',
					role: 'I used DeepEval with an LLM-as-evaluator approach, response-time measurement, question-type comparison, and prompt refinement.',
					},
				],
			},
			implementationTitle: 'What I explored',
			implementation: [
				{
					title: 'Contextual knowledge organization',
					body: 'I organized the work around projects, dates, emails, meetings, and other context so retrieval could reflect more than semantic similarity alone. The exact schema, indexing code, and storage technology are not part of this public case.',
				},
				{
					title: 'Retrieval strategy experimentation',
					body: 'I compared vector RAG, GraphRAG, and a combined GraphRAG plus vector RAG strategy as retrieval engineering experiments.',
				},
				{
					title: 'Evaluation design',
					body: 'I compared the strategies across question types, measured response time, and assessed answer quality with DeepEval and an LLM-as-evaluator approach.',
				},
				{
					title: 'Prompt refinement',
					body: 'The experiments informed prompt improvements. I do not claim a particular score increase or universally superior retrieval strategy without the underlying artifacts.',
				},
			],
			decisionsTitle: 'Engineering decisions and trade-offs',
			decisions: [
				{
					title: 'Compare retrieval strategies instead of assuming graph value',
					body: 'The central engineering question is empirical: determine when relationship-aware context adds value over vector similarity and where the additional complexity may not justify itself.',
				},
				{
					title: 'Use contextual metadata as part of retrieval reasoning',
					body: 'Projects, dates, source types, emails, and meetings provide context that can narrow or qualify a retrieval request. I leave the exact filter order and implementation unspecified.',
				},
				{
					title: 'Evaluate by question type',
					body: 'A single aggregate result could hide where vector, graph, or combined retrieval helps. I compared question types, but the specific categories and results remain private or unavailable.',
				},
				{
					title: 'Treat prompt changes as evaluation-driven',
					body: 'Prompt refinement is presented as a response to observed evaluation behavior, not as a claim that wording alone solved retrieval quality or latency trade-offs.',
				},
				{
					title: 'Do not imply automatic runtime routing',
					body: 'I describe comparable retrieval experiments, not an automatic router that selects a strategy for every question. That distinction remains until implementation evidence supports it.',
				},
			],
			evidenceTitle: 'What the evidence supports',
			evidence: [
				{
					title: 'Engineering activities',
					body: 'The work covered contextual knowledge organization, metadata filtering, vector RAG, GraphRAG, combined retrieval, response-time measurement, DeepEval/LLM-as-evaluator assessment, question-type comparison, and prompt refinement.',
				},
				{
					title: 'Source repository access',
					body: 'The implementation repositories were not available for this portfolio case, so I am keeping database, graph, extraction, fusion, and runtime details at the level described above.',
				},
				{
					title: 'Historical architecture plan',
					body: 'The Arabic-first Azure Phase 1 plan is separate from this retrieval study. I do not present its services as deployed Digital Twin infrastructure.',
				},
				{
					title: 'Publication boundary',
					body: 'I have excluded private evaluation questions, scores, latency statistics, personal records, employer-specific results, credentials, endpoints, and benchmark charts.',
				},
			],
			limitations: [
				{
					title: 'Implementation details require source access',
					body: 'I do not identify the exact vector database, graph store, entity/relation extraction, traversal, fusion, reranking, prompt construction, session handling, tests, or evaluation artifacts in this case.',
				},
				{
					title: 'No human-equivalent memory claim',
					body: 'Contextual organization and retrieval do not establish human-like memory, consciousness, autonomy, or reliable long-term memory.',
				},
				{
					title: 'No universal retrieval winner',
					body: 'The case does not claim that vector RAG, GraphRAG, or the combined approach consistently wins without approved comparative results.',
				},
				{
					title: 'No deployment claim from the Azure proposal',
					body: 'Azure Document Intelligence, Azure AI Search, Azure OpenAI, Azure PostgreSQL, Azure Storage, Container Apps, Terraform, Langfuse, RAGAS, and other plan references belong to a separate proposal and are not presented as deployed here.',
				},
				{
					title: 'Private corpus and evaluation artifacts',
					body: 'The underlying personal-context corpus and evaluation artifacts require sanitization and owner approval before any detailed results or examples become public.',
				},
			],
		},
	},
	{
		id: 20,
		title: 'AI Agent Evaluation & Experimentation Framework',
		url: 'ai-agent-evaluation-experimentation-framework',
		category: 'Agent Evaluation / Reliability Engineering',
		summary:
			'Config-driven, agent-agnostic evaluation platform that connects to knowledge bases, generates ground-truthed datasets, registers agents and metrics, and compares experiments across quality, retrieval, behavior, safety, and efficiency.',
		img: aiAgentEvaluationCover,
		imageAlt:
			'Conceptual editorial illustration of AI agent evaluation with datasets, agent traces, deterministic checks, LLM-based evaluation, experiment comparison, and reproducibility; not a benchmark result or product screenshot.',
		relatedProjectIds: [15, 16, 17, 19],
		ProjectHeader: {
			title: 'AI Agent Evaluation & Experimentation Framework',
			publishDate: '2026',
			tags: 'Agent Evaluation / Knowledge Bases / Experimentation',
		},
		ProjectInfo: {
			ClientHeading: 'Project status',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'Role',
					details: 'AI Evaluation Engineer',
				},
				{
					id: uuidv4(),
					title: 'Status',
					details: 'Internal engineering evaluation tooling',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'Make agent changes comparable without rewriting the harness: connect a knowledge base, generate a dataset with explicit source context, register the agent and metrics, run repeatable experiments, and inspect both aggregate and per-example evidence.',
			Technologies: [
				{
					title: 'Evaluation stack',
					techs: ['Python', 'YAML configuration', 'KB adapters', 'Metric registry', 'RAGAS', 'DeepEval', 'Opik', 'LangGraph', 'pytest'],
				},
			],
			ProjectDetailsHeading: 'Evidence boundary',
			ProjectDetails: [],
			SocialSharingHeading: 'Share This',
		},
		caseStudy: {
			status: 'Internal engineering evaluation tooling',
			showCapabilityMatrix: false,
			headerFacts: ['Role', 'Status'],
			editorialCover: {
				img: aiAgentEvaluationCover,
				alt: 'Conceptual editorial illustration of AI agent evaluation with datasets, agent traces, deterministic checks, LLM-based evaluation, experiment comparison, and reproducibility; not a benchmark result or product screenshot.',
				caption:
					'Conceptual illustration — datasets, traces, metric families, experiment comparison, and reproducibility. It does not show measured benchmark results.',
			},
			overview:
				'I built a reusable evaluation platform for the question that follows any agent change: did the system improve, and where? The platform was designed to connect to a knowledge base through a small source contract, generate evaluation data from that source, run any compatible agent, and compare experiments with the same dataset and metric configuration. That made it possible to evaluate retrieval agents, tool-using agents, and multi-step workflows without coupling the runner to one implementation.',
			problem:
				'Manual testing makes it too easy to remember successful conversations and forget the awkward ones. Evaluation also becomes misleading when a dataset is built from one store while the agent searches another, or when every agent is forced into a response shape that hides retrieval and tool behavior. I needed a layer that preserved source context, normalized different agent outputs, and made the same experiment easy to repeat after a prompt, retrieval, model, or workflow change.',
			architecture: {
				summary:
					'I separated knowledge-base access, dataset preparation, agent execution, evidence capture, metric evaluation, and experiment analysis. A knowledge-base source provides bulk chunks and semantic search through one interface, so the builder can work with a local vector store or a compatible external knowledge base. Registered agents return a common output shape — answer, retrieved context, tool calls, trace, latency, and metadata — while the metric registry selects checks that match the evidence available for that experiment. Optional observability helps inspect runs; it is not the evaluation engine itself.',
				diagrams: [
					{
						title: 'Evaluation and experiment flow',
						img: evaluationFrameworkDiagram,
						alt: 'Editable conceptual architecture showing a knowledge-base source feeding dataset preparation, a registered agent adapter producing captured responses and traces, configurable metric evaluation, and comparison artifacts with optional observability. It is not a benchmark result or production monitoring diagram.',
						caption:
							'Conceptual engineering view — metric evaluation and optional observability are shown as separate responsibilities. No scores, rankings, customer prompts, or private datasets are included.',
						mobileFallback: [
							{
								title: 'Knowledge-base connection',
								description: 'A shared source interface can read chunks in bulk and perform semantic search against a local or external knowledge base.',
							},
							{
								title: 'Dataset generation',
								description: 'Single-chunk, multi-chunk, and topic-based methodologies create questions with the source context and generation method preserved as metadata.',
							},
							{
								title: 'Registered agent adapter',
								description: 'A registered agent runs against the fixed dataset and returns a normalized answer, retrieval context, actions, trace, timing, and metadata.',
							},
							{
								title: 'Evidence capture',
								description: 'Answers, retrieved context, actions, timing, runtime errors, and failure details become inspectable run evidence where the agent contract supports them.',
							},
							{
								title: 'Metric evaluation',
								description: 'Registered deterministic, reference-based, retrieval, workflow, safety, cost, latency, or model-assisted metrics are applied only when their inputs are valid.',
							},
							{
								title: 'Experiment analysis',
								description: 'Run outputs, timing, failures, per-metric statistics, and weighted summaries support comparisons without turning a single score into a universal ranking.',
							},
						],
					},
				],
				components: [
					{
						name: 'Knowledge-base source contract',
						role: 'Exposes bulk chunk retrieval and semantic search through the same interface for local vector stores or compatible external knowledge bases.',
					},
					{
						name: 'Dataset builder',
						role: 'Generates source-grounded examples with single-chunk, multi-chunk, and topic-based methodologies, including the supporting chunk identities and generation metadata.',
					},
					{
						name: 'Agent registry and adapters',
						role: 'Registers agent implementations behind a common run/configure interface, so RAG, ReAct, multi-agent, or custom agents can use the same runner.',
					},
					{
						name: 'Metric registry',
						role: 'Registers configurable metric implementations by type, threshold, weight, and the evidence fields an agent exposes.',
					},
					{
						name: 'Experiment runner',
						role: 'Runs fixed datasets, aggregates results, records errors and timing, and produces comparison-ready artifacts.',
					},
					{
						name: 'Optional Opik integration',
						role: 'Supports dataset, prompt, trace, and experiment inspection when configured; it is not presented as continuous production monitoring.',
					},
				],
			},
			implementationTitle: 'What I built',
			implementation: [
				{
					title: 'A knowledge-base boundary that stays interchangeable',
					body: 'I defined the dataset layer around a small source interface for bulk chunk retrieval and semantic search. That let the same builder use a local vector-store adapter or connect over HTTP to an external knowledge base, while keeping stable chunk identifiers and source metadata attached to each example. The practical requirement is explicit: a knowledge base must expose the fields needed for export and search; the evaluation logic itself is not tied to one vendor or storage engine.',
				},
				{
					title: 'Dataset generation through different methodologies',
					body: 'I supported three complementary ways to build evaluation data. Single-chunk generation creates focused baseline questions from one source chunk. Multi-chunk generation creates questions that require two to four chunks, grouped from the same document, adjacent sections, semantic neighbors, or precomputed clusters. Topic-based generation starts from realistic topic queries, retrieves relevant context, and asks the model to generate questions from that retrieved set. Each example keeps its supporting chunk IDs, answer context, source metadata, and generation method, so the dataset is inspectable rather than a bag of opaque prompts.',
				},
				{
					title: 'Any compatible agent can enter through the registry',
					body: 'Agents implement a common contract for running an input and reporting configuration. Registration keeps the experiment runner independent from the implementation, while the normalized output can carry the answer, retrieved IDs and text, tool calls, raw trace, latency, and metadata. The reference implementations cover deterministic RAG, tool-using ReAct, and supervisor-based multi-agent workflows; the same path can be extended with a custom agent adapter.',
				},
				{
					title: 'Metrics are registered by family and selected by contract',
					body: 'The metric registry made it possible to add and configure checks without changing the runner. The available families cover answer quality and grounding, retrieval ranking and recall, exact structured outputs, tool-call and workflow correctness, routing and escalation, safety and guardrails, runtime errors, latency, token usage, and response length. Thresholds and weights are explicit, and a metric is only meaningful when the selected agent exposes the evidence it needs.',
				},
				{
					title: 'Experiments that can be compared, not just executed',
					body: 'An experiment configuration selects the agent, dataset, metric definitions, thresholds, sample limits, and optional observability. Running the same dataset against different agent versions, prompts, retrieval strategies, or metric configurations produces JSON, CSV, and Markdown artifacts with per-example results, per-metric mean and pass-rate statistics, weighted summaries, timing, and failures. That makes it possible to compare experiments and metrics side by side without publishing private scores.',
				},
			],
			decisionsTitle: 'Engineering decisions and trade-offs',
			decisions: [
				{
					title: 'Make the knowledge-base boundary interchangeable',
					body: 'The builder should not care whether chunks come from a local vector store or an external knowledge base. A shared export-and-search contract keeps dataset creation and evaluation aligned while leaving the storage implementation replaceable.',
				},
				{
					title: 'Keep dataset methodology visible',
					body: 'Single-chunk, multi-chunk, and topic-based questions expose different failure modes. Recording the strategy, supporting chunks, source version, and retrieval context makes it possible to compare results without pretending every example measures the same behavior.',
				},
				{
					title: 'Use deterministic checks for hard contracts',
					body: 'Exact structured-output, action-trace, forbidden-action, invalid-parameter, and workflow-outcome checks are repeatable and easy to explain. They are the right tool when the contract is explicit, but they cannot judge every useful variation in a natural-language answer.',
				},
				{
					title: 'Compare metrics without hiding their assumptions',
					body: 'Reference-answer and semantic metrics help with meaning and groundedness, retrieval metrics need reliable context identities, and agent-specific metrics need traces or structured fields. I kept thresholds, weights, and metric inputs explicit so a comparison explains what was measured instead of collapsing everything into an unexplained score.',
				},
				{
					title: 'Make observability optional',
					body: 'The evaluation runner should still be useful without a live observability service. Optional tracing and experiment inspection make runs easier to investigate, but they are not a claim that every experiment was continuously monitored in production.',
				},
			],
			evidenceTitle: 'Validation and evidence',
			evidence: [
				{
					title: 'Interchangeable source and registration boundaries',
					body: 'The implementation separates knowledge-base adapters, dataset strategies, agent registration, metric registration, experiment execution, and observability. Those boundaries are testable independently and keep the runner from depending on one knowledge base or one agent architecture.',
				},
				{
					title: 'Dataset and metric evidence',
					body: 'Generated examples retain their supporting chunk identities, source metadata, strategy, and expected answer. Evaluation results retain configuration, outputs, timing, runtime failures, metric details, and comparison artifacts, which makes a failure inspectable rather than hidden behind a single average.',
				},
				{
					title: 'Experiment comparison',
					body: 'Run artifacts are structured for comparison across agent, prompt, retrieval, and metric configuration changes. I am intentionally not publishing private scores, rankings, benchmark results, or internal dataset examples.',
				},
			],
			limitations: [
				{
					title: 'Knowledge-base compatibility is explicit',
					body: 'The platform can work with different knowledge bases through the shared source contract, but a source still needs reliable bulk export, semantic search, stable chunk identities, and the metadata required by the selected metrics.',
				},
				{
					title: 'Generated datasets still need review',
					body: 'Synthetic generation improves coverage but does not remove the need for spot checks. Simple word-overlap validation is not sufficient for every multi-chunk answer, so dataset quality remains part of the evaluation design.',
				},
				{
					title: 'Metrics are contract-dependent',
					body: 'Not every agent exposes retrieved context, action traces, workflow outcomes, or reference fields. A metric should be applied only when its inputs and semantics are valid for that experiment.',
				},
				{
					title: 'Model-assisted assessment varies',
					body: 'LLM-based judges and semantic metrics introduce evaluator-model and prompt sensitivity. They complement deterministic checks; they do not remove the need for failure inspection or human judgment.',
				},
				{
					title: 'No public benchmark claim',
					body: 'The public case excludes private prompts, datasets, scores, rankings, model comparisons, and customer results. It documents the evaluation capability and design decisions rather than a headline improvement.',
				},
				{
					title: 'No continuous-monitoring claim',
					body: 'Opik integration supports optional tracing and experiment inspection; it does not by itself establish a continuously monitored production system.',
				},
			],
		},
	},
	{
		id: 21,
		title: 'Secure AI Code Execution & Workspace Isolation',
		url: 'secure-ai-code-execution-workspace-isolation',
		category: 'AI Security / Execution Boundaries',
		summary:
			'Controlled AWS Bedrock AgentCore Code Interpreter integration with a TypeScript translation layer, JWT-derived ownership, persistent EFS workspaces, verified mounts, and fail-closed artifact handling.',
		img: secureAiCodeExecutionCover,
		imageAlt:
			'Conceptual editorial illustration of secure AI code execution showing authenticated requests, a controlled runtime, verified workspace mounts, persistent artifacts, and gated results; not a production architecture diagram.',
		relatedProjectIds: [16, 20, 17, 15],
		ProjectHeader: {
			title: 'Secure AI Code Execution & Workspace Isolation',
			publishDate: '2026',
			tags: 'AI Security / Code Execution / Workspace Isolation',
		},
		ProjectInfo: {
			ClientHeading: 'Project status',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'Role',
					details: 'AI Platform Engineer',
				},
				{
					id: uuidv4(),
					title: 'Status',
					details: 'Controlled internal engineering implementation',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'Connect an AI workspace to AWS Bedrock AgentCore Code Interpreter through a TypeScript translation layer without trusting caller-supplied workspace identities or treating a shared interpreter role as a hostile-tenant security boundary.',
			Technologies: [
				{
					title: 'Engineering boundaries',
					techs: ['AWS Bedrock AgentCore Code Interpreter', 'TypeScript / Fastify CodeAPI adapter', 'JWT-derived ownership', 'Persistent EFS workspaces', 'Managed sessions', 'Filesystem safety checks', 'Infrastructure as code', 'Automated security tests'],
				},
			],
			ProjectDetailsHeading: 'Implementation boundary',
			ProjectDetails: [],
			SocialSharingHeading: 'Share This',
		},
		caseStudy: {
			status: 'Controlled implementation — broader rollout gated',
			showCapabilityMatrix: false,
			headerFacts: ['Role', 'Status'],
			editorialCover: {
				img: secureAiCodeExecutionCover,
				alt: 'Conceptual editorial illustration of secure AI code execution showing authenticated requests, a controlled runtime, verified workspace mounts, persistent artifacts, and gated results; not a production architecture diagram.',
				caption:
					'Conceptual illustration — runtime boundaries, workspace ownership, persistence, and verified outputs. It does not imply perfect isolation or completed production deployment.',
			},
			overview:
				'Adding code execution to an AI workspace sounds straightforward until the code is not trusted. I approached the problem from identity and workspace boundaries first: how do I know which user owns a session, what files that session should see, whether the intended workspace is actually mounted, and what artifacts can safely return to the application?',
			problem:
				'Code execution creates a different trust boundary from text generation. A request can be authenticated and still be routed to the wrong workspace, attached to an unexpected filesystem, or allowed to survive longer than intended. I needed the execution path to verify ownership and runtime state before allowing a managed interpreter session to work with persistent files.',
			architecture: {
				summary:
					'I separated the authenticated application from a TypeScript/Fastify CodeAPI Translator and the managed execution service. The translator verifies JWT-derived ownership, resolves the owner-bound EFS access point, checks session and mount state, and then invokes AWS Bedrock AgentCore Code Interpreter. AgentCore runs the code; EFS persists owner-scoped files; the translator owns the application-level session, filesystem, upload, download, and artifact checks. The shared interpreter resource and execution role remain an operational choice with a residual security limitation, not a complete hostile-tenant isolation boundary.',
				diagrams: [
					{
						title: 'Authenticated execution and workspace binding',
						img: secureExecutionDiagram,
						alt: 'Editable conceptual architecture showing an authenticated request with JWT-derived ownership entering a TypeScript CodeAPI Translator, followed by session and mount validation, AWS Bedrock AgentCore Code Interpreter, an owner-scoped EFS workspace, verified artifacts, and a fail-closed denial path. A note identifies the residual risk of a shared execution role.',
						caption:
							'Technical view I can share — the translator enforces application-level ownership and runtime checks before invoking AgentCore, while EFS persists files. A shared execution role is not a strong boundary against mutually hostile users who can abuse its credentials.',
						mobileFallback: [
							{
								title: 'Authenticated request',
								description: 'The application passes an authenticated request; the caller does not choose the workspace identity used for authorization.',
							},
							{
								title: 'CodeAPI Translator',
								description: 'A TypeScript/Fastify translation layer derives ownership from verified identity and prepares the AgentCore execution request at the application boundary.',
							},
							{
								title: 'Session and mount validation',
								description: 'The session is bound to the owner and the expected EFS workspace attachment is checked before code is sent to the interpreter.',
							},
							{
								title: 'AgentCore Code Interpreter and EFS',
								description: 'AWS Bedrock AgentCore Code Interpreter runs the code while an owner-scoped EFS access point provides persistence across short-lived sessions.',
							},
							{
								title: 'Verified artifacts or denial',
								description: 'File transfers and artifacts stay within the controlled boundary; unexpected sessions or mounts fail closed instead of continuing.',
							},
						],
					},
				],
				components: [
					{
						name: 'Authenticated translation/API layer',
						role: 'Receives the application request and passes verified identity context into the execution path.',
					},
					{
						name: 'TypeScript CodeAPI Translator',
						role: 'Resolves the owner and intended workspace server-side, validates the request, and invokes AgentCore instead of trusting a caller-supplied workspace identity.',
					},
					{
						name: 'AWS Bedrock AgentCore Code Interpreter',
						role: 'Runs the submitted code in managed interpreter sessions. AgentCore is the execution service; it is not the ECS-hosted translator.',
					},
					{
						name: 'Owner-scoped EFS workspace',
						role: 'Provides dynamically resolved per-owner access points for files that must persist across short-lived sessions.',
					},
					{
						name: 'Validation and artifact boundary',
						role: 'Checks session, mount, filesystem, upload, download, and artifact expectations before allowing or returning work.',
					},
				],
			},
			implementationTitle: 'What I implemented',
			implementation: [
				{
					title: 'Integrate the CodeAPI Translator with AgentCore',
					body: 'I implemented and tested a TypeScript/Fastify CodeAPI adapter for AWS Bedrock AgentCore Code Interpreter. The translator is the application-facing boundary: it verifies identity and prepares the execution request, while AgentCore is the managed service that actually runs the code.',
				},
				{
					title: 'Derive ownership from authenticated identity',
					body: 'I kept workspace ownership on the server side. The execution request does not get to nominate an arbitrary workspace identity; the CodeAPI Translator resolves the owner from verified authentication context and uses that result for the rest of the flow.',
				},
				{
					title: 'Bind sessions to workspaces',
					body: 'I treated session creation and storage attachment as one relationship to verify. Before execution, the path checks that the intended owner-scoped access point is present and that the session state matches what the application authorized.',
				},
				{
					title: 'Harden filesystem and lifecycle behavior',
					body: 'The implementation includes bounded filesystem operations, storage restrictions, session lifecycle handling, EFS access-point checks, and validation that rejects unexpected mounts or session states rather than attempting to recover silently.',
				},
				{
					title: 'Keep file and artifact handling explicit',
					body: 'Uploads, downloads, and generated artifacts remain part of the security boundary. The execution service should return only artifacts associated with the verified workspace and expected session flow.',
				},
				{
					title: 'Keep artifact previews separate from code execution',
					body: 'The Sandpack preview path is a different capability: an ECS/Fargate-hosted bundler sits behind an HTTP authorization sidecar for generated React and artifact previews. That sidecar protects preview requests; it is not the AgentCore Code Interpreter and does not provide general-purpose hostile-code sandboxing.',
				},
				{
					title: 'Prepare infrastructure and security tests',
					body: 'I worked with infrastructure-as-code preparation and automated security-oriented tests for ownership and filesystem behavior. The implementation work is documented separately from staging activation and broader user routing.',
				},
			],
			decisionsTitle: 'Engineering decisions and trade-offs',
			decisions: [
				{
					title: 'Reject caller-supplied workspace identity',
					body: 'Trusting a workspace ID in the request would make the most important authorization decision part of the user input. Deriving ownership from verified identity gives the gateway one authoritative starting point.',
				},
				{
					title: 'Separate execution from the chat application',
					body: 'A dedicated execution service makes runtime, filesystem, session, and artifact controls visible as their own boundary. It also avoids making the conversational application responsible for arbitrary interpreter lifecycle details.',
				},
				{
					title: 'Separate AgentCore execution from Sandpack previews',
					body: 'AgentCore Code Interpreter is the server-side code-execution path. Sandpack is the preview path for generated React or artifact output, protected by a separate HTTP authorization sidecar. Treating the two as the same sandbox would overstate what either boundary proves.',
				},
				{
					title: 'Persist workspaces, keep sessions ephemeral',
					body: 'Persistent owner-scoped storage supports useful files and artifacts, while managed interpreter sessions can remain short-lived. The trade-off is that the attachment and cleanup lifecycle must be verified instead of assumed.',
				},
				{
					title: 'Fail closed on unexpected runtime state',
					body: 'If the session, mount, or filesystem state does not match the authorized request, the safer behavior is to deny execution and surface a controlled failure rather than guessing which workspace was intended.',
				},
				{
					title: 'Be honest about the shared-role boundary',
					body: 'The design reduces accidental cross-owner access and incorrect routing at the application boundary. A shared interpreter resource and shared execution role are not a strong security boundary against mutually hostile users who can abuse those credentials, so I describe this as a controlled internal design rather than a hostile-tenant sandbox.',
				},
			],
			evidenceTitle: 'Validation and release boundary',
			evidence: [
				{
					title: 'Source-level implementation',
					body: 'The documented source components include the TypeScript/Fastify CodeAPI adapter for AgentCore, owner-bound EFS workspace resolution, session and mount checks, and automated tests for the ownership, filesystem, and artifact boundaries described here. The public case omits private resource names, policies, paths, credentials, and topology.',
				},
				{
					title: 'Security-oriented test coverage',
					body: 'I exercised the cases that matter when identity and runtime state disagree: incorrect ownership, unexpected filesystem access, invalid mounts, and unsafe session conditions should be rejected rather than allowed to drift into execution.',
				},
				{
					title: 'Rollout status',
					body: 'The source-level components and automated tests were reported complete, and the infrastructure configuration was reviewed. The handover did not confirm complete staging activation, full end-to-end rollout, or production deployment of the multi-owner architecture.',
				},
			],
			limitations: [
				{
					title: 'AgentCore, translator, and storage are separate components',
					body: 'AgentCore Code Interpreter runs code, the translator mediates application requests, and EFS persists workspaces. ECS/Fargate hosts the translator; it is not accurate to describe AgentCore itself as an ECS service or to treat EFS as the execution sandbox.',
				},
				{
					title: 'Sandpack is an artifact-preview boundary',
					body: 'The Sandpack bundler and HTTP authorization sidecar support generated artifact previews. They are not the same implementation as AgentCore Code Interpreter and are not presented as a general-purpose hostile-code sandbox.',
				},
				{
					title: 'Not a hostile-tenant isolation claim',
					body: 'A shared managed interpreter resource and associated shared execution role can still expose residual risk to mutually hostile users who can abuse those credentials. Application-level ownership checks reduce routing mistakes; they do not remove that threat model.',
				},
				{
					title: 'Controlled internal scope',
					body: 'The selected architecture was designed for a controlled internal environment. I do not describe it as unrestricted secure execution, a zero-trust sandbox, or a production-grade multitenancy guarantee.',
				},
				{
					title: 'Activation remained gated',
					body: 'Implementation and tests are not the same as a completed rollout. Broader routing, staging activation, acceptance, and production deployment required separate operational gates that were not confirmed in the available handover context.',
				},
				{
					title: 'Private infrastructure details stay private',
					body: 'The published case intentionally excludes IAM policies, resource identifiers, filesystem paths, endpoints, account structure, credentials, and proprietary threat-model details.',
				},
			],
		},
	},
	{
		id: 22,
		title: 'Industrial Machine Vision — Course & Practical Labs',
		url: 'industrial-machine-vision-course',
		category: 'Computer Vision / Engineering Education',
		summary:
			'Collaborative public course covering image processing, industrial imaging systems, machine learning, and practical machine-vision labs.',
		img: machineVisionCourseMorphology,
		imageAlt: 'Authentic machine-vision course lab image showing a morphology exercise on industrial objects.',
		relatedProjectIds: [10, 3, 13],
		ProjectHeader: {
			title: 'Industrial Machine Vision — Course & Practical Labs',
			publishDate: 'Public course repository',
			tags: 'Computer Vision / Industrial Systems / Education',
		},
		ProjectInfo: {
			ClientHeading: 'About Project',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'Role',
					details: 'Co-designer and instructor',
				},
				{
					id: uuidv4(),
					title: 'Status',
					details: 'Public collaborative course materials',
				},
				{
					id: uuidv4(),
					title: 'Scope',
					details: 'Image processing, vision systems, and industrial integration',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'Co-designed and delivered a practical course that connects image-processing fundamentals with the physical and software constraints of industrial machine vision. The public repository includes modules, notebooks, slides, labs, and a final-project structure; the teaching work was collaborative rather than exclusively authored by one person.',
			Technologies: [
				{
					title: 'Course topics',
					techs: [
						'Python',
						'OpenCV',
						'PyTorch',
						'Image processing',
						'Optics and cameras',
						'Industrial lighting',
						'Thermography',
						'3D and smart cameras',
						'Industrial communications',
						'CNNs and deep learning',
					],
				},
			],
			ProjectDetailsHeading: 'Course modules',
			ProjectDetails: [
				{
					id: uuidv4(),
					details: 'Digital image processing: pixels, RGB and bit depth, filtering, edges, brightness and contrast, histograms, binarization, morphology, connected components, and shape or texture features.',
				},
				{
					id: uuidv4(),
					details: 'Dimensioning systems: cameras, lenses, optics, field of view, resolution, depth of field, lighting, polarization, filters, thermography, optical gas imaging, 3D, hyperspectral and multispectral approaches.',
				},
				{
					id: uuidv4(),
					details: 'Industrial integration: PC and smart cameras, FPGA and memory considerations, Ethernet/TCP/IP/PROFINET, and practical machine-vision communication exercises.',
				},
				{
					id: uuidv4(),
					details: 'Machine and deep learning: feature-based classification, dataset construction, classical ML, neural networks, PyTorch, CNNs, evaluation, labs, and a final project.',
				},
			],
			SocialSharingHeading: 'Share This',
		},
		caseStudy: {
			showCapabilityMatrix: false,
			headerFacts: ['Role', 'Status'],
			overview:
				'I co-designed and delivered a public industrial machine-vision course with practical material that moves from pixels and image operators to cameras, optics, lighting, factory communication, and learned models. The repository is a collaborative teaching artifact: its value is the learning path and hands-on material, not an individual authorship claim.',
			problem:
				'Machine vision is often taught as either image processing or model training, while real systems require both technical layers plus physical imaging and industrial integration. The course connects those layers so a learner can understand why field of view, lens choice, illumination, calibration, feature design, dataset construction, and communication all affect the final inspection behavior.',
			architecture: {
				summary:
					'The learning path starts with digital images and deterministic operators, then introduces physical imaging systems, specialized sensors and lighting, industrial communication, and machine/deep learning. Labs and a final project connect each concept to an applied workflow.',
				workflow: {
					title: 'A learning path from pixels to inspection systems',
					summary: 'Each stage adds a new engineering constraint while keeping the previous layer visible.',
					steps: [
						{
							title: 'Represent and transform the image',
							mode: 'Controlled input',
							type: 'controlled',
							description: 'Work with pixel matrices, color, bit depth, filtering, histograms, thresholding, edges, and morphology before choosing a model.',
						},
						{
							title: 'Measure and extract structure',
							mode: 'Automated checks',
							type: 'automated',
							description: 'Use connected components, contours, geometric measurements, texture, moments, and fitted curves to describe objects and defects.',
						},
						{
							title: 'Design the physical imaging system',
							mode: 'Controlled input',
							type: 'controlled',
						description: 'Relate cameras, lenses, field of view, resolution, depth of field, lighting, polarization, filters, thermography, and 3D or smart-camera options to the inspection requirement.',
						},
						{
							title: 'Connect the inspection to industry',
							mode: 'Captured evidence',
							type: 'captured',
							description: 'Explore industrial computers, camera platforms, Ethernet/TCP/IP/PROFINET, and practical communication or acquisition labs.',
						},
						{
							title: 'Build and evaluate learned models',
							mode: 'Automated checks',
							type: 'automated',
							description: 'Construct datasets, introduce classical ML and neural networks, use PyTorch and CNNs, and consolidate the work in a final project.',
						},
					],
				},
				components: [
					{
						name: 'Image-processing foundations',
						role: 'Filtering, histograms, thresholding, morphology, features, and measurements provide a deterministic vocabulary for visual evidence.',
					},
					{
						name: 'Optics and acquisition',
						role: 'Cameras, lenses, field of view, resolution, depth of field, and lighting connect the physical scene to pixels.',
					},
					{
						name: 'Industrial imaging',
						role: 'Thermography, optical gas imaging, 3D, smart cameras, and communication labs show how specialized systems fit production constraints.',
					},
					{
						name: 'Machine and deep learning',
						role: 'Dataset construction, classical ML, PyTorch, neural networks, CNNs, and evaluation extend the toolkit when explicit rules are insufficient.',
					},
				],
			},
			gallery: [
				{
					title: 'Morphology lab material',
					img: machineVisionCourseMorphology,
					alt: 'Authentic course lab image showing a grayscale morphology exercise with beans and peas.',
					caption: 'Authentic image from the public course repository, used here to illustrate morphological operations.',
				},
				{
					title: 'Alignment lab',
					img: machineVisionCourseAlignment,
					alt: 'Authentic course lab plate showing a sequence of images for an industrial vision alignment exercise.',
					caption: 'Authentic practical lab material from the public repository.',
				},
				{
					title: 'Structuring elements',
					img: machineVisionCourseStructuringElements,
					alt: 'Authentic course diagram illustrating structuring elements used in mathematical morphology.',
					caption: 'Authentic course diagram used to explain how morphology changes image structure.',
				},
			],
			implementationTitle: 'What the public material covers',
			implementation: [
				{
					title: 'Digital image processing',
					body: 'The first module builds from pixel representation and basic transformations through filtering, histograms, thresholding, morphology, connected components, and feature extraction such as size, curvature, circularity, perimeter, bounding boxes, centroids, texture, and moments.',
				},
				{
					title: 'Physical vision-system design',
					body: 'The material treats cameras, CCD/CMOS sensors, lenses, field of view, resolution, depth of field, illumination, polarization, filters, thermography, optical gas imaging, 3D, hyperspectral, multispectral, and stereo methods as system-design choices.',
				},
				{
					title: 'Practical industrial labs',
					body: 'The repository includes practical material around visible-camera and illumination setups, thermography, Gocator 3D work, Cognex smart-camera work, and industrial communication concepts.',
				},
				{
					title: 'Applied machine learning',
					body: 'Dataset construction, feature-based prediction and classification, basic ML, neural networks, PyTorch notebooks, CNNs, evaluation, and a final project complete the path.',
				},
			],
			decisionsTitle: 'Teaching and attribution boundaries',
			decisions: [
				{
					title: 'Teach the system, not only the model',
					body: 'The course keeps physical image formation, deterministic processing, industrial communication, and learned inference in one progression so the model is understood as one component of a larger system.',
				},
				{
					title: 'Preserve collaborative authorship',
					body: 'I describe the course as co-designed and collaboratively delivered. The public repository is linked as the source of the modules, notebooks, slides, and labs rather than presented as an exclusively authored work.',
				},
			],
			evidenceTitle: 'Public course evidence',
			evidence: [
				{
					title: 'Repository structure',
					body: 'The public repository contains README-described modules, notebooks, slide material, practical labs, and a final-project structure covering image processing, industrial vision, and machine learning.',
				},
				{
					title: 'Authentic visual material',
					body: 'The gallery uses selected images copied from the public course repository. They are learning material, not portfolio-generated illustrations or evidence of a specific production installation.',
				},
			],
			limitations: [
				{
					title: 'Collaborative course artifact',
					body: 'The case does not claim exclusive authorship, student counts, completion rates, or learning outcomes that are not documented in the public source.',
				},
				{
					title: 'Educational examples are not production guarantees',
					body: 'The labs and examples teach transferable concepts. They do not by themselves establish a production-ready inspection system, sensor specification, or industrial performance result.',
				},
			],
			links: [
				{
					label: 'Public course repository',
					href: 'https://github.com/DavidNavarroSaiz/MachineVision-in-the-industry-Course',
				},
			],
		},
	},
];

// Curated presentation order is intentionally separate from canonical IDs and routes.
export const featuredProjectIds = [17, 15, 16, 19, 1, 10];

export const featuredProjects = featuredProjectIds
	.map((id) => projectsData.find((project) => project.id === id))
	.filter(Boolean);

export const orderedProjects = [
	...featuredProjectIds,
	...projectsData
		.map((project) => project.id)
		.filter((id) => !featuredProjectIds.includes(id)),
].map((id) => projectsData.find((project) => project.id === id)).filter(Boolean);
