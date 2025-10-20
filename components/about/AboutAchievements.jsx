import { motion } from 'framer-motion';
import { achievementsData } from '../../data/achievementsData';

function AboutAchievements() {

	const getCategoryColor = (category) => {
		switch (category.toLowerCase()) {
			case 'speaking': return 'from-blue-500/20 to-cyan-500/20 border-blue-500/30';
			case 'research': return 'from-purple-500/20 to-pink-500/20 border-purple-500/30';
			case 'development': return 'from-green-500/20 to-emerald-500/20 border-green-500/30';
			case 'education': return 'from-orange-500/20 to-yellow-500/20 border-orange-500/30';
			case 'personal project': return 'from-indigo-500/20 to-blue-500/20 border-indigo-500/30';
			default: return 'from-gray-500/20 to-gray-600/20 border-gray-500/30';
		}
	};

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
					Key Achievements
				</h2>
				<p className="text-gray-300 text-lg max-w-3xl mx-auto">
					Notable contributions and accomplishments across research, development, and education
				</p>
			</motion.div>

			{/* Achievements Grid */}
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, delay: 0.2 }}
				className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
			>
				{achievementsData.map((achievement, index) => (
					<motion.div
						key={achievement.id}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: index * 0.1 }}
						whileHover={{ y: -5, scale: 1.02 }}
						className={`bg-gradient-to-br ${getCategoryColor(achievement.category)} backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 hover:shadow-lg`}
					>
						{/* Header */}
						<div className="mb-4">
							<div className="flex items-center justify-between mb-2">
								<span className="text-xs font-medium text-gray-400 uppercase tracking-wide">
									{achievement.category}
								</span>
								<span className="text-xs text-gray-500">{achievement.year}</span>
							</div>
							<h3 className="text-lg font-semibold text-white mb-2">
								{achievement.title}
							</h3>
							<p className="text-gray-300 text-sm leading-relaxed">
								{achievement.description}
							</p>
						</div>

						{/* Technologies */}
						<div className="mb-4">
							<div className="flex flex-wrap gap-2">
								{achievement.technologies.map((tech, techIndex) => (
									<span
										key={techIndex}
										className="px-2 py-1 bg-gray-700/40 text-gray-300 text-xs rounded-md border border-gray-600/30"
									>
										{tech}
									</span>
								))}
							</div>
						</div>

						{/* Impact */}
						<div className="pt-4 border-t border-gray-600/30">
							<div className="text-xs text-gray-400 mb-1">Impact</div>
							<div className="text-sm text-gray-200 font-medium">
								{achievement.impact}
							</div>
						</div>
					</motion.div>
				))}
			</motion.div>
		</div>
	);
}

export default AboutAchievements;
