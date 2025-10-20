import { useEffect } from 'react';
import { motion } from 'framer-motion';
import AboutClients from '../components/about/AboutClients';
import AboutMeBio from '../components/about/AboutMeBio';
import AboutSkills from '../components/about/AboutSkills';
import AboutEducation from '../components/about/AboutEducation';
import PagesMetaHead from '../components/PagesMetaHead';
import NeuralNetwork from '../components/shared/NeuralNetwork';

function about() {
	// Force scroll to top on page load
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="relative">
			<PagesMetaHead title="About Me" />

			{/* Neural network background */}
			<NeuralNetwork intensity="low" />

			<div className="container mx-auto relative z-10">
				<AboutMeBio />
			</div>

			<div className="container mx-auto relative z-10">
				<AboutSkills />
			</div>

			<div className="container mx-auto relative z-10">
				<AboutEducation />
			</div>

			<div className="container mx-auto relative z-10">
				<AboutClients />
			</div>
		</div>
	);
}

export default about;
