import { v4 as uuidv4 } from 'uuid';

export const achievementsData = [
	{
		id: uuidv4(),
		title: 'Conference Speaker, SICC 2019',
		description: 'Presented a computer vision project on pupil tracking using CNNs and machine vision techniques, demonstrating innovative applications in educational technology.',
		category: 'Speaking',
		year: '2019',
		location: 'SICC Conference',
		technologies: ['CNNs', 'Computer Vision', 'Machine Learning'],
		impact: 'Educational Technology Innovation'
	},
	{
		id: uuidv4(),
		title: 'Researcher, National University of Colombia',
		description: 'Contributed to holography and image reconstruction research using CNNs, enhancing image quality and computational efficiency.',
		category: 'Research',
		year: '2018-2020',
		location: 'National University of Colombia',
		technologies: ['CNNs', 'Holography', 'Image Reconstruction'],
		impact: 'Enhanced Image Quality & Computational Efficiency'
	},
	{
		id: uuidv4(),
		title: 'Lead Developer, CNN-Based Injury Detection System',
		description: 'Led the design and development of a thermography-based AI system for early injury detection, improving the accuracy and efficiency of medical diagnostics.',
		category: 'Development',
		year: '2020-2021',
		location: 'Medical AI Project',
		technologies: ['CNNs', 'Thermography', 'Medical AI', 'Python'],
		impact: 'Improved Medical Diagnostics Accuracy'
	},
	{
		id: uuidv4(),
		title: 'Co-Instructor, National University of Colombia',
		description: 'Partnered with INTECOL SAS to design and teach a Computer Vision course, focusing on image processing, deep learning, and real-world AI applications.',
		category: 'Education',
		year: '2021-2022',
		location: 'National University of Colombia',
		technologies: ['Computer Vision', 'Deep Learning', 'Image Processing'],
		impact: 'Trained Next Generation of AI Engineers'
	},
	{
		id: uuidv4(),
		title: 'Fast Trading Algorithm (Personal Project)',
		description: 'Built an automated trading system with Freqtrade (Python) using exchange APIs/ccxt. Implemented statistical signals (e.g., moving averages, RSI, Bollinger), risk management (position sizing, SL/TP), backtesting, and hyperparameter optimization (Hyperopt), plus dry-run/live modes to automate execution based on strategy performance.',
		category: 'Personal Project',
		year: '2022-2023',
		location: 'Personal Development',
		technologies: ['Python', 'Freqtrade', 'Trading APIs', 'Machine Learning', 'Statistics'],
		impact: 'Automated Trading System with Risk Management'
	}
];

export const achievementsStats = {
	totalAchievements: achievementsData.length,
	categories: [...new Set(achievementsData.map(ach => ach.category))].length,
	years: [...new Set(achievementsData.map(ach => ach.year))].length,
	technologies: [...new Set(achievementsData.flatMap(ach => ach.technologies))].length
};
