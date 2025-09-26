const selectOptions = [
	'Computer Vision',
	'LLMs and RAG',
	'AI Automation',
];

function ProjectsFilter({ setSelectProject }) {
	return (
		<select
			onChange={(e) => {
				setSelectProject(e.target.value);
			}}
			className="filter-select"
		>
			<option value="All" className="text-sm sm:text-md">
				All AI/ML Projects
			</option>

			{selectOptions.map((option) => (
				<option className="text-normal sm:text-md" key={option}>
					{option}
				</option>
			))}
		</select>
	);
}

export default ProjectsFilter;
