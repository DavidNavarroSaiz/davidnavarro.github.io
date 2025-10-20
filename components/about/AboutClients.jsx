import { motion } from 'framer-motion';
import Link from 'next/link';
import { clientsData } from '../../data/clientsData';

function AboutClients() {
	// Get unique companies from experience data with years
	const companies = [
		{ name: 'Svitla Systems', period: '2025 - Present', color: 'from-green-500 to-emerald-500' },
		{ name: 'Kmeleon', period: '2025', color: 'from-blue-500 to-cyan-500' },
		{ name: 'Southdesk', period: '2024-2025', color: 'from-purple-500 to-pink-500' },
		{ name: 'El Sol', period: '2023-2024', color: 'from-orange-500 to-red-500' },
		{ name: 'University of Magdalena', period: '2020-2021', color: 'from-indigo-500 to-blue-500' },
		{ name: 'Intecol Sas', period: '2019-2023', color: 'from-yellow-500 to-orange-500' }
	];

	return (
		<div className="py-20">
			<div className="text-center mb-12">
				<h2 className="font-general-semibold text-3xl sm:text-4xl text-white mb-4">
					Companies I've Worked With
				</h2>
				<p className="font-general-regular text-lg text-gray-300 mb-6">
					Building intelligent systems across diverse industries
				</p>
			</div>

			{/* Timeline Container */}
			<div className="relative mb-8">
				{/* Timeline Line */}
				<div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform -translate-y-1/2"></div>
				
				{/* Company Timeline */}
				<div className="flex justify-between items-center relative">
					{companies.map((company, index) => (
						<motion.div
							key={company.name}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: index * 0.1 }}
							whileHover={{ scale: 1.1, y: -10 }}
							className="flex flex-col items-center relative group"
						>
							{/* Timeline Dot */}
							<div className={`w-6 h-6 rounded-full bg-gradient-to-r ${company.color} border-4 border-gray-900 z-10 mb-3 shadow-lg`}></div>
							
							{/* Company Card */}
							<div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 text-center border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 min-w-[120px] group-hover:shadow-xl group-hover:shadow-blue-500/10">
								<h3 className="text-white font-medium text-sm mb-1">{company.name}</h3>
								<span className="text-gray-400 text-xs">{company.period}</span>
							</div>
						</motion.div>
					))}
				</div>
			</div>

			{/* Call to Action */}
			<div className="text-center">
				<Link href="/experience">
					<motion.button
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.6 }}
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-blue-600/25 transition-all duration-300"
					>
						View Full Experience →
					</motion.button>
				</Link>
			</div>
		</div>
	);
}

export default AboutClients;
