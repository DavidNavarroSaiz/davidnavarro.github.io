import fs from 'fs';
import path from 'path';
import { useEffect } from 'react';
import PagesMetaHead from '../components/PagesMetaHead';
import SelectedWork from '../components/home/SelectedWork';
import AppHero from '../components/shared/AppHero';
import AppBio from '../components/shared/AppBio';
import { featuredProjects } from '../data/projectsData';

export default function Home({ cvs, selectedProjects }) {
	// Force scroll to top on page load
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div>
			<PagesMetaHead title="David Navarro - Senior AI Engineer" />
			<AppHero cvs={cvs} />
			<SelectedWork projects={selectedProjects} />
			<AppBio />
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

	const selectedProjects = featuredProjects.map((project) => ({
		id: project.id,
		title: project.title,
		category: project.category,
		publishDate: project.ProjectHeader.publishDate,
		image: (project.featured.image || project.img).src,
		imageAlt: project.featured.alt,
		problem: project.featured.problem,
		approach: project.featured.approach,
		disciplines: project.featured.disciplines,
	}));

	return { props: { cvs, selectedProjects } };
}
