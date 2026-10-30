import { FiMapPin, FiMail } from 'react-icons/fi';

const contacts = [
	{
		id: 1,
		name: 'Medellín, Antioquia, Colombia',
		icon: <FiMapPin />,
		href: null,
	},
	{
		id: 2,
		name: 'dcnavarros97@gmail.com',
		icon: <FiMail />,
		href: 'mailto:dcnavarros97@gmail.com',
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
							<div className="contact-item min-w-0" key={contact.id}>
								<div className="contact-icon-container">
									<i className="contact-icon">
										{contact.icon}
									</i>
								</div>
								{contact.href ? (
									<a
										href={contact.href}
										className="contact-link min-w-0 break-all"
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
