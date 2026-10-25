import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

function AppBio() {
	return (
		<section className="border-t border-white/10 bg-ink/40">
			<div className="container mx-auto py-20 sm:py-24">
				<div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
					<div className="lg:col-span-4">
						<h2 className="font-general-semibold text-3xl tracking-[-0.02em] text-white sm:text-4xl">
							Background
						</h2>
						<p className="mt-4 max-w-xs text-sm leading-relaxed text-gray-400">
							Applied ML, LLM systems, and industrial computer
							vision.
						</p>
					</div>

					<div className="lg:col-span-8">
						<div className="max-w-3xl space-y-5 text-base leading-relaxed text-gray-300 sm:text-lg">
							<p>
								I have spent 7+ years building ML and AI systems
								across healthcare, education, industrial
								automation, and enterprise software. That work
								has ranged from real-time computer vision on
								factory floors to LLM agents, retrieval
								systems, and the platforms that support them.
							</p>
							<p>
								I focus on the parts that determine whether a
								system holds up in use: evaluation,
								observability, integration boundaries, and
								clear failure behavior. I care about shipping
								systems that are legible to the teams who
								operate them.
							</p>
						</div>

						<dl className="mt-10 grid gap-8 sm:grid-cols-2">
							<div>
								<dt className="font-general-semibold text-sm text-white">
									Domains
								</dt>
								<dd className="mt-2 text-sm leading-relaxed text-gray-400">
									Healthcare, education, industrial
									automation, and enterprise software.
								</dd>
							</div>
							<div>
								<dt className="font-general-semibold text-sm text-white">
									How I work
								</dt>
								<dd className="mt-2 text-sm leading-relaxed text-gray-400">
									Evaluation-first, integration-aware, and
									observable in production.
								</dd>
							</div>
						</dl>

						<Link
							href="/about"
							className="mt-10 inline-flex items-center gap-2 text-sm font-general-semibold text-dev-blue transition-colors duration-200 hover:text-dev-blue-light"
						>
							Read the full biography
							<FiArrowRight className="h-4 w-4" aria-hidden="true" />
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}

export default AppBio;
