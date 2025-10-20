import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

function ExperienceItem({ experience, isHovered, index }) {
	const [showDetails, setShowDetails] = useState(false);

	const getStatusColor = (status) => {
		switch (status) {
			case 'current': return 'text-green-400 bg-green-400/10 border-green-400/20';
			case 'completed': return 'text-blue-400 bg-blue-400/10 border-blue-400/20';
			default: return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
		}
	};

	const getTypeColor = (type) => {
		switch (type) {
			case 'Full-time': return 'text-purple-400 bg-purple-400/10';
			case 'Research': return 'text-orange-400 bg-orange-400/10';
			case 'Contract': return 'text-yellow-400 bg-yellow-400/10';
			default: return 'text-gray-400 bg-gray-400/10';
		}
	};

	return (
		<motion.div
			layout
			className={`bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300 ${
				isHovered 
					? 'border-blue-500/50 shadow-xl shadow-blue-500/10 scale-[1.02]' 
					: 'border-gray-700/50 hover:border-gray-600/50'
			}`}
			whileHover={{ y: -2 }}
		>
			{/* Header */}
			<div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
				<div className="flex-1">
					<div className="flex items-center gap-3 mb-2">
						<h3 className="text-xl font-bold text-white">{experience.position}</h3>
						<span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(experience.status)}`}>
							{experience.status === 'current' ? 'Current' : 'Completed'}
						</span>
					</div>
					<div className="flex items-center gap-2 text-gray-300 mb-2">
						<span className="font-medium">{experience.company}</span>
						<span className="text-gray-500">•</span>
						<span>{experience.period}</span>
						<span className="text-gray-500">•</span>
						<span>{experience.location}</span>
					</div>
					<p className="text-gray-400 text-sm mb-3">{experience.description}</p>
				</div>
				<div className="flex flex-col items-end gap-2">
					<span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(experience.type)}`}>
						{experience.type}
					</span>
					{experience.companyUrl && (
						<a 
							href={experience.companyUrl} 
							target="_blank" 
							rel="noopener noreferrer"
							className="text-blue-400 hover:text-blue-300 text-sm transition-colors"
						>
							Visit Company →
						</a>
					)}
				</div>
			</div>

			{/* Metrics */}
			{experience.metrics && Object.keys(experience.metrics).length > 0 && (
				<motion.div 
					initial={{ opacity: 0, height: 0 }}
					animate={{ opacity: 1, height: 'auto' }}
					className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4"
				>
					{Object.entries(experience.metrics).map(([key, value]) => (
						<div key={key} className="bg-gray-700/30 rounded-lg p-3 text-center">
							<div className="text-lg font-bold text-white">{value}</div>
							<div className="text-xs text-gray-400">{key}</div>
						</div>
					))}
				</motion.div>
			)}

			{/* Technologies */}
			<div className="mb-4">
				<div className="flex flex-wrap gap-2">
					{experience.technologies.map((tech, techIndex) => (
						<motion.span
							key={tech}
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ delay: techIndex * 0.05 }}
							className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30"
						>
							{tech}
						</motion.span>
					))}
				</div>
			</div>

			{/* Toggle Details Button */}
			<motion.button
				whileHover={{ scale: 1.02 }}
				whileTap={{ scale: 0.98 }}
				onClick={() => setShowDetails(!showDetails)}
				className="w-full py-2 text-gray-300 hover:text-white transition-colors text-sm font-medium"
			>
				{showDetails ? 'Hide Details' : 'Show Achievements & Tasks'} 
				<span className="ml-2">{showDetails ? '↑' : '↓'}</span>
			</motion.button>

			{/* Detailed Achievements and Tasks */}
			<AnimatePresence>
				{showDetails && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: 'auto' }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.3 }}
						className="mt-4 pt-4 border-t border-gray-700/50"
					>
						<div className="space-y-4">
							{/* Achievements Section */}
							<div>
								<h4 className="text-white font-medium mb-3 flex items-center gap-2">
									<span className="text-green-400">🎯</span>
									Key Achievements
								</h4>
								<ul className="space-y-2">
									{experience.achievements.map((achievement, achievementIndex) => (
										<motion.li
											key={achievementIndex}
											initial={{ opacity: 0, x: -20 }}
											animate={{ opacity: 1, x: 0 }}
											transition={{ delay: achievementIndex * 0.1 }}
											className="flex items-start gap-3 text-gray-300 text-sm"
										>
											<span className="text-green-400 mt-1">✓</span>
											<span>{achievement}</span>
										</motion.li>
									))}
								</ul>
							</div>

							{/* Tasks Section */}
							{experience.tasks && experience.tasks.length > 0 && (
								<div>
									<h4 className="text-white font-medium mb-3 flex items-center gap-2">
										<span className="text-blue-400">⚙️</span>
										Main Responsibilities & Tasks
									</h4>
									<ul className="space-y-2">
										{experience.tasks.map((task, taskIndex) => (
											<motion.li
												key={taskIndex}
												initial={{ opacity: 0, x: -20 }}
												animate={{ opacity: 1, x: 0 }}
												transition={{ delay: (experience.achievements.length + taskIndex) * 0.1 }}
												className="flex items-start gap-3 text-gray-300 text-sm"
											>
												<span className="text-blue-400 mt-1">•</span>
												<span>{task}</span>
											</motion.li>
										))}
									</ul>
								</div>
							)}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.div>
	);
}

export default ExperienceItem;
