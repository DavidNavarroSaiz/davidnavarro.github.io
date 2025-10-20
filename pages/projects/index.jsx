import { useEffect } from 'react';
import PagesMetaHead from '../../components/PagesMetaHead';
import ProjectsGrid from '../../components/projects/ProjectsGrid';
import AnimatedBackground from '../../components/shared/AnimatedBackground';
import NeuralNetwork from '../../components/shared/NeuralNetwork';

function index() {
	// Force scroll to top on page load
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="container mx-auto relative">
			<PagesMetaHead title="Projects" />
			
			{/* Neural network background */}
			<NeuralNetwork intensity="medium" />
			
			<ProjectsGrid />
		</div>
	);
}

export default index;
