import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import AboutMeBio from '../components/about/AboutMeBio';
import AboutSkills from '../components/about/AboutSkills';
import AboutAchievements from '../components/about/AboutAchievements';
import AboutEducation from '../components/about/AboutEducation';
import PagesMetaHead from '../components/PagesMetaHead';
import StructuredProfileData from '../components/StructuredProfileData';
import { experienceData } from '../data/experienceData';

function about() {
	return (
		<div>
			<PagesMetaHead title="About Me" />
			<StructuredProfileData />

			<div className="container mx-auto">
				<AboutMeBio />
			</div>

			<div className="container mx-auto border-t border-white/10">
				<AboutSkills />
			</div>

			<div className="container mx-auto border-t border-white/10">
				<AboutAchievements />
			</div>

			<div className="container mx-auto border-t border-white/10">
				<AboutEducation />
			</div>

			<div className="container mx-auto border-t border-white/10">
				<div className="py-20 sm:py-24">
					<p className="font-mono text-xs uppercase leading-relaxed tracking-[0.14em] text-dev-blue/90">
						Trajectory
					</p>
					<h2 className="font-editorial mt-3 text-4xl font-medium tracking-[-0.02em] text-white sm:text-5xl">
						Professional experience
					</h2>
					<p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg">
						{experienceData.length} entries across industrial automation, healthcare,
						education, and enterprise software — from real-time
						computer vision on factory floors to LLM agents and
						retrieval infrastructure.
					</p>
					<Link
						href="/experience"
						className="mt-8 inline-flex items-center gap-2 text-sm font-general-semibold text-dev-blue transition-colors duration-200 hover:text-dev-blue-light"
					>
						View full experience
						<FiArrowRight
							className="h-4 w-4"
							aria-hidden="true"
						/>
					</Link>
					<Link
						href="/portfolio.md"
						className="mt-4 block text-xs font-mono uppercase tracking-[0.14em] text-gray-500 transition-colors duration-200 hover:text-dev-blue"
					>
						Machine-readable profile
					</Link>
				</div>
			</div>
		</div>
	);
}

export default about;
