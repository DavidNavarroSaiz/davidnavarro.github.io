import { useEffect } from 'react';
import { motion } from 'framer-motion';
import AboutExperience from '../components/about/AboutExperience';
import PagesMetaHead from '../components/PagesMetaHead';
import NeuralNetwork from '../components/shared/NeuralNetwork';

function experience() {
	// Force scroll to top on page load
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="relative">
			<PagesMetaHead title="Professional Experience" />

			{/* Neural network background */}
			<NeuralNetwork intensity="low" />

			<div className="container mx-auto relative z-10">
				<AboutExperience />
			</div>
		</div>
	);
}

export default experience;
