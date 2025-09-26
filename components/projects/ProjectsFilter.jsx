const selectOptions = [
	'Machine Learning',
	'Computer Vision',
	'LLMs & RAG',
	'AI Automation',
	'MLOps',
	'Data Science',
	'Deep Learning',
	'Natural Language Processing',
];

function ProjectsFilter({ setSelectProject }) {
	return (
		<select
			onChange={(e) => {
				setSelectProject(e.target.value);
			}}
			className="
                px-4
                sm:px-6
                py-3
                border
                border-gray-600
                rounded-lg
                text-sm
                sm:text-md
                font-medium
                bg-gray-800
                text-white
                focus:border-dev-blue
                focus:ring-1
                focus:ring-dev-blue
                transition-colors
                duration-300
            "
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
