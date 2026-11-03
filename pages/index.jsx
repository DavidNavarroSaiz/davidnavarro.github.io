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

	const selectedProjects = featuredProjects.map((project) => {
		const editorialCover = project.caseStudy?.editorialCover;
		const featured = project.featured ?? {};
		const imageAsset = featured.image || project.img || editorialCover?.img;
		const image = imageAsset?.src ?? imageAsset;

		// A project may be featured without having the optional presentation
		// metadata. Keep the homepage data shape complete and skip entries that
		// do not have an image instead of passing undefined to next/image.
		if (!image) return null;

		return {
			id: project.id,
			title: project.title,
			category: project.category,
			publishDate: project.ProjectHeader?.publishDate ?? 'Date not specified',
			image,
			imageAlt:
				project.imageAlt ||
				featured.alt ||
				editorialCover?.alt ||
				`Conceptual illustration for ${project.title}`,
			problem: featured.problem || project.summary,
			approach: featured.approach || project.caseStudy?.overview || project.summary,
			disciplines: featured.disciplines || [project.category],
		};
	}).filter(Boolean);

	return { props: { cvs, selectedProjects } };
}
