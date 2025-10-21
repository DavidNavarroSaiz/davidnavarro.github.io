import { v4 as uuidv4 } from 'uuid';
import {
	FiFacebook,
	FiInstagram,
	FiLinkedin,
	FiTwitter,
	FiYoutube,
} from 'react-icons/fi';

// Import all project images
import pm1 from '../public/images/pm-1.png';
import pm2 from '../public/images/pm-2.png';
import pm3 from '../public/images/pm-3.png';
import rg1 from '../public/images/rg-1.png';
import rg2 from '../public/images/rg-2.png';
import rg3 from '../public/images/rg-3.png';
import cov1 from '../public/images/cov-1.jpeg';
import cov3 from '../public/images/cov-3.png';
import cov4 from '../public/images/cov-4.png';
import abo1 from '../public/images/abo-1.png';
import abo2 from '../public/images/abo-2.png';
import abo3 from '../public/images/abo-3.png';
import lead1 from '../public/images/lead-1.png';
import lead2 from '../public/images/lead-2.png';
import lead3 from '../public/images/lead-3.png';
import make1 from '../public/images/make-1.png';
import make2 from '../public/images/make-2.png';
import make10 from '../public/images/make-10.png';
import make22 from '../public/images/make-22.png';
import ai1 from '../public/images/ai-1.png';
import health1 from '../public/images/health_1.png';
import health2 from '../public/images/health_2.png';
import health3 from '../public/images/health_3.png';
import speech1 from '../public/images/speech_1.png';
import speech2 from '../public/images/speech_2.png';
import speech3 from '../public/images/speech_3.png';
import int1 from '../public/images/int_1.png';
import int2 from '../public/images/int_2.png';
import int4 from '../public/images/int_4.png';
// Realtime Voice Agent Server images (using AI-related placeholders)
import realtime1 from '../public/images/voice-1.png';
import realtime2 from '../public/images/voice-2.png';
import realtime3 from '../public/images/voice-3.png';

import mcp1 from '../public/images/mcp-1.png';
import mcp2 from '../public/images/mcp-2.png';
import mcp3 from '../public/images/mcp-3.png';

import cctv1 from '../public/images/cctv-3.png';
import cctv2 from '../public/images/cctv-2.png';
import cctv3 from '../public/images/cctv-1.png';

import marker1 from '../public/images/marker-1.png';
import marker2 from '../public/images/marker-2.png';
import marker3 from '../public/images/marker-3.png';

export const projectsData = [
	{
		id: 1,
		title: 'PM AI Agent',
		url: 'pm-ai-agent',
		category: 'LLMs and RAG',
		img: pm1,
		ProjectHeader: {
			title: 'PM AI Agent',
			publishDate: 'Feb 2025',
			tags: 'AI / Project Management / Teams Integration',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'PM AI Agent',
				img: pm2,
			},
			{
				id: uuidv4(),
				title: 'PM AI Agent',
				img: pm1,
			},
			{
				id: uuidv4(),
				title: 'PM AI Agent',
				img: pm3,
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
		img: rg1,
		ProjectHeader: {
			title: 'Candidate Recommendation System',
			publishDate: 'Apr 2024',
			tags: 'AI / RAG / HR Tech',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Candidate Recommendation System',
				img: rg1,
			},
			{
				id: uuidv4(),
				title: 'Candidate Recommendation System',
				img: rg2,
			},
			{
				id: uuidv4(),
				title: 'Candidate Recommendation System',
				img: rg3,
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
		img: cov3,
		ProjectHeader: {
			title: 'COVID-Rx Diagnosis System',
			publishDate: 'Dec 2020',
			tags: 'Computer Vision / Healthcare',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'COVID-Rx Diagnosis System',
				img: cov3,
			},
			{
				id: uuidv4(),
				title: 'COVID-Rx Diagnosis System',
				img: cov4,
			},
			{
				id: uuidv4(),
				title: 'COVID-Rx Diagnosis System',
				img: cov1,
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
		img: abo1,
		ProjectHeader: {
			title: 'AbogacIA - AI Legal Platform',
			publishDate: '2024',
			tags: 'AI / Legal Tech / RAG',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'AbogacIA - AI Legal Platform',
				img: abo1,
			},
			{
				id: uuidv4(),
				title: 'AbogacIA - AI Legal Platform',
				img: abo2,
			},
			{
				id: uuidv4(),
				title: 'AbogacIA - AI Legal Platform',
				img: abo3,
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
		img: lead3,
		ProjectHeader: {
			title: 'Automatic Lead Management',
			publishDate: '2024',
			tags: 'AI / Lead Generation / CRM Integration',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Automatic Lead Management',
				img: lead3,
			},
			{
				id: uuidv4(),
				title: 'Automatic Lead Management',
				img: lead1,
			},
			{
				id: uuidv4(),
				title: 'Automatic Lead Management',
				img: lead2,
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
			img: make2,
			ProjectHeader: {
				title: 'AI-Generated Monthly Reports',
				publishDate: '2024',
				tags: 'AI / Automation / Report Generation',
			},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'AI-Generated Monthly Reports',
				img: make2,
			},
			{
				id: uuidv4(),
				title: 'AI-Generated Monthly Reports',
				img: make22,
			},
			{
				id: uuidv4(),
				title: 'AI-Generated Monthly Reports',
				img: ai1,
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
			img: make1,
			ProjectHeader: {
				title: 'n8n Lead Generation System',
				publishDate: '2024',
				tags: 'n8n / Lead Generation / Cold Email / Automation',
			},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'n8n Lead Generation System',
				img: make1,
			},
			{
				id: uuidv4(),
				title: 'n8n Lead Generation System',
				img: make10,
			},
			{
				id: uuidv4(),
				title: 'n8n Lead Generation System',
				img: ai1,
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
			img: health1,
			ProjectHeader: {
				title: 'Healthcare Resource Recommender System',
				publishDate: 'June 2023',
				tags: 'AI / RAG / Recommender System / Healthcare',
			},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Healthcare Resource Recommender System',
				img: health2,
			},
			{
				id: uuidv4(),
				title: 'Healthcare Resource Recommender System',
				img: health3,
			},
			{
				id: uuidv4(),
				title: 'Healthcare Resource Recommender System',
				img: health1,
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
		img: speech1,
		ProjectHeader: {
			title: 'Community Health Workers Platform',
			publishDate: 'June 2023',
			tags: 'AI / Speech Recognition / Healthcare / Automation',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Community Health Workers Platform',
				img: speech2,
			},
			{
				id: uuidv4(),
				title: 'Community Health Workers Platform',
				img: speech1,
			},
			{
				id: uuidv4(),
				title: 'Community Health Workers Platform',
				img: speech3,
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
		img: int4,
		ProjectHeader: {
			title: 'Industrial Computer Vision Systems',
			publishDate: 'May 2019',
			tags: 'Computer Vision / Industrial Automation',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Industrial Computer Vision Systems',
				img: int2,
			},
			{
				id: uuidv4(),
				title: 'Industrial Computer Vision Systems',
				img: int4,
			},
			{
				id: uuidv4(),
				title: 'Industrial Computer Vision Systems',
				img: int1,
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
	{
		id: 11,
		title: 'RealTime Voice Agent',
		url: 'realtime-voice-agent',
		category: 'LLMs and RAG',
		img: realtime1,
		ProjectHeader: {
			title: 'RealTime Voice Agent',
			publishDate: 'Mar 2025',
			tags: 'AI / Realtime Voice / FastAPI',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Realtime Audio Streaming',
				img: realtime1,
			},
			{
				id: uuidv4(),
				title: 'Real time Server Architecture',
				img: realtime2,
			},
			{
				id: uuidv4(),
				title: 'WebSocket Voice Pipeline',
				img: realtime3,
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
		img: mcp1,
		ProjectHeader: {
			title: 'MCP Azure DevOps Server',
			publishDate: 'Mar 2025',
			tags: 'Model Context Protocol / Azure DevOps / FastAPI',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'MCP Azure DevOps Server',
				img: mcp1,
			},
			{
				id: uuidv4(),
				title: 'Architecture Flow Diagram',
				img: mcp2,
			},
			{
				id: uuidv4(),
				title: 'MCP Client Interaction',
				img: mcp3,
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
		img: cctv1,
		ProjectHeader: {
			title: 'CCTV Safety Detection',
			publishDate: 'Nov 2024',
			tags: 'YOLO / PPE Detection / On-Prem GPU',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Safety Dashboard',
				img: cctv1,
			},
			{
				id: uuidv4(),
				title: 'YOLO Inference Pipeline',
				img: cctv2,
			},
			{
				id: uuidv4(),
				title: 'Alarm Rules & Alerts',
				img: cctv3,
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
		img: marker1,
		ProjectHeader: {
			title: 'Parallel Document Ingestion Pipeline',
			publishDate: 'Oct 2024',
			tags: 'Marker API / Celery / RabbitMQ / RAG',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Parallel Ingestion Dashboard',
				img: marker1,
			},
			{
				id: uuidv4(),
				title: 'Celery Task Queue Architecture',
				img: marker2,
			},
			{
				id: uuidv4(),
				title: 'Vector Database Workflow',
				img: marker3,
			},
		],
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
	},
];
