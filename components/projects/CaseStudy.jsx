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

const diagramToneStyles = {
	controlled: 'border-white/15 bg-white/[0.03] text-gray-300',
	captured: 'border-dev-blue/30 bg-dev-blue/5 text-dev-blue-light',
	automated: 'border-dev-cyan/40 bg-dev-cyan/10 text-dev-cyan',
	assisted: 'border-amber-300/30 bg-amber-300/5 text-amber-200',
};

function ArchitectureFigure({ figure }) {
	return (
		<figure className="mt-6">
			<div className="overflow-hidden rounded-md border border-white/10 bg-gray-950">
				<Image
					src={figure.img}
					alt={figure.alt}
					sizes="(max-width: 1023px) 100vw, 768px"
					loading="lazy"
					className="h-auto w-full"
				/>
			</div>
			{figure.caption && <figcaption className="mt-3 text-sm text-gray-400">{figure.caption}</figcaption>}
		</figure>
	);
}

function EditorialCover({ cover }) {
	return (
		<figure className="mt-10 max-w-5xl">
			<div className="overflow-hidden rounded-lg border border-white/10 bg-gray-950">
				<Image
					src={cover.img}
					alt={cover.alt}
					sizes="(max-width: 1023px) 100vw, 1024px"
					priority
					className="h-auto w-full"
				/>
			</div>
			{cover.caption && <figcaption className="mt-3 text-sm text-gray-400">{cover.caption}</figcaption>}
		</figure>
	);
}

const capabilityStatusStyles = {
	Implemented: 'border-dev-blue/30 bg-dev-blue/5 text-dev-blue-light',
	Validated: 'border-dev-cyan/40 bg-dev-cyan/10 text-dev-cyan',
	'Owner-confirmed': 'border-dev-blue/30 bg-dev-blue/5 text-dev-blue-light',
	Partial: 'border-amber-300/30 bg-amber-300/5 text-amber-200',
	Restricted: 'border-amber-300/30 bg-amber-300/5 text-amber-200',
	Disabled: 'border-white/15 bg-white/[0.03] text-gray-300',
	Planned: 'border-dev-blue/20 bg-dev-blue/[0.03] text-gray-400',
	Unverified: 'border-white/15 bg-white/[0.03] text-gray-400',
	'Not found': 'border-white/15 bg-white/[0.03] text-gray-400',
};

function CapabilityStatusMatrix({ items }) {
	return (
		<ul className="mt-6 space-y-3" aria-label="Capability status matrix">
			{items.map((item) => (
				<li
					key={item.title}
					className="grid gap-3 rounded-md border border-white/10 bg-white/[0.025] p-4 sm:grid-cols-[minmax(0,1fr)_10rem] sm:items-start"
				>
					<div>
						<h3 className="font-general-semibold text-base text-white">{item.title}</h3>
						<p className="mt-1.5 text-sm leading-relaxed text-gray-400">{item.description}</p>
					</div>
					<span
						className={`inline-flex w-fit items-center rounded border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] ${capabilityStatusStyles[item.status] ?? capabilityStatusStyles.Planned}`}
					>
						{item.status}
					</span>
				</li>
			))}
		</ul>
	);
}

function DiagramFallback({ figure }) {
	return (
		<div className="mt-6 rounded-lg border border-white/10 bg-gray-950/70 p-4">
			<p className="font-mono text-[10px] uppercase tracking-[0.14em] text-gray-500">
				Readable mobile sequence
			</p>
			<ol className="mt-4 space-y-3">
				{figure.mobileFallback.map((item, index) => (
					<li key={item.title} className="flex gap-3 rounded-md border border-white/10 bg-white/[0.025] p-3">
						<span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-dev-blue/40 font-mono text-[10px] text-dev-blue">
							{String(index + 1).padStart(2, '0')}
						</span>
						<div>
							<h4 className="font-general-semibold text-sm text-white">{item.title}</h4>
							<p className="mt-1 text-sm leading-relaxed text-gray-400">{item.description}</p>
						</div>
					</li>
				))}
			</ol>
			{figure.caption && <p className="mt-4 text-sm text-gray-400">{figure.caption}</p>}
		</div>
	);
}

function WorkflowDiagram({ workflow }) {
	return (
		<div className="mt-8 rounded-lg border border-white/10 bg-gray-950/70 p-5 sm:p-6">
			<div className="flex flex-col gap-2 border-b border-white/10 pb-5 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
				<div>
					<h3 className="font-general-semibold text-lg text-white">{workflow.title}</h3>
					<p className="mt-2 text-sm leading-relaxed text-gray-400">{workflow.summary}</p>
				</div>
				<span className="inline-flex w-fit shrink-0 items-center rounded border border-dev-blue/30 bg-dev-blue/5 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-dev-blue-light">
					Method boundary
				</span>
			</div>

			{workflow.figure && (
				<div className="hidden md:block">
					<ArchitectureFigure figure={workflow.figure} />
				</div>
			)}

			<div className={workflow.figure ? 'md:hidden' : ''}>
				<ol className="mt-6 border-l border-dev-blue/30 pl-5 sm:pl-7">
					{workflow.steps.map((step, index) => (
						<li key={step.title} className="relative pb-5 last:pb-0">
							<span className="absolute -left-[2.05rem] top-0 inline-flex h-7 w-7 items-center justify-center rounded-full border border-dev-blue/50 bg-gray-950 font-mono text-[10px] text-dev-blue sm:-left-[2.65rem]">
								{String(index + 1).padStart(2, '0')}
							</span>
							<div className="rounded-md border border-white/10 bg-white/[0.025] p-4">
								<div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
									<h4 className="font-general-semibold text-base text-white">{step.title}</h4>
									<span
										className={`inline-flex w-fit rounded border px-2 py-1 font-mono text-[10px] uppercase tracking-[0.1em] ${
											diagramToneStyles[step.type] ?? diagramToneStyles.controlled
										}`}
									>
										{step.mode}
									</span>
								</div>
								<p className="mt-2 text-sm leading-relaxed text-gray-300">{step.description}</p>
							</div>
						</li>
					))}
				</ol>

				<div className="mt-6 border-t border-white/10 pt-4" aria-label="Workflow legend">
					<p className="font-mono text-[10px] uppercase tracking-[0.14em] text-gray-500">Legend</p>
					<ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-xs text-gray-400">
						{[
							['controlled', 'Controlled input'],
							['captured', 'Captured evidence'],
							['automated', 'Automated checks'],
							['assisted', 'Manual / assisted review'],
						].map(([type, label]) => (
							<li key={type} className="inline-flex items-center gap-2">
								<span
									aria-hidden="true"
									className={`h-2 w-2 rounded-full ${
										type === 'automated'
											? 'bg-dev-cyan'
											: type === 'assisted'
												? 'bg-amber-200'
												: type === 'captured'
													? 'bg-dev-blue'
													: 'bg-gray-400'
									}`}
								/>
								{label}
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}

function ArtifactStructure({ structure }) {
	return (
		<div className="mt-8 rounded-lg border border-white/10 bg-gray-950/70 p-5 sm:p-6">
			<h3 className="font-general-semibold text-lg text-white">{structure.title}</h3>
			<p className="mt-2 max-w-2xl text-sm leading-relaxed text-gray-400">{structure.summary}</p>

			{structure.figure && (
				<div className="hidden md:block">
					<ArchitectureFigure figure={structure.figure} />
				</div>
			)}

			<div className={structure.figure ? 'md:hidden' : ''}>
				<div className="mt-6 rounded-md border border-dev-blue/40 bg-dev-blue/5 px-4 py-3">
					<p className="font-mono text-[10px] uppercase tracking-[0.14em] text-dev-blue">Root</p>
					<p className="mt-1 font-general-semibold text-white">{structure.rootLabel}</p>
				</div>

				<ul className="mt-3 grid gap-3 sm:grid-cols-2">
					{structure.items.map((item) => (
						<li key={item.title} className="rounded-md border border-white/10 bg-white/[0.025] p-4">
							<div className="flex items-start justify-between gap-3">
								<h4 className="font-general-semibold text-sm text-white">{item.title}</h4>
								<span
									className={`h-2 w-2 shrink-0 rounded-full ${
										item.type === 'automated'
											? 'bg-dev-cyan'
											: item.type === 'assisted'
												? 'bg-amber-200'
												: 'bg-dev-blue'
									}`}
									aria-label={item.type}
								/>
							</div>
							<p className="mt-2 text-sm leading-relaxed text-gray-400">{item.description}</p>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

function EvidenceGallery({ gallery }) {
	return (
		<div className="mt-6 grid gap-6 md:grid-cols-2">
			{gallery.map((item) => (
				<figure key={item.title} className="overflow-hidden rounded-lg border border-white/10 bg-gray-950/70">
					<div className="overflow-hidden border-b border-white/10 bg-gray-950">
						<Image
							src={item.img}
							alt={item.alt}
							sizes="(max-width: 767px) 100vw, 50vw"
							loading="lazy"
					className="max-h-[28rem] w-full object-contain"
						/>
					</div>
					<figcaption className="p-4">
						<p className="font-general-semibold text-sm text-white">{item.title}</p>
						{item.caption && <p className="mt-1.5 text-sm leading-relaxed text-gray-400">{item.caption}</p>}
					</figcaption>
				</figure>
			))}
		</div>
	);
}

// Renders a project's optional `caseStudy` data. Sections without content are
// skipped, so a case study only shows what has been verified.
function CaseStudy({ project }) {
	const { title, category, ProjectHeader, ProjectInfo, caseStudy } = project;
	const {
		problem,
		architecture,
		implementation,
		implementationTitle,
		decisions,
		decisionsTitle,
		evidence,
		evidenceTitle,
		limitations,
		capabilityMatrix,
		capabilitySummary,
		gallery,
		links,
	} = caseStudy;
	const showCapabilityMatrix = caseStudy.showCapabilityMatrix !== false;

	const factTitles = caseStudy.headerFacts ?? ['Role', 'Duration'];
	const facts = (ProjectInfo?.CompanyInfo ?? []).filter((info) => factTitles.includes(info.title));
	const technologies = ProjectInfo?.Technologies?.[0]?.techs ?? [];
	const technologyHeading = ProjectInfo?.Technologies?.[0]?.title ?? 'Technologies';

	const sections = [
		problem && { id: 'problem', label: 'Problem and context' },
		architecture && { id: 'architecture', label: 'System architecture' },
		capabilityMatrix?.length && showCapabilityMatrix && { id: 'capabilities', label: 'Security and capability boundaries' },
		gallery?.length && { id: 'gallery', label: 'Selected visual evidence' },
		implementation?.length && { id: 'implementation', label: implementationTitle ?? 'Implementation' },
		decisions?.length && { id: 'decisions', label: decisionsTitle ?? 'Decisions and trade-offs' },
		evidence?.length && { id: 'evidence', label: evidenceTitle ?? 'Evaluation and operations' },
		limitations?.length && { id: 'limitations', label: 'Limitations and lessons' },
		technologies.length && { id: 'technologies', label: technologyHeading },
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

			{caseStudy.editorialCover && <EditorialCover cover={caseStudy.editorialCover} />}

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
							{architecture.diagrams?.map((diagram) => (
								<div key={diagram.title ?? diagram.alt}>
									{diagram.title && (
										<h3 className="mt-10 font-general-semibold text-lg text-white">{diagram.title}</h3>
									)}
									{diagram.mobileFallback ? (
										<>
											<div className="hidden md:block">
												<ArchitectureFigure figure={diagram} />
											</div>
											<div className="md:hidden">
												<DiagramFallback figure={diagram} />
											</div>
										</>
									) : (
										<ArchitectureFigure figure={diagram} />
									)}
								</div>
							))}
							{architecture.workflow && <WorkflowDiagram workflow={architecture.workflow} />}
							{architecture.artifactStructure && (
								<ArtifactStructure structure={architecture.artifactStructure} />
							)}
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

					{capabilityMatrix?.length > 0 && showCapabilityMatrix && (
						<Section id="capabilities" title="Security and capability boundaries">
							{capabilitySummary && <p className={proseClass}>{capabilitySummary}</p>}
							<CapabilityStatusMatrix items={capabilityMatrix} />
						</Section>
					)}

					{gallery?.length > 0 && (
						<Section id="gallery" title="Selected visual evidence">
							<EvidenceGallery gallery={gallery} />
						</Section>
					)}

					{implementation?.length > 0 && (
						<Section id="implementation" title={implementationTitle ?? 'Implementation'}>
							{renderItems(implementation)}
						</Section>
					)}

					{decisions?.length > 0 && (
						<Section id="decisions" title={decisionsTitle ?? 'Decisions and trade-offs'}>
							{renderItems(decisions)}
						</Section>
					)}

					{evidence?.length > 0 && (
						<Section id="evidence" title={evidenceTitle ?? 'Evaluation and operations'}>
							{renderItems(evidence)}
						</Section>
					)}

					{limitations?.length > 0 && (
						<Section id="limitations" title="Limitations and lessons">
							{renderItems(limitations)}
						</Section>
					)}

					{technologies.length > 0 && (
						<Section id="technologies" title={technologyHeading}>
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
