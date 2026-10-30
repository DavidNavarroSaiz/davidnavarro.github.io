import Link from 'next/link';
import styles from './EngineeringJourney.module.css';

const chapters = [
	{
		number: '01',
		label: 'Foundations',
		years: '2019–2023',
		heading: ['Industrial Vision ', '& Applied ML'],
		focus:
			'Camera and optics integration, image processing, deep learning, and industrial automation.',
		accent: '#C58B69',
		projects: [
			{ label: 'Industrial Vision', href: '/projects/10/' },
			{ label: 'COVID-RX', href: '/projects/3/' },
		],
	},
	{
		number: '02',
		label: 'Connected Systems',
		years: '2024–2025',
		heading: ['Retrieval ', '& Applied AI'],
		focus:
			'Document ingestion, vector retrieval, enterprise integrations, and AI-assisted workflows.',
		accent: '#A97946',
		projects: [
			{ label: 'Document Ingestion', href: '/projects/14/' },
			{ label: 'PM AI Agent', href: '/projects/1/' },
		],
	},
	{
		number: '03',
		label: 'Reliable AI',
		years: '2025–present',
		heading: ['Agent Platforms ', '& Evaluation'],
		focus:
			'Stateful orchestration, governed actions, execution boundaries, and repeatable evaluation.',
		accent: '#96A18D',
		projects: [
			{ label: 'Policy-Governed Agents', href: '/projects/17/' },
			{ label: 'Agent Evaluation', href: '/projects/20/' },
		],
	},
];

function EngineeringJourney() {
	return (
		<section
			className={styles.journey}
			aria-labelledby="engineering-journey-heading"
		>
			<div className={styles.meta}>
				<span className={styles.metaLeft}>
					<span className={styles.metaSquare} aria-hidden="true" />
					Engineering journey
				</span>
				<span className={styles.metaRight}>
					Three overlapping chapters / 01—03
				</span>
			</div>

			<div className={styles.headingRow}>
				<h2 id="engineering-journey-heading">
					From pixels to production AI.
				</h2>
				<p>
					Overlapping chapters. <strong>Shared foundations.</strong>
				</p>
			</div>

			<div className={styles.axis} aria-hidden="true">
				{chapters.map((chapter) => (
					<span
						key={chapter.number}
						className={styles.axisDot}
						style={{ '--chapter-accent': chapter.accent }}
					/>
				))}
			</div>

			<ol className={styles.chapters}>
				{chapters.map((chapter) => (
					<li
						key={chapter.number}
						className={styles.chapter}
						style={{ '--chapter-accent': chapter.accent }}
					>
						<div className={styles.chapterMeta}>
							<span className={styles.chapterNumber}>{chapter.number}</span>
							<span className={styles.years}>{chapter.years}</span>
						</div>
						<span className={styles.chapterLabel}>{chapter.label}</span>
						<h3 className={styles.chapterTitle}>
							{chapter.heading[0]}
							<br className={styles.desktopBreak} />
							{chapter.heading[1]}
						</h3>
						<p className={styles.chapterFocus}>{chapter.focus}</p>
						<div
							className={styles.links}
							aria-label={`${chapter.label} representative projects`}
						>
							{chapter.projects.map((project) => (
								<Link key={project.href} href={project.href}>
									{project.label}
									<span className={styles.arrow} aria-hidden="true">
										↗
									</span>
								</Link>
							))}
						</div>
					</li>
				))}
			</ol>
		</section>
	);
}

export default EngineeringJourney;
