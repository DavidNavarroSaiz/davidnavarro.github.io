import { FiChevronDown } from 'react-icons/fi';

function ProjectsFilter({ categories, selectProject, setSelectProject }) {
	return (
		<div className="relative mt-2">
			<select
				id="project-category"
				name="project-category"
				value={selectProject}
				onChange={(event) => setSelectProject(event.target.value)}
				className="filter-select"
			>
				<option value="All">All disciplines</option>

				{categories.map((category) => (
					<option key={category} value={category}>
						{category}
					</option>
				))}
			</select>
			<FiChevronDown
				className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500"
				aria-hidden="true"
			/>
		</div>
	);
}

export default ProjectsFilter;
