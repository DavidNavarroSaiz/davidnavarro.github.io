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
		title: 'PM AI Agent',
		url: 'pm-ai-agent',
		category: 'LLMs and RAG',
		img: '/images/pm-1.png',
		ProjectHeader: {
			title: 'PM AI Agent',
			publishDate: 'Feb 2025',
			tags: 'AI / Project Management / Teams Integration',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'PM AI Agent',
				img: '/images/pm-2.png',
			},
			{
				id: uuidv4(),
				title: 'PM AI Agent',
				img: '/images/pm-1.png',
			},
			{
				id: uuidv4(),
				title: 'PM AI Agent',
				img: '/images/pm-3.png',
			},
		],
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
	},
	{
		id: 2,
		title: 'Candidate Recommendation System',
		url: 'candidate-recommendation-system',
		category: 'LLMs and RAG',
		img: '/images/rg-1.png',
		ProjectHeader: {
			title: 'Candidate Recommendation System',
			publishDate: 'Apr 2024',
			tags: 'AI / RAG / HR Tech',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Candidate Recommendation System',
				img: '/images/rg-1.png',
			},
			{
				id: uuidv4(),
				title: 'Candidate Recommendation System',
				img: '/images/rg-2.png',
			},
			{
				id: uuidv4(),
				title: 'Candidate Recommendation System',
				img: '/images/rg-3.png',
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
		img: '/images/cov-3.png',
		ProjectHeader: {
			title: 'COVID-Rx Diagnosis System',
			publishDate: 'Dec 2020',
			tags: 'Computer Vision / Healthcare',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'COVID-Rx Diagnosis System',
				img: '/images/cov-3.png',
			},
			{
				id: uuidv4(),
				title: 'COVID-Rx Diagnosis System',
				img: '/images/cov-4.png',
			},
			{
				id: uuidv4(),
				title: 'COVID-Rx Diagnosis System',
				img: '/images/cov-1.jpeg',
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
	},
	{
		id: 4,
		title: 'AbogacIA - AI Legal Platform',
		url: 'abogacia-ai-legal-platform',
		category: 'LLMs and RAG',
		img: '/images/abo-1.png',
		ProjectHeader: {
			title: 'AbogacIA - AI Legal Platform',
			publishDate: '2024',
			tags: 'AI / Legal Tech / RAG',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'AbogacIA - AI Legal Platform',
				img: '/images/abo-1.png',
			},
			{
				id: uuidv4(),
				title: 'AbogacIA - AI Legal Platform',
				img: '/images/abo-2.png',
			},
			{
				id: uuidv4(),
				title: 'AbogacIA - AI Legal Platform',
				img: '/images/abo-3.png',
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
	},
	{
		id: 5,
		title: 'Automatic Lead Management',
		url: 'automatic-lead-management',
		category: 'AI Automation',
		img: '/images/lead-3.png',
		ProjectHeader: {
			title: 'Automatic Lead Management',
			publishDate: '2024',
			tags: 'AI / Lead Generation / CRM Integration',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Automatic Lead Management',
				img: '/images/lead-3.png',
			},
			{
				id: uuidv4(),
				title: 'Automatic Lead Management',
				img: '/images/lead-1.png',
			},
			{
				id: uuidv4(),
				title: 'Automatic Lead Management',
				img: '/images/lead-2.png',
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
			img: '/images/make-2.png',
			ProjectHeader: {
				title: 'AI-Generated Monthly Reports',
				publishDate: '2024',
				tags: 'AI / Automation / Report Generation',
			},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'AI-Generated Monthly Reports',
				img: '/images/make-2.png',
			},
			{
				id: uuidv4(),
				title: 'AI-Generated Monthly Reports',
				img: '/images/make-22.png',
			},
			{
				id: uuidv4(),
				title: 'AI-Generated Monthly Reports',
				img: '/images/ai-1.png',
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
			img: '/images/make-1.png',
			ProjectHeader: {
				title: 'n8n Lead Generation System',
				publishDate: '2024',
				tags: 'n8n / Lead Generation / Cold Email / Automation',
			},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'n8n Lead Generation System',
				img: '/images/make-1.png',
			},
			{
				id: uuidv4(),
				title: 'n8n Lead Generation System',
				img: '/images/make-10.png',
			},
			{
				id: uuidv4(),
				title: 'n8n Lead Generation System',
				img: '/images/ai-1.png',
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
			img: '/images/health_1.png',
			ProjectHeader: {
				title: 'Healthcare Resource Recommender System',
				publishDate: 'June 2023',
				tags: 'AI / RAG / Recommender System / Healthcare',
			},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Healthcare Resource Recommender System',
				img: '/images/health_2.png',
			},
			{
				id: uuidv4(),
				title: 'Healthcare Resource Recommender System',
				img: '/images/health_3.png',
			},
			{
				id: uuidv4(),
				title: 'Healthcare Resource Recommender System',
				img: '/images/health_1.png',
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
		img: '/images/speech_1.png',
		ProjectHeader: {
			title: 'Community Health Workers Platform',
			publishDate: 'June 2023',
			tags: 'AI / Speech Recognition / Healthcare / Automation',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Community Health Workers Platform',
				img: '/images/speech_2.png',
			},
			{
				id: uuidv4(),
				title: 'Community Health Workers Platform',
				img: '/images/speech_1.png',
			},
			{
				id: uuidv4(),
				title: 'Community Health Workers Platform',
				img: '/images/speech_3.png',
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
		category: 'Computer Vision',
		img: '/images/int_4.jpg',
		ProjectHeader: {
			title: 'Industrial Computer Vision Systems',
			publishDate: 'May 2019',
			tags: 'Computer Vision / Industrial Automation',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Industrial Computer Vision Systems',
				img: '/images/int_2.jpg',
			},
			{
				id: uuidv4(),
				title: 'Industrial Computer Vision Systems',
				img: '/images/int_4.jpg',
			},
			{
				id: uuidv4(),
				title: 'Industrial Computer Vision Systems',
				img: '/images/int_1.jpg',
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
