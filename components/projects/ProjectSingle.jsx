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
				<div className="project-card rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-gray-900 border border-gray-700 hover:border-dev-blue/30 transition-all duration-300 h-full flex flex-col">
					<div className="project-image-container relative w-full h-64 overflow-hidden">
						<Image
							src={props.img}
							className="rounded-t-xl border-none object-contain w-full h-full"
							alt="Single Project"
							fill
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						/>
					</div>
					<div className="project-content text-center px-4 py-6 flex-1 flex flex-col justify-center">
						<p className="font-general-medium text-xl md:text-2xl text-white mb-2 line-clamp-2">
							{props.title}
						</p>
						<span className="text-lg text-gray-300">
							{props.category}
						</span>
					</div>
				</div>
			</Link>
		</motion.div>
	);
};

export default ProjectSingle;
