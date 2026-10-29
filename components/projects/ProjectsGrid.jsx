import { useMemo, useState } from 'react';
import { FiSearch, FiX } from 'react-icons/fi';
import ProjectSingle from './ProjectSingle';
import { orderedProjects } from '../../data/projectsData';
import ProjectsFilter from './ProjectsFilter';
import EngineeringJourney from './EngineeringJourney';

const ALL_CATEGORIES = 'All';

const getSearchText = (project) =>
	[
		project.title,
		project.summary,
		project.category,
		project.ProjectHeader?.tags,
		...(project.ProjectInfo?.Technologies?.[0]?.techs ?? []),
	]
		.filter(Boolean)
		.join(' ')
		.toLowerCase();

function ProjectsGrid() {
	const [searchProject, setSearchProject] = useState('');
	const [selectProject, setSelectProject] = useState(ALL_CATEGORIES);

	const categories = useMemo(
		() => Array.from(new Set(orderedProjects.map((project) => project.category))),
		[]
	);

	const filteredProjects = useMemo(() => {
		const query = searchProject.trim().toLowerCase();

		return orderedProjects.filter((project) => {
			const matchesCategory =
				selectProject === ALL_CATEGORIES ||
				project.category === selectProject;
			const matchesSearch =
				query === '' || getSearchText(project).includes(query);

			return matchesCategory && matchesSearch;
		});
	}, [searchProject, selectProject]);

	const hasFilters =
		searchProject.trim() !== '' || selectProject !== ALL_CATEGORIES;

	const clearFilters = () => {
		setSearchProject('');
		setSelectProject(ALL_CATEGORIES);
	};

	return (
		<section
			className="py-10 sm:py-14 lg:py-16"
			aria-labelledby="projects-heading"
		>
			<header className="border-b border-white/10 pb-8 sm:pb-10">
				<div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
					<div>
						<p className="font-mono text-[11px] uppercase tracking-[0.18em] text-gray-500">
							Selected work / {orderedProjects.length} case studies
						</p>
						<h1
							id="projects-heading"
							className="mt-3 max-w-3xl font-general-semibold text-4xl leading-none tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl"
						>
							Projects<span className="text-[#B8A58C]">.</span>
						</h1>
					</div>
					<p className="max-w-md text-base leading-relaxed text-gray-400 sm:text-lg">
						A record of engineering work across computer vision,
						knowledge systems, AI platforms, and agent evaluation.
					</p>
				</div>
			</header>

			<EngineeringJourney />

			<div className="border-b border-white/10 py-6">
				<p className="mb-5 font-mono text-[10px] uppercase tracking-[0.18em] text-gray-500">
					Explore case studies
				</p>
				<div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-8">
					<div className="w-full md:max-w-sm">
						<label
							htmlFor="project-search"
							className="block font-mono text-[10px] uppercase tracking-[0.16em] text-gray-500"
						>
							Search
						</label>
						<div className="relative mt-2">
							<FiSearch
								className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500"
								aria-hidden="true"
							/>
							<input
								id="project-search"
								name="project-search"
								type="search"
								autoComplete="off"
								value={searchProject}
								onChange={(event) =>
									setSearchProject(event.target.value)
								}
								placeholder="Title, topic, or technology"
								className="h-11 w-full rounded-md border border-white/10 bg-gray-900/70 pl-10 pr-3 text-sm text-white placeholder:text-gray-500 transition-colors duration-200 focus:border-dev-blue/60 focus:outline-none focus:ring-1 focus:ring-dev-blue/40"
							/>
						</div>
					</div>

					<div className="w-full md:w-64">
						<label
							htmlFor="project-category"
							className="block font-mono text-[10px] uppercase tracking-[0.16em] text-gray-500"
						>
							Discipline
						</label>
						<ProjectsFilter
							categories={categories}
							selectProject={selectProject}
							setSelectProject={setSelectProject}
						/>
					</div>
				</div>

				<div className="mt-4 flex flex-wrap items-center justify-between gap-3">
					<p
						role="status"
						aria-live="polite"
						className="text-xs text-gray-500"
					>
						Showing{' '}
						<span className="text-gray-300">
							{filteredProjects.length}
						</span>{' '}
						of {orderedProjects.length} projects
					</p>

					{hasFilters && (
						<button
							type="button"
							onClick={clearFilters}
							className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-xs font-general-semibold text-dev-blue transition-colors duration-200 hover:text-dev-blue-light"
						>
							Clear filters
							<FiX className="h-3.5 w-3.5" aria-hidden="true" />
						</button>
					)}
				</div>
			</div>

			{filteredProjects.length > 0 ? (
				<ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
					{filteredProjects.map((project, index) => (
						<ProjectSingle
							key={project.id}
							{...project}
							priority={index === 0}
						/>
					))}
				</ul>
			) : (
				<div className="mt-8 rounded-lg border border-dashed border-white/10 bg-white/[0.02] px-6 py-16 text-center">
					<h2 className="font-general-semibold text-xl text-white">
						No projects match your search
					</h2>
					<p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-gray-400">
						Try a different title, topic, or technology, or clear the
						discipline filter.
					</p>
					<button
						type="button"
						onClick={clearFilters}
						className="mt-6 inline-flex items-center gap-1.5 rounded-md border border-white/20 bg-white/5 px-4 py-2 text-sm font-general-semibold text-white transition-colors duration-200 hover:border-dev-blue/60 hover:text-dev-blue"
					>
						Clear filters
						<FiX className="h-4 w-4" aria-hidden="true" />
					</button>
				</div>
			)}
		</section>
	);
}

export default ProjectsGrid;
