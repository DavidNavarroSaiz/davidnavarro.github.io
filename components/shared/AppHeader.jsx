import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiX, FiMenu } from 'react-icons/fi';
import HireMeModal from '../HireMeModal';
import logo from '../../public/images/DN-Logo.svg';

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

	// Close mobile menu on scroll or window resize
	useEffect(() => {
		const handleScroll = () => {
			if (showMenu) {
				setShowMenu(false);
			}
		};

		const handleResize = () => {
			if (window.innerWidth >= 640) { // sm breakpoint
				setShowMenu(false);
			}
		};

		window.addEventListener('scroll', handleScroll);
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('scroll', handleScroll);
			window.removeEventListener('resize', handleResize);
		};
	}, [showMenu]);

	return (
		<>
			{/* Mobile menu overlay */}
			{showMenu && (
				<div 
					className="fixed inset-0 bg-black/50 z-40 sm:hidden"
					onClick={() => setShowMenu(false)}
				/>
			)}
			<motion.nav
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				id="nav"
				className="sticky top-0 z-50 bg-[#0B0B0C] border-b border-gray-700/30 backdrop-blur-sm"
			>
			<div className="sm:container sm:mx-auto">
			{/* Header */}
			<div className="z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center py-3">
				{/* Header menu links and small screen hamburger menu */}
				<div className="flex justify-between items-center px-4 sm:px-0">
					<div>
						<Link href="/">
							<div className="cursor-pointer flex items-center space-x-3 sm:space-x-4">
								<div className="flex-shrink-0">
									<Image 
										src={logo}
										alt="David Navarro Logo" 
										width={56}
										height={56}
										className="h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 object-contain"
									/>
								</div>
								<div className="flex flex-col justify-center min-w-0">
									<div className="header-logo-new">
										<span className="header-logo-cyan">DAVID NAVARRO</span>
									</div>
									<div className="header-subtitle hidden sm:block">
										Machine Learning Engineer | Computer Vision | AI & Automation Specialist
									</div>
									<div className="header-subtitle-mobile block sm:hidden">
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
							className="focus:outline-none p-2 rounded-lg hover:bg-gray-800/50 transition-colors duration-300"
							aria-label="Hamburger Menu"
						>
							{showMenu ? (
								<FiX className="h-6 w-6 text-white" />
							) : (
								<FiMenu className="h-6 w-6 text-white" />
							)}
						</button>
					</div>
				</div>

				{/* Header links small screen */}
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ 
						opacity: showMenu ? 1 : 0, 
						y: showMenu ? 0 : -20 
					}}
					transition={{ duration: 0.3, ease: "easeOut" }}
					className={
						showMenu
							? 'block m-0 sm:ml-4 sm:mt-3 md:flex px-5 py-3 sm:p-0 justify-between items-center shadow-lg sm:shadow-none bg-[#0B0B0C] border-t border-gray-700/30 absolute top-full left-0 right-0 z-50'
							: 'hidden'
					}
				>
					<div className="header-link">
						<Link href="/projects" aria-label="Projects" onClick={() => setShowMenu(false)}>
							Projects
						</Link>
					</div>
					<div className="header-link border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-gray-700">
						<Link href="/about" aria-label="About Me" onClick={() => setShowMenu(false)}>
							About Me
						</Link>
					</div>
					<div className="header-link border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-gray-700">
						<Link href="/contact" aria-label="Contact" onClick={() => setShowMenu(false)}>
							Contact
						</Link>
					</div>
					<div className="border-t-2 pt-3 sm:pt-0 sm:border-t-0 border-primary-light dark:border-secondary-dark">
						<button
							onClick={() => {
								showHireMeModal();
								setShowMenu(false);
							}}
							className="hire-me-button-mobile"
							aria-label="Hire Me Button"
						>
							Hire Me
						</button>
					</div>
				</motion.div>

				{/* Header links large screen */}
				<div className="font-general-medium hidden m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none">
					<div
						className="header-link-desktop"
						aria-label="Projects"
					>
						<Link href="/projects">Projects</Link>
					</div>
					<div
						className="header-link-desktop"
						aria-label="About Me"
					>
						<Link href="/about">About Me</Link>
					</div>

					<div
						className="header-link-desktop"
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
							className="hire-me-button"
							aria-label="Hire Me Button"
						>
							Hire Me
						</button>
					</div>

				</div>
			</div>
			<div>
				{showModal && (
					<HireMeModal
						onClose={showHireMeModal}
						onRequest={showHireMeModal}
					/>
				)}
			</div>
			</div>
		</motion.nav>
		</>
	);
}

export default AppHeader;
