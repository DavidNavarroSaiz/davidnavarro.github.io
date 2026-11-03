import { useEffect } from 'react';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import AboutExperience from '../components/about/AboutExperience';
import PagesMetaHead from '../components/PagesMetaHead';

function Experience() {
	// Force scroll to top on page load
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div>
			<PagesMetaHead title="Professional Experience" />

			<div className="container mx-auto">
				<AboutExperience />
			</div>

			<div className="container mx-auto border-t border-white/10">
				<div className="py-20 sm:py-24">
					<h2 className="font-general-semibold text-2xl tracking-[-0.01em] text-white sm:text-3xl">
						Working together
					</h2>
					<p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-400">
						Open to senior AI engineering roles across applied
						ML, LLM systems, and production ML platforms.
					</p>
					<Link
						href="/contact"
						className="mt-8 inline-flex items-center gap-2 text-sm font-general-semibold text-dev-blue transition-colors duration-200 hover:text-dev-blue-light"
					>
						Get in touch
						<FiArrowRight
							className="h-4 w-4"
							aria-hidden="true"
						/>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Experience;
