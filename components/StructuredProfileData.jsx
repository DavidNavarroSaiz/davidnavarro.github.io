import Head from 'next/head';
import { CANONICAL_LINKEDIN_URL } from '../data/profileLinks.cjs';

const siteUrl = 'https://davidnavarrosaiz.github.io/davidnavarro.github.io';

function StructuredProfileData() {
	const profileData = {
		'@context': 'https://schema.org',
		'@type': 'ProfilePage',
		name: 'David Navarro — Senior AI Engineer',
		url: `${siteUrl}/about/`,
		mainEntity: {
			'@type': 'Person',
			name: 'David Navarro',
			jobTitle: 'Senior AI Engineer',
			url: `${siteUrl}/about/`,
			homeLocation: {
				'@type': 'Place',
				name: 'Medellín, Colombia',
			},
			knowsAbout: [
				'Production AI agents',
				'AI evaluation and reliability engineering',
				'RAG and vector retrieval',
				'Applied machine learning',
				'Computer vision',
			],
			sameAs: [
				CANONICAL_LINKEDIN_URL,
				'https://github.com/DavidNavarroSaiz',
			],
		},
	};

	return (
		<Head>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(profileData) }}
			/>
		</Head>
	);
}

export default StructuredProfileData;
