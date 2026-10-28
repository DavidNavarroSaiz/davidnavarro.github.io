import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import AboutMeBio from '../components/about/AboutMeBio';
import AboutSkills from '../components/about/AboutSkills';
import AboutAchievements from '../components/about/AboutAchievements';
import AboutEducation from '../components/about/AboutEducation';
import PagesMetaHead from '../components/PagesMetaHead';
import { experienceData } from '../data/experienceData';

function about() {
	return (
		<div>
			<PagesMetaHead title="About Me" />

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
					<h2 className="mt-3 font-general-semibold text-3xl tracking-[-0.02em] text-white sm:text-4xl">
						Professional experience
					</h2>
					<p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg">
						{experienceData.length} roles across industrial automation, healthcare,
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
				</div>
			</div>
		</div>
	);
}

export default about;
