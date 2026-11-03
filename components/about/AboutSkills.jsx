const skillGroups = [
	{
		name: 'Programming languages and frameworks',
		techs: [
			'Python',
			'C++',
			'JavaScript',
			'TypeScript',
			'C#',
			'SQL',
			'HTML',
			'FastAPI',
			'Flask',
			'React',
			'Django',
			'.NET',
			'Streamlit',
			'Celery',
			'SQLAlchemy',
		],
	},
	{
		name: 'AI/ML and LLM tooling',
		techs: [
			'PyTorch',
			'TensorFlow',
			'Keras',
			'scikit-learn',
			'LangChain',
			'LangSmith',
			'LangGraph',
			'LlamaIndex',
			'AutoGen',
			'Pydantic AI',
			'HuggingFace',
			'BERT',
			'GPT',
			'ResNet',
			'Faiss',
			'Generative AI',
			'RAG',
			'LLMOps',
		],
	},
	{
		name: 'Data and storage',
		techs: [
			'Pandas',
			'NumPy',
			'Seaborn',
			'Power BI',
			'PyMongo',
			'PyMuPDF',
			'PostgreSQL',
			'MongoDB',
			'MySQL',
			'MS SQL',
			'Neo4j',
			'Redis',
			'SQLite',
			'Milvus',
			'Chroma',
			'Vector Databases',
			'PGVector',
		],
	},
	{
		name: 'Cloud and infrastructure',
		techs: [
			'Microsoft Azure',
			'AWS',
			'Docker',
			'Azure SQL',
			'Azure Blob Storage',
			'Bicep',
		],
	},
	{
		name: 'DevOps and MLOps',
		techs: [
			'Git',
			'GitHub',
			'CI/CD',
			'DVC',
			'MLflow',
			'CVAT',
			'Make.com',
			'Zapier',
			'n8n',
		],
	},
	{
		name: 'Computer vision and applied ML',
		techs: [
			'OpenCV',
			'Face Detection',
			'Gaze Estimation',
			'Video Classification',
			'Speech Recognition',
			'Speaker Diarization',
			'Multi-modal Detection',
			'HPO',
			'Conversational Agents',
		],
	},
];

function AboutSkills() {
	return (
		<div className="py-20 sm:py-24">
			<p className="font-mono text-xs uppercase leading-relaxed tracking-[0.14em] text-dev-blue/90">
				Expertise
			</p>
			<h2 className="mt-3 font-general-semibold text-3xl tracking-[-0.02em] text-white sm:text-4xl">
				Technical skills
			</h2>
			<p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg">
				Working tools and platforms across software engineering,
				machine learning, and production AI systems.
			</p>

			<div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
				{skillGroups.map((group) => (
					<section
						key={group.name}
						aria-label={group.name}
						className="rounded-lg border border-white/10 bg-gray-900/50 p-6"
					>
						<h3 className="font-general-semibold text-lg text-white">
							{group.name}
						</h3>
						<ul className="mt-4 flex flex-wrap gap-2">
							{group.techs.map((tech) => (
								<li
									key={tech}
									className="rounded border border-white/10 bg-white/[0.03] px-2.5 py-1 text-sm text-gray-300"
								>
									{tech}
								</li>
							))}
						</ul>
					</section>
				))}
			</div>

			<div className="mt-8 rounded-lg border border-white/10 bg-gray-900/50 p-6">
				<div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
					<span className="font-mono text-[11px] uppercase tracking-[0.14em] text-gray-400">
						Languages
					</span>
					<ul className="flex flex-wrap gap-x-6 gap-y-2">
						<li className="text-sm text-white">
							English{' '}
							<span className="text-gray-400">(Fluent)</span>
						</li>
						<li className="text-sm text-white">
							Spanish{' '}
							<span className="text-gray-400">(Native)</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default AboutSkills;
