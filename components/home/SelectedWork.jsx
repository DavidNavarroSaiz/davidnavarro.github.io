import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight, FiArrowUpRight } from 'react-icons/fi';

function SelectedWork({ projects = [] }) {
	if (projects.length === 0) return null;

	return (
		<section id="selected-work" className="border-t border-white/10">
			<div className="container mx-auto py-20 sm:py-24">
				<div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
					<div className="max-w-2xl">
						<h2 className="font-editorial text-4xl font-medium tracking-[-0.02em] text-white sm:text-5xl">
							Selected engineering work
						</h2>
						<p className="mt-4 text-base leading-relaxed text-gray-400 sm:text-lg">
							A focused set of systems spanning agentic workflows,
							retrieval infrastructure, and applied computer
							vision. Each entry links to the full project notes.
						</p>
					</div>
					<Link
						href="/projects"
						className="inline-flex shrink-0 items-center gap-2 text-sm font-general-semibold text-dev-blue transition-colors duration-200 hover:text-dev-blue-light"
					>
						All projects
						<FiArrowRight className="h-4 w-4" aria-hidden="true" />
					</Link>
				</div>

				<div className="mt-10 border-t border-white/10">
					{projects.map((project) => (
						<Link
							key={project.id}
							href={`/projects/${project.id}`}
							aria-label={`View project: ${project.title}`}
							className="group grid gap-8 border-b border-white/10 py-10 md:grid-cols-12 md:items-start md:gap-8 lg:gap-12"
						>
							<div className="mx-auto w-full max-w-xl md:col-span-5 md:mx-0 md:max-w-none">
								<div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-white/10 bg-gray-900 transition-colors duration-200 group-hover:border-dev-blue/40">
									<Image
										src={project.image}
										alt={project.imageAlt}
										fill
										sizes="(max-width: 767px) 100vw, (max-width: 1023px) 42vw, 520px"
										loading="lazy"
										className="object-contain"
									/>
								</div>
							</div>

							<div className="md:col-span-7">
								<p className="text-sm font-general-medium text-gray-400">
									{project.category}, {project.publishDate}
								</p>
								<h3 className="mt-3 font-editorial text-3xl font-medium tracking-[-0.02em] text-white transition-colors duration-200 group-hover:text-dev-blue sm:text-4xl">
									{project.title}
								</h3>

								<div className="mt-5 max-w-2xl space-y-3 text-base leading-relaxed text-gray-300">
									<p>
										<span className="font-general-semibold text-white">
											Problem.
										</span>{' '}
										{project.problem}
									</p>
									<p>
										<span className="font-general-semibold text-white">
											Approach.
										</span>{' '}
										{project.approach}
									</p>
								</div>

								<p className="mt-5 text-sm leading-relaxed text-gray-400">
									<span className="text-gray-500">
										Disciplines:
									</span>{' '}
									{project.disciplines.join(', ')}
								</p>

								<span className="mt-6 inline-flex items-center gap-2 text-sm font-general-semibold text-dev-blue">
									View project
									<FiArrowUpRight
										className="h-4 w-4"
										aria-hidden="true"
									/>
								</span>
							</div>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
}

export default SelectedWork;
