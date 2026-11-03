import Image from 'next/image';
import { FiClock, FiTag } from 'react-icons/fi';
import PagesMetaHead from '../../components/PagesMetaHead';
import { projectsData } from '../../data/projectsData';
import RelatedProjects from '../../components/projects/RelatedProjects';
import CaseStudy, { EditorialCover } from '../../components/projects/CaseStudy';

const META_DESCRIPTION_LIMIT = 160;

function getProjectMetaDescription(project) {
	const source =
		project.summary ||
		project.caseStudy?.overview ||
		project.ProjectInfo?.ObjectivesDetails ||
		'';
	const description = source.replace(/\s+/g, ' ').trim();

	if (description.length <= META_DESCRIPTION_LIMIT) return description;

	const shortened = description
		.slice(0, META_DESCRIPTION_LIMIT - 1)
		.replace(/\s+\S*$/, '')
		.trim();

	return `${shortened}…`;
}

// Projects with `caseStudy` data use the case study template; the rest keep
// the legacy layout below.
function ProjectSingle(props) {
	if (props.project.caseStudy) {
		return (
			<>
				<PagesMetaHead
					title={props.project.title}
					description={getProjectMetaDescription(props.project)}
				/>
				<CaseStudy project={props.project} />
				<div className="container mx-auto">
					<RelatedProjects
						currentProjectId={props.project.id}
						currentCategory={props.project.category}
					/>
				</div>
			</>
		);
	}

	return (
		<div className="container mx-auto">
			<PagesMetaHead
				title={props.project.title}
				description={getProjectMetaDescription(props.project)}
			/>

			{/* Header */}
			<div className="bg-gray-900 border border-gray-700 rounded-xl p-6 sm:p-8 mb-8">
				<h1 className="font-general-semibold text-left text-3xl sm:text-4xl font-bold text-white mt-8 sm:mt-12 mb-6">
					{props.project.ProjectHeader.title}
				</h1>
				<div className="grid grid-cols-1 gap-3 sm:flex sm:flex-wrap sm:gap-6">
					<div className="flex w-full min-w-0 items-center sm:w-auto">
						<FiClock className="text-xl text-dev-blue" />
						<span className="font-general-regular ml-2 min-w-0 flex-1 break-words leading-tight text-gray-300">
							{props.project.ProjectHeader.publishDate}
						</span>
					</div>
					<div className="flex w-full min-w-0 items-start sm:w-auto sm:items-center">
						<FiTag className="w-4 h-4 text-dev-blue" />
						<span className="font-general-regular ml-2 min-w-0 flex-1 break-words leading-tight text-gray-300">
							{props.project.ProjectHeader.tags}
						</span>
					</div>
				</div>
			</div>

			{props.project.editorialCover && <EditorialCover cover={props.project.editorialCover} />}

			{/* Gallery */}
			<section aria-labelledby="project-gallery-heading" className="mt-12">
				<h2 id="project-gallery-heading" className="sr-only">
					Project gallery
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10">
					{props.project.ProjectImages.map((project, index) => {
						const galleryAlt =
							project.alt ??
							`${props.project.ProjectHeader.title} project gallery image ${index + 1}`;

						return (
							<figure className="mb-10 sm:mb-0" key={project.id}>
								<Image
									src={project.img}
									className="rounded-xl cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-700"
									alt={galleryAlt}
									key={project.id}
									sizes="(max-width: 639px) 100vw, 33vw"
									style={{ width: '100%', height: 'auto' }}
								/>
								{project.caption && (
									<figcaption className="mt-3 text-sm text-gray-400">
										{project.caption}
									</figcaption>
								)}
							</figure>
						);
					})}
				</div>
			</section>

			{/* Info */}
			<div className="block sm:flex gap-0 sm:gap-10 mt-14">
				<div className="w-full sm:w-1/3 text-left">
					{/* Single project client details */}
					<div className="bg-gray-900 border border-gray-700 rounded-xl p-6 mb-7">
						<h2 className="font-general-semibold text-2xl font-semibold text-white mb-4">
							{props.project.ProjectInfo.ClientHeading}
						</h2>
						<ul className="leading-loose">
							{props.project.ProjectInfo.CompanyInfo.map(
								(info) => {
									return (
										<li
											className="font-general-regular text-gray-300 mb-2"
											key={info.id}
										>
											<span className="text-dev-blue font-medium">{info.title}: </span>
											{/^https?:\/\//.test(info.details) ? (
												<a
													href={info.details}
													target="_blank"
													rel="noopener noreferrer"
													className="hover:underline hover:text-dev-blue duration-300 text-white"
												>
													{info.details}
												</a>
											) : (
												<span className="text-gray-300">{info.details}</span>
											)}
										</li>
									);
								}
							)}
						</ul>
					</div>

					{/* Single project objectives */}
					<div className="bg-gray-900 border border-gray-700 rounded-xl p-6 mb-7">
						<h2 className="font-general-semibold text-2xl font-semibold text-white mb-4">
							{props.project.ProjectInfo.ObjectivesHeading}
						</h2>
						<p className="font-general-regular text-gray-300 leading-relaxed">
							{props.project.ProjectInfo.ObjectivesDetails}
						</p>
					</div>

					{/* Single project technologies */}
					<div className="bg-gray-900 border border-gray-700 rounded-xl p-6 mb-7">
						<h2 className="font-general-semibold text-2xl font-semibold text-white mb-4">
							{props.project.ProjectInfo.Technologies[0].title}
						</h2>
						<div className="flex flex-wrap gap-2">
							{props.project.ProjectInfo.Technologies[0].techs.map((tech, index) => (
								<span key={index} className="px-3 py-1 rounded-full text-sm font-medium text-white bg-dev-blue/20 border border-dev-blue/30">
									{tech}
								</span>
							))}
						</div>
					</div>

				</div>

				{/*  Single project right section details */}
				<div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
					<div className="bg-gray-900 border border-gray-700 rounded-xl p-8">
						<h2 className="text-white text-2xl font-bold mb-7">
							{props.project.ProjectInfo.ProjectDetailsHeading}
						</h2>
						{props.project.ProjectInfo.ProjectDetails.map((details) => {
							return (
								<p
									key={details.id}
									className="font-general-regular mb-5 text-lg text-gray-300 leading-relaxed"
								>
									{details.details}
								</p>
							);
						})}
					</div>
				</div>
			</div>

			<RelatedProjects 
				currentProjectId={props.project.id} 
				currentCategory={props.project.category} 
			/>
		</div>
	);
}

export async function getStaticPaths() {
	const paths = projectsData.map((project) => ({
		params: { id: project.id.toString() },
	}));

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const { id } = params;
	const project = projectsData.find(
		(project) => project.id === parseInt(id)
	);

	return {
		props: {
			project,
		},
	};
}

export default ProjectSingle;
