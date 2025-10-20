import { useState } from 'react';

function AboutEducation() {
	const [showAll, setShowAll] = useState(false);

	const educationData = [
		{
			title: "B.Sc. in Physical Engineering",
			institution: "Universidad Nacional de Colombia, Medellin",
			year: "2020",
			description: "Built a strong foundation in mathematics, physics and engineering principles, allowing the design and development of innovative technologies and adaptability to dynamic technical environments. Thesis: Liquor-bottle wrapping defect classification using computer vision (OpenCV, CNNs, PyTorch).",
			icon: "🎓",
			color: "bg-blue-500"
		},
		{
			title: "LangGraph: Develop LLM-powered AI Agents",
			institution: "Udemy",
			description: "Hands-on experience in building, deploying, and managing AI agents using LangGraph and large language models.",
			icon: "🤖",
			color: "bg-purple-500"
		},
		{
			title: "AI-Agents: Automation and Business with LangChain and LLM Apps",
			institution: "Udemy",
			description: "Developed AI-driven automation solutions for business processes using LangChain, improving operational efficiency.",
			icon: "⚡",
			color: "bg-green-500"
		},
		{
			title: "AWS Certified Machine Learning Specialty",
			institution: "Udemy",
			description: "Proficient in designing, implementing, and deploying scalable machine learning models on AWS infrastructure.",
			icon: "☁️",
			color: "bg-orange-500"
		},
		{
			title: "LLM Engineering: Master AI, Large Language Models and Agents",
			institution: "Udemy",
			description: "Advanced knowledge in building, optimizing, and deploying large language models and AI-driven applications.",
			icon: "🧠",
			color: "bg-cyan-500"
		},
		{
			title: "DS4A (Data Science for All)",
			institution: "Correlation One – MinTIC",
			description: "Comprehensive training in data analysis, statistical modeling, and machine learning techniques.",
			icon: "📊",
			color: "bg-pink-500"
		},
		{
			title: "MLOps Specialization",
			institution: "Duke University (Coursera)",
			description: "Expertise in MLOps practices, including integration of the CI/CD pipeline, model deployment and lifecycle management.",
			icon: "🏆",
			color: "bg-green-500"
		},
		{
			title: "DeepLearning.AI Specialization in GANs, TensorFlow, and Deep Learning",
			institution: "Coursera",
			description: "In-depth understanding of deep learning frameworks, including GANs and TensorFlow.",
			icon: "🔬",
			color: "bg-indigo-500"
		},
		{
			title: "Image Prediction with Deep Learning",
			institution: "SENA Colombia Productiva y Fedesoft",
			description: "Practical experience in developing deep learning models for image prediction and analysis.",
			icon: "🖼️",
			color: "bg-teal-500"
		},
		{
			title: "Natural Language Processing Specialization",
			institution: "Coursera",
			description: "Specialized in NLP techniques, including text processing, sentiment analysis, and transformer-based architectures.",
			icon: "💬",
			color: "bg-red-500"
		}
	];

	const visibleCourses = showAll ? educationData : educationData.slice(0, 3);

	return (
		<div className="mt-0">
			<div className="text-center mb-1">
				<h2 className="font-general-semibold text-3xl sm:text-4xl text-white mb-4">
					Education & Training
				</h2>
				<p className="font-general-regular text-lg text-gray-300">
					Continuous learning and professional development in AI, ML, and engineering
				</p>
			</div>

			<div className="space-y-4">
				{visibleCourses.map((course, index) => (
					<div key={index} className="bg-gray-900 border border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-dev-blue">
						<div className="flex items-start space-x-4">
							<div className={`${course.color} text-white p-3 rounded-lg flex-shrink-0`}>
								{course.icon}
							</div>
							<div className="flex-1">
								<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
									<h3 className="font-general-semibold text-xl text-white">
										{course.title}
									</h3>
									<span className="text-sm font-medium text-dev-blue bg-dev-blue/10 px-3 py-1 rounded-full">
										{course.institution}
									</span>
								</div>
								{course.year && (
									<p className="font-general-medium text-lg text-gray-300 mb-2">
										{course.year}
									</p>
								)}
								<p className="font-general-regular text-gray-300 leading-relaxed">
									{course.description}
								</p>
							</div>
						</div>
					</div>
				))}
			</div>

			{/* Show More/Less Button */}
			<div className="text-center mt-8">
				<button
					onClick={() => setShowAll(!showAll)}
					className="bg-dev-blue hover:bg-dev-blue-dark text-black font-medium py-3 px-6 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl glow-blue"
				>
					{showAll ? 'Show Less' : `Show More (${educationData.length - 3} more courses)`}
				</button>
			</div>

			<div className="mt-12">
				<div className="bg-gradient-to-r from-dev-blue to-dev-purple rounded-xl p-8 text-white">
					<h3 className="font-general-semibold text-2xl mb-6 text-center">🏆 Additional Achievements</h3>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div className="bg-white/10 rounded-lg p-4">
							<h4 className="font-semibold text-lg mb-2">🎤 Conference Speaker</h4>
							<p className="text-sm">SICC 2019: Presented computer vision project on pupil tracking using CNNs and machine vision techniques</p>
						</div>
						<div className="bg-white/10 rounded-lg p-4">
							<h4 className="font-semibold text-lg mb-2">🔬 Research Contributions</h4>
							<p className="text-sm">National University of Colombia: Holography and image reconstruction research using CNNs</p>
						</div>
						<div className="bg-white/10 rounded-lg p-4">
							<h4 className="font-semibold text-lg mb-2">👨‍🏫 Teaching Experience</h4>
							<p className="text-sm">Co-Instructor: Computer Vision course design and teaching with INTECOL SAS</p>
						</div>
						<div className="bg-white/10 rounded-lg p-4">
							<h4 className="font-semibold text-lg mb-2">💼 Personal Projects</h4>
							<p className="text-sm">Fast Trading Algorithm: Automated trading system with Freqtrade and statistical signals</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AboutEducation;
