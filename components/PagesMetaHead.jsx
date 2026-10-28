import Head from 'next/head';
import { useRouter } from 'next/router';

// Canonical production origin, declared by public/CNAME. If the
// production host ever changes, update this single constant.
const SITE_URL = 'https://davidnavarro.github.io';
const SOCIAL_IMAGE = `${SITE_URL}/images/og-cover.png`;

function PagesMetaHead({ title, keywords, description }) {
	const { basePath, asPath } = useRouter();
	const cleanPath = (asPath || '/').split(/[?#]/)[0];
	const canonical = `${SITE_URL}${cleanPath.startsWith(basePath) ? '' : basePath}${cleanPath}`;
	return (
		<Head>
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1"
			/>
			<meta name="keywords" content={keywords} />
			<meta name="description" content={description} />
			<meta charSet="utf-8" />
			<link rel="icon" href={`${basePath}/images/DN-Logo.svg`} />
			<link rel="canonical" href={canonical} />
			<meta property="og:type" content="website" />
			<meta property="og:site_name" content="David Navarro" />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:url" content={canonical} />
			<meta property="og:image" content={SOCIAL_IMAGE} />
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={SOCIAL_IMAGE} />
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
