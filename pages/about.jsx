import { useEffect } from 'react';
import { motion } from 'framer-motion';
import AboutClients from '../components/about/AboutClients';
import AboutMeBio from '../components/about/AboutMeBio';
import AboutSkills from '../components/about/AboutSkills';
import AboutEducation from '../components/about/AboutEducation';
import AboutAchievements from '../components/about/AboutAchievements';
import PagesMetaHead from '../components/PagesMetaHead';
import NeuralNetwork from '../components/shared/NeuralNetwork';
import SectionSeparator from '../components/shared/SectionSeparator';

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

			{/* About Me Bio Section */}
			<section className="relative z-10">
				<div className="container mx-auto">
					<AboutMeBio />
				</div>
			</section>

			{/* Section Separator */}
			<SectionSeparator variant="blue" />

			{/* Technical Skills Section */}
			<section className="relative z-10">
				<div className="container mx-auto">
					<AboutSkills />
				</div>
			</section>

			{/* Section Separator */}
			<SectionSeparator variant="purple" />

			{/* Key Achievements Section */}
			<section className="relative z-10">
				<div className="container mx-auto">
					<AboutAchievements />
				</div>
			</section>

			{/* Section Separator */}
			<SectionSeparator variant="pink" />

			{/* Education & Training Section */}
			<section className="relative z-10">
				<div className="container mx-auto">
					<AboutEducation />
				</div>
			</section>

			{/* Section Separator */}
			<SectionSeparator variant="green" />

			{/* Companies Section */}
			<section className="relative z-10">
				<div className="container mx-auto">
					<AboutClients />
				</div>
			</section>
		</div>
	);
}

export default about;
