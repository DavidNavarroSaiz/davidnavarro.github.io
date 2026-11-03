import { achievementsData } from '../../data/achievementsData';

function AboutAchievements() {
	return (
		<div className="py-20 sm:py-24">
			<p className="font-mono text-xs uppercase leading-relaxed tracking-[0.14em] text-dev-blue/90">
				Recognition
			</p>
			<h2 className="mt-3 font-general-semibold text-3xl tracking-[-0.02em] text-white sm:text-4xl">
				Key achievements
			</h2>
			<p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg">
				Contributions across research, development, and education.
			</p>

			<ul className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
				{achievementsData.map((achievement) => (
					<li
						key={achievement.id}
						className="flex flex-col rounded-lg border border-white/10 bg-gray-900/50 p-6 transition-colors duration-200 hover:border-dev-blue/40"
					>
						<p className="font-mono text-[11px] uppercase tracking-[0.14em] text-gray-400">
							{achievement.category} · {achievement.year}
						</p>
						<h3 className="mt-3 font-general-semibold text-lg leading-snug text-white">
							{achievement.title}
						</h3>
						<p className="mt-2 text-sm leading-relaxed text-gray-300">
							{achievement.description}
						</p>
						<ul
							aria-label="Technologies"
							className="mt-4 flex flex-wrap gap-1.5"
						>
							{achievement.technologies.map((tech) => (
								<li
									key={tech}
									className="rounded border border-white/10 bg-white/[0.03] px-2 py-1 text-[11px] leading-none text-gray-400"
								>
									{tech}
								</li>
							))}
						</ul>
						<p className="mt-4 border-t border-white/10 pt-4 text-sm text-gray-200">
							<span className="text-gray-500">Impact: </span>
							{achievement.impact}
						</p>
					</li>
				))}
			</ul>
		</div>
	);
}

export default AboutAchievements;
