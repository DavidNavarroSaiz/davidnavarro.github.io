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
				<div className="bg-gray-900 border border-gray-700 rounded-xl p-8 mt-12">
					<h2 className="font-general-semibold text-2xl text-white mb-8">
						Contact Details
					</h2>
					<div className="space-y-6">
						{contacts.map((contact) => (
							<div className="flex items-center bg-gray-800 border border-gray-600 rounded-lg p-4 hover:border-dev-blue/50 transition-colors duration-300" key={contact.id}>
								<div className="bg-dev-blue/20 border border-dev-blue/30 p-3 rounded-lg mr-4">
									<i className="text-xl text-dev-blue">
										{contact.icon}
									</i>
								</div>
								{contact.id === 2 ? (
									<a 
										href="mailto:dcnavarros97@gmail.com"
										className="text-lg text-white hover:text-dev-blue transition-colors duration-300 font-medium"
									>
										{contact.name}
									</a>
								) : contact.id === 3 ? (
									<a 
										href="tel:+573007751361"
										className="text-lg text-white hover:text-dev-blue transition-colors duration-300 font-medium"
									>
										{contact.name}
									</a>
								) : (
									<span className="text-lg text-gray-300 font-medium">
										{contact.name}
									</span>
								)}
							</div>
						))}
					</div>
					
					<div className="mt-8 p-4 bg-dev-blue/10 border border-dev-blue/20 rounded-lg">
						<p className="text-dev-blue text-sm font-medium mb-2">💡 Quick Contact</p>
						<p className="text-gray-300 text-sm">
							Feel free to reach out for AI/ML projects, consulting, or collaboration opportunities.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ContactDetails;
