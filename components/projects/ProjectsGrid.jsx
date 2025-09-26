import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import ProjectSingle from './ProjectSingle';
import { projectsData } from '../../data/projectsData';
import ProjectsFilter from './ProjectsFilter';

function ProjectsGrid() {
	const [searchProject, setSearchProject] = useState();
	const [selectProject, setSelectProject] = useState();

	const searchProjectsByTitle = projectsData.filter((item) => {
		if (!searchProject || searchProject === '') {
			return item;
		}
		return item.title
			.toLowerCase()
			.includes(searchProject.toLowerCase());
	});

	const selectProjectsByCategory = projectsData.filter((item) => {
		if (!selectProject || selectProject === '') {
			return item;
		}
		return item.category === selectProject;
	});

	return (
		<section className="py-5 sm:py-10 mt-5 sm:mt-10">
			<div className="text-center">
				<p className="font-general-medium text-2xl sm:text-4xl mb-1 text-white">
					Projects portfolio
				</p>
			</div>

			<div className="mt-10 sm:mt-16">
				<h3
					className="
                        font-general-regular 
                        text-center text-gray-300
                        text-md
                        sm:text-xl
                        mb-3
                        "
				>
					Search projects by title or filter by category
				</h3>
				<div
					className="
                        flex
                        justify-between
                        border-b border-gray-700
                        pb-3
                        gap-3
                        "
				>
					<div className="flex justify-between gap-2">
						<span
							className="
                                hidden
                                sm:block
                                bg-gray-900
                                p-2.5
                                shadow-sm
                                rounded-xl
                                cursor-pointer
                                border border-gray-700
                                "
						>
							<FiSearch className="text-gray-300 w-5 h-5"></FiSearch>
						</span>
						<input
							onChange={(e) => {
								setSearchProject(e.target.value);
							}}
							className="
                                font-general-medium 
                                pl-3
                                pr-1
                                sm:px-4
                                py-2
                                border 
                                border-gray-700
                                rounded-lg
                                text-sm
                                sm:text-md
                                bg-gray-900
                                text-white
                                placeholder-gray-400
                                "
							id="name"
							name="name"
							type="search"
							required=""
							placeholder="Search Projects"
							aria-label="Name"
						/>
					</div>

					<ProjectsFilter setSelectProject={setSelectProject} />
				</div>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-5">
				{(() => {
					let filteredProjects = projectsData;
					
					// Apply search filter
					if (searchProject && searchProject.trim() !== '') {
						filteredProjects = searchProjectsByTitle;
					}
					
					// Apply category filter
					if (selectProject && selectProject !== 'All') {
						filteredProjects = filteredProjects.filter((item) => {
							return item.category === selectProject;
						});
					}
					
					return filteredProjects.map((project, index) => (
						<ProjectSingle key={index} {...project} />
					));
				})()}
			</div>
		</section>
	);
}

export default ProjectsGrid;
