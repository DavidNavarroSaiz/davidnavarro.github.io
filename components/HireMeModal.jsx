import { motion } from 'framer-motion';
import { FiX } from 'react-icons/fi';
import Button from './reusable/Button';

const selectOptions = [
	'Machine Learning',
	'MLOps',
	'Computer Vision',
	'LLMs and RAG',
	'AI Automation',
	'Data Science',
	'Other AI/ML Project',
];

function HireMeModal({ onClose, onRequest }) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="font-general-medium fixed inset-0 z-30 transition-all duration-500"
		>
			{/* Modal Backdrop */}
			<div className="bg-filter bg-black bg-opacity-50 fixed inset-0 w-full h-full z-20"></div>

			{/* Modal Content */}
			<main className="flex flex-col items-center justify-center h-full w-full">
				<div className="modal-wrapper flex items-center z-30">
					<div className="modal max-w-md mx-5 xl:max-w-xl lg:max-w-xl md:max-w-xl bg-gray-900 border border-gray-700 max-h-screen shadow-2xl flex-row rounded-xl relative">
						<div className="modal-header flex justify-between gap-10 p-6 border-b border-gray-700">
							<h5 className="text-white text-xl font-semibold">
								What AI/ML project can I help you with?
							</h5>
							<button
								onClick={onClose}
								className="px-4 font-bold text-gray-400 hover:text-white transition-colors duration-300"
							>
								<FiX className="text-3xl" />
							</button>
						</div>
						<div className="modal-body p-6 w-full h-full">
							<form
								onSubmit={(e) => {
									e.preventDefault();
								}}
								className="max-w-xl m-4 text-left"
							>
								<div className="mb-6">
									<label className="block text-white mb-2 font-medium">Name</label>
									<input
										className="w-full px-4 py-3 border border-gray-600 rounded-lg text-md bg-gray-800 text-white focus:border-dev-blue focus:ring-1 focus:ring-dev-blue transition-colors duration-300"
										id="name"
										name="name"
										type="text"
										required
										placeholder="Your Name"
										aria-label="Name"
									/>
								</div>
								<div className="mb-6">
									<label className="block text-white mb-2 font-medium">Email</label>
									<input
										className="w-full px-4 py-3 border border-gray-600 rounded-lg text-md bg-gray-800 text-white focus:border-dev-blue focus:ring-1 focus:ring-dev-blue transition-colors duration-300"
										id="email"
										name="email"
										type="email"
										required
										placeholder="your.email@example.com"
										aria-label="Email"
									/>
								</div>
								<div className="mb-6">
									<label className="block text-white mb-2 font-medium">Project Type</label>
									<select
										className="w-full px-4 py-3 border border-gray-600 rounded-lg text-md bg-gray-800 text-white focus:border-dev-blue focus:ring-1 focus:ring-dev-blue transition-colors duration-300"
										id="subject"
										name="subject"
										required
										aria-label="Project Category"
									>
										{selectOptions.map((option) => (
											<option
												className="text-normal sm:text-md"
												key={option}
											>
												{option}
											</option>
										))}
									</select>
								</div>

								<div className="mb-6">
									<label className="block text-white mb-2 font-medium">Project Details</label>
									<textarea
										className="w-full px-4 py-3 border border-gray-600 rounded-lg text-md bg-gray-800 text-white focus:border-dev-blue focus:ring-1 focus:ring-dev-blue transition-colors duration-300"
										id="message"
										name="message"
										cols="14"
										rows="6"
										aria-label="Details"
										placeholder="Describe your AI/ML project requirements, goals, and timeline..."
									></textarea>
								</div>

								<div className="flex gap-4 pt-4">
									<button
										onClick={onRequest}
										type="submit"
										className="flex-1 px-6 py-3 text-black font-medium bg-dev-blue hover:bg-dev-blue-dark rounded-lg focus:ring-1 focus:ring-dev-blue duration-500 glow-blue transition-colors"
										aria-label="Submit Request"
									>
										Send Request
									</button>
									<button
										onClick={onClose}
										type="button"
										className="px-6 py-3 bg-gray-700 text-white hover:bg-gray-600 rounded-lg focus:ring-1 focus:ring-gray-500 duration-500 transition-colors"
										aria-label="Close Modal"
									>
										Cancel
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</main>
		</motion.div>
	);
}

export default HireMeModal;
