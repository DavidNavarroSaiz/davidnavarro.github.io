import { useState } from 'react';

function ExperienceItem({ experience }) {
	const [showDetails, setShowDetails] = useState(false);
	const detailsId = `experience-details-${experience.id}`;

	return (
		<article className="rounded-lg border border-white/10 bg-gray-900/50 p-6 transition-colors duration-200 hover:border-dev-blue/40 sm:p-8">
			<div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
				<div>
					<p className="font-mono text-[11px] uppercase tracking-[0.14em] text-gray-400">
						{experience.period}
						{experience.status === 'current' ? ' · Current' : ''}
					</p>
					<h2 className="mt-2 font-general-semibold text-xl leading-snug text-white sm:text-2xl">
						{experience.position}
					</h2>
					<p className="mt-1 text-sm text-gray-300">
						{experience.company} · {experience.location} ·{' '}
						{experience.type}
					</p>
				</div>
				{experience.companyUrl && (
					<a
						href={experience.companyUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="shrink-0 rounded text-sm font-general-medium text-dev-blue transition-colors duration-200 hover:text-dev-blue-light"
					>
						Visit company
					</a>
				)}
			</div>

			<p className="mt-4 max-w-3xl text-sm leading-relaxed text-gray-300 sm:text-base">
				{experience.description}
			</p>

			<ul
				aria-label="Technologies"
				className="mt-5 flex flex-wrap gap-1.5"
			>
				{experience.technologies.map((tech) => (
					<li
						key={tech}
						className="rounded border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs text-gray-300"
					>
						{tech}
					</li>
				))}
			</ul>

			<button
				type="button"
				onClick={() => setShowDetails(!showDetails)}
				aria-expanded={showDetails}
				aria-controls={detailsId}
				className="mt-6 inline-flex items-center gap-2 rounded text-sm font-general-semibold text-gray-300 transition-colors duration-200 hover:text-dev-blue"
			>
				<span aria-hidden="true">{showDetails ? '−' : '+'}</span>
				{showDetails
					? 'Hide achievements and responsibilities'
					: 'Show achievements and responsibilities'}
			</button>

			{showDetails && (
				<div id={detailsId} className="mt-6 space-y-8 border-t border-white/10 pt-6">
					<section aria-label="Key achievements">
						<h3 className="font-general-semibold text-base text-white">
							Key achievements
						</h3>
						<ul className="mt-3 space-y-2.5">
							{experience.achievements.map((achievement, index) => (
								<li
									key={index}
									className="flex items-start gap-3 text-sm leading-relaxed text-gray-300 sm:text-base"
								>
									<span
										aria-hidden="true"
										className="mt-0.5 shrink-0 text-dev-blue"
									>
										–
									</span>
									<span>{achievement}</span>
								</li>
							))}
						</ul>
					</section>

					{experience.tasks && experience.tasks.length > 0 && (
						<section aria-label="Main responsibilities">
							<h3 className="font-general-semibold text-base text-white">
								Main responsibilities
							</h3>
							<ul className="mt-3 space-y-2.5">
								{experience.tasks.map((task, index) => (
									<li
										key={index}
										className="flex items-start gap-3 text-sm leading-relaxed text-gray-300 sm:text-base"
									>
										<span
											aria-hidden="true"
											className="mt-0.5 shrink-0 text-gray-500"
										>
											–
										</span>
										<span>{task}</span>
									</li>
								))}
							</ul>
						</section>
					)}
				</div>
			)}
		</article>
	);
}

export default ExperienceItem;
