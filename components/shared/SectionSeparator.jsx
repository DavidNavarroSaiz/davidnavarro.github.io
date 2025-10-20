import { motion } from 'framer-motion';

function SectionSeparator({ variant = 'blue', className = '' }) {
	const variants = {
		blue: {
			lineColor: 'from-transparent via-blue-500/30 to-transparent',
			dots: [
				{ size: 'w-2 h-2', color: 'bg-blue-500' },
				{ size: 'w-1 h-1', color: 'bg-purple-500' },
				{ size: 'w-2 h-2', color: 'bg-pink-500' }
			]
		},
		purple: {
			lineColor: 'from-transparent via-purple-500/30 to-transparent',
			dots: [
				{ size: 'w-1 h-1', color: 'bg-blue-500' },
				{ size: 'w-3 h-3', color: 'bg-purple-500' },
				{ size: 'w-1 h-1', color: 'bg-pink-500' }
			]
		},
		pink: {
			lineColor: 'from-transparent via-pink-500/30 to-transparent',
			dots: [
				{ size: 'w-2 h-2', color: 'bg-pink-500' },
				{ size: 'w-1 h-1', color: 'bg-blue-500' },
				{ size: 'w-2 h-2', color: 'bg-purple-500' }
			]
		},
		green: {
			lineColor: 'from-transparent via-green-500/30 to-transparent',
			dots: [
				{ size: 'w-1 h-1', color: 'bg-green-500' },
				{ size: 'w-2 h-2', color: 'bg-cyan-500' },
				{ size: 'w-1 h-1', color: 'bg-blue-500' }
			]
		}
	};

	const config = variants[variant] || variants.blue;

	return (
		<motion.div 
			initial={{ opacity: 0, scale: 0.8 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.6 }}
			className={`relative z-10 py-8 ${className}`}
		>
			<div className="container mx-auto">
				<div className="flex items-center justify-center">
					{/* Left line */}
					<div className={`flex-1 h-px bg-gradient-to-r ${config.lineColor}`}></div>
					
					{/* Center dots */}
					<div className="mx-6 flex items-center space-x-2">
						{config.dots.map((dot, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, scale: 0 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.4, delay: index * 0.1 }}
								className={`${dot.size} ${dot.color} rounded-full`}
							></motion.div>
						))}
					</div>
					
					{/* Right line */}
					<div className={`flex-1 h-px bg-gradient-to-r ${config.lineColor}`}></div>
				</div>
			</div>
		</motion.div>
	);
}

export default SectionSeparator;
