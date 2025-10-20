import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { experienceData, experienceStats } from '../../data/experienceData';
import ExperienceItem from './ExperienceItem';

function AboutExperience() {
	const [activeFilter, setActiveFilter] = useState('all');
	const [filteredExperience, setFilteredExperience] = useState(experienceData);
	const [hoveredItem, setHoveredItem] = useState(null);

	// Get unique technologies for filter
	const allTechnologies = [...new Set(experienceData.flatMap(exp => exp.technologies))];
	const filterOptions = [
		{ value: 'all', label: 'All Experience', count: experienceData.length },
		{ value: 'current', label: 'Current Role', count: experienceData.filter(exp => exp.status === 'current').length },
		{ value: 'leadership', label: 'Leadership', count: experienceData.filter(exp => exp.position.toLowerCase().includes('lead') || exp.position.toLowerCase().includes('team')).length },
		...allTechnologies.slice(0, 6).map(tech => ({
			value: tech.toLowerCase(),
			label: tech,
			count: experienceData.filter(exp => exp.technologies.includes(tech)).length
		}))
	];

	useEffect(() => {
		if (activeFilter === 'all') {
			setFilteredExperience(experienceData);
		} else if (activeFilter === 'current') {
			setFilteredExperience(experienceData.filter(exp => exp.status === 'current'));
		} else if (activeFilter === 'leadership') {
			setFilteredExperience(experienceData.filter(exp => 
				exp.position.toLowerCase().includes('lead') || 
				exp.position.toLowerCase().includes('team')
			));
		} else {
			setFilteredExperience(experienceData.filter(exp => 
				exp.technologies.some(tech => tech.toLowerCase() === activeFilter)
			));
		}
	}, [activeFilter]);

	return (
		<div className="py-16">
			{/* Header Section */}
			<motion.div 
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				className="text-center mb-12"
			>
				<h2 className="text-4xl font-bold text-white mb-4">
					Professional Journey
				</h2>
				<p className="text-gray-300 text-lg max-w-3xl mx-auto">
					Over {experienceStats.totalYears} years of building intelligent systems, 
					leading teams, and delivering production-ready ML solutions across diverse industries.
				</p>
			</motion.div>

			{/* Stats Cards */}
			<motion.div 
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, delay: 0.2 }}
				className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
			>
				{[
					{ label: 'Years Experience', value: experienceStats.totalYears, icon: '⏱️' },
					{ label: 'Companies', value: experienceStats.companies, icon: '🏢' },
					{ label: 'Technologies', value: experienceStats.technologies, icon: '⚡' },
					{ label: 'Leadership Roles', value: experienceStats.leadership, icon: '👥' }
				].map((stat, index) => (
					<motion.div
						key={stat.label}
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
						className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 text-center border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
					>
						<div className="text-3xl mb-2">{stat.icon}</div>
						<div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
						<div className="text-gray-400 text-sm">{stat.label}</div>
					</motion.div>
				))}
			</motion.div>

			{/* Filter Tabs */}
			<motion.div 
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, delay: 0.4 }}
				className="flex flex-wrap justify-center gap-3 mb-12"
			>
				{filterOptions.map((option) => (
					<motion.button
						key={option.value}
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						onClick={() => setActiveFilter(option.value)}
						className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
							activeFilter === option.value
								? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
								: 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50 hover:text-white'
						}`}
					>
						{option.label} ({option.count})
					</motion.button>
				))}
			</motion.div>

			{/* Experience Timeline */}
			<div className="relative">
				{/* Enhanced Timeline Line with gradient and glow - Mobile responsive */}
				<div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 sm:w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full shadow-lg shadow-blue-500/20"></div>
				
				{/* Timeline connection lines - Mobile responsive */}
				{filteredExperience.map((_, index) => (
					<div 
						key={`connector-${index}`}
						className="absolute left-4 sm:left-8 w-0.5 sm:w-1 h-6 sm:h-8 bg-gradient-to-b from-blue-500/50 to-purple-500/50"
						style={{ top: `${(index * 80) + 40}px` }}
					></div>
				))}

				<AnimatePresence mode="wait">
					<motion.div
						key={activeFilter}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{ duration: 0.5 }}
						className="space-y-8 sm:space-y-12"
					>
						{filteredExperience.map((experience, index) => (
							<motion.div
								key={experience.id}
								initial={{ opacity: 0, x: -50 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								onHoverStart={() => setHoveredItem(experience.id)}
								onHoverEnd={() => setHoveredItem(null)}
								className="relative"
							>
								{/* Enhanced Timeline Dot with pulse animation - Mobile responsive */}
								<div className="absolute left-3 sm:left-6 w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-2 sm:border-4 border-gray-900 z-10 shadow-lg shadow-blue-500/30">
									<div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse opacity-50"></div>
								</div>
								
								{/* Timeline year indicator - Fixed positioning and mobile responsive */}
								<div className="absolute left-12 sm:left-16 top-0 transform -translate-y-2 z-20">
									<div className="relative">
										{/* Main year badge */}
										<div className="bg-gradient-to-r from-blue-600 to-purple-600 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold text-white shadow-xl shadow-blue-500/30 border-2 border-white/20">
											{experience.period.split('–')[0].trim().split(' ').pop()}
										</div>
										{/* Decorative arrow pointing to timeline */}
										<div className="absolute -left-1.5 sm:-left-2 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-3 border-b-3 border-r-3 sm:border-t-4 sm:border-b-4 sm:border-r-4 border-transparent border-r-blue-600"></div>
										{/* Glow effect */}
										<div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-sm opacity-50 -z-10"></div>
									</div>
								</div>
								
								{/* Experience Card */}
								<div className="ml-16 sm:ml-20 mt-8 sm:mt-0">
									<ExperienceItem 
										experience={experience} 
										isHovered={hoveredItem === experience.id}
										index={index}
									/>
								</div>
							</motion.div>
						))}
					</motion.div>
				</AnimatePresence>
			</div>

			{/* Call to Action */}
			<motion.div 
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, delay: 0.8 }}
				className="text-center mt-16"
			>
				<p className="text-gray-300 text-lg mb-6">
					Interested in working together? Let's discuss how my experience can help your project.
				</p>
				<motion.button
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-blue-600/25 transition-all duration-300"
				>
					Let's Connect
				</motion.button>
			</motion.div>
		</div>
	);
}

export default AboutExperience;
