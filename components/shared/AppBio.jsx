import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import useScrollAnimation from '../../hooks/useScrollAnimation';

function AppBio() {
	// Temporarily disable scroll animation to fix navigation issue
	const [ref, isVisible] = [null, true];

	return (
		<section className="py-2 bg-gray-900/50 border-t border-gray-700">
			<div className="container mx-auto px-4">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-2xl lg:text-3xl font-semibold text-white mb-6">
						About My Journey
					</h2>
					
					<div className="bg-gray-800/50 border border-gray-600 rounded-xl p-8">
						<div className="text-left space-y-6">
							<p className="text-lg text-gray-300 leading-relaxed">
								With 7+ years of experience in Machine Learning and AI, I specialize in building 
								end-to-end ML systems that solve real-world problems. From computer vision research 
								to production MLOps pipelines, I've worked across diverse industries including 
								healthcare, education, and enterprise automation.
							</p>
							
							<p className="text-lg text-gray-300 leading-relaxed">
								My recent work focuses on Large Language Models, RAG systems, and multi-agent 
								orchestration. I've successfully deployed production AI systems that have improved 
								operational efficiency and user satisfaction across multiple organizations.
							</p>
							
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
								<div className="bg-gray-700/50 rounded-lg p-4">
									<h4 className="font-semibold text-white mb-2">🎯 Specializations</h4>
									<ul className="text-sm text-gray-300 space-y-1">
										<li>• LLMs & RAG Systems</li>
										<li>• MLOps & CI/CD</li>
										<li>• Computer Vision</li>
										<li>• Multi-agent Systems</li>
									</ul>
								</div>
								
								<div className="bg-gray-700/50 rounded-lg p-4">
									<h4 className="font-semibold text-white mb-2">🏆 Recent Achievements</h4>
									<ul className="text-sm text-gray-300 space-y-1">
										<li>• 40% faster release cycles</li>
										<li>• Production AI deployments</li>
										<li>• Team leadership experience</li>
										<li>• Research publications</li>
									</ul>
								</div>
							</div>
						</div>
						
						<div className="mt-8 flex justify-center">
							<Link
								href="/about"
								className="inline-flex items-center px-6 py-3 bg-dev-blue hover:bg-dev-blue-dark text-black font-semibold rounded-lg transition-all duration-300 glow-blue"
							>
								View Full Biography
								<FiArrowRight className="ml-2 h-5 w-5" />
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default AppBio;
