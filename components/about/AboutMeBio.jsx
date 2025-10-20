import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { aboutMeData } from '../../data/aboutMeData';
import profileImage from '../../public/images/profile.jpeg';

function AboutMeBio() {
	const [aboutMe, setAboutMe] = useState(aboutMeData);
	return (
		<div className="py-20">
			{/* Header Section */}
			<motion.div 
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				className="text-center mb-12"
			>
				<h1 className="text-4xl font-bold text-white mb-4">
					About Me
				</h1>
				<p className="text-gray-300 text-lg max-w-3xl mx-auto">
					Passionate about building intelligent systems that solve real-world problems
				</p>
			</motion.div>

			{/* Bio Section */}
			<div className="block lg:flex lg:gap-12 items-start">
				{/* Profile Image */}
				<motion.div 
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className="w-full lg:w-1/3 mb-8 lg:mb-0 flex justify-center lg:justify-start lg:sticky lg:top-8"
				>
					<div className="relative">
						<Image
							src={profileImage}
							width={280}
							height={280}
							className="rounded-2xl shadow-2xl"
							alt="David Navarro - Machine Learning Engineer"
						/>
						{/* Decorative elements */}
						<div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-60"></div>
						<div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full opacity-60"></div>
					</div>
				</motion.div>

				{/* Bio Content */}
				<motion.div 
					initial={{ opacity: 0, x: 20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.4 }}
					className="font-general-regular w-full lg:w-2/3"
				>
					<div className="space-y-6">
						{aboutMe.map((bio, index) => (
							<motion.p
								key={bio.id}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
								className="text-gray-300 text-lg leading-relaxed"
							>
								{bio.bio}
							</motion.p>
						))}
					</div>

					{/* Quick Stats */}
					<motion.div 
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.8 }}
						className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4"
					>
						{[
							{ label: 'Years Experience', value: '6+', icon: '⏱️' },
							{ label: 'Technologies', value: '20+', icon: '⚡' },
							{ label: 'Projects', value: '50+', icon: '🚀' },
							{ label: 'Industries', value: '6+', icon: '🏢' }
						].map((stat, index) => (
							<div key={stat.label} className="text-center p-4 bg-gray-800/20 rounded-xl border border-gray-700/20 hover:bg-gray-800/30 transition-all duration-300">
								<div className="text-2xl mb-1 opacity-80">{stat.icon}</div>
								<div className="text-xl font-semibold text-gray-200">{stat.value}</div>
								<div className="text-gray-500 text-sm">{stat.label}</div>
							</div>
						))}
					</motion.div>
				</motion.div>
			</div>
		</div>
	);
}

export default AboutMeBio;
