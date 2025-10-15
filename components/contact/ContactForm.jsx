import { useState } from 'react';
import Button from '../reusable/Button';
import FormInput from '../reusable/FormInput';

function ContactForm() {
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
			const response = await fetch('/api/send-email', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			});

			const result = await response.json();

			if (response.ok) {
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
		<div className="w-full lg:w-1/2">
			<div className="leading-loose">
				<form onSubmit={handleSubmit} className="form-container">
					<p className="form-title">
						Get in Touch
					</p>

					{submitStatus === 'success' && (
						<div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
							Thank you for your message! I'll get back to you soon.
						</div>
					)}

					{submitStatus === 'error' && (
						<div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
							Sorry, there was an error sending your message. Please try again.
						</div>
					)}

					<FormInput
						inputLabel="Full Name"
						labelFor="name"
						inputType="text"
						inputId="name"
						inputName="name"
						placeholderText="Your Name"
						ariaLabelName="Name"
						value={formData.name}
						onChange={handleInputChange}
					/>
					<FormInput
						inputLabel="Email"
						labelFor="email"
						inputType="email"
						inputId="email"
						inputName="email"
						placeholderText="Your email"
						ariaLabelName="Email"
						value={formData.email}
						onChange={handleInputChange}
					/>
					<FormInput
						inputLabel="Subject"
						labelFor="subject"
						inputType="text"
						inputId="subject"
						inputName="subject"
						placeholderText="Subject"
						ariaLabelName="Subject"
						value={formData.subject}
						onChange={handleInputChange}
					/>

					<div className="mt-6">
						<label
							className="form-label"
							htmlFor="message"
						>
							Message
						</label>
						<textarea
							className="form-textarea"
							id="message"
							name="message"
							cols="14"
							rows="6"
							aria-label="Message"
							placeholder="Tell me about your project..."
							value={formData.message}
							onChange={handleInputChange}
							required
						></textarea>
					</div>

					<div className="mt-8">
						<span className="form-button-primary">
							<Button
								title={isSubmitting ? "Sending..." : "Send Message"}
								type="submit"
								aria-label="Send Message"
								disabled={isSubmitting}
							/>
						</span>
					</div>
				</form>
			</div>
		</div>
	);
}

export default ContactForm;
