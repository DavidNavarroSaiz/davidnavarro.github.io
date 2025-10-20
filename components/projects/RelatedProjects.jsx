import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { projectsData } from '../../data/projectsData';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

function RelatedProjects({ currentProjectId, currentCategory }) {
	const [scrollPosition, setScrollPosition] = useState(0);
	const scrollContainerRef = useRef(null);

	// Filtrar proyectos relacionados (misma categoría, excluyendo el actual)
	const relatedProjects = projectsData.filter(
		project => project.id !== currentProjectId && project.category === currentCategory
	);

	// Si no hay proyectos de la misma categoría, mostrar otros proyectos
	const projectsToShow = relatedProjects.length > 0 
		? relatedProjects 
		: projectsData.filter(project => project.id !== currentProjectId).slice(0, 4);

	const scrollLeft = () => {
		if (scrollContainerRef.current) {
			const container = scrollContainerRef.current;
			const scrollAmount = container.clientWidth * 0.8;
			const newPosition = Math.max(0, scrollPosition - scrollAmount);
			container.scrollTo({ left: newPosition, behavior: 'smooth' });
			setScrollPosition(newPosition);
		}
	};

	const scrollRight = () => {
		if (scrollContainerRef.current) {
			const container = scrollContainerRef.current;
			const scrollAmount = container.clientWidth * 0.8;
			const maxScroll = container.scrollWidth - container.clientWidth;
			const newPosition = Math.min(maxScroll, scrollPosition + scrollAmount);
			container.scrollTo({ left: newPosition, behavior: 'smooth' });
			setScrollPosition(newPosition);
		}
	};

	if (projectsToShow.length === 0) {
		return null; // No mostrar la sección si no hay proyectos relacionados
	}

	return (
		<div className="relative mt-16 pt-16 sm:pt-20 sm:mt-24">
			{/* Background with creative differentiation */}
			<div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-gray-800/30 to-gray-900/50 rounded-3xl border border-gray-700/50 backdrop-blur-sm"></div>
			
			{/* Animated background elements */}
			<div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-3xl">
				<div className="absolute top-4 right-4 w-32 h-32 bg-dev-blue/10 rounded-full blur-xl animate-pulse"></div>
				<div className="absolute bottom-4 left-4 w-24 h-24 bg-cyan-500/10 rounded-full blur-lg animate-pulse delay-1000"></div>
				<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-blue-500/5 rounded-full blur-2xl animate-pulse delay-500"></div>
			</div>

			{/* Content */}
			<div className="relative z-10 px-8 py-12">
				<div className="mb-12">
					<div className="flex items-center gap-4">
						<div className="w-1 h-12 bg-gradient-to-b from-dev-blue to-cyan-400 rounded-full"></div>
						<div>
							<p className="font-general-regular text-white text-3xl font-bold">
								{relatedProjects.length > 0 ? 'Related Projects' : 'Other Projects'}
							</p>
							<p className="text-gray-400 text-sm mt-1">
								Explore more of my work
							</p>
						</div>
					</div>
				</div>

				{/* Navigation arrows positioned on sides */}
				<div className="relative">
					{/* Left arrow */}
					<button
						onClick={scrollLeft}
						disabled={scrollPosition <= 0}
						className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-20 p-4 rounded-full bg-gray-800/90 hover:bg-gray-700/90 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 border border-gray-600/50 hover:border-dev-blue/50 hover:shadow-lg hover:shadow-dev-blue/20 backdrop-blur-sm"
						aria-label="Scroll left"
					>
						<FiChevronLeft className="w-6 h-6 text-white" />
					</button>

					{/* Right arrow */}
					<button
						onClick={scrollRight}
						disabled={scrollPosition >= (scrollContainerRef.current?.scrollWidth - scrollContainerRef.current?.clientWidth || 0)}
						className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-20 p-4 rounded-full bg-gray-800/90 hover:bg-gray-700/90 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 border border-gray-600/50 hover:border-dev-blue/50 hover:shadow-lg hover:shadow-dev-blue/20 backdrop-blur-sm"
						aria-label="Scroll right"
					>
						<FiChevronRight className="w-6 h-6 text-white" />
					</button>

					<div 
						ref={scrollContainerRef}
						className="flex gap-8 overflow-x-auto pb-6 px-2 related-projects-scroll"
					>
					{projectsToShow.map((project, index) => (
						<motion.div
							key={project.id}
							className="flex-shrink-0 w-80"
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: index * 0.1 }}
						>
							<Link
								href={`/projects/${project.id}`}
								className="block group"
							>
								<motion.div 
									className="bg-gray-900/90 border border-gray-700/50 rounded-2xl overflow-hidden hover:border-dev-blue/40 transition-all duration-500 h-full backdrop-blur-sm hover:backdrop-blur-none"
									whileHover={{ 
										y: -12,
										scale: 1.03,
										transition: { duration: 0.4, ease: "easeOut" }
									}}
									whileTap={{ scale: 0.97 }}
								>
									<div className="relative h-52 overflow-hidden">
										<Image
											src={project.img}
											alt={project.title}
											fill
											className="object-cover group-hover:scale-110 transition-transform duration-500"
											sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
										/>
										{/* Gradient overlay */}
										<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
										
										{/* Category badge */}
										<div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
											<span className="text-sm font-medium bg-dev-blue/90 text-white px-3 py-1 rounded-full backdrop-blur-sm border border-dev-blue/30">
												{project.category}
											</span>
										</div>

										{/* View project indicator */}
										<div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
											<div className="w-10 h-10 bg-dev-blue/90 rounded-full flex items-center justify-center backdrop-blur-sm border border-dev-blue/30">
												<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 2h6m0 0v6m0-6L10 14" />
												</svg>
											</div>
										</div>
									</div>
									
									<div className="p-6">
										<h3 className="text-xl font-semibold text-white mb-3 line-clamp-2 group-hover:text-dev-blue transition-colors duration-300">
											{project.title}
										</h3>
										<p className="text-gray-400 text-sm mb-4 flex items-center gap-2">
											<span className="w-2 h-2 bg-dev-blue rounded-full"></span>
											{project.ProjectHeader.publishDate}
										</p>
										<div className="flex flex-wrap gap-2">
											{project.ProjectInfo.Technologies[0].techs.slice(0, 3).map((tech, index) => (
												<span 
													key={index}
													className="px-3 py-1 text-xs bg-gray-800/80 text-gray-300 rounded-full border border-gray-600/50 hover:border-dev-blue/50 transition-colors duration-200"
												>
													{tech}
												</span>
											))}
											{project.ProjectInfo.Technologies[0].techs.length > 3 && (
												<span className="px-3 py-1 text-xs bg-gray-800/80 text-gray-300 rounded-full border border-gray-600/50">
													+{project.ProjectInfo.Technologies[0].techs.length - 3} more
												</span>
											)}
										</div>
									</div>
								</motion.div>
							</Link>
						</motion.div>
					))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default RelatedProjects;
