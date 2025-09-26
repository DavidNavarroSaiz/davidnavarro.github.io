function AppFooterCopyright() {
	return (
		<div className="font-general-regular flex justify-center items-center text-center">
			<div className="text-lg text-gray-300">
				<a
					href="https://davidnavarrosaiz.github.io/davidnavarro.github.io/"
					target="__blank"
					className="text-white font-semibold hover:text-dev-blue transition-colors duration-300 hover:underline"
				>
					David Navarro
				</a>
				<span className="text-gray-500 mx-2">•</span>
				<span className="text-gray-400 text-sm">
					Machine Learning Engineer & AI Specialist
				</span>
			</div>
		</div>
	);
}

export default AppFooterCopyright;
