import Head from 'next/head';
import { useRouter } from 'next/router';
import { experienceYears } from '../data/experienceData';

// Canonical production origin: the default GitHub Pages project URL
// (verified serving HTTP 200). Do not point this at an unverified
// custom domain.
const SITE_URL = 'https://davidnavarrosaiz.github.io/davidnavarro.github.io';
const SOCIAL_IMAGE = `${SITE_URL}/images/og-cover.png`;

function PagesMetaHead({ title, keywords, description }) {
	const { basePath, asPath } = useRouter();
	const rawPath = (asPath || '/').split(/[?#]/)[0];
	// asPath already carries basePath at runtime; strip it since SITE_URL
	// ends with the production subpath.
	const path =
		basePath && rawPath.startsWith(basePath)
			? rawPath.slice(basePath.length) || '/'
			: rawPath;
	const canonical = `${SITE_URL}${path}`;
	return (
		<Head>
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1"
			/>
			<meta name="keywords" content={keywords} />
			<meta name="description" content={description} />
			<meta charSet="utf-8" />
			<link
				rel="icon"
				type="image/svg+xml"
				href={`${basePath}/images/dn-favicon.svg`}
			/>
			<link
				rel="apple-touch-icon"
				href={`${basePath}/images/dn-favicon-180.png`}
			/>
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
	description: `Senior AI Engineer specializing in production AI agents, LLM evaluation, AI platforms, and applied ML. ${experienceYears}+ years of experience designing and deploying ML and LLM systems.`,
};

export default PagesMetaHead;
