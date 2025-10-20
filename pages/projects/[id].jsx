import Image from 'next/image';
import { FiClock, FiTag } from 'react-icons/fi';
import PagesMetaHead from '../../components/PagesMetaHead';
import { projectsData } from '../../data/projectsData';
import RelatedProjects from '../../components/projects/RelatedProjects';

function ProjectSingle(props) {
	return (
		<div className="container mx-auto">
			<PagesMetaHead title={props.project.title} />

			{/* Header */}
			<div className="bg-gray-900 border border-gray-700 rounded-xl p-8 mb-8">
				<p className="font-general-semibold text-left text-3xl sm:text-4xl font-bold text-white mt-14 sm:mt-20 mb-7">
					{props.project.ProjectHeader.title}
				</p>
				<div className="flex flex-wrap gap-6">
					<div className="flex items-center">
						<FiClock className="text-xl text-dev-blue" />
						<span className="font-general-regular ml-2 leading-none text-gray-300">
							{props.project.ProjectHeader.publishDate}
						</span>
					</div>
					<div className="flex items-center">
						<FiTag className="w-4 h-4 text-dev-blue" />
						<span className="font-general-regular ml-2 leading-none text-gray-300">
							{props.project.ProjectHeader.tags}
						</span>
					</div>
				</div>
			</div>

			{/* Gallery */}
			<div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
				{props.project.ProjectImages.map((project) => {
					return (
						<div className="mb-10 sm:mb-0" key={project.id}>
							<Image
								src={project.img}
								className="rounded-xl cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-700"
								alt={project.title}
								key={project.id}
								layout="responsive"
								width={100}
								height={90}
							/>
						</div>
					);
				})}
			</div>

			{/* Info */}
			<div className="block sm:flex gap-0 sm:gap-10 mt-14">
				<div className="w-full sm:w-1/3 text-left">
					{/* Single project client details */}
					<div className="bg-gray-900 border border-gray-700 rounded-xl p-6 mb-7">
						<p className="font-general-semibold text-2xl font-semibold text-white mb-4">
							{props.project.ProjectInfo.ClientHeading}
						</p>
						<ul className="leading-loose">
							{props.project.ProjectInfo.CompanyInfo.map(
								(info) => {
									return (
										<li
											className="font-general-regular text-gray-300 mb-2"
											key={info.id}
										>
											<span className="text-dev-blue font-medium">{info.title}: </span>
											<a
												href="https://stoman.me"
												className={
													info.title === 'Website' ||
													info.title === 'Phone'
														? 'hover:underline hover:text-dev-blue cursor-pointer duration-300 text-white'
														: 'text-gray-300'
												}
												aria-label="Project Website and Phone"
											>
												{info.details}
											</a>
										</li>
									);
								}
							)}
						</ul>
					</div>

					{/* Single project objectives */}
					<div className="bg-gray-900 border border-gray-700 rounded-xl p-6 mb-7">
						<p className="font-general-semibold text-2xl font-semibold text-white mb-4">
							{props.project.ProjectInfo.ObjectivesHeading}
						</p>
						<p className="font-general-regular text-gray-300 leading-relaxed">
							{props.project.ProjectInfo.ObjectivesDetails}
						</p>
					</div>

					{/* Single project technologies */}
					<div className="bg-gray-900 border border-gray-700 rounded-xl p-6 mb-7">
						<p className="font-general-semibold text-2xl font-semibold text-white mb-4">
							{props.project.ProjectInfo.Technologies[0].title}
						</p>
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
						<p className="text-white text-2xl font-bold mb-7">
							{props.project.ProjectInfo.ProjectDetailsHeading}
						</p>
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
