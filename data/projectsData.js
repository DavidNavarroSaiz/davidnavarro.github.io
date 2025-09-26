import { v4 as uuidv4 } from 'uuid';
import {
	FiFacebook,
	FiInstagram,
	FiLinkedin,
	FiTwitter,
	FiYoutube,
} from 'react-icons/fi';

export const projectsData = [
	{
		id: 1,
		title: 'Azure DevOps PM Agent',
		url: 'azure-devops-pm-agent',
		category: 'AI/ML Application',
		img: '/images/web-project-2.jpg',
		ProjectHeader: {
			title: 'Azure DevOps PM Agent',
			publishDate: 'Feb 2025',
			tags: 'AI / ML / Automation',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Azure DevOps PM Agent',
				img: '/images/ui-project-1.jpg',
			},
			{
				id: uuidv4(),
				title: 'Azure DevOps PM Agent',
				img: '/images/web-project-2.jpg',
			},
			{
				id: uuidv4(),
				title: 'Azure DevOps PM Agent',
				img: '/images/mobile-project-2.jpg',
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Project',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'Company',
					details: 'Kmeleon',
				},
				{
					id: uuidv4(),
					title: 'Role',
					details: 'Generative AI Engineer',
				},
				{
					id: uuidv4(),
					title: 'Duration',
					details: 'Feb 2025 – Aug 2025',
				},
				{
					id: uuidv4(),
					title: 'Technologies',
					details: 'LangChain, AutoGen, FastAPI, Azure OpenAI',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'Designed and deployed a modular multi-agent conversational system using AutoGen and LangChain to support memory, tool usage, and collaborative task execution, enhancing user engagement and task throughput.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'LangChain',
						'AutoGen',
						'FastAPI',
						'Azure OpenAI',
						'PGVector',
						'ADO APIs',
						'Azure Bicep',
						'MLflow',
						'Application Insights',
					],
				},
			],
			ProjectDetailsHeading: 'Key Achievements',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						'Built a PM Agent for Azure DevOps that answers status queries, suggests next actions, executes updates, and preserves traceability using LangChain, AutoGen, FastAPI, Azure OpenAI, PGVector, and ADO APIs.',
				},
				{
					id: uuidv4(),
					details:
						'Improved task throughput and user satisfaction while reducing context switching through intelligent automation.',
				},
				{
					id: uuidv4(),
					details:
						'Established LLMOps best practices and architected a scalable, auditable Azure AI platform with MLflow for monitoring and Application Insights for centralized logging.',
				},
				{
					id: uuidv4(),
					details:
						'Implemented human-in-the-loop approval steps and decision traceability for multi-agent workflows, aligning solutions with enterprise governance and audit requirements.',
				},
			],
			SocialSharingHeading: 'Share This',
		},
	},
	{
		id: 2,
		title: 'Production RAG Platform',
		url: 'production-rag-platform',
		category: 'AI/ML Application',
		img: '/images/mobile-project-2.jpg',
		ProjectHeader: {
			title: 'Production RAG Platform',
			publishDate: 'Apr 2024',
			tags: 'AI / ML / RAG',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Production RAG Platform',
				img: '/images/ui-project-1.jpg',
			},
			{
				id: uuidv4(),
				title: 'Production RAG Platform',
				img: '/images/web-project-2.jpg',
			},
			{
				id: uuidv4(),
				title: 'Production RAG Platform',
				img: '/images/mobile-project-2.jpg',
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Project',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'Company',
					details: 'Southdesk',
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
					details: 'LangChain, PGVector, FastAPI',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'Developed a production RAG platform for chatbots and automations using LangChain, PGVector, and FastAPI with an evaluation harness and CI/CD, cutting release cycles by ~40% and accelerating feature rollout.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'LangChain',
						'PGVector',
						'FastAPI',
						'Qdrant',
						'Azure Pipelines',
						'CI/CD',
						'Python',
						'Docker',
					],
				},
			],
			ProjectDetailsHeading: 'Key Achievements',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						'Designed and deployed RAG systems integrating Qdrant vector DB, LLM-based enrichment, and FastAPI services, applying Azure Pipelines CI/CD to cut feature deployment time by 40%.',
				},
				{
					id: uuidv4(),
					details:
						'Built no-code automations using Make.com, Zapier, and GoHighLevel to classify/reroute leads, auto-update dashboards, and reduce manual operations, raising lead conversion by 2%.',
				},
				{
					id: uuidv4(),
					details:
						'Designed AI-powered workflows for property reporting, meeting summarization, and document generation with OpenAI, automating most steps so operators only review/edit final outputs.',
				},
				{
					id: uuidv4(),
					details:
						'Developed scalable lead-gen pipelines using Selenium, Apify, Apollo, and n8n to scrape job posts, extract firmographics/problem signals via LLM, and trigger Smartlead email campaigns.',
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
		img: '/images/ui-project-1.jpg',
		ProjectHeader: {
			title: 'COVID-Rx Diagnosis System',
			publishDate: 'Dec 2020',
			tags: 'Computer Vision / Healthcare',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'COVID-Rx Diagnosis System',
				img: '/images/ui-project-1.jpg',
			},
			{
				id: uuidv4(),
				title: 'COVID-Rx Diagnosis System',
				img: '/images/web-project-2.jpg',
			},
			{
				id: uuidv4(),
				title: 'COVID-Rx Diagnosis System',
				img: '/images/mobile-project-2.jpg',
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
				'Curated a 36k+ chest X-ray dataset and trained multi-class PyTorch CNNs for COVID-19, viral pneumonia, bacterial pneumonia, and normal classification, achieving 96% accuracy.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'PyTorch',
						'Python',
						'OpenCV',
						'PyQt',
						'Flask',
						'VGG19',
						'DenseNet',
						'MobileNet',
						'ResNet',
						'EfficientNet',
					],
				},
			],
			ProjectDetailsHeading: 'Key Achievements',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						'Curated a 36k+ chest X-ray dataset (Kaggle/GitHub), enforcing patient-level splits and QA to avoid leakage.',
				},
				{
					id: uuidv4(),
					details:
						'Trained and benchmarked multi-class PyTorch CNNs: VGG19, DenseNet, MobileNet, AlexNet, EfficientNet, InceptionV3, ResNet, RexNet, Inception-ResNet, Xception.',
				},
				{
					id: uuidv4(),
					details:
						'Selected the best trade-off for deployment and achieved 96% accuracy with model ensemble picker that improved accuracy vs. single-model selections.',
				},
				{
					id: uuidv4(),
					details:
						'Built clinician-facing apps: a PyQt desktop app and a Flask web app for remote diagnosis with heatmap/attention overlays to support explainability.',
				},
			],
			SocialSharingHeading: 'Share This',
		},
	},
	{
		id: 4,
		title: 'AbogacIA - AI Legal Platform',
		url: 'abogacia-ai-legal-platform',
		category: 'AI/ML Application',
		img: '/images/ui-project-2.jpg',
		ProjectHeader: {
			title: 'AbogacIA - AI Legal Platform',
			publishDate: '2024',
			tags: 'AI / Legal Tech / RAG',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'AbogacIA - AI Legal Platform',
				img: '/images/ui-project-1.jpg',
			},
			{
				id: uuidv4(),
				title: 'AbogacIA - AI Legal Platform',
				img: '/images/web-project-2.jpg',
			},
			{
				id: uuidv4(),
				title: 'AbogacIA - AI Legal Platform',
				img: '/images/mobile-project-2.jpg',
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Project',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'Type',
					details: 'Personal Project',
				},
				{
					id: uuidv4(),
					title: 'Domain',
					details: 'Legal Technology',
				},
				{
					id: uuidv4(),
					title: 'Status',
					details: 'In Development',
				},
				{
					id: uuidv4(),
					title: 'Technologies',
					details: 'PGVector, Neo4J, LangChain',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'Designed an AI platform for lawyers to accelerate research and drafting with case similarity recommendations, statute extraction, and RAG chatbot capabilities.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'PGVector',
						'Neo4J',
						'LangChain',
						'Python',
						'FastAPI',
						'React',
						'Embeddings',
						'Knowledge Graphs',
					],
				},
			],
			ProjectDetailsHeading: 'Key Features',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						'Case similarity recommendations using embeddings, vector database (PGVector, Qdrant), and Knowledge graphs (Neo4J) to surface relevant precedents.',
				},
				{
					id: uuidv4(),
					details:
						'LLM-based statute extraction that identifies codes, articles, and constitutional references and builds a "law tree" for traceability.',
				},
				{
					id: uuidv4(),
					details:
						'RAG chatbot over case documents, similar cases, and the law tree to guide next steps and assist document creation/editing.',
				},
				{
					id: uuidv4(),
					details:
						'Advanced legal document processing and analysis capabilities to help lawyers find relevant information faster and more accurately.',
				},
			],
			SocialSharingHeading: 'Share This',
		},
	},
	{
		id: 5,
		title: 'Fast Trading Algorithm',
		url: 'fast-trading-algorithm',
		category: 'FinTech Application',
		img: '/images/mobile-project-1.jpg',
		ProjectHeader: {
			title: 'Fast Trading Algorithm',
			publishDate: '2024',
			tags: 'FinTech / Algorithmic Trading',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Fast Trading Algorithm',
				img: '/images/ui-project-1.jpg',
			},
			{
				id: uuidv4(),
				title: 'Fast Trading Algorithm',
				img: '/images/web-project-2.jpg',
			},
			{
				id: uuidv4(),
				title: 'Fast Trading Algorithm',
				img: '/images/mobile-project-2.jpg',
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Project',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'Type',
					details: 'Personal Project',
				},
				{
					id: uuidv4(),
					title: 'Domain',
					details: 'Algorithmic Trading',
				},
				{
					id: uuidv4(),
					title: 'Status',
					details: 'Active Development',
				},
				{
					id: uuidv4(),
					title: 'Framework',
					details: 'Freqtrade',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'Built an automated trading system with Freqtrade (Python) using exchange APIs/ccxt. Implemented statistical signals, risk management, backtesting, and hyperparameter optimization.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'Python',
						'Freqtrade',
						'ccxt',
						'Hyperopt',
						'Pandas',
						'NumPy',
						'Exchange APIs',
						'Statistical Analysis',
					],
				},
			],
			ProjectDetailsHeading: 'Key Features',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						'Implemented statistical signals including moving averages, RSI, and Bollinger Bands for market analysis and trading decisions.',
				},
				{
					id: uuidv4(),
					details:
						'Built comprehensive risk management system with position sizing, stop-loss (SL), and take-profit (TP) mechanisms.',
				},
				{
					id: uuidv4(),
					details:
						'Developed backtesting framework and hyperparameter optimization using Hyperopt to improve strategy performance.',
				},
				{
					id: uuidv4(),
					details:
						'Implemented dry-run and live trading modes to safely test strategies before deploying real capital.',
				},
			],
			SocialSharingHeading: 'Share This',
		},
	},
	{
		id: 6,
		title: 'Industrial Computer Vision Systems',
		url: 'industrial-computer-vision',
		category: 'Computer Vision',
		img: '/images/web-project-1.jpg',
		ProjectHeader: {
			title: 'Industrial Computer Vision Systems',
			publishDate: 'May 2019',
			tags: 'Computer Vision / Industrial Automation',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Industrial Computer Vision Systems',
				img: '/images/ui-project-1.jpg',
			},
			{
				id: uuidv4(),
				title: 'Industrial Computer Vision Systems',
				img: '/images/web-project-2.jpg',
			},
			{
				id: uuidv4(),
				title: 'Industrial Computer Vision Systems',
				img: '/images/mobile-project-2.jpg',
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
				'Led a 10-engineer team to deliver end-to-end computer vision systems, covering requirements, optical/sensor design, model development, and edge deployment for industrial automation.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
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
	},
];
