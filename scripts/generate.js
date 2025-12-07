const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const nunjucks = require('nunjucks');

// Define paths
const BASE_DIR = path.join(__dirname, '..');
const INDEX_MD_PATH = path.join(BASE_DIR, 'index.md');
// Configure Nunjucks to look for templates in the scripts directory
const TEMPLATE_DIR = __dirname;
const TEMPLATE_FILE = 'template.html';
const INDEX_HTML_PATH = path.join(BASE_DIR, 'index.html');

/**
 * Parse YAML frontmatter from markdown content
 */
function parseFrontmatter(content) {
	const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
	const match = content.match(frontmatterRegex);

	if (match) {
		const metadata = yaml.load(match[1]);
		const body = match[2];
		return { metadata, body };
	}

	return { metadata: {}, body: content };
}

/**
 * Main function
 */
function main() {
	try {
		// Read index.md
		if (!fs.existsSync(INDEX_MD_PATH)) {
			console.error(`Error: ${INDEX_MD_PATH} not found.`);
			process.exit(1);
		}

		const mdContent = fs.readFileSync(INDEX_MD_PATH, 'utf-8');
		const { metadata, body } = parseFrontmatter(mdContent);

		// Setup Nunjucks
		const env = nunjucks.configure(TEMPLATE_DIR, {
			autoescape: true,
			trimBlocks: true,
			lstripBlocks: true
		});

		// Add custom nl2br filter to handle YAML multi-line strings
		env.addFilter('nl2br', function (str) {
			if (typeof str !== 'string') return str;
			return str.replace(/\n/g, '<br>');
		});

		// Render template
		// Merge metadata with body content if needed, though mostly we use metadata
		const data = {
			...metadata,
			content: body
		};

		const output = nunjucks.render(TEMPLATE_FILE, data);

		// Write index.html
		fs.writeFileSync(INDEX_HTML_PATH, output, 'utf-8');

		console.log(`✓ Successfully generated index.html from ${INDEX_MD_PATH} using Nunjucks`);
	} catch (error) {
		console.error('Error generating HTML:', error.message);
		console.error(error.stack);
		process.exit(1);
	}
}

// Run
main();
