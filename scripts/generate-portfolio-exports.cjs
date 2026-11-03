const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const ROOT = path.resolve(__dirname, '..');
const SITE_URL = 'https://davidnavarrosaiz.github.io/davidnavarro.github.io';
const SCHEMA_VERSION = '1.0.0';

function loadSourceModule(relativePath, exportNames) {
	const filePath = path.join(ROOT, relativePath);
	let source = fs.readFileSync(filePath, 'utf8');

	source = source.replace(
		/import\s*\{\s*([\s\S]*?)\s*\}\s*from\s*['"]uuid['"]\s*;?/m,
		"const uuidv4 = (() => { let counter = 0; return () => `source-id-${++counter}`; })();",
	);
	source = source.replace(
		/import\s*\{\s*([\s\S]*?)\s*\}\s*from\s*['"]react-icons\/fi['"]\s*;?/m,
		(_, names) =>
			names
				.split(',')
				.map((entry) => entry.trim())
				.filter(Boolean)
				.map((entry) => {
					const [imported, local] = entry.split(/\s+as\s+/);
					return `const ${local || imported} = null;`;
				})
				.join('\n'),
	);
	source = source.replace(
		/import\s+([A-Za-z_$][\w$]*)\s+from\s+['"]([^'"]+)['"]\s*;?/g,
		(_, localName, importPath) => `const ${localName} = ${JSON.stringify(importPath)};`,
	);

	if (/\bimport\s/.test(source)) {
		throw new Error(`Unsupported import remains in ${relativePath}`);
	}

	source = source.replace(/\bexport\s+const\s+/g, 'const ');
	source += `\nmodule.exports = { ${exportNames.join(', ')} };\n`;

	const moduleObject = { exports: {} };
	vm.runInNewContext(`(function (module, exports) {\n${source}\n})(module, module.exports);`, {
		module: moduleObject,
		console,
	});

	return moduleObject.exports;
}

function compact(value) {
	if (value === undefined || value === null || value === '') return null;
	return value;
}

function unique(values) {
	return [...new Set(values.filter(Boolean))];
}

function asSectionList(values) {
	if (!Array.isArray(values)) return [];
	return values
		.map((value) => {
			if (typeof value === 'string') return { text: value };
			if (!value || typeof value !== 'object') return null;
			const item = {
				title: compact(value.title || value.label),
				text: compact(value.body || value.description || value.details || value.text),
			};
			return item.title || item.text ? item : null;
		})
		.filter(Boolean);
}

function infoValue(project, title) {
	return compact(
		project.ProjectInfo?.CompanyInfo?.find((item) => item.title?.toLowerCase() === title.toLowerCase())
			?.details,
	);
}

function mapArchitecture(architecture) {
	if (!architecture) return null;
	return {
		summary: compact(architecture.summary),
		workflow: architecture.workflow
			? {
					title: compact(architecture.workflow.title),
					summary: compact(architecture.workflow.summary),
					steps: (architecture.workflow.steps || []).map((step) => ({
						title: compact(step.title),
						mode: compact(step.mode),
						type: compact(step.type),
						description: compact(step.description),
					})),
				}
				: null,
		components: (architecture.components || []).map((component) => ({
			name: compact(component.name),
			role: compact(component.role),
		})),
		artifactStructure: architecture.artifactStructure
			? {
					title: compact(architecture.artifactStructure.title),
					summary: compact(architecture.artifactStructure.summary),
					rootLabel: compact(architecture.artifactStructure.rootLabel),
					items: (architecture.artifactStructure.items || []).map((item) => ({
						title: compact(item.title),
						type: compact(item.type),
						description: compact(item.description),
					})),
				}
				: null,
	};
}

function getEditorialAssetFile(editorialCover) {
	const source = editorialCover?.img;
	const sourcePath = typeof source === 'string' ? source : source?.src;
	return sourcePath ? path.basename(sourcePath.split('?')[0]) : null;
}

function buildProjectRecord(project) {
	const caseStudy = project.caseStudy || {};
	const editorialCover = caseStudy.editorialCover || project.editorialCover;
	const projectInfo = project.ProjectInfo || {};
	const companyInfo = projectInfo.CompanyInfo || [];
	const technologies = (projectInfo.Technologies || []).flatMap((group) => group.techs || []);
	const details = (projectInfo.ProjectDetails || []).map((item) => item.details).filter(Boolean);
	const evidenceLinks = (caseStudy.links || []).map((link) => ({
		label: compact(link.label),
		url: compact(link.href),
	}));
	const relatedProjectIds = Array.isArray(project.relatedProjectIds) ? project.relatedProjectIds : [];

	const editorialAssetFile = getEditorialAssetFile(editorialCover);
	const conceptualIllustration = editorialCover
		? {
				alt: compact(editorialCover.alt),
				caption: compact(editorialCover.caption),
				...(editorialAssetFile ? { assetFile: editorialAssetFile } : {}),
			}
		: null;

	return {
		id: project.id,
		title: project.title || project.ProjectHeader?.title,
		slug: compact(project.url),
		url: `${SITE_URL}/projects/${project.id}/`,
		category: compact(project.category),
		description: compact(caseStudy.overview || project.summary || projectInfo.ObjectivesDetails),
		problem: compact(caseStudy.problem || project.featured?.problem),
		date: {
			published: compact(project.ProjectHeader?.publishDate),
			duration: infoValue(project, 'Duration'),
		},
		status: compact(caseStudy.status || infoValue(project, 'Status') || 'Public project record'),
		role: infoValue(project, 'Role'),
		contribution: infoValue(project, 'Contribution'),
		responsibilities: Array.isArray(caseStudy.responsibilities) ? caseStudy.responsibilities : [],
		contributions: details,
		technicalDecisions: asSectionList(caseStudy.decisions),
		implementation: asSectionList(caseStudy.implementation),
		architecture: mapArchitecture(caseStudy.architecture),
		technologies: unique(technologies),
		outcomes: Array.isArray(caseStudy.outcomes) ? asSectionList(caseStudy.outcomes) : [],
		publicEvidence: asSectionList(caseStudy.evidence),
		limitations: asSectionList(caseStudy.limitations),
		evidenceLinks,
		relatedProjectIds,
		conceptualIllustration,
		publicFacts: Object.fromEntries(
			companyInfo
				.filter((item) => item.title && item.details)
				.map((item) => [item.title, item.details]),
		),
	};
}

function mapExperienceRecord(experience, projectById) {
	const relatedProjects = (experience.relatedProjectIds || [])
		.map((id) => projectById.get(id))
		.filter(Boolean)
		.map((project) => ({ id: project.id, title: project.title, url: project.url }));

	return {
		id: experience.id,
		employer: experience.company,
		client: compact(experience.client),
		position: experience.position,
		period: experience.period,
		employmentPeriod: compact(experience.employmentPeriod),
		duration: compact(experience.duration),
		location: compact(experience.location),
		type: experience.type,
		status: experience.status,
		isResearch: experience.type === 'Research project',
		overlapNote: compact(experience.overlapNote),
		domains: experience.domains || [],
		specialties: experience.specialties || [],
		responsibilities: experience.responsibilities || [],
		context: compact(experience.context),
		contributions: experience.ownership || [],
		workstreams: (experience.workstreams || []).map((workstream) => ({
			label: compact(workstream.label),
			period: compact(workstream.period),
			maturity: compact(workstream.maturity),
			responsibility: compact(workstream.responsibility),
			implementation: compact(workstream.implementation),
		})),
		implementationGroups: (experience.implementationGroups || []).map((group) => ({
			label: compact(group.label),
			items: group.items || [],
		})),
		technicalDecisions: experience.decisions || [],
		technologies: experience.technologies || [],
		evidence: compact(experience.evidence),
		outcomes: experience.impact || [],
		relatedProjects,
	};
}

function buildPortfolioExport() {
	const { projectsData } = loadSourceModule('data/projectsData.js', [
		'projectsData',
		'featuredProjectIds',
		'featuredProjects',
		'orderedProjects',
	]);
	const { experienceData, experienceYears, experienceStats } = loadSourceModule('data/experienceData.js', [
		'experienceData',
		'experienceYears',
		'experienceChapters',
		'industryDomains',
		'experienceStats',
	]);
	const projects = projectsData.map(buildProjectRecord);
	const projectById = new Map(projects.map((project) => [project.id, project]));
	const experience = experienceData.map((entry) => mapExperienceRecord(entry, projectById));
	const employmentEntries = experience.filter((entry) => !entry.isResearch);
	const research = experience.filter((entry) => entry.isResearch);
	const employerMap = new Map();

	for (const entry of employmentEntries) {
		if (!employerMap.has(entry.employer)) {
			employerMap.set(entry.employer, {
				name: entry.employer,
				engagements: [],
			});
		}
		employerMap.get(entry.employer).engagements.push(entry);
	}

	return {
		schemaVersion: SCHEMA_VERSION,
		profileType: 'Public portfolio export',
		sourceOfTruth: ['data/projectsData.js', 'data/experienceData.js'],
		publicScope: 'Public professional portfolio content; confidential employer and customer details are excluded.',
		person: {
			name: 'David Navarro',
			role: 'Senior AI Engineer',
			location: 'Medellín, Colombia',
			website: SITE_URL,
			profileUrl: `${SITE_URL}/about/`,
			professionalSummary:
				'Senior AI Engineer specializing in production AI agents, LLM evaluation, AI platforms, retrieval infrastructure, and applied machine learning.',
			specializations: [
				'Production AI agents and agent orchestration',
				'AI evaluation, reliability, and reproducible experimentation',
				'RAG, vector retrieval, and document intelligence',
				'Applied machine learning and computer vision',
				'MLOps, cloud delivery, and technical leadership',
			],
			experienceYears,
			cv: [
				{
					label: 'Senior AI Engineer CV',
					url: `${SITE_URL}/files/CV_DavidNavarro_Senior_AI_Engineer.pdf`,
				},
				{
					label: 'Senior AI Engineer — Evaluation & Research CV',
					url: `${SITE_URL}/files/CV_DavidNavarro_Senior_AI_Engineer_Evaluation_Research.pdf`,
				},
			],
			publicProfiles: [
				{ label: 'LinkedIn', url: 'https://www.linkedin.com/in/davidnavarrosaiz/' },
				{ label: 'GitHub', url: 'https://github.com/DavidNavarroSaiz' },
			],
		},
		experience: {
			summary: 'Seven visible professional and research entries across five employers, plus one separate research institution.',
			stats: {
				years: experienceStats.totalYears,
				employers: experienceStats.employers,
				engagements: experienceStats.engagements,
				researchEntries: experienceStats.researchEntries,
				entries: experienceStats.entries,
			},
			employers: [...employerMap.values()],
			research,
		},
		projects,
		indexes: {
			projectCount: projects.length,
			projectIds: projects.map((project) => project.id),
			featuredProjectIds: [17, 20, 10, 21, 16, 15],
			experienceEntryCount: experience.length,
			employerCount: experienceStats.employers,
			clientEngagements: employmentEntries.filter((entry) => entry.client).length,
			researchEntryCount: research.length,
		},
		urls: {
			projects: `${SITE_URL}/projects/`,
			experience: `${SITE_URL}/experience/`,
			about: `${SITE_URL}/about/`,
		},
	};
}

function markdownLink(label, url) {
	return `[${label}](${url})`;
}

function appendBulletList(lines, label, items) {
	if (!items || !items.length) return;
	lines.push(`- ${label}:`);
	for (const item of items) lines.push(`  - ${item}`);
}

function appendSectionList(lines, label, items) {
	if (!items || !items.length) return;
	lines.push(`- ${label}:`);
	for (const item of items) {
		if (item.title && item.text) lines.push(`  - ${item.title}: ${item.text}`);
		else lines.push(`  - ${item.text || item.title}`);
	}
}

function appendExperience(lines, entry) {
	lines.push(`- Period: ${entry.period}`);
	if (entry.employmentPeriod) lines.push(`- Employment period: ${entry.employmentPeriod}`);
	if (entry.duration) lines.push(`- Duration: ${entry.duration}`);
	lines.push(`- Status: ${entry.status}`);
	if (entry.location) lines.push(`- Location: ${entry.location}`);
	if (entry.summary) lines.push(`- Summary: ${entry.summary}`);
	if (entry.context) lines.push(`- Context: ${entry.context}`);
	appendBulletList(lines, 'Responsibilities', entry.responsibilities);
	appendBulletList(lines, 'Contributions', entry.contributions);
	appendBulletList(lines, 'Technical decisions', entry.technicalDecisions);
	appendBulletList(lines, 'Technologies', entry.technologies);
	if (entry.evidence) lines.push(`- Evidence and scope: ${entry.evidence}`);
	if (entry.outcomes.length) {
		lines.push('- Outcomes:');
		for (const outcome of entry.outcomes) lines.push(`  - ${outcome.label}: ${outcome.value} — ${outcome.detail}`);
	}
	if (entry.relatedProjects.length) {
		lines.push('- Related public projects:');
		for (const project of entry.relatedProjects) lines.push(`  - Project ${project.id} — ${project.title}: ${markdownLink(project.url, project.url)}`);
	}
	if (entry.overlapNote) lines.push(`- Overlap note: ${entry.overlapNote}`);
	lines.push('');
}

function renderMarkdown(profile) {
	const lines = [
		`# ${profile.person.name} — ${profile.person.role}`,
		'',
		'> Machine-readable public portfolio profile. Use stable project IDs when referring to case studies.',
		'',
		'## Professional summary',
		'',
		profile.person.professionalSummary,
		'',
		'## Engineering specializations',
		'',
		...profile.person.specializations.map((item) => `- ${item}`),
		'',
		'## Public profile and CVs',
		'',
		`- Website: ${markdownLink(profile.person.website, profile.person.website)}`,
		`- About: ${markdownLink(profile.person.profileUrl, profile.person.profileUrl)}`,
		...profile.person.cv.map((cv) => `- ${cv.label}: ${markdownLink(cv.url, cv.url)}`),
		...profile.person.publicProfiles.map((item) => `- ${item.label}: ${markdownLink(item.url, item.url)}`),
		'',
		'## Experience history',
		'',
		`- ${profile.experience.stats.years} years represented in the current public data model.`,
		`- ${profile.experience.stats.employers} distinct employers, ${profile.experience.stats.engagements} employment/client engagements, and ${profile.experience.stats.researchEntries} separate research entry.`,
		'',
		'### Employers and client engagements',
		'',
	];

	for (const employer of profile.experience.employers) {
		lines.push(`#### ${employer.name}`, '');
		for (const entry of employer.engagements) {
			lines.push(`##### ${entry.client ? `${entry.client} client engagement` : entry.position}`, '');
			appendExperience(lines, entry);
		}
	}

	lines.push('### Research', '');
	for (const entry of profile.experience.research) {
		lines.push(`#### ${entry.position} — ${entry.employer}`, '');
		appendExperience(lines, entry);
	}

	lines.push('## Projects', '');
	for (const project of profile.projects) {
		lines.push(`### Project ${project.id} — ${project.title}`, '');
		lines.push(`- Public URL: ${markdownLink(project.url, project.url)}`);
		if (project.category) lines.push(`- Category: ${project.category}`);
		if (project.date.published) lines.push(`- Published: ${project.date.published}`);
		if (project.date.duration) lines.push(`- Project period: ${project.date.duration}`);
		if (project.status) lines.push(`- Status: ${project.status}`);
		if (project.role) lines.push(`- Role: ${project.role}`);
		if (project.contribution) lines.push(`- Contribution: ${project.contribution}`);
		if (project.description) lines.push(`- Description: ${project.description}`);
		if (project.problem) lines.push(`- Problem: ${project.problem}`);
		if (project.technologies.length) lines.push(`- Technologies: ${project.technologies.join(', ')}`);
		if (project.conceptualIllustration) {
			lines.push('- Conceptual illustration:');
			if (project.conceptualIllustration.url) {
				lines.push(`  - Image URL: ${markdownLink(project.conceptualIllustration.url, project.conceptualIllustration.url)}`);
			}
			if (project.conceptualIllustration.alt) {
				lines.push(`  - Alt text: ${project.conceptualIllustration.alt}`);
			}
			if (project.conceptualIllustration.caption) {
				lines.push(`  - Caption: ${project.conceptualIllustration.caption}`);
			}
		}
		appendSectionList(lines, 'Responsibilities', project.responsibilities);
		appendSectionList(lines, 'Contributions', project.contributions.map((text) => ({ text })));
		appendSectionList(lines, 'Technical decisions', project.technicalDecisions);
		appendSectionList(lines, 'Implementation', project.implementation);
		appendSectionList(lines, 'Public evidence', project.publicEvidence);
		appendSectionList(lines, 'Limitations and scope', project.limitations);
		if (project.outcomes.length) appendSectionList(lines, 'Outcomes', project.outcomes);
		if (project.evidenceLinks.length) {
			lines.push('- Evidence links:');
			for (const link of project.evidenceLinks) lines.push(`  - ${link.label}: ${markdownLink(link.url, link.url)}`);
		}
		if (project.relatedProjectIds.length) lines.push(`- Related project IDs: ${project.relatedProjectIds.join(', ')}`);
		lines.push('');
	}

	lines.push(
		'## Data boundaries',
		'',
		'This export describes the public portfolio only. It omits credentials, internal prompts, customer operational thresholds, private rankings, unpublished infrastructure, and confidential employer information. Conceptual editorial artwork is identified as illustration in the corresponding project record; it is not treated as architecture or benchmark evidence.',
		'',
		`Schema version: ${profile.schemaVersion}`,
	);

	return `${lines.join('\n').replace(/\n{3,}/g, '\n\n')}\n`;
}

function renderLlmsTxt(profile) {
	return [
		`# ${profile.person.name}`,
		'',
		`> ${profile.person.role}. This is an optional discovery index for AI agents and other automated clients; it is not an API or indexing guarantee.`,
		'',
		`- Full Markdown profile: ${SITE_URL}/portfolio.md`,
		`- Structured JSON export: ${SITE_URL}/portfolio.json`,
		`- Projects: ${profile.urls.projects}`,
		`- Experience: ${profile.urls.experience}`,
		`- About: ${profile.urls.about}`,
		...profile.person.cv.map((cv) => `- ${cv.label}: ${cv.url}`),
		'',
	].join('\n');
}

function writeOutputs() {
	const profile = buildPortfolioExport();
	if (profile.projects.length !== 22) throw new Error(`Expected 22 projects, found ${profile.projects.length}`);
	if (profile.experience.research.length !== 1) throw new Error('Expected one research entry');
	if (profile.experience.employers.length !== 5) throw new Error('Expected five employment organizations');

	const publicDir = path.join(ROOT, 'public');
	fs.writeFileSync(path.join(publicDir, 'portfolio.json'), `${JSON.stringify(profile, null, 2)}\n`);
	fs.writeFileSync(path.join(publicDir, 'portfolio.md'), renderMarkdown(profile));
	fs.writeFileSync(path.join(publicDir, 'llms.txt'), renderLlmsTxt(profile));
	console.log(`Generated portfolio exports for ${profile.projects.length} projects and ${profile.experience.stats.entries} experience entries.`);
}

if (require.main === module) writeOutputs();

module.exports = { buildPortfolioExport, buildProjectRecord, renderLlmsTxt, renderMarkdown, writeOutputs };
