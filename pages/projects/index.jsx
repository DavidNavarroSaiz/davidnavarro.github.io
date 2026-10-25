import { useEffect } from 'react';
import PagesMetaHead from '../../components/PagesMetaHead';
import ProjectsGrid from '../../components/projects/ProjectsGrid';

function Projects() {
	// Force scroll to top on page load
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="container mx-auto">
			<PagesMetaHead title="Projects" />
			<ProjectsGrid />
		</div>
	);
}

export default Projects;
