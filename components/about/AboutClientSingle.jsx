function AboutClientSingle({ title, role, period, description }) {
	return (
		<div className="bg-gray-900 border border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-dev-blue hover:border-dev-blue/60 group">
			<div className="flex items-start space-x-4">
				<div className="bg-dev-blue text-black p-3 rounded-lg flex-shrink-0 group-hover:bg-dev-blue-dark transition-colors duration-300">
					<span className="text-lg">🏢</span>
				</div>
				<div className="flex-1">
					<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
						<h3 className="font-general-semibold text-xl text-white group-hover:text-dev-blue transition-colors duration-300">
							{title}
						</h3>
						<span className="text-sm font-medium text-dev-blue bg-dev-blue/10 px-3 py-1 rounded-full mt-2 sm:mt-0">
							{period}
						</span>
					</div>
					<div className="mb-3">
						<p className="font-general-medium text-lg text-dev-blue mb-2">
							{role}
						</p>
					</div>
					<p className="font-general-regular text-gray-300 leading-relaxed">
						{description}
					</p>
				</div>
			</div>
		</div>
	);
}

export default AboutClientSingle;
