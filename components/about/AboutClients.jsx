import { useState } from 'react';
import { clientsData } from '../../data/clientsData';
import { clientsHeading } from '../../data/clientsData';
import AboutClientSingle from './AboutClientSingle';

function AboutClients() {
	const [clients, setClients] = useState(clientsData);
	return (
		<div className="mt-10 sm:mt-20">
			<div className="text-center mb-12">
				<h2 className="font-general-semibold text-3xl sm:text-4xl text-white mb-4">
					{clientsHeading}
				</h2>
				<p className="font-general-regular text-lg text-gray-300">
					Professional experience across diverse industries and technologies
				</p>
			</div>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
				{clients.map((client) => (
					<AboutClientSingle
						title={client.title}
						role={client.role}
						period={client.period}
						description={client.description}
						key={client.id}
					/>
				))}
			</div>
		</div>
	);
}

export default AboutClients;
