import { useState } from 'react';
import {
	experienceChapters,
	experienceData,
	industryDomains,
} from '../../data/experienceData';
import ExperienceItem from './ExperienceItem';
import styles from './AboutExperience.module.css';

const filterOptions = [
	{ value: 'all', label: 'All experience' },
	{ value: 'current', label: 'Current work' },
	...industryDomains.map((domain) => ({
		value: domain,
		label: domain,
	})),
];

function matchesFilter(experience, filter) {
	if (filter === 'all') return true;
	if (filter === 'current') return experience.status === 'current';
	return experience.domains.includes(filter);
}

function AboutExperience() {
	const [activeFilter, setActiveFilter] = useState('all');

	const filteredExperience = experienceData.filter((experience) =>
		matchesFilter(experience, activeFilter)
	);

	const countFor = (value) =>
		experienceData.filter((experience) => matchesFilter(experience, value)).length;

	return (
		<div className={styles.page}>
			<header className={styles.intro}>
				<p className={styles.eyebrow}>
					Experience / the work behind the systems
				</p>
				<h1 className={styles.title}>
					Professional experience<span className={styles.titleDot}>.</span>
				</h1>
				<p className={styles.deck}>
					I started with cameras, optics, and inspections that had to work under
					real factory constraints. Today I build AI agents, but I keep asking
					the same questions: what did the system observe, what did it decide,
					and how can we verify the outcome?
				</p>
				<div className={styles.practiceRail}>
					<span className={styles.practiceLabel}>Engineering practice</span>
					<span className={styles.practiceValue}>
						Physical systems → knowledge → verified action
					</span>
				</div>
			</header>

			<div className={styles.filters}>
				<div
					role="group"
					aria-label="Filter experience by engineering domain"
					className={styles.filterGroup}
				>
				{filterOptions.map((option) => (
					<button
						key={option.value}
						type="button"
						aria-pressed={activeFilter === option.value}
						onClick={() => setActiveFilter(option.value)}
						className={`${styles.filterButton} rounded-full border px-4 py-1.5 text-sm font-general-medium transition-colors duration-200 motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dev-blue/70 ${
							activeFilter === option.value
								? 'border-dev-blue/60 bg-dev-blue/10 text-dev-blue'
								: 'border-white/10 bg-white/[0.03] text-gray-300 hover:border-dev-blue/40 hover:text-white'
						}`}
					>
						{option.label} ({countFor(option.value)})
					</button>
				))}
				</div>

				<p
					role="status"
					aria-live="polite"
					className={styles.status}
				>
					<span>
						Showing {filteredExperience.length} of {experienceData.length} entries.
					</span>
					<span className={styles.statusHint}>
						Open an entry for its engineering context, decisions, evidence, and related work.
					</span>
				</p>
			</div>

			<ol className={styles.timeline}>
				{filteredExperience.map((experience) => (
					<li
						key={experience.id}
						className={styles.timelineItem}
						style={{
							'--chapter-accent':
								experienceChapters[experience.chapter]?.accent || '#7FA7B4',
						}}
					>
						<span
							aria-hidden="true"
							className={styles.timelineNode}
						/>
						<ExperienceItem experience={experience} />
					</li>
				))}
			</ol>

			<p className={styles.disclaimer}>
				Employment, professional engagements, and academic research remain clearly
				distinguished. The chapters overlap; they describe shared foundations,
				not a sequence in which earlier engineering became obsolete.
			</p>
		</div>
	);
}

export default AboutExperience;
