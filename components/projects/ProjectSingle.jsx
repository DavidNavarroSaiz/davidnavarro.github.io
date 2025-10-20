import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const ProjectSingle = (props) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, delay: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.7,
				delay: 0.15,
			}}
		>
			<Link
				href="/projects/[id]"
				as={'/projects/' + props.id}
				aria-label="Single Project"
				passHref
			>
				<motion.div 
					className="project-card rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-gray-900 border border-gray-700 hover:border-dev-blue/30 transition-all duration-300 h-full flex flex-col"
					whileHover={{ 
						y: -8,
						scale: 1.02,
						transition: { duration: 0.3, ease: "easeOut" }
					}}
					whileTap={{ scale: 0.98 }}
				>
					<div className="project-image-container relative w-full h-64 overflow-hidden">
						<motion.div
							whileHover={{ scale: 1.1 }}
							transition={{ duration: 0.4, ease: "easeOut" }}
							className="w-full h-full"
						>
							<Image
								src={props.img}
								className="rounded-t-xl border-none object-contain w-full h-full"
								alt="Single Project"
								fill
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
							/>
						</motion.div>
						{/* Overlay effect on hover */}
						<motion.div
							initial={{ opacity: 0 }}
							whileHover={{ opacity: 1 }}
							className="absolute inset-0 bg-dev-blue/20 rounded-t-xl flex items-center justify-center"
							transition={{ duration: 0.3 }}
						>
							<motion.div
								initial={{ scale: 0, rotate: -180 }}
								whileHover={{ scale: 1, rotate: 0 }}
								transition={{ duration: 0.4, ease: "easeOut" }}
								className="w-12 h-12 bg-dev-blue/80 rounded-full flex items-center justify-center"
							>
								<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 2h6m0 0v6m0-6L10 14" />
								</svg>
							</motion.div>
						</motion.div>
					</div>
					<div className="project-content text-center px-4 py-6 flex-1 flex flex-col justify-center">
						<motion.p 
							className="font-general-medium text-xl md:text-2xl text-white mb-2 line-clamp-2"
							whileHover={{ color: "#00D4FF" }}
							transition={{ duration: 0.2 }}
						>
							{props.title}
						</motion.p>
						<span className="text-lg text-gray-300">
							{props.category}
						</span>
					</div>
				</motion.div>
			</Link>
		</motion.div>
	);
};

export default ProjectSingle;
