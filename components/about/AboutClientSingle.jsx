function AboutClientSingle({ title, role, period, description }) {
	return (
		<div className="bg-secondary-light dark:bg-ternary-dark rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-indigo-500 hover:border-indigo-600 group">
			<div className="flex items-start space-x-4">
				<div className="bg-indigo-500 text-white p-3 rounded-lg flex-shrink-0 group-hover:bg-indigo-600 transition-colors duration-300">
					<span className="text-lg">🏢</span>
				</div>
				<div className="flex-1">
					<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
						<h3 className="font-general-semibold text-xl text-primary-dark dark:text-primary-light group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
							{title}
						</h3>
						<span className="text-sm font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-900 px-3 py-1 rounded-full mt-2 sm:mt-0">
							{period}
						</span>
					</div>
					<div className="mb-3">
						<p className="font-general-medium text-lg text-indigo-600 dark:text-indigo-400 mb-2">
							{role}
						</p>
					</div>
					<p className="font-general-regular text-ternary-dark dark:text-ternary-light leading-relaxed">
						{description}
					</p>
				</div>
			</div>
		</div>
	);
}

export default AboutClientSingle;
