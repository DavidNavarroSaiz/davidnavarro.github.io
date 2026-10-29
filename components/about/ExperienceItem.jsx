import { useState } from 'react';
import Link from 'next/link';
import { FiArrowUpRight, FiMinus, FiPlus } from 'react-icons/fi';
import { projectsData } from '../../data/projectsData';

const projectsById = new Map(projectsData.map((project) => [project.id, project]));

function BulletList({ items, label }) {
	if (!items || items.length === 0) return null;

	return (
		<section aria-label={label}>
			<h3 className="font-general-semibold text-base text-white">{label}</h3>
			<ul className="mt-3 space-y-2.5">
				{items.map((item) => (
					<li
						key={item}
						className="flex items-start gap-3 text-sm leading-relaxed text-gray-300 sm:text-base"
					>
						<span aria-hidden="true" className="mt-0.5 shrink-0 text-dev-blue">
							–
						</span>
						<span>{item}</span>
					</li>
				))}
			</ul>
		</section>
	);
}

function ExperienceItem({ experience }) {
	const [showDetails, setShowDetails] = useState(false);
	const detailsId = `experience-details-${experience.id}`;
	const titleId = `experience-title-${experience.id}`;
	const specialties = experience.specialties || experience.technologies.slice(0, 4);
	const relatedProjects = (experience.relatedProjectIds || [])
		.map((projectId) => projectsById.get(projectId))
		.filter(Boolean)
		.slice(0, 3);

	const toggleDetails = () => setShowDetails((isOpen) => !isOpen);

	const handleSummaryKeyDown = (event) => {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			toggleDetails();
		}
	};

	return (
		<article className="overflow-hidden rounded-lg border border-white/10 bg-gray-900/50 transition-colors duration-200 hover:border-dev-blue/40 motion-reduce:transition-none">
			<div
				role="button"
				tabIndex={0}
				aria-expanded={showDetails}
				aria-controls={detailsId}
				aria-labelledby={titleId}
				onClick={toggleDetails}
				onKeyDown={handleSummaryKeyDown}
				className="group cursor-pointer p-5 text-left outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-dev-blue/70 sm:p-7"
			>
				<div className="flex items-start justify-between gap-4">
					<div className="min-w-0">
						<p className="font-mono text-[11px] uppercase tracking-[0.14em] text-gray-400">
							{experience.period} · {experience.duration}
							{experience.status === 'current' ? ' · Current' : ''}
						</p>
						<h2
							id={titleId}
							className="mt-2 font-general-semibold text-xl leading-snug text-white sm:text-2xl"
						>
							{experience.position}
						</h2>
						<p className="mt-1 text-sm text-gray-300">
							{experience.company} · {experience.location} · {experience.type}
						</p>
					</div>
					<span
						aria-hidden="true"
						className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/15 text-gray-300 transition-colors duration-200 group-hover:border-dev-blue/50 group-hover:text-dev-blue motion-reduce:transition-none"
					>
						{showDetails ? <FiMinus className="h-4 w-4" /> : <FiPlus className="h-4 w-4" />}
					</span>
				</div>

				<p className="mt-4 max-w-3xl text-sm leading-relaxed text-gray-300 sm:text-base">
					{experience.summary}
				</p>

				<ul aria-label="Technical specialties" className="mt-5 flex flex-wrap gap-1.5">
					{specialties.map((specialty) => (
						<li
							key={specialty}
							className="rounded border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs text-gray-300"
						>
							{specialty}
						</li>
					))}
				</ul>

				{experience.impact?.[0] && (
					<div className="mt-5 border-l border-dev-blue/50 pl-3">
						<p className="font-mono text-[10px] uppercase tracking-[0.14em] text-gray-500">
							{experience.impact[0].label}
						</p>
						<p className="mt-1 text-sm font-general-semibold text-dev-blue-light">
							{experience.impact[0].value}
						</p>
					</div>
				)}
			</div>

			{showDetails && (
				<div id={detailsId} className="space-y-8 border-t border-white/10 px-5 pb-6 pt-6 sm:px-7 sm:pb-8">
					<section aria-label="Engineering context">
						<h3 className="font-general-semibold text-base text-white">Engineering context</h3>
						<p className="mt-3 max-w-3xl text-sm leading-relaxed text-gray-300 sm:text-base">
							{experience.context}
						</p>
					</section>

					<BulletList items={experience.ownership} label="What I built and owned" />
					<BulletList items={experience.decisions} label="Key technical decisions" />

					<section aria-label="Technologies and architecture">
						<h3 className="font-general-semibold text-base text-white">Technologies and architecture</h3>
						<ul className="mt-3 flex flex-wrap gap-2">
							{experience.technologies.map((technology) => (
								<li
									key={technology}
									className="rounded border border-dev-blue/20 bg-dev-blue/[0.04] px-2.5 py-1 text-xs text-gray-200"
								>
									{technology}
								</li>
							))}
						</ul>
					</section>

					{experience.impact?.length > 0 && (
						<section aria-label="Impact and outcomes">
							<h3 className="font-general-semibold text-base text-white">Impact and outcomes</h3>
							<div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
								{experience.impact.map((item) => (
									<div key={`${item.label}-${item.value}`} className="rounded border border-white/10 bg-white/[0.025] p-4">
										<p className="font-mono text-[10px] uppercase tracking-[0.14em] text-gray-500">
											{item.label}
										</p>
										<p className="mt-2 text-sm font-general-semibold text-white">{item.value}</p>
										<p className="mt-2 text-xs leading-relaxed text-gray-400">{item.detail}</p>
									</div>
								))}
							</div>
						</section>
					)}

					<div className="flex flex-col gap-5 border-t border-white/10 pt-5 sm:flex-row sm:items-start sm:justify-between">
						{relatedProjects.length > 0 && (
							<section aria-label="Related case studies">
								<h3 className="font-general-semibold text-base text-white">Related case studies</h3>
								<ul className="mt-3 flex flex-wrap gap-2">
									{relatedProjects.map((project) => (
										<li key={project.id}>
											<Link
												href={`/projects/${project.id}/`}
												className="inline-flex items-center gap-1.5 rounded border border-white/10 px-3 py-2 text-sm text-gray-300 transition-colors duration-200 hover:border-dev-blue/50 hover:text-dev-blue-light motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dev-blue/70"
											>
												{project.title}
												<FiArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
											</Link>
										</li>
									))}
								</ul>
							</section>
						)}

						{experience.companyUrl && (
							<a
								href={experience.companyUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex shrink-0 items-center gap-1.5 rounded text-sm font-general-medium text-dev-blue transition-colors duration-200 hover:text-dev-blue-light motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dev-blue/70"
							>
								Visit company
								<FiArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
							</a>
						)}
					</div>
				</div>
			)}
		</article>
	);
}

export default ExperienceItem;
