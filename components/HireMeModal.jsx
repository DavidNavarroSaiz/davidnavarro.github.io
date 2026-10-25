import { useEffect, useRef, useState } from 'react';
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
	const dialogRef = useRef(null);
	const closeButtonRef = useRef(null);
	const onCloseRef = useRef(onClose);

	useEffect(() => {
		onCloseRef.current = onClose;
	}, [onClose]);

	// Dialog keyboard behaviour: trap Tab, close on Escape, restore focus.
	useEffect(() => {
		const dialog = dialogRef.current;
		const previouslyFocused = document.activeElement;
		const focusableSelector =
			'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

		closeButtonRef.current?.focus();

		const handleKeyDown = (event) => {
			if (event.key === 'Escape') {
				event.preventDefault();
				onCloseRef.current();
				return;
			}
			if (event.key !== 'Tab') return;

			const focusable = Array.from(
				dialog.querySelectorAll(focusableSelector)
			);
			if (!focusable.length) return;

			const first = focusable[0];
			const last = focusable[focusable.length - 1];

			if (event.shiftKey && document.activeElement === first) {
				event.preventDefault();
				last.focus();
			} else if (!event.shiftKey && document.activeElement === last) {
				event.preventDefault();
				first.focus();
			}
		};

		document.addEventListener('keydown', handleKeyDown);

		return () => {
			document.removeEventListener('keydown', handleKeyDown);
			if (previouslyFocused instanceof HTMLElement) {
				previouslyFocused.focus();
			}
		};
	}, []);

	// Close after a successful send, but never after the dialog is dismissed.
	useEffect(() => {
		if (submitStatus !== 'success') return undefined;
		const timer = setTimeout(() => onCloseRef.current(), 2000);
		return () => clearTimeout(timer);
	}, [submitStatus]);

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
			className="font-general-medium fixed inset-0 z-[80] transition-all duration-500"
		>
			{/* Modal Backdrop */}
			<div
				className="bg-filter fixed inset-0 z-20 h-full w-full bg-black/70 backdrop-blur-sm"
				aria-hidden="true"
			/>

			{/* Modal Content - Properly Centered */}
			<div
				className="fixed inset-0 z-30 flex min-h-screen items-center justify-center p-4"
				onClick={(event) => {
					if (event.target === event.currentTarget) onClose();
				}}
			>
				<div
					ref={dialogRef}
					role="dialog"
					aria-modal="true"
					aria-labelledby="hire-me-title"
					className="my-auto flex max-h-[80vh] w-full max-w-2xl flex-col overflow-hidden rounded-xl border border-white/10 bg-gray-900 shadow-2xl"
				>
					{/* Modal Header */}
					<div className="flex shrink-0 items-center justify-between border-b border-white/10 p-6">
						<h5
							id="hire-me-title"
							className="text-xl font-semibold text-white"
						>
							What AI/ML project can I help you with?
						</h5>
						<button
							ref={closeButtonRef}
							type="button"
							onClick={onClose}
							aria-label="Close dialog"
							className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md text-gray-400 transition-colors duration-200 hover:bg-white/5 hover:text-white"
						>
							<FiX className="h-5 w-5" aria-hidden="true" />
						</button>
					</div>
					
					{/* Modal Body */}
					<form
						onSubmit={handleSubmit}
						className="flex min-h-0 w-full flex-1 flex-col text-left"
					>
						<div className="min-h-0 flex-1 overflow-y-auto p-6">
								{submitStatus === 'success' && (
									<div
										role="status"
										className="mb-6 rounded-md border border-green-400 bg-green-100 p-4 text-green-700"
									>
										Thank you for your request! I&apos;ll get back to you soon.
									</div>
								)}

								{submitStatus === 'error' && (
									<div
										role="alert"
										className="mb-6 rounded-md border border-red-400 bg-red-100 p-4 text-red-700"
									>
										Sorry, there was an error sending your request. Please try again.
									</div>
								)}

								{/* Name Field */}
								<div className="mb-6">
									<label className="block text-white mb-2 font-medium" htmlFor="hire-name">Name</label>
									<input
										className="w-full px-4 py-3 border border-gray-600 rounded-lg text-md bg-gray-800 text-white focus:border-dev-blue focus:ring-1 focus:ring-dev-blue transition-colors duration-300"
										id="hire-name"
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
									<label className="block text-white mb-2 font-medium" htmlFor="hire-email">Email</label>
									<input
										className="w-full px-4 py-3 border border-gray-600 rounded-lg text-md bg-gray-800 text-white focus:border-dev-blue focus:ring-1 focus:ring-dev-blue transition-colors duration-300"
										id="hire-email"
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
									<label className="block text-white mb-2 font-medium" htmlFor="hire-subject">Project Type</label>
									<select
										className="w-full px-4 py-3 border border-gray-600 rounded-lg text-md bg-gray-800 text-white focus:border-dev-blue focus:ring-1 focus:ring-dev-blue transition-colors duration-300"
										id="hire-subject"
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
									<label className="block text-white mb-2 font-medium" htmlFor="hire-message">Project Details</label>
									<textarea
										className="w-full px-4 py-3 border border-gray-600 rounded-lg text-md bg-gray-800 text-white focus:border-dev-blue focus:ring-1 focus:ring-dev-blue transition-colors duration-300"
										id="hire-message"
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

							</div>

							{/* Actions stay visible while the form scrolls */}
							<div className="flex shrink-0 gap-4 border-t border-white/10 bg-gray-900 px-6 py-4">
								<Button
									type="submit"
									title={isSubmitting ? 'Sending...' : 'Send Request'}
									className="btn-primary flex-1 px-6 py-3"
									aria-label="Submit Request"
									disabled={isSubmitting}
								/>
								<Button
									type="button"
									title="Cancel"
									onClick={onClose}
									className="btn-secondary px-6 py-3"
									aria-label="Close Modal"
								/>
							</div>
					</form>
				</div>
			</div>
		</motion.div>
	);
}

export default HireMeModal;
