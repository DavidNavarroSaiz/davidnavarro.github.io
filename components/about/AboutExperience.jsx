import { useState } from 'react';
import { experienceData } from '../../data/experienceData';
import ExperienceItem from './ExperienceItem';

function AboutExperience() {
	const [activeFilter, setActiveFilter] = useState('all');

	const allTechnologies = [
		...new Set(experienceData.flatMap((exp) => exp.technologies)),
	];
	const filterOptions = [
		{ value: 'all', label: 'All experience' },
		{ value: 'current', label: 'Current role' },
		{ value: 'leadership', label: 'Leadership' },
		...allTechnologies.slice(0, 6).map((tech) => ({
			value: tech.toLowerCase(),
			label: tech,
		})),
	];

	const filteredExperience = experienceData.filter((exp) => {
		if (activeFilter === 'all') return true;
		if (activeFilter === 'current') return exp.status === 'current';
		if (activeFilter === 'leadership')
			return (
				exp.position.toLowerCase().includes('lead') ||
				exp.position.toLowerCase().includes('team')
			);
		return exp.technologies.some(
			(tech) => tech.toLowerCase() === activeFilter
		);
	});

	const countFor = (value) => {
		if (value === 'all') return experienceData.length;
		if (value === 'current')
			return experienceData.filter((exp) => exp.status === 'current')
				.length;
		if (value === 'leadership')
			return experienceData.filter(
				(exp) =>
					exp.position.toLowerCase().includes('lead') ||
					exp.position.toLowerCase().includes('team')
			).length;
		return experienceData.filter((exp) =>
			exp.technologies.some((tech) => tech.toLowerCase() === value)
		).length;
	};

	return (
		<div className="pt-24 sm:pt-28">
			<p className="font-mono text-xs uppercase leading-relaxed tracking-[0.14em] text-dev-blue/90">
				Experience
			</p>
			<h1 className="mt-3 max-w-3xl font-general-semibold text-4xl leading-tight tracking-[-0.02em] text-white sm:text-5xl">
				Professional experience
			</h1>
			<p className="mt-5 max-w-2xl text-base leading-relaxed text-gray-300 sm:text-lg">
				Roles across industrial automation, healthcare, education,
				and enterprise software — from real-time computer vision to
				LLM agents and retrieval infrastructure.
			</p>

			<div
				role="group"
				aria-label="Filter experience"
				className="mt-8 flex flex-wrap gap-2"
			>
				{filterOptions.map((option) => (
					<button
						key={option.value}
						type="button"
						aria-pressed={activeFilter === option.value}
						onClick={() => setActiveFilter(option.value)}
						className={`rounded-full border px-4 py-1.5 text-sm font-general-medium transition-colors duration-200 ${
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
				Showing {filteredExperience.length} of {experienceData.length}{' '}
				roles
			</p>

			<ol className="mt-8 space-y-10 border-l border-white/10 pl-6 sm:pl-8">
				{filteredExperience.map((experience) => (
					<li key={experience.id} className="relative">
						<span
							aria-hidden="true"
							className="absolute -left-6 top-2 h-2.5 w-2.5 -translate-x-1/2 rounded-full border border-dev-blue/60 bg-gray-950 sm:-left-8"
						/>
						<ExperienceItem experience={experience} />
					</li>
				))}
			</ol>
		</div>
	);
}

export default AboutExperience;
