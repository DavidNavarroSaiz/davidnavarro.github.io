import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiArrowDownCircle } from 'react-icons/fi';
import useThemeSwitcher from '../../hooks/useThemeSwitcher';
import developerDark from '../../public/images/developer-dark.svg';
import developerLight from '../../public/images/developer.svg';

function AppBanner() {
	const [activeTheme] = useThemeSwitcher();

	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
			className="flex flex-col sm:justify-between items-center sm:flex-row mt-5 md:mt-2"
		>
			<div className="w-full md:w-1/3 text-left">
				<motion.h1
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.1,
					}}
					className="font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-white uppercase"
				>
					Hi, I'm David
				</motion.h1>
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.2,
					}}
					className="font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal text-gray-300"
				>
					Machine Learning Engineer & AI Specialist
				</motion.p>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.3,
					}}
					className="flex justify-center sm:block"
				>
					<a
						download="CV_DavidNavarro_2025.pdf"
						href="/files/CV_DavidNavarro_2025.pdf"
						className="font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-dev-blue py-2.5 sm:py-3 shadow-lg rounded-lg bg-dev-blue focus:ring-1 focus:ring-dev-blue hover:bg-dev-blue-dark text-black hover:text-black duration-500 glow-blue"
						aria-label="Download Resume"
					>
						<FiArrowDownCircle className="ml-0 sm:ml-1 mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"></FiArrowDownCircle>
						<span className="text-sm sm:text-lg duration-100">
							Download CV
						</span>
					</a>
				</motion.div>
			</div>
			<motion.div
				initial={{ opacity: 0, y: -180 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
				className="w-full sm:w-2/3 text-right float-right mt-8 sm:mt-0"
			>
				<Image
					width={600}
					height={400}
					src={
						activeTheme === 'dark'
							? developerLight
							: developerDark
					}
					alt="Developer"
					className="w-full h-auto"
				/>
			</motion.div>
		</motion.section>
	);
}

export default AppBanner;
