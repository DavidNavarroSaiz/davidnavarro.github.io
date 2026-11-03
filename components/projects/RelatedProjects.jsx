import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { projectsData } from '../../data/projectsData';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const tokenize = (value = '') =>
	value
		.toLowerCase()
		.split(/[^a-z0-9]+/)
		.filter((token) => token.length > 2);

const projectSignals = (project) => [
	project.category,
	project.ProjectHeader?.tags,
	...(project.ProjectInfo?.Technologies?.[0]?.techs ?? []),
	...(project.featured?.disciplines ?? []),
].flatMap(tokenize);

function RelatedProjects({ currentProjectId, currentCategory }) {
	const [scrollPosition, setScrollPosition] = useState(0);
	const [scrollMax, setScrollMax] = useState(0);
	const scrollContainerRef = useRef(null);
	const shouldReduceMotion = useReducedMotion();
	const scrollBehavior = shouldReduceMotion ? 'auto' : 'smooth';

	const currentProject = projectsData.find((project) => project.id === currentProjectId);
	const currentSignals = new Set(projectSignals(currentProject ?? { category: currentCategory }));
	const explicitRelatedIds = currentProject?.relatedProjectIds ?? [];
	const scoredProjects = projectsData
		.filter((project) => project.id !== currentProjectId)
		.map((project) => {
			const explicitIndex = explicitRelatedIds.indexOf(project.id);
			const overlap = projectSignals(project).filter((signal) => currentSignals.has(signal));
			const sameCategoryScore = project.category === currentCategory ? 20 : 0;
			const explicitScore = explicitIndex >= 0 ? 100 - explicitIndex : 0;

			return {
				project,
				score: explicitScore + sameCategoryScore + overlap.length * 2,
			};
		})
		.sort((a, b) => b.score - a.score || b.project.id - a.project.id);
	const relevantProjects = scoredProjects.filter(({ score }) => score > 0).slice(0, 4);
	const projectsToShow = (relevantProjects.length > 0 ? relevantProjects : scoredProjects.slice(0, 4)).map(
		({ project }) => project
	);
	const hasRelatedProjects = relevantProjects.length > 0;

	useEffect(() => {
		const container = scrollContainerRef.current;

		if (!container) {
			return undefined;
		}

		const updateScrollMetrics = () => {
			setScrollPosition(container.scrollLeft);
			setScrollMax(Math.max(0, container.scrollWidth - container.clientWidth));
		};

		updateScrollMetrics();
		container.addEventListener('scroll', updateScrollMetrics, { passive: true });
		window.addEventListener('resize', updateScrollMetrics);

		return () => {
			container.removeEventListener('scroll', updateScrollMetrics);
			window.removeEventListener('resize', updateScrollMetrics);
		};
	}, [projectsToShow.length]);

	const scrollLeft = () => {
		if (scrollContainerRef.current) {
			const container = scrollContainerRef.current;
			const scrollAmount = container.clientWidth * 0.8;
			const newPosition = Math.max(0, scrollPosition - scrollAmount);
			container.scrollTo({ left: newPosition, behavior: scrollBehavior });
			setScrollPosition(newPosition);
		}
	};

	const scrollRight = () => {
		if (scrollContainerRef.current) {
			const container = scrollContainerRef.current;
			const scrollAmount = container.clientWidth * 0.8;
			const maxScroll = container.scrollWidth - container.clientWidth;
			const newPosition = Math.min(maxScroll, scrollPosition + scrollAmount);
			container.scrollTo({ left: newPosition, behavior: scrollBehavior });
			setScrollPosition(newPosition);
		}
	};

	if (projectsToShow.length === 0) {
		return null; // No mostrar la sección si no hay proyectos relacionados
	}

	return (
		<div className="relative mt-16 border-t border-white/10 pt-12 sm:mt-20 sm:pt-16">
			<div className="rounded-xl border border-white/10 bg-gray-950/60 px-5 py-8 sm:px-8 sm:py-10">
				<div className="mb-8">
					<div className="flex items-center gap-4">
						<div className="h-10 w-1 rounded-full bg-dev-blue"></div>
						<div>
							<p className="font-general-semibold text-xl text-white sm:text-2xl">
								{hasRelatedProjects ? 'Related Projects' : 'Other Projects'}
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
						className="absolute left-0 top-1/2 z-20 -translate-x-4 -translate-y-1/2 rounded-full border-2 border-dev-blue/90 bg-dev-blue/80 p-3 shadow-lg transition-all duration-300 hover:border-white hover:bg-dev-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dev-blue focus-visible:ring-offset-2 focus-visible:ring-offset-primary-dark disabled:cursor-not-allowed disabled:opacity-30 group"
						aria-label="Scroll left"
					>
						<FiChevronLeft className="w-5 h-5 text-white group-hover:text-white transition-colors duration-300 drop-shadow-md" />
					</button>

					{/* Right arrow */}
					<button
						onClick={scrollRight}
						disabled={scrollMax === 0 || scrollPosition >= scrollMax - 1}
						className="absolute right-0 top-1/2 z-20 translate-x-4 -translate-y-1/2 rounded-full border-2 border-dev-blue/90 bg-dev-blue/80 p-3 shadow-lg transition-all duration-300 hover:border-white hover:bg-dev-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dev-blue focus-visible:ring-offset-2 focus-visible:ring-offset-primary-dark disabled:cursor-not-allowed disabled:opacity-30 group"
						aria-label="Scroll right"
					>
						<FiChevronRight className="w-5 h-5 text-white group-hover:text-white transition-colors duration-300 drop-shadow-md" />
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
								className="block group rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dev-blue focus-visible:ring-offset-2 focus-visible:ring-offset-primary-dark"
								aria-label={`View related project: ${project.title}`}
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
									<div className={`relative overflow-hidden ${project.img ? 'h-52' : 'border-b border-gray-700/50 bg-gray-950 px-5 py-5'}`}>
										{project.img ? (
											<Image
												src={project.img}
												alt={project.imageAlt ?? project.title}
												fill
												className="object-contain transition-transform duration-500 group-hover:scale-105"
												sizes="(max-width: 768px) 85vw, (max-width: 1200px) 320px, 320px"
												loading="lazy"
											/>
										) : (
											<div className="flex min-h-28 flex-col justify-between gap-6">
												<span className="font-mono text-[10px] uppercase tracking-[0.16em] text-dev-blue">
													Text-first project
												</span>
												<span className="font-general-semibold text-lg leading-tight text-white">
													{project.category}
												</span>
											</div>
										)}
										{project.img && (
											<>
												{/* Solid overlay keeps the editorial treatment legible without a gradient. */}
												<div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

												{/* Category badge */}
												<div className="absolute left-4 top-4 translate-y-2 transform opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
													<span className="rounded-full border border-dev-blue/30 bg-dev-blue/90 px-3 py-1 text-sm font-medium text-white backdrop-blur-sm">
														{project.category}
													</span>
												</div>

												{/* View project indicator */}
												<div className="absolute bottom-4 right-4 translate-y-2 transform opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
													<div className="flex h-10 w-10 items-center justify-center rounded-full border border-dev-blue/30 bg-dev-blue/90">
														<svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
															<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10v-4M14 2h6m0 0v6m0-6L10 14" />
														</svg>
													</div>
											</div>
											</>
										)}
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
											{(project.ProjectInfo?.Technologies?.[0]?.techs ?? []).slice(0, 3).map((tech, index) => (
												<span 
													key={index}
													className="px-3 py-1 text-xs bg-gray-800/80 text-gray-300 rounded-full border border-gray-600/50 hover:border-dev-blue/50 transition-colors duration-200"
												>
													{tech}
												</span>
											))}
											{(project.ProjectInfo?.Technologies?.[0]?.techs ?? []).length > 3 && (
												<span className="px-3 py-1 text-xs bg-gray-800/80 text-gray-300 rounded-full border border-gray-600/50">
													+{(project.ProjectInfo?.Technologies?.[0]?.techs ?? []).length - 3} more
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
