import {
	FiGithub,
	FiLinkedin,
} from 'react-icons/fi';
import AppFooterCopyright from './AppFooterCopyright';

const socialLinks = [
	{
		id: 1,
		icon: <FiLinkedin />,
		url: 'https://www.linkedin.com/in/david-navarro-19b91b198/',
	},
	{
		id: 2,
		icon: <FiGithub />,
		url: 'https://github.com/DavidNavarroSaiz',
	},
];

function AppFooter() {
	return (
		<div className="container mx-auto">
			<div className="pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-gray-700">
				{/* Footer social links */}
				<div className="font-general-regular flex flex-col justify-center items-center mb-12 sm:mb-28">
					<p className="text-3xl sm:text-4xl text-white mb-5 font-general-semibold">
						Follow me
					</p>
					<ul className="flex gap-6 sm:gap-8">
						{socialLinks.map((link) => (
							<a
								href={link.url}
								target="__blank"
								key={link.id}
								className="text-gray-300 hover:text-dev-blue cursor-pointer rounded-xl bg-gray-900 border border-gray-700 hover:border-dev-blue/50 hover:bg-gray-800 shadow-lg hover:shadow-xl p-4 duration-300 transition-all group"
							>
								<i className="text-xl sm:text-2xl md:text-3xl group-hover:scale-110 transition-transform duration-300">
									{link.icon}
								</i>
							</a>
						))}
					</ul>
				</div>

				<AppFooterCopyright />
			</div>
		</div>
	);
}

export default AppFooter;
