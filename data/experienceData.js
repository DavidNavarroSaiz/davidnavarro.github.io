import { v4 as uuidv4 } from 'uuid';

export const experienceData = [
	{
		id: uuidv4(),
		company: 'Svitla Systems',
		position: 'Machine Learning Engineer & Technical Lead',
		period: 'Aug 2025 – Present',
		location: 'Remote',
		type: 'Full-time',
		status: 'current',
		description: 'Building production ML systems with focus on computer vision and proctoring solutions.',
		achievements: [
			'Built production proctoring/cheat-detection pipeline with face detection and gaze estimation',
			'Reduced manual review time with reliable suspicious behavior detection',
			'Led dataset operations with CVAT workflows and DVC for versioned data',
			'Operationalized MLflow for metrics, artifacts, and evaluations',
			'Implemented systematic HPO and evaluation protocols',
			'Delivered runtime-optimized video classifiers achieving high FPS/stream'
		],
		tasks: [
			'Lead technical architecture decisions for ML systems',
			'Develop and maintain computer vision models for proctoring systems',
			'Implement real-time video processing pipelines',
			'Collaborate with product and engineering teams on feature requirements',
			'Optimize model performance for production deployment',
			'Conduct research on latest computer vision and ML techniques',
			'Mentor junior engineers and conduct code reviews',
			'Lead cross-functional teams on ML project delivery'
		],
		technologies: ['PyTorch', 'OpenCV', 'MLflow', 'DVC', 'CVAT', 'Python', 'Computer Vision'],
		metrics: {
			'False Positives Reduction': '45%',
			'Deployment Speed': '40% faster',
			'Model Selection Time': 'Cut by 50%'
		},
		companyLogo: '/images/companies/svitla.png',
		companyUrl: 'https://svitla.com'
	},
	{
		id: uuidv4(),
		company: 'Kmeleon',
		position: 'Generative AI Engineer',
		period: 'Feb 2025 – Aug 2025',
		location: 'Remote',
		type: 'Full-time',
		status: 'completed',
		description: 'Designed and deployed modular multi-agent conversational systems with enterprise-grade LLMOps.',
		achievements: [
			'Designed modular multi-agent system using AutoGen and LangChain',
			'Established LLMOps best practices with Azure AI platform and MLflow',
			'Implemented human-in-the-loop approval steps for enterprise governance',
			'Developed user-centric platform for custom AI agent creation',
			'Integrated MCP servers with Microsoft Teams for seamless interaction',
			'Authored Azure Bicep modules and packaged solution for Azure Marketplace'
		],
		tasks: [
			'Design and implement multi-agent conversational systems',
			'Establish LLMOps pipelines and monitoring systems',
			'Develop Azure infrastructure using Bicep templates',
			'Integrate AI agents with Microsoft Teams and other platforms',
			'Ensure compliance with enterprise governance requirements',
			'Package solutions for Azure Marketplace deployment'
		],
		technologies: ['AutoGen', 'LangChain', 'Azure AI', 'MLflow', 'Bicep', 'Microsoft Teams', 'MCP'],
		metrics: {
			'Customer Time-to-Deploy': '< 1 hour',
			'Task Throughput': 'Enhanced significantly',
			'User Engagement': 'Improved with memory and tool usage'
		},
		companyLogo: '/images/companies/kmeleon.png',
		companyUrl: 'https://kmeleon.com'
	},
	{
		id: uuidv4(),
		company: 'Southdesk',
		position: 'Machine Learning Engineer',
		period: 'April 2024 – Feb 2025',
		location: 'Remote',
		type: 'Full-time',
		status: 'completed',
		description: 'Built RAG systems and automation workflows for recruitment and lead generation.',
		achievements: [
			'Designed RAG systems with Qdrant vector DB and LLM-based enrichment',
			'Applied Azure Pipelines CI/CD cutting deployment time by 40%',
			'Built no-code automations using Make.com, Zapier, and GoHighLevel',
			'Raised lead conversion by 2% through automated workflows',
			'Developed AI-powered workflows for property reporting and meeting summarization',
			'Created scalable lead-gen pipelines with Selenium, Apify, and n8n'
		],
		technologies: ['RAG', 'Qdrant', 'FastAPI', 'Azure Pipelines', 'Make.com', 'Zapier', 'Selenium', 'n8n'],
		metrics: {
			'Feature Deployment Time': '40% reduction',
			'Lead Conversion': '+2%',
			'Manual Operations': 'Significantly reduced'
		},
		companyLogo: '/images/companies/southdesk.png',
		companyUrl: 'https://southdesk.com'
	},
	{
		id: uuidv4(),
		company: 'El Sol',
		position: 'Machine Learning Team Leader',
		period: 'June 2023 – April 2024',
		location: 'Remote',
		type: 'Full-time',
		status: 'completed',
		description: 'Led ML team developing production recommender systems and document processing platforms.',
		achievements: [
			'Developed production recommender system chatbot with React, FastAPI, and RAG',
			'Enabled 160+ users to find resources 50% faster',
			'Added CHW domain Q&A with retrieval to program guides',
			'Built document-processing platform handling ~100 documents/month',
			'Delivered Generative AI automations reducing manual workload',
			'Led MLOps and CI/CD initiatives accelerating deployment by 40%'
		],
		technologies: ['React', 'FastAPI', 'RAG', 'LangChain', 'LangSmith', 'PGVector', 'MLOps', 'CI/CD'],
		metrics: {
			'Resource Discovery': '50% faster',
			'Deployment Cycles': '40% acceleration',
			'Users Served': '160+',
			'Documents Processed': '~100/month'
		},
		companyLogo: '/images/companies/elsol.png',
		companyUrl: 'https://elsol.org'
	},
	{
		id: uuidv4(),
		company: 'University of Magdalena',
		position: 'COVID-Rx Diagnosis CV Engineer',
		period: 'Dec 2020 – Nov 2021',
		location: 'Colombia',
		type: 'Research',
		status: 'completed',
		description: 'Developed computer vision models for COVID-19 diagnosis from chest X-rays.',
		achievements: [
			'Curated 36k+ chest X-ray dataset with patient-level splits',
			'Trained multi-class PyTorch CNNs achieving 96% accuracy',
			'Benchmarked 10+ architectures: VGG19, DenseNet, MobileNet, EfficientNet, etc.',
			'Built clinician-facing PyQt desktop and Flask web apps',
			'Implemented preprocessing, augmentation, and evaluation pipelines',
			'Created model ensemble picker improving accuracy vs single models'
		],
		technologies: ['PyTorch', 'CNN', 'PyQt', 'Flask', 'Computer Vision', 'Medical AI', 'Ensemble Learning'],
		metrics: {
			'Model Accuracy': '96%',
			'Dataset Size': '36k+ images',
			'Architectures Tested': '10+',
			'Clinical Impact': 'Remote diagnosis capability'
		},
		companyLogo: '/images/companies/universidad-magdalena.png',
		companyUrl: 'https://unimagdalena.edu.co'
	},
	{
		id: uuidv4(),
		company: 'Intecol Sas',
		position: 'Computer Vision Engineer & Team Lead',
		period: 'May 2019 – April 2023',
		location: 'Colombia',
		type: 'Full-time',
		status: 'completed',
		description: 'Led computer vision systems for industrial automation and safety applications.',
		achievements: [
			'Led 10-engineer team delivering end-to-end CV systems',
			'Developed real-time CV pipelines improving incident detection by 30%',
			'Reduced false alarms by 45% through robust detection systems',
			'Built data/labeling workflows with CVAT and automated retraining',
			'Architected imaging stacks with illumination, sensors, and 3D scanners',
			'Deployed Optical Gas Imaging solution reducing leak detection time'
		],
		tasks: [
			'Lead and manage 10-engineer computer vision team',
			'Define technical strategy and architecture for CV systems',
			'Develop real-time computer vision pipelines',
			'Design and implement data labeling workflows',
			'Architect imaging systems with sensors and 3D scanners',
			'Mentor team members and conduct technical reviews',
			'Collaborate with clients on system requirements',
			'Ensure project delivery and quality standards'
		],
		technologies: ['PyTorch', 'TensorFlow', 'Keras', 'OpenCV', 'C++', 'PLC', 'C#', 'CVAT', 'LiDAR'],
		metrics: {
			'Incident Detection': '+30% improvement',
			'False Alarms': '-45% reduction',
			'Team Size': '10 engineers',
			'Safety Impact': 'Improved plant safety'
		},
		companyLogo: '/images/companies/intecol.png',
		companyUrl: 'https://intecol.com'
	}
];

export const experienceStats = {
	totalYears: '7+',
	companies: experienceData.length,
	technologies: [...new Set(experienceData.flatMap(exp => exp.technologies))].length,
	projects: experienceData.reduce((acc, exp) => acc + exp.achievements.length, 0),
	leadership: experienceData.filter(exp => exp.position.toLowerCase().includes('lead') || exp.position.toLowerCase().includes('team')).length
};
