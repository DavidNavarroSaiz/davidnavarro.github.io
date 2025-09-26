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
					className="max-w-xl m-4 p-6 sm:p-10 bg-gray-900 border border-gray-700 rounded-xl shadow-xl text-left"
				>
					<p className="font-general-semibold text-white text-2xl mb-8">
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
							className="block text-lg text-white mb-2 font-medium"
							htmlFor="message"
						>
							Message
						</label>
						<textarea
							className="w-full px-5 py-3 border border-gray-600 text-white bg-gray-800 rounded-lg shadow-sm text-md focus:border-dev-blue focus:ring-1 focus:ring-dev-blue transition-colors duration-300"
							id="message"
							name="message"
							cols="14"
							rows="6"
							aria-label="Message"
							placeholder="Tell me about your project..."
						></textarea>
					</div>

					<div className="mt-8">
						<span className="font-general-medium px-8 py-4 text-black text-center font-medium tracking-wider bg-dev-blue hover:bg-dev-blue-dark focus:ring-1 focus:ring-dev-blue rounded-lg duration-500 glow-blue">
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
