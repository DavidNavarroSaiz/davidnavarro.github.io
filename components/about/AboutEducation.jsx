import { useState } from 'react';

const educationData = [
	{
		title: 'B.Sc. in Physical Engineering',
		institution: 'Universidad Nacional de Colombia, Medellin',
		year: '2020',
		description:
			'Built a strong foundation in mathematics, physics and engineering principles, allowing the design and development of innovative technologies and adaptability to dynamic technical environments. Thesis: Liquor-bottle wrapping defect classification using computer vision (OpenCV, CNNs, PyTorch).',
	},
	{
		title: 'LangGraph: Develop LLM-powered AI Agents',
		institution: 'Udemy',
		description:
			'Hands-on experience in building, deploying, and managing AI agents using LangGraph and large language models.',
	},
	{
		title: 'AI-Agents: Automation and Business with LangChain and LLM Apps',
		institution: 'Udemy',
		description:
			'Developed AI-driven automation solutions for business processes using LangChain, improving operational efficiency.',
	},
	{
		title: 'AWS Certified Machine Learning Specialty',
		institution: 'Udemy',
		description:
			'Proficient in designing, implementing, and deploying scalable machine learning models on AWS infrastructure.',
	},
	{
		title: 'LLM Engineering: Master AI, Large Language Models and Agents',
		institution: 'Udemy',
		description:
			'Advanced knowledge in building, optimizing, and deploying large language models and AI-driven applications.',
	},
	{
		title: 'DS4A (Data Science for All)',
		institution: 'Correlation One – MinTIC',
		description:
			'Comprehensive training in data analysis, statistical modeling, and machine learning techniques.',
	},
	{
		title: 'MLOps Specialization',
		institution: 'Duke University (Coursera)',
		description:
			'Expertise in MLOps practices, including integration of the CI/CD pipeline, model deployment and lifecycle management.',
	},
	{
		title: 'DeepLearning.AI Specialization in GANs, TensorFlow, and Deep Learning',
		institution: 'Coursera',
		description:
			'In-depth understanding of deep learning frameworks, including GANs and TensorFlow.',
	},
	{
		title: 'Image Prediction with Deep Learning',
		institution: 'SENA Colombia Productiva y Fedesoft',
		description:
			'Practical experience in developing deep learning models for image prediction and analysis.',
	},
	{
		title: 'Natural Language Processing Specialization',
		institution: 'Coursera',
		description:
			'Specialized in NLP techniques, including text processing, sentiment analysis, and transformer-based architectures.',
	},
];

function AboutEducation() {
	const [showAll, setShowAll] = useState(false);
	const visibleCourses = showAll ? educationData : educationData.slice(0, 3);

	return (
		<div className="py-20 sm:py-24">
			<p className="font-mono text-xs uppercase leading-relaxed tracking-[0.14em] text-dev-blue/90">
				Learning
			</p>
			<h2 className="mt-3 font-general-semibold text-3xl tracking-[-0.02em] text-white sm:text-4xl">
				Education and training
			</h2>
			<p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg">
				Formal degree and continuous professional development in AI,
				ML, and engineering.
			</p>

			<ol id="education-list" className="mt-10 space-y-4">
				{visibleCourses.map((course) => (
					<li
						key={course.title}
						className="rounded-lg border border-white/10 bg-gray-900/50 p-5 sm:p-6"
					>
						<div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
							<h3 className="font-general-semibold text-lg text-white">
								{course.title}
							</h3>
							<span className="shrink-0 rounded border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-general-medium text-gray-300">
								{course.institution}
							</span>
						</div>
						{course.year && (
							<p className="mt-1 font-mono text-xs tracking-[0.08em] text-gray-400">
								{course.year}
							</p>
						)}
						<p className="mt-2 text-sm leading-relaxed text-gray-300 sm:text-base">
							{course.description}
						</p>
					</li>
				))}
			</ol>

			<div className="mt-8">
				<button
					type="button"
					onClick={() => setShowAll(!showAll)}
					aria-expanded={showAll}
					aria-controls="education-list"
					className="inline-flex items-center justify-center gap-2 rounded-md border border-white/20 bg-white/5 px-5 py-2.5 font-general-semibold text-sm text-white transition duration-200 ease-out hover:border-dev-blue/60 hover:text-dev-blue"
				>
					{showAll
						? 'Show less'
						: `Show more (${educationData.length - 3} more courses)`}
				</button>
			</div>
		</div>
	);
}

export default AboutEducation;
