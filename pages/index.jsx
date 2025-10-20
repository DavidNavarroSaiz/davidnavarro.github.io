import { useEffect } from 'react';
import PagesMetaHead from '../components/PagesMetaHead';
import AppHero from '../components/shared/AppHero';
import AppBio from '../components/shared/AppBio';
import NeuralNetwork from '../components/shared/NeuralNetwork';

export default function Home() {
	// Force scroll to top on page load
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="relative">
			<PagesMetaHead title="David Navarro - Machine Learning Engineer" />

			{/* Neural network background */}
			<NeuralNetwork intensity="low" />

			<div className="relative z-10">
				<AppHero />
			</div>

			<div className="relative z-10">
				<AppBio />
			</div>
		</div>
	);
}
