import Button from '../reusable/Button';
import FormInput from '../reusable/FormInput';

function ContactForm() {
	return (
		<div className="w-full lg:w-1/2">
			<div className="leading-loose">
				<form
					onSubmit={(e) => {
						e.preventDefault();
					}}
					className="form-container"
				>
					<p className="form-title">
						Get in Touch
					</p>

					<FormInput
						inputLabel="Full Name"
						labelFor="name"
						inputType="text"
						inputId="name"
						inputName="name"
						placeholderText="Your Name"
						ariaLabelName="Name"
					/>
					<FormInput
						inputLabel="Email"
						labelFor="email"
						inputType="email"
						inputId="email"
						inputName="email"
						placeholderText="Your email"
						ariaLabelName="Email"
					/>
					<FormInput
						inputLabel="Subject"
						labelFor="subject"
						inputType="text"
						inputId="subject"
						inputName="subject"
						placeholderText="Subject"
						ariaLabelName="Subject"
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
						></textarea>
					</div>

					<div className="mt-8">
						<span className="form-button-primary">
							<Button
								title="Send Message"
								type="submit"
								aria-label="Send Message"
							/>
						</span>
					</div>
				</form>
			</div>
		</div>
	);
}

export default ContactForm;
