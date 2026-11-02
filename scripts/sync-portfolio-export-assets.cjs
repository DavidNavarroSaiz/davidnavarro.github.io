const fs = require('node:fs');
const path = require('node:path');

const ROOT = path.resolve(__dirname, '..');
const SITE_URL = 'https://davidnavarrosaiz.github.io/davidnavarro.github.io';
const { renderMarkdown } = require('./generate-portfolio-exports.cjs');

function readJson(filePath) {
	return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function writeJson(filePath, value) {
	fs.writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`);
}

function resolveMediaFile(assetFile, mediaFiles) {
	const extension = path.extname(assetFile);
	const stem = path.basename(assetFile, extension);
	const matches = mediaFiles.filter(
		(file) => file.startsWith(`${stem}.`) && path.extname(file) === extension,
	);

	if (matches.length !== 1) {
		throw new Error(`Expected one built media asset for ${assetFile}, found ${matches.length}`);
	}

	return matches[0];
}

function syncOutputs() {
	const publicJsonPath = path.join(ROOT, 'public', 'portfolio.json');
	const outDir = path.join(ROOT, 'out');
	const mediaDir = path.join(outDir, '_next', 'static', 'media');
	const profile = readJson(publicJsonPath);
	const mediaFiles = fs.readdirSync(mediaDir);

	for (const project of profile.projects) {
		const illustration = project.conceptualIllustration;
		if (!illustration) continue;
		if (!illustration.assetFile) {
			throw new Error(`Project ${project.id} has conceptual illustration metadata without an asset file`);
		}

		const mediaFile = resolveMediaFile(illustration.assetFile, mediaFiles);
		illustration.url = `${SITE_URL}/_next/static/media/${mediaFile}`;
		delete illustration.assetFile;
	}

	writeJson(publicJsonPath, profile);
	fs.writeFileSync(path.join(ROOT, 'public', 'portfolio.md'), renderMarkdown(profile));
	writeJson(path.join(outDir, 'portfolio.json'), profile);
	fs.writeFileSync(path.join(outDir, 'portfolio.md'), renderMarkdown(profile));
	console.log(`Resolved public image URLs for ${profile.projects.filter((project) => project.conceptualIllustration).length} project covers.`);
}

syncOutputs();
