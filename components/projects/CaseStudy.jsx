import Image from 'next/image';
import Link from 'next/link';
import { FiArrowLeft, FiArrowUpRight } from 'react-icons/fi';

const headingClass =
	'font-general-semibold text-2xl leading-tight tracking-[-0.01em] text-white sm:text-[1.7rem]';
const proseClass = 'mt-4 text-base leading-relaxed text-gray-300 sm:text-lg';

function Section({ id, title, children }) {
	return (
		<section
			id={id}
			aria-labelledby={`${id}-heading`}
			className="scroll-mt-28 border-t border-white/10 pt-10"
		>
			<h2 id={`${id}-heading`} className={headingClass}>
				{title}
			</h2>
			{children}
		</section>
	);
}

// Renders a project's optional `caseStudy` data. Sections without content are
// skipped, so a case study only shows what has been verified.
function CaseStudy({ project }) {
	const { title, category, ProjectHeader, ProjectInfo, caseStudy } = project;
	const { problem, architecture, implementation, decisions, evidence, limitations, links } =
		caseStudy;

	const facts = (ProjectInfo?.CompanyInfo ?? []).filter((info) =>
		['Role', 'Duration'].includes(info.title)
	);
	const technologies = ProjectInfo?.Technologies?.[0]?.techs ?? [];

	const sections = [
		problem && { id: 'problem', label: 'Problem and context' },
		architecture && { id: 'architecture', label: 'System architecture' },
		implementation?.length && { id: 'implementation', label: 'Implementation' },
		decisions?.length && { id: 'decisions', label: 'Decisions and trade-offs' },
		evidence?.length && { id: 'evidence', label: 'Evaluation and operations' },
		limitations?.length && { id: 'limitations', label: 'Limitations and lessons' },
		technologies.length && { id: 'technologies', label: 'Technologies' },
		links?.length && { id: 'links', label: 'Links' },
	].filter(Boolean);

	const renderItems = (items) => (
		<dl className="mt-6 space-y-6">
			{items.map((item) => (
				<div key={item.title}>
					<dt className="font-general-semibold text-lg text-white">{item.title}</dt>
					<dd className="mt-1.5 text-base leading-relaxed text-gray-300 sm:text-lg">
						{item.body}
					</dd>
				</div>
			))}
		</dl>
	);

	return (
		<article className="container mx-auto pb-8 pt-24 sm:pt-28">
			<Link
				href="/projects"
				className="inline-flex items-center gap-2 rounded text-sm font-general-semibold text-gray-300 transition-colors duration-200 hover:text-dev-blue"
			>
				<FiArrowLeft aria-hidden="true" className="h-4 w-4" />
				All projects
			</Link>

			<header className="mt-8 max-w-3xl">
				<p className="font-mono text-xs uppercase leading-relaxed tracking-[0.14em] text-dev-blue/90">
					{category}
				</p>
				<h1 className="mt-3 font-general-semibold text-4xl leading-tight tracking-[-0.02em] text-white sm:text-5xl">
					{ProjectHeader?.title ?? title}
				</h1>
				<p className="mt-5 text-lg leading-relaxed text-gray-300 sm:text-xl">
					{caseStudy.overview}
				</p>
				{facts.length > 0 && (
					<dl className="mt-6 flex flex-wrap gap-x-10 gap-y-3 border-y border-white/10 py-4">
						{facts.map((fact) => (
							<div key={fact.id}>
								<dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-gray-400">
									{fact.title}
								</dt>
								<dd className="mt-1 text-sm text-white">{fact.details}</dd>
							</div>
						))}
					</dl>
				)}
			</header>

			<div className="mt-12 grid gap-10 lg:grid-cols-[13rem_minmax(0,1fr)] lg:gap-14">
				<nav aria-label="On this page" className="lg:sticky lg:top-28 lg:self-start">
					<p className="font-mono text-[11px] uppercase tracking-[0.14em] text-gray-400">
						On this page
					</p>
					<ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2 lg:block lg:space-y-2">
						{sections.map((section) => (
							<li key={section.id}>
								<a
									href={`#${section.id}`}
									className="rounded text-sm text-gray-300 transition-colors duration-200 hover:text-dev-blue"
								>
									{section.label}
								</a>
							</li>
						))}
					</ul>
				</nav>

				<div className="min-w-0 max-w-3xl space-y-12">
					{problem && (
						<Section id="problem" title="Problem and context">
							<p className={proseClass}>{problem}</p>
						</Section>
					)}

					{architecture && (
						<Section id="architecture" title="System architecture">
							{architecture.summary && <p className={proseClass}>{architecture.summary}</p>}
							{architecture.diagram && (
								<figure className="mt-8">
									<div className="overflow-hidden rounded-lg border border-white/10 bg-gray-950">
										<Image
											src={architecture.diagram.img}
											alt={architecture.diagram.alt}
											sizes="(max-width: 1023px) 100vw, 768px"
											loading="lazy"
											className="mx-auto h-auto w-full max-w-xl"
										/>
									</div>
									{architecture.diagram.caption && (
										<figcaption className="mt-3 text-sm text-gray-400">
											{architecture.diagram.caption}
										</figcaption>
									)}
								</figure>
							)}
							{architecture.components?.length > 0 && (
								<>
									<h3 className="mt-10 font-general-semibold text-lg text-white">
										Main components
									</h3>
									<ul className="mt-4 divide-y divide-white/10 border-y border-white/10">
										{architecture.components.map((component) => (
											<li
												key={component.name}
												className="grid gap-1 py-3 sm:grid-cols-[13rem_minmax(0,1fr)] sm:gap-6"
											>
												<span className="font-general-semibold text-white">
													{component.name}
												</span>
												<span className="text-gray-300">{component.role}</span>
											</li>
										))}
									</ul>
								</>
							)}
						</Section>
					)}

					{implementation?.length > 0 && (
						<Section id="implementation" title="Implementation">
							{renderItems(implementation)}
						</Section>
					)}

					{decisions?.length > 0 && (
						<Section id="decisions" title="Decisions and trade-offs">
							{renderItems(decisions)}
						</Section>
					)}

					{evidence?.length > 0 && (
						<Section id="evidence" title="Evaluation and operations">
							{renderItems(evidence)}
						</Section>
					)}

					{limitations?.length > 0 && (
						<Section id="limitations" title="Limitations and lessons">
							{renderItems(limitations)}
						</Section>
					)}

					{technologies.length > 0 && (
						<Section id="technologies" title="Technologies">
							<ul className="mt-5 flex flex-wrap gap-2">
								{technologies.map((tech) => (
									<li
										key={tech}
										className="rounded border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-gray-200"
									>
										{tech}
									</li>
								))}
							</ul>
						</Section>
					)}

					{links?.length > 0 && (
						<Section id="links" title="Links">
							<ul className="mt-5 space-y-2">
								{links.map((link) => (
									<li key={link.href}>
										<a
											href={link.href}
											target="_blank"
											rel="noopener noreferrer"
											className="inline-flex items-center gap-1.5 rounded text-dev-blue hover:underline"
										>
											{link.label}
											<FiArrowUpRight aria-hidden="true" className="h-4 w-4" />
										</a>
									</li>
								))}
							</ul>
						</Section>
					)}
				</div>
			</div>
		</article>
	);
}

export default CaseStudy;
