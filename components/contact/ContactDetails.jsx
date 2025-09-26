import { FiPhone, FiMapPin, FiMail } from 'react-icons/fi';

const contacts = [
	{
		id: 1,
		name: 'Medellin, Antioquia',
		icon: <FiMapPin />,
	},
	{
		id: 2,
		name: 'dcnavarros97@gmail.com',
		icon: <FiMail />,
	},
	{
		id: 3,
		name: '+57 3007751361',
		icon: <FiPhone />,
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
								{contact.id === 2 ? (
									<a 
										href="mailto:dcnavarros97@gmail.com"
										className="contact-link"
									>
										{contact.name}
									</a>
								) : contact.id === 3 ? (
									<a 
										href="tel:+573007751361"
										className="contact-link"
									>
										{contact.name}
									</a>
								) : (
									<span className="contact-text">
										{contact.name}
									</span>
								)}
							</div>
						))}
					</div>
					
					<div className="contact-info-box">
						<p className="contact-info-title">💡 Quick Contact</p>
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
