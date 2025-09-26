import { v4 as uuidv4 } from 'uuid';

// Import images
import AmazonImage from '../public/images/brands/amazon_gray.png';
import SonyImage from '../public/images/brands/sony_gray.png';
import AdidasImage from '../public/images/brands/adidas_gray.png';
import FilaImage from '../public/images/brands/fila_gray.png';
import NBImage from '../public/images/brands/nb_gray.png';
import SamsungImage from '../public/images/brands/samsung_gray.png';
import CanonImage from '../public/images/brands/canon_gray.png';
import PumaImage from '../public/images/brands/puma_gray.png';

export const clientsHeading = 'Companies I have worked with';

export const clientsData = [
	{
		id: uuidv4(),
		title: 'Kmeleon',
		role: 'Generative AI Engineer',
		period: 'Feb 2025 – Aug 2025',
		description: 'Multi-agent conversational systems, LLMOps, Azure AI platform',
	},
	{
		id: uuidv4(),
		title: 'Southdesk',
		role: 'Machine Learning Engineer',
		period: 'April 2024 – Feb 2025',
		description: 'RAG systems, automation workflows, lead generation pipelines',
	},
	{
		id: uuidv4(),
		title: 'El Sol',
		role: 'Machine Learning Team Leader',
		period: 'June 2023 – April 2024',
		description: 'Recommender systems, document processing, MLOps & CI/CD',
	},
	{
		id: uuidv4(),
		title: 'University of Magdalena',
		role: 'COVID-Rx Diagnosis CV Engineer',
		period: 'Dec 2020 – Nov 2021',
		description: 'Computer vision research, CNN development, medical diagnosis systems',
	},
	{
		id: uuidv4(),
		title: 'Intecol SAS',
		role: 'Computer Vision Engineer',
		period: 'May 2019 – April 2023',
		description: 'Industrial automation, real-time CV pipelines, team leadership',
	},
	{
		id: uuidv4(),
		title: 'National University of Colombia',
		role: 'Researcher & Co-Instructor',
		period: '2019 – 2020',
		description: 'Holography research, Computer Vision course design and teaching',
	},
];
