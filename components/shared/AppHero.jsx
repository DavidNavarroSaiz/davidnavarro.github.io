import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
	FiArrowDown,
	FiArrowDownCircle,
	FiMail,
} from 'react-icons/fi';
import profileImage from '../../assets/images/profile-portrait.webp';
import logo from '../../public/images/DN-Logo.svg';
import { experienceYears } from '../../data/experienceData';

function AppHero({ cvs = [] }) {
	const router = useRouter();
	const basePath = router.basePath || '';

	return (
		<section className="hero-container">
			<div className="container mx-auto">
				<div className="hero-grid">
					<div className="hero-content">
						<h1 className="hero-title font-editorial">
							Production AI, built to be evaluated.
						</h1>

						<p className="hero-subtitle">
							I&apos;m David Navarro, a senior AI engineer with
							{experienceYears}+ years building LLM agents, retrieval
							infrastructure, and applied ML systems. I focus on
							the evaluation, observability, and operational
							detail that make them dependable in production.
						</p>

						<div className="hero-buttons">
							<a
								href="#selected-work"
								className="hero-button-primary"
							>
								View selected work
								<FiArrowDown
									className="h-4 w-4"
									aria-hidden="true"
								/>
							</a>
							<Link
								href="/contact"
								className="hero-button-secondary"
							>
								<FiMail
									className="h-4 w-4"
									aria-hidden="true"
								/>
								Contact
							</Link>
						</div>

						{cvs.length > 0 && (
							<div className="hero-resumes">
								<span className="hero-resume-label">
									Resumes
								</span>
								{cvs.map((cv) => (
									<a
										key={cv.file}
										download={cv.file}
										href={`${basePath}/files/${cv.file}`}
										className="hero-resume-link"
									>
										<FiArrowDownCircle
											className="h-4 w-4"
											aria-hidden="true"
										/>
										{cv.label}
									</a>
								))}
							</div>
						)}
					</div>

					<div className="hero-portrait-column">
						<div className="hero-photo">
							<Image
								src={profileImage}
								alt="David Navarro, Senior AI Engineer"
								fill
								sizes="(max-width: 640px) 280px, (max-width: 1024px) 340px, 420px"
								priority
								className="object-cover"
							/>
						</div>
						<div className="hero-caption">
							<div className="hero-caption-name">
								<Image
									src={logo}
									alt=""
									width={20}
									height={20}
									className="h-5 w-5"
								/>
								<span>David Navarro</span>
							</div>
							<p className="hero-caption-meta">
								Senior AI Engineer based in Medellín, Colombia.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default AppHero;
