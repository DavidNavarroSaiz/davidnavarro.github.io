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
				<h2 className="font-general-medium text-2xl text-primary-dark dark:text-primary-light mt-12 mb-8">
					Contact details
				</h2>
				<ul className="space-y-6">
					{contacts.map((contact) => (
						<li className="flex items-center" key={contact.id}>
							<div className="bg-indigo-100 dark:bg-indigo-900 p-3 rounded-lg mr-4">
								<i className="text-xl text-indigo-600 dark:text-indigo-400">
									{contact.icon}
								</i>
							</div>
							{contact.id === 2 ? (
								<a 
									href="mailto:dcnavarros97@gmail.com"
									className="text-lg text-ternary-dark dark:text-ternary-light hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
								>
									{contact.name}
								</a>
							) : contact.id === 3 ? (
								<a 
									href="tel:+573007751361"
									className="text-lg text-ternary-dark dark:text-ternary-light hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
								>
									{contact.name}
								</a>
							) : (
								<span className="text-lg text-ternary-dark dark:text-ternary-light">
									{contact.name}
								</span>
							)}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default ContactDetails;
