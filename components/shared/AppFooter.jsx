import Link from 'next/link';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import AppFooterCopyright from './AppFooterCopyright';
import { trackUmamiEvent } from '../../utils/analytics';

const socialLinks = [
	{
		id: 1,
		label: 'LinkedIn',
		icon: <FiLinkedin aria-hidden="true" />,
		url: 'https://www.linkedin.com/in/david-navarro-19b91b198/',
	},
	{
		id: 2,
		label: 'GitHub',
		icon: <FiGithub aria-hidden="true" />,
		url: 'https://github.com/DavidNavarroSaiz',
	},
];

function AppFooter() {
	return (
		<footer className="mt-24 border-t border-white/10 bg-ink/60">
			<div className="container mx-auto py-10 sm:py-12">
				<div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
					{/* Brand */}
					<div className="max-w-sm">
						<Link
							href="/"
							aria-label="David Navarro, home"
							className="footer-wordmark"
						>
							David Navarro
						</Link>
						<p className="footer-role">
							Senior AI Engineer · Production AI Agents · LLMOps · ML Platforms
						</p>
					</div>

					{/* Social links */}
					<div>
						<p className="footer-label">Connect</p>
						<ul className="mt-3 flex flex-wrap items-center gap-2">
							{socialLinks.map((link) => (
								<li key={link.id}>
									<a
										href={link.url}
										target="_blank"
										rel="noopener noreferrer"
										onClick={() =>
										trackUmamiEvent(
											link.label === 'LinkedIn'
												? 'linkedin_outbound'
												: 'github_outbound',
											{
												destination: link.label.toLowerCase(),
											},
										)
									}
										className="footer-social-link"
									>
										<span aria-hidden="true">{link.icon}</span>
										<span>{link.label}</span>
									</a>
								</li>
							))}
						</ul>
					</div>
				</div>

				<div className="mt-10 border-t border-white/10 pt-6">
					<AppFooterCopyright />
				</div>
			</div>
		</footer>
	);
}

export default AppFooter;
