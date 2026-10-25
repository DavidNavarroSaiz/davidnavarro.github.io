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
	title: 'David Navarro - Senior AI Engineer',
	keywords: 'senior AI engineer, AI agents, LLM evaluation, AI platforms, applied machine learning, MLOps, python',
	description: 'Senior AI Engineer specializing in production AI agents, LLM evaluation, AI platforms, and applied ML. 7+ years of experience designing and deploying ML and LLM systems.',
};

export default PagesMetaHead;
