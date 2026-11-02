const assert = require('node:assert/strict');
const test = require('node:test');

const { buildPortfolioExport, buildProjectRecord, renderMarkdown } = require('../scripts/generate-portfolio-exports.cjs');

test('case-study editorial covers take precedence over legacy project covers', () => {
	const record = buildProjectRecord({
		id: 99,
		title: 'Fixture',
		editorialCover: {
			alt: 'Legacy illustration',
			caption: 'Legacy caption',
		},
		caseStudy: {
			editorialCover: {
				alt: 'Case-study illustration',
				caption: 'Case-study caption',
			},
		},
	});

	assert.deepEqual(record.conceptualIllustration, {
		alt: 'Case-study illustration',
		caption: 'Case-study caption',
	});
});

test('legacy top-level editorial covers are exported when no case-study cover exists', () => {
	const record = buildProjectRecord({
		id: 98,
		title: 'Legacy fixture',
		editorialCover: {
			alt: 'Legacy illustration',
			caption: 'Legacy caption',
		},
	});

	assert.deepEqual(record.conceptualIllustration, {
		alt: 'Legacy illustration',
		caption: 'Legacy caption',
	});
});

test('Project 14 and all nine Stage 8N covers are present in the generated export', () => {
	const profile = buildPortfolioExport();
	const projectById = new Map(profile.projects.map((project) => [project.id, project]));
	const markdown = renderMarkdown(profile);

	for (const id of [5, 6, 7, 8, 9, 11, 12, 13, 14]) {
		const project = projectById.get(id);
		assert.ok(project, `Project ${id} should be exported`);
		assert.ok(project.conceptualIllustration, `Project ${id} should include cover metadata`);
		assert.match(project.conceptualIllustration.alt, /Conceptual/i);
		assert.ok(project.conceptualIllustration.caption);
		assert.ok(project.conceptualIllustration.assetFile);
		assert.match(markdown, new RegExp(`Project ${id} — [^\\n]+[\\s\\S]*Conceptual illustration:`));
	}
});
