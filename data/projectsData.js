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
import cov3_640 from '../assets/images/cov3-640.webp';
import abo1_640 from '../assets/images/abo1-640.webp';
import lead3_640 from '../assets/images/lead3-640.webp';
import make2_640 from '../assets/images/make2-640.webp';
import make1_640 from '../assets/images/make1-640.webp';
import health1_640 from '../assets/images/health1-640.webp';
import speech1_640 from '../assets/images/speech1-640.webp';
import int4_640 from '../assets/images/int4-640.webp';
import realtime1_640 from '../assets/images/realtime1-640.webp';
import mcp1_640 from '../assets/images/mcp1-640.webp';
import cctv1_640 from '../assets/images/cctv1-640.webp';
import marker1_640 from '../assets/images/marker1-640.webp';
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
import mcp2_960 from '../assets/images/mcp2-960.webp';
import mcp3_960 from '../assets/images/mcp3-960.webp';
import cctv1_960 from '../assets/images/cctv1-960.webp';
import cctv2_960 from '../assets/images/cctv2-960.webp';
import cctv3_960 from '../assets/images/cctv3-960.webp';
import pmArch from '../assets/images/pm-architecture.svg';
import markerArch from '../assets/images/marker-architecture.svg';

export const projectsData = [
	{
		id: 1,
		title: 'PM AI Agent',
		url: 'pm-ai-agent',
		category: 'LLMs and RAG',
		summary:
			'A Microsoft Teams agent that coordinates project work through Microsoft Graph, document retrieval, and structured tool calls.',
		img: pm1_640,
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
			overview:
				'An AI-powered project management agent integrated with Microsoft Teams, knowledge retrieval, and Azure DevOps tools. I designed and implemented the end-to-end system, which was used internally at Kmeleon to organize and manage team tasks while the infrastructure was being prepared for potential distribution as a reusable offering through Microsoft Marketplace.',
			problem:
				'Project status, calendars, and documents are spread across Teams and project tools, so routine coordination takes manual effort and context switching.',
			architecture: {
				summary:
					'User requests from Microsoft Teams and other Bot Framework channels go to a language-model agent. The agent answers from project knowledge through a document ingestion and PGVector retrieval pipeline, acts on Azure DevOps through a dedicated MCP server, and manages calendars through the Microsoft Graph API. Provisioned Azure infrastructure and Application Insights monitoring support the whole system.',
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
		img: cov3_640,
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
	},
	{
		id: 4,
		title: 'AbogacIA - AI Legal Platform',
		url: 'abogacia-ai-legal-platform',
		category: 'LLMs and RAG',
		summary:
			'Legal research platform that finds relevant Colombian case law, recommends precedents, and helps draft documents.',
		img: abo1_640,
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
		category: 'Computer Vision',
		summary:
			'Production vision systems for defect detection, fill checks, anomaly detection, and PPE compliance on the factory floor.',
		img: int4_640,
		featured: {
			rank: 4,
			problem:
				'Factory inspection and safety checks need reliable vision under real production constraints: lighting, throughput, hardware, and PLC integration.',
			approach:
				'End-to-end CV systems spanning imaging design, real-time detection pipelines, CVAT labeling workflows, and PLC/HMI integration for defect, fill, anomaly, and PPE checks.',
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
				title: 'Architecture Flow Diagram',
				img: mcp2_960,
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
		img: marker1_640,
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
];

export const featuredProjects = projectsData
	.filter((project) => project.featured)
	.sort((a, b) => a.featured.rank - b.featured.rank);
