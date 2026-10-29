import { useState } from 'react';
import { experienceData, industryDomains } from '../../data/experienceData';
import ExperienceItem from './ExperienceItem';

const filterOptions = [
	{ value: 'all', label: 'All experience' },
	{ value: 'current', label: 'Current roles' },
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
		<div className="pt-24 sm:pt-28">
			<p className="font-mono text-xs uppercase leading-relaxed tracking-[0.14em] text-dev-blue/90">
				Experience
			</p>
			<h1 className="mt-3 max-w-3xl font-general-semibold text-4xl leading-tight tracking-[-0.02em] text-white sm:text-5xl">
				Professional experience
			</h1>
			<p className="mt-5 max-w-3xl text-base leading-relaxed text-gray-300 sm:text-lg">
				A career moving from industrial computer vision and applied research
				into retrieval platforms, governed agents, and evaluation systems.
				Scan the timeline first; open any role for the engineering context,
				decisions, and related case studies.
			</p>

			<div
				role="group"
				aria-label="Filter experience by engineering domain"
				className="mt-8 flex flex-wrap gap-2"
			>
				{filterOptions.map((option) => (
					<button
						key={option.value}
						type="button"
						aria-pressed={activeFilter === option.value}
						onClick={() => setActiveFilter(option.value)}
						className={`rounded-full border px-4 py-1.5 text-sm font-general-medium transition-colors duration-200 motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dev-blue/70 ${
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
				className="mt-4 text-sm text-gray-500"
			>
				Showing {filteredExperience.length} of {experienceData.length} roles.
				<span className="ml-2 text-gray-600">
					Select a role card with Enter or Space to expand it.
				</span>
			</p>

			<ol className="mt-8 space-y-8 border-l border-white/10 pl-6 sm:space-y-10 sm:pl-8">
				{filteredExperience.map((experience) => (
					<li key={experience.id} className="relative">
						<span
							aria-hidden="true"
							className="absolute -left-6 top-6 h-2.5 w-2.5 -translate-x-1/2 rounded-full border border-dev-blue/60 bg-gray-950 sm:-left-8"
						/>
						<ExperienceItem experience={experience} />
					</li>
				))}
			</ol>
		</div>
	);
}

export default AboutExperience;
