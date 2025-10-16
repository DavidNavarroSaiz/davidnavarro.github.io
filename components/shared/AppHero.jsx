import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowDownCircle, FiArrowRight } from 'react-icons/fi';
import profileImage from '../../public/images/profile.jpeg';
import logo from '../../public/images/DN-Logo.svg';

function AppHero() {
	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
			className="hero-container"
		>
			<div className="container mx-auto px-4">
				<div className="hero-grid">
					{/* Columna Izquierda - Foto y Contenido */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.3 }}
						className="hero-content"
					>
						{/* Foto Profesional */}
						<div className="mb-4 flex justify-center lg:justify-start">
							<div className="relative">
								<Image
									src={profileImage}
									alt="David Navarro - Machine Learning Engineer"
									width={250}
									height={250}
									className="hero-photo"
								/>
								<div className="hero-badge">
									<Image 
										src={logo}
										alt="David Navarro Logo" 
										width={24}
										height={24}
										className="w-6 h-6 filter brightness-0 invert"
									/>
								</div>
							</div>
						</div>

						{/* Intro */}
						<motion.h1
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.4 }}
							className="hero-title"
						>
							Hi, I'm <span className="hero-title-accent">David</span>
						</motion.h1>

						<motion.p
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.5 }}
							className="hero-subtitle"
						>
							I build LLM/RAG and MLOps systems that cut release cycles by ~40% and ship to production reliably.
						</motion.p>

						{/* Botones */}
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.6 }}
							className="hero-buttons"
						>
							<a
								download="CV_DavidNavarro_2025.pdf"
								href="/files/CV_DavidNavarro_2025.pdf"
								className="hero-button-primary"
							>
								<FiArrowDownCircle className="mr-2 h-5 w-5" />
								Download CV
							</a>
							
							<Link
								href="/about"
								className="hero-button-secondary"
							>
								Learn More About Me
								<FiArrowRight className="ml-2 h-5 w-5" />
							</Link>
						</motion.div>
					</motion.div>

					{/* Columna Derecha - Animación y Proyectos Destacados */}
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.4 }}
						className="relative"
					>
						{/* Fondo con animación abstracta de AI */}
						<div className="relative bg-gray-900/50 border border-gray-700 rounded-2xl p-8 backdrop-blur-sm">
							{/* Animación de red neuronal */}
							<div className="absolute inset-0 overflow-hidden rounded-2xl">
								<div className="ai-network">
									{/* Nodos de la red */}
									<div className="neural-node node-1"></div>
									<div className="neural-node node-2"></div>
									<div className="neural-node node-3"></div>
									<div className="neural-node node-4"></div>
									<div className="neural-node node-5"></div>
									<div className="neural-node node-6"></div>
									<div className="neural-node node-7"></div>
									<div className="neural-node node-8"></div>
									
									{/* Conexiones entre nodos */}
									<svg className="neural-connections" viewBox="0 0 400 300">
										<path d="M50,50 Q100,30 150,80" className="connection-line" />
										<path d="M150,80 Q200,50 250,100" className="connection-line" />
										<path d="M50,50 Q80,100 120,150" className="connection-line" />
										<path d="M120,150 Q160,120 200,140" className="connection-line" />
										<path d="M200,140 Q240,160 280,120" className="connection-line" />
										<path d="M150,80 Q180,120 200,140" className="connection-line" />
										<path d="M250,100 Q280,130 320,110" className="connection-line" />
										<path d="M200,140 Q230,170 260,200" className="connection-line" />
									</svg>
									
									{/* Flujos de datos */}
									<div className="data-flow flow-1"></div>
									<div className="data-flow flow-2"></div>
									<div className="data-flow flow-3"></div>
								</div>
							</div>

							{/* Proyectos Destacados */}
							<div className="relative z-10">
								<div className="text-center mb-6">
									<h3 className="text-2xl font-semibold text-white mb-2">
										Featured Projects
									</h3>
									<p className="text-sm text-gray-400">
										Recent AI/ML implementations
									</p>
								</div>
								
								<div className="space-y-4">
									{/* Proyecto 1 */}
									<motion.div
										whileHover={{ scale: 1.02, y: -2 }}
										className="bg-gray-800/80 border border-gray-600 rounded-lg p-4 hover:border-dev-blue/50 transition-all duration-300"
									>
										<div className="flex items-center justify-between mb-2">
											<h4 className="font-semibold text-white">PM Agent for Azure DevOps</h4>
											<span className="text-xs text-dev-blue bg-dev-blue/20 px-2 py-1 rounded">LLMs</span>
										</div>
										<p className="text-sm text-gray-300 mb-2">
											Multi-agent system for project management automation
										</p>
										<div className="flex flex-wrap gap-1">
											<span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">LangChain</span>
											<span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded">Azure</span>
											<span className="text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded">FastAPI</span>
										</div>
									</motion.div>

									{/* Proyecto 2 */}
									<motion.div
										whileHover={{ scale: 1.02, y: -2 }}
										className="bg-gray-800/80 border border-gray-600 rounded-lg p-4 hover:border-dev-blue/50 transition-all duration-300"
									>
										<div className="flex items-center justify-between mb-2">
											<h4 className="font-semibold text-white">Production RAG Platform</h4>
											<span className="text-xs text-dev-blue bg-dev-blue/20 px-2 py-1 rounded">RAG</span>
										</div>
										<p className="text-sm text-gray-300 mb-2">
											Scalable retrieval-augmented generation system
										</p>
										<div className="flex flex-wrap gap-1">
											<span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">PGVector</span>
											<span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded">LangChain</span>
											<span className="text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded">FastAPI</span>
										</div>
									</motion.div>

									{/* Proyecto 3 */}
									<motion.div
										whileHover={{ scale: 1.02, y: -2 }}
										className="bg-gray-800/80 border border-gray-600 rounded-lg p-4 hover:border-dev-blue/50 transition-all duration-300"
									>
										<div className="flex items-center justify-between mb-2">
											<h4 className="font-semibold text-white">COVID-Rx Diagnosis System</h4>
											<span className="text-xs text-dev-blue bg-dev-blue/20 px-2 py-1 rounded">CV</span>
										</div>
										<p className="text-sm text-gray-300 mb-2">
											Computer vision for medical diagnosis automation
										</p>
										<div className="flex flex-wrap gap-1">
											<span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">PyTorch</span>
											<span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded">OpenCV</span>
											<span className="text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded">CNN</span>
										</div>
									</motion.div>
								</div>
								
								{/* Botón View More Projects */}
								<div className="mt-6 text-center">
									<Link
										href="/projects"
										className="inline-flex items-center px-4 py-2 text-sm font-medium text-dev-blue hover:text-dev-blue-dark border border-dev-blue/50 hover:border-dev-blue rounded-lg transition-all duration-300"
									>
										View More Projects
										<FiArrowRight className="ml-2 h-4 w-4" />
									</Link>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</motion.section>
	);
}

export default AppHero;
