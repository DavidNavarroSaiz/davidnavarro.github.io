import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiX, FiMenu } from 'react-icons/fi';
import HireMeModal from '../HireMeModal';

function AppHeader() {
	const [showMenu, setShowMenu] = useState(false);
	const [showModal, setShowModal] = useState(false);

	function toggleMenu() {
		if (!showMenu) {
			setShowMenu(true);
		} else {
			setShowMenu(false);
		}
	}

	function showHireMeModal() {
		if (!showModal) {
			document
				.getElementsByTagName('html')[0]
				.classList.add('overflow-y-hidden');
			setShowModal(true);
		} else {
			document
				.getElementsByTagName('html')[0]
				.classList.remove('overflow-y-hidden');
			setShowModal(false);
		}
	}

	return (
		<motion.nav
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			id="nav"
			className="sm:container sm:mx-auto"
		>
			{/* Header */}
			<div className="z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center py-6">
				{/* Header menu links and small screen hamburger menu */}
				<div className="flex justify-between items-center px-4 sm:px-0">
					<div>
						<Link href="/">
							<div className="cursor-pointer flex items-center space-x-3 sm:space-x-4">
								<div className="flex-shrink-0">
									<img 
										src="/images/DN-Logo.svg" 
										alt="David Navarro Logo" 
										className="h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 object-contain"
									/>
								</div>
								<div className="flex flex-col justify-center min-w-0">
									<div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-tight">
										<span className="text-dev-blue glow-blue">DAVID</span>
										<span className="text-dev-cyan ml-1">N</span>
									</div>
									<div className="text-xs sm:text-xs lg:text-sm text-gray-300 font-medium tracking-wide leading-tight hidden sm:block">
										Machine Learning Engineer | Computer Vision | AI & Automation Specialist
									</div>
									<div className="text-xs text-gray-300 font-medium tracking-wide leading-tight block sm:hidden">
										ML Engineer | Computer Vision | AI Specialist
									</div>
								</div>
							</div>
						</Link>
					</div>


					{/* Small screen hamburger menu */}
					<div className="sm:hidden">
						<button
							onClick={toggleMenu}
							type="button"
							className="focus:outline-none"
							aria-label="Hamburger Menu"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								className="h-7 w-7 fill-current text-secondary-dark dark:text-ternary-light"
							>
								{showMenu ? (
									<FiX className="text-3xl" />
								) : (
									<FiMenu className="text-3xl" />
								)}
							</svg>
						</button>
					</div>
				</div>

				{/* Header links small screen */}
				<div
					className={
						showMenu
							? 'block m-0 sm:ml-4 sm:mt-3 md:flex px-5 py-3 sm:p-0 justify-between items-center shadow-lg sm:shadow-none'
							: 'hidden'
					}
				>
					<div className="block text-left text-lg text-gray-300 hover:text-dev-blue transition-colors duration-300 sm:mx-4 mb-2 sm:py-2">
						<Link href="/projects" aria-label="Projects">
							Projects
						</Link>
					</div>
					<div className="block text-left text-lg text-gray-300 hover:text-dev-blue transition-colors duration-300 sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-gray-700">
						<Link href="/about" aria-label="About Me">
							About Me
						</Link>
					</div>
					<div className="block text-left text-lg text-gray-300 hover:text-dev-blue transition-colors duration-300 sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-gray-700">
						<Link href="/contact" aria-label="Contact">
							Contact
						</Link>
					</div>
					<div className="border-t-2 pt-3 sm:pt-0 sm:border-t-0 border-primary-light dark:border-secondary-dark">
						<button
							onClick={showHireMeModal}
							className="font-general-medium sm:hidden block text-left text-md bg-dev-blue hover:bg-dev-blue-dark text-black shadow-sm rounded-sm px-4 py-2 mt-2 duration-300 w-24 glow-blue"
							aria-label="Hire Me Button"
						>
							Hire Me
						</button>
					</div>
				</div>

				{/* Header links large screen */}
				<div className="font-general-medium hidden m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none">
					<div
						className="block text-left text-lg font-medium text-gray-300 hover:text-dev-blue transition-colors duration-300 sm:mx-4 mb-2 sm:py-2"
						aria-label="Projects"
					>
						<Link href="/projects">Projects</Link>
					</div>
					<div
						className="block text-left text-lg font-medium text-gray-300 hover:text-dev-blue transition-colors duration-300 sm:mx-4 mb-2 sm:py-2"
						aria-label="About Me"
					>
						<Link href="/about">About Me</Link>
					</div>

					<div
						className="block text-left text-lg font-medium text-gray-300 hover:text-dev-blue transition-colors duration-300 sm:mx-4 mb-2 sm:py-2"
						aria-label="Contact"
					>
						<Link href="/contact">Contact</Link>
					</div>
				</div>

				{/* Header right section buttons */}
				<div className="hidden sm:flex justify-between items-center flex-col md:flex-row">
					<div className="hidden md:flex">
						<button
							onClick={showHireMeModal}
							className="text-md font-general-medium bg-dev-blue hover:bg-dev-blue-dark text-black shadow-sm rounded-md px-5 py-2.5 duration-300 glow-blue"
							aria-label="Hire Me Button"
						>
							Hire Me
						</button>
					</div>

				</div>
			</div>
			<div>
				{showModal ? (
					<HireMeModal
						onClose={showHireMeModal}
						onRequest={showHireMeModal}
					/>
				) : null}
				{showModal ? showHireMeModal : null}
			</div>
		</motion.nav>
	);
}

export default AppHeader;
