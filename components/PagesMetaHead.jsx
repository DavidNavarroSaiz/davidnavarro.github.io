import Head from 'next/head';

function PagesMetaHead({ title, keywords, description }) {
	return (
		<Head>
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1"
			/>
			<meta name="keywords" content={keywords} />
			<meta name="description" content={description} />
			<meta charSet="utf-8" />
			<link rel="icon" href="/images/DN-Logo.svg" />
			<title>{title}</title>
		</Head>
	);
}

PagesMetaHead.defaultProps = {
	title: 'David Navarro - Machine Learning Engineer',
	keywords: 'machine learning, computer vision, AI, automation, python, pytorch, tensorflow',
	description: 'Machine Learning Engineer specializing in Computer Vision, AI & Automation. 6+ years of experience in ML systems, LLMOps, and production deployments.',
};

export default PagesMetaHead;
