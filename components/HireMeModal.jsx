import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiX } from 'react-icons/fi';
import Button from './reusable/Button';
import { sendHireMeEmail } from '../utils/emailService';

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
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		message: ''
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData(prev => ({
			...prev,
			[name]: value
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsSubmitting(true);
		setSubmitStatus(null);

		try {
			const result = await sendHireMeEmail({
				...formData,
				subject: `Hire Me Request: ${formData.subject}`
			});

			if (result.success) {
				setSubmitStatus('success');
				setFormData({
					name: '',
					email: '',
					subject: '',
					message: ''
				});
				// Close modal after 2 seconds on success
				setTimeout(() => {
					onClose();
				}, 2000);
			} else {
				setSubmitStatus('error');
			}
		} catch (error) {
			console.error('Error sending email:', error);
			setSubmitStatus('error');
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="font-general-medium fixed inset-0 z-30 transition-all duration-500"
		>
			{/* Modal Backdrop */}
			<div className="bg-filter bg-black bg-opacity-50 fixed inset-0 w-full h-full z-20"></div>

			{/* Modal Content - Properly Centered */}
			<div className="fixed inset-0 z-30 flex items-center justify-center p-4 min-h-screen">
				<div className="w-full max-w-2xl max-h-[80vh] bg-gray-900 border border-gray-700 shadow-2xl rounded-xl overflow-hidden my-auto">
					{/* Modal Header */}
					<div className="flex justify-between items-center p-6 border-b border-gray-700">
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
					
					{/* Modal Body */}
					<div className="p-6 overflow-y-auto max-h-[calc(80vh-120px)]">
							<form onSubmit={handleSubmit} className="w-full text-left">
								{submitStatus === 'success' && (
									<div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
										Thank you for your request! I'll get back to you soon.
									</div>
								)}

								{submitStatus === 'error' && (
									<div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
										Sorry, there was an error sending your request. Please try again.
									</div>
								)}

								{/* Name Field */}
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
										value={formData.name}
										onChange={handleInputChange}
									/>
								</div>

								{/* Email Field */}
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
										value={formData.email}
										onChange={handleInputChange}
									/>
								</div>

								{/* Project Type Field */}
								<div className="mb-6">
									<label className="block text-white mb-2 font-medium">Project Type</label>
									<select
										className="w-full px-4 py-3 border border-gray-600 rounded-lg text-md bg-gray-800 text-white focus:border-dev-blue focus:ring-1 focus:ring-dev-blue transition-colors duration-300"
										id="subject"
										name="subject"
										required
										aria-label="Project Category"
										value={formData.subject}
										onChange={handleInputChange}
									>
										<option value="" disabled>Select a project type</option>
										{selectOptions.map((option) => (
											<option
												className="text-normal sm:text-md"
												key={option}
												value={option}
											>
												{option}
											</option>
										))}
									</select>
								</div>

								{/* Project Details Field */}
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
										value={formData.message}
										onChange={handleInputChange}
										required
									></textarea>
								</div>

								{/* Buttons - Inside the modal */}
								<div className="flex gap-4 pt-4">
									<button
										type="submit"
										disabled={isSubmitting}
										className="flex-1 px-6 py-3 text-black font-medium bg-dev-blue hover:bg-dev-blue-dark rounded-lg focus:ring-1 focus:ring-dev-blue duration-500 glow-blue transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
										aria-label="Submit Request"
									>
										{isSubmitting ? 'Sending...' : 'Send Request'}
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
		</motion.div>
	);
}

export default HireMeModal;
