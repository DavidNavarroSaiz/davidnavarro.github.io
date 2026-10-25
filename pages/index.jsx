import fs from 'fs';
import path from 'path';
import { useEffect } from 'react';
import PagesMetaHead from '../components/PagesMetaHead';
import AppHero from '../components/shared/AppHero';
import AppBio from '../components/shared/AppBio';
import NeuralNetwork from '../components/shared/NeuralNetwork';

export default function Home({ cvs }) {
	// Force scroll to top on page load
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="relative">
			<PagesMetaHead title="David Navarro - Senior AI Engineer" />

			{/* Neural network background */}
			<NeuralNetwork intensity="low" />

			<div className="relative z-10">
				<AppHero cvs={cvs} />
			</div>

			<div className="relative z-10">
				<AppBio />
			</div>
		</div>
	);
}

// Only offer CVs whose PDFs exist in public/files at build time (no button otherwise)
const CV_FILES = [
	{ file: 'CV_DavidNavarro_Senior_AI_Engineer.pdf', label: 'Download CV' },
	{
		file: 'CV_DavidNavarro_Senior_AI_Engineer_Evaluation_Research.pdf',
		label: 'CV: Evaluation & Research',
	},
];

export async function getStaticProps() {
	const exists = (file) =>
		fs.existsSync(path.join(process.cwd(), 'public', 'files', file));
	const cvs = CV_FILES.filter((cv) => exists(cv.file));
	return { props: { cvs } };
}
