import { FiMail } from 'react-icons/fi';

const contacts = [
	{
		id: 2,
		name: 'dcnavarros97@gmail.com',
		icon: <FiMail />,
	},
];

function ContactDetails() {
	return (
		<div className="w-full lg:w-1/2">
			<div className="text-left max-w-xl px-6">
				<div className="contact-container">
					<h2 className="contact-title">
						Contact Details
					</h2>
					<div className="space-y-6">
						{contacts.map((contact) => (
							<div className="contact-item" key={contact.id}>
								<div className="contact-icon-container">
									<i className="contact-icon">
										{contact.icon}
									</i>
								</div>
								<a
									href="mailto:dcnavarros97@gmail.com"
									className="contact-link"
								>
									{contact.name}
								</a>
							</div>
						))}
					</div>
					
					<div className="contact-info-box">
						<p className="contact-info-title">Quick Contact</p>
						<p className="contact-info-text">
							Feel free to reach out for AI/ML projects, consulting, or collaboration opportunities.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ContactDetails;
