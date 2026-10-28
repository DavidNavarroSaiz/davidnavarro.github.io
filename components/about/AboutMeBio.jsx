import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import { aboutMeData } from '../../data/aboutMeData';
import {
	experienceStats,
	industryDomains,
} from '../../data/experienceData';
import { projectsData } from '../../data/projectsData';

const focusAreas = [
	'End-to-end system design',
	'Data ingestion and retrieval pipelines',
	'Offline and online evaluation',
	'Deployment and observability',
	'LLMOps and CI/CD',
	'Multi-agent orchestration',
];

function AboutMeBio() {
	return (
		<div className="pt-24 sm:pt-28">
			<p className="font-mono text-xs uppercase leading-relaxed tracking-[0.14em] text-dev-blue/90">
				About
			</p>
			<h1 className="mt-3 max-w-3xl font-general-semibold text-4xl leading-tight tracking-[-0.02em] text-white sm:text-5xl">
				Senior AI engineer building production ML and LLM systems.
			</h1>

			<div className="mt-6 max-w-3xl space-y-5">
				{aboutMeData.map((bio) => (
					<p
						key={bio.id}
						className="text-base leading-relaxed text-gray-300 sm:text-lg"
					>
						{bio.bio}
					</p>
				))}
			</div>

			<dl className="mt-10 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 sm:grid-cols-4">
				{[
					{
						label: 'Years experience',
						value: String(experienceStats.totalYears),
					},
					{
						label: 'Technologies',
						value: String(experienceStats.technologies),
					},
					{ label: 'Projects', value: String(projectsData.length) },
					{
						label: 'Industries',
						value: String(industryDomains.length),
					},
				].map((stat) => (
					<div key={stat.label} className="bg-gray-950 px-5 py-6">
						<dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-gray-400">
							{stat.label}
						</dt>
						<dd className="mt-2 font-general-semibold text-2xl text-white">
							{stat.value}
						</dd>
					</div>
				))}
			</dl>

			<div className="mt-10 max-w-3xl">
				<h2 className="font-general-semibold text-lg text-white">
					Areas of focus
				</h2>
				<ul className="mt-4 flex flex-wrap gap-2">
					{focusAreas.map((area) => (
						<li
							key={area}
							className="rounded border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-gray-200"
						>
							{area}
						</li>
					))}
				</ul>
			</div>

			<Link
				href="/experience"
				className="mt-10 inline-flex items-center gap-2 text-sm font-general-semibold text-dev-blue transition-colors duration-200 hover:text-dev-blue-light"
			>
				See professional experience
				<FiArrowRight className="h-4 w-4" aria-hidden="true" />
			</Link>
		</div>
	);
}

export default AboutMeBio;
