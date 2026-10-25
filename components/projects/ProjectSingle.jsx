import Image from 'next/image';
import Link from 'next/link';
import { FiArrowUpRight } from 'react-icons/fi';

const ProjectSingle = ({
	id,
	title,
	category,
	summary,
	img,
	featured,
	ProjectInfo,
}) => {
	const technologies = ProjectInfo?.Technologies?.[0]?.techs ?? [];

	return (
		<li className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-white/10 bg-gray-900/50 transition-colors duration-200 hover:border-dev-blue/40 focus-within:border-dev-blue/40 focus-within:ring-2 focus-within:ring-dev-blue focus-within:ring-offset-2 focus-within:ring-offset-primary-dark">
			<div className="relative aspect-[3/2] w-full overflow-hidden border-b border-white/10 bg-gray-950">
				<Image
					src={img}
					alt={featured?.alt ?? ''}
					fill
					sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 400px"
					loading="lazy"
					className="object-contain"
				/>
			</div>

			<div className="flex flex-1 flex-col p-5">
				<p className="font-mono text-[10px] uppercase leading-relaxed tracking-[0.14em] text-dev-blue/90">
					{category}
				</p>

				<h2 className="mt-3 font-general-semibold text-lg leading-snug tracking-[-0.01em] text-white transition-colors duration-200 group-hover:text-dev-blue sm:text-xl">
					<Link
						href={`/projects/${id}`}
						className="after:absolute after:inset-0 after:z-10 after:content-[''] focus-visible:outline-none"
					>
						{title}
					</Link>
				</h2>

				<p className="mt-2.5 line-clamp-3 text-sm leading-relaxed text-gray-400">
					{summary}
				</p>

				{technologies.length > 0 && (
					<ul
						className="mt-4 flex flex-wrap gap-1.5"
						aria-label="Primary technologies"
					>
						{technologies.slice(0, 3).map((technology) => (
							<li
								key={technology}
								className="rounded border border-white/10 bg-white/[0.03] px-2 py-1 text-[11px] leading-none text-gray-400"
							>
								{technology}
							</li>
						))}
					</ul>
				)}

				<span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-general-semibold text-dev-blue">
					Project notes
					<FiArrowUpRight
						className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
						aria-hidden="true"
					/>
				</span>
			</div>
		</li>
	);
};

export default ProjectSingle;
