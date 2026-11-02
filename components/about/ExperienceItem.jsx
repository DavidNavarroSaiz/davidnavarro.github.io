import { useState } from 'react';
import Link from 'next/link';
import { FiArrowUpRight, FiMinus, FiPlus } from 'react-icons/fi';
import { experienceChapters } from '../../data/experienceData';
import { projectsData } from '../../data/projectsData';
import styles from './ExperienceItem.module.css';

const projectsById = new Map(projectsData.map((project) => [project.id, project]));

function DetailRow({ label, children }) {
	return (
		<div className={styles.detailRow}>
			<dt>{label}</dt>
			<dd>{children}</dd>
		</div>
	);
}

function ExperienceItem({ experience }) {
	const [showDetails, setShowDetails] = useState(false);
	const detailsId = `experience-details-${experience.id}`;
	const titleId = `experience-title-${experience.id}`;
	const specialties = experience.specialties || experience.technologies.slice(0, 4);
	const additionalImpact = experience.impact?.slice(1) || [];
	const relatedProjects = (experience.relatedProjectIds || [])
		.map((projectId) => projectsById.get(projectId))
		.filter(Boolean)
		.slice(0, 3);
	const chapter = experienceChapters[experience.chapter] || experienceChapters.connected;
	const evidence =
		experience.evidence ||
		experience.impact?.[0]?.detail ||
		'Current status and scope are described in the entry record above.';

	const toggleDetails = () => setShowDetails((isOpen) => !isOpen);

	const handleSummaryKeyDown = (event) => {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			toggleDetails();
		}
	};

	return (
		<article className={styles.item} data-open={showDetails}>
			<div
				role="button"
				tabIndex={0}
				aria-expanded={showDetails}
				aria-controls={detailsId}
				aria-labelledby={titleId}
				onClick={toggleDetails}
				onKeyDown={handleSummaryKeyDown}
				className={styles.summary}
			>
				<div className={styles.summaryTop}>
					<p className={styles.period}>
						{experience.period}
						<span aria-hidden="true"> / </span>
						<span style={{ color: chapter.accent }}>{chapter.label}</span>
						{experience.status === 'current' && <span> / Current</span>}
					</p>
					<span
						aria-hidden="true"
						className={`${styles.toggle} ${showDetails ? styles.toggleOpen : ''}`}
					>
						{showDetails ? <FiMinus /> : <FiPlus />}
					</span>
				</div>

				<h2 id={titleId} className={styles.position}>
					{experience.position}
				</h2>
				<p className={styles.companyLine}>
					<strong className={styles.companyName}>{experience.company}</strong>
					{experience.client && (
						<>
							<span aria-hidden="true"> · </span>
							<span className={styles.clientName}>{experience.client}</span>
						</>
					)}{' '}
					· {experience.location} · {experience.type}
				</p>
				{experience.employmentPeriod && (
					<p className={styles.employmentNote}>
						Svitla employment: {experience.employmentPeriod}
					</p>
				)}
				{experience.overlapNote && (
					<p className={styles.overlapNote}>{experience.overlapNote}</p>
				)}

				<p className={styles.summaryCopy}>{experience.summary}</p>

				{experience.domains?.length > 0 && (
					<div className={`${styles.workstreamStrip} ${styles.domainStrip}`}>
						<span className={styles.stripLabel}>Domains</span>
						{experience.domains.slice(0, 3).map((domain) => (
							<span key={domain} className={styles.stripValue}>
								{domain}
							</span>
						))}
					</div>
				)}

				{experience.workstreams?.length > 0 && (
					<div className={styles.workstreamStrip}>
						<span className={styles.stripLabel}>Workstreams</span>
						{experience.workstreams.map((workstream) => (
							<span key={workstream.label} className={styles.stripValue}>
								{workstream.label}
							</span>
						))}
					</div>
				)}

				<ul aria-label="Technical specialties" className={styles.specialties}>
					{specialties.map((specialty) => (
						<li key={specialty}>{specialty}</li>
					))}
				</ul>

				{experience.impact?.[0] && (
					<div className={styles.primaryEvidence}>
						<p>{experience.impact[0].label}</p>
						<strong>{experience.impact[0].value}</strong>
					</div>
				)}
			</div>

			{showDetails && (
				<div
					id={detailsId}
					role="region"
					aria-labelledby={titleId}
					className={styles.details}
				>
					<div
						className={`${styles.detailLayout} ${
							experience.editorialNote ? styles.withNote : styles.withoutNote
						}`}
					>
						{experience.editorialNote && (
							<aside className={styles.editorialNote}>
								<p className={styles.noteLabel}>{experience.editorialNote.label}</p>
								<blockquote>{experience.editorialNote.quote}</blockquote>
								<p>{experience.editorialNote.body}</p>
							</aside>
						)}

						<div className={styles.detailMain}>
							{experience.workstreams?.length > 0 && (
								<section className={styles.workstreams} aria-label="Workstreams">
									<p className={styles.sectionLabel}>Workstreams</p>
									<ul>
										{experience.workstreams.map((workstream, index) => (
											<li key={workstream.label}>
												<span className={styles.workstreamNumber}>
													{String(index + 1).padStart(2, '0')}
												</span>
												<span>
													<strong>{workstream.label}</strong>
													<small>
																	{workstream.period} · {workstream.maturity}
															</small>
															{workstream.responsibility && (
																<small className={styles.workstreamDetail}>{workstream.responsibility}</small>
															)}
															{workstream.implementation && (
																<small className={styles.workstreamDetail}>{workstream.implementation}</small>
															)}
															{workstream.evidence && (
																<small className={styles.workstreamEvidence}>{workstream.evidence}</small>
															)}
												</span>
											</li>
										))}
									</ul>
								</section>
							)}

							<div className={styles.detailHeading}>
								<span className={styles.detailNumber}>01</span>
								<div>
									<h3>Engineering scope</h3>
								</div>
								<span className={styles.detailPeriod}>{experience.period}</span>
							</div>

							{experience.responsibilities?.length > 0 && (
								<section className={styles.responsibilities} aria-label="Professional responsibilities">
									<p className={styles.sectionLabel}>Professional responsibilities</p>
									<ul className={styles.responsibilityList}>
										{experience.responsibilities.map((responsibility) => (
											<li key={responsibility}>{responsibility}</li>
										))}
									</ul>
								</section>
							)}

							<dl className={styles.detailRows}>
								<DetailRow label="The challenge">{experience.context}</DetailRow>
								<DetailRow label="What I implemented">
					{experience.implementationGroups?.length > 0 ? (
						<div className={styles.implementationGroups}>
							{experience.implementationGroups.map((group) => (
								<section key={group.label} className={styles.implementationGroup}>
									<h4>{group.label}</h4>
									<ul className={styles.contributionList}>
										{group.items.map((item) => (
											<li key={item}>{item}</li>
										))}
									</ul>
								</section>
							))}
						</div>
					) : (
						<ul className={styles.contributionList}>
							{experience.ownership.map((item) => (
								<li key={item}>{item}</li>
							))}
						</ul>
					)}
								</DetailRow>
								<DetailRow label="Results & evidence">{evidence}</DetailRow>
							</dl>

							{experience.decisions?.length > 0 && (
								<section className={styles.decisionSection} aria-label="Key technical decisions">
									<p className={styles.sectionLabel}>A decision that shaped the work</p>
									<p className={styles.decisionLead}>{experience.decisions[0]}</p>
									{experience.decisions.length > 1 && (
										<ul className={styles.decisionList}>
											{experience.decisions.slice(1).map((decision) => (
												<li key={decision}>{decision}</li>
											))}
										</ul>
									)}
								</section>
							)}

							<section className={styles.technologySection} aria-label="Technologies and architecture">
								<p className={styles.sectionLabel}>Technologies &amp; architecture</p>
								<ul className={styles.technologyList}>
									{experience.technologies.map((technology) => (
										<li key={technology}>{technology}</li>
									))}
								</ul>
							</section>

							{additionalImpact.length > 0 && (
								<section className={styles.impactSection} aria-label="Impact and outcomes">
									<p className={styles.sectionLabel}>Evidence retained from the role record</p>
									<div className={styles.impactGrid}>
										{additionalImpact.map((item) => (
											<div key={`${item.label}-${item.value}`}>
												<p>{item.label}</p>
												<strong>{item.value}</strong>
												<span>{item.detail}</span>
											</div>
										))}
									</div>
								</section>
							)}

							<div className={styles.detailFooter}>
								{relatedProjects.length > 0 && (
									<section aria-label="Related case studies">
										<p className={styles.sectionLabel}>Related case studies</p>
										<ul className={styles.relatedList}>
											{relatedProjects.map((project) => (
												<li key={project.id}>
													<Link href={`/projects/${project.id}/`}>
														{project.title}
														<FiArrowUpRight aria-hidden="true" />
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
										className={styles.companyLink}
									>
										Visit company <FiArrowUpRight aria-hidden="true" />
									</a>
								)}
							</div>
						</div>
					</div>
				</div>
			)}
		</article>
	);
}

export default ExperienceItem;
