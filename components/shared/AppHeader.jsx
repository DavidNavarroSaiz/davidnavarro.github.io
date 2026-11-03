import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { FiMenu, FiX } from 'react-icons/fi';
import HireMeModal from '../HireMeModal';
import logo from '../../public/images/DN-Logo.svg';

const NAV_LINKS = [
	{ href: '/projects', label: 'Projects' },
	{ href: '/experience', label: 'Experience' },
	{ href: '/about', label: 'About Me' },
	{ href: '/contact', label: 'Contact' },
];

function AppHeader() {
	const router = useRouter();
	const [showMenu, setShowMenu] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const menuButtonRef = useRef(null);

	const isActive = (href) =>
		href === '/projects'
			? router.pathname.startsWith('/projects')
			: router.pathname === href;

	// Keep the page behind the modal from scrolling.
	useEffect(() => {
		document.documentElement.classList.toggle('overflow-y-hidden', showModal);
		return () => {
			document.documentElement.classList.remove('overflow-y-hidden');
		};
	}, [showModal]);

	// Navigating always dismisses transient header UI.
	useEffect(() => {
		setShowMenu(false);
		setShowModal(false);
	}, [router.asPath]);

	useEffect(() => {
		if (!showMenu) return undefined;

		const handleScroll = () => setShowMenu(false);
		const handleResize = () => {
			if (window.innerWidth >= 1024) setShowMenu(false);
		};
		const handleKeyDown = (event) => {
			if (event.key === 'Escape') {
				setShowMenu(false);
				menuButtonRef.current?.focus();
			}
		};

		window.addEventListener('scroll', handleScroll, { passive: true });
		window.addEventListener('resize', handleResize);
		document.addEventListener('keydown', handleKeyDown);

		return () => {
			window.removeEventListener('scroll', handleScroll);
			window.removeEventListener('resize', handleResize);
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, [showMenu]);

	function toggleMenu() {
		setShowMenu((isOpen) => !isOpen);
	}

	function closeMenu() {
		setShowMenu(false);
		menuButtonRef.current?.focus();
	}

	function showHireMeModal() {
		setShowModal((isOpen) => !isOpen);
	}

	return (
		<>
			{showMenu && (
				<div
					className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
					onClick={closeMenu}
					aria-hidden="true"
				/>
			)}

			<nav
				id="nav"
				aria-label="Primary"
				className="sticky-nav"
			>
				<div className="container mx-auto">
					<div className="z-10 flex w-full items-center justify-between py-3">
						{/* Brand */}
						<div className="min-w-0">
							<Link
								href="/"
								aria-label="David Navarro, home"
								className="flex min-w-0 items-center gap-2.5"
							>
								<Image
									src={logo}
									alt=""
									width={56}
									height={56}
									priority
									className="h-8 w-8 shrink-0 object-contain lg:h-10 lg:w-10"
								/>
								<span className="flex min-w-0 flex-col justify-center">
									<span className="header-logo-new">
										<span className="header-logo-cyan">DAVID NAVARRO</span>
									</span>
									<span
										className="header-subtitle hidden xl:block"
										aria-hidden="true"
									>
										SENIOR AI ENGINEER | PRODUCTION AI AGENTS | LLMOPS | ML PLATFORMS
									</span>
									<span
										className="header-subtitle truncate xl:hidden"
										aria-hidden="true"
									>
										SENIOR AI ENGINEER
									</span>
								</span>
							</Link>
						</div>

						{/* Mobile menu toggle */}
						<button
							ref={menuButtonRef}
							type="button"
							onClick={toggleMenu}
							aria-label={showMenu ? 'Close menu' : 'Open menu'}
							aria-expanded={showMenu}
							aria-controls="mobile-navigation"
							className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 text-gray-200 transition-colors duration-200 hover:border-white/20 hover:text-white lg:hidden"
						>
							{showMenu ? (
								<FiX className="h-5 w-5" aria-hidden="true" />
							) : (
								<FiMenu className="h-5 w-5" aria-hidden="true" />
							)}
						</button>

						{/* Desktop navigation */}
						<div className="hidden items-center gap-1 lg:flex">
							<ul className="flex items-center gap-1">
								{NAV_LINKS.map((link) => {
									const active = isActive(link.href);
									return (
										<li key={link.href}>
											<Link
												href={link.href}
												aria-current={active ? 'page' : undefined}
												className={`header-link-desktop${active ? ' active' : ''}`}
											>
												{link.label}
											</Link>
										</li>
									);
								})}
							</ul>
							<span
								className="mx-2 h-5 w-px bg-white/10"
								aria-hidden="true"
							/>
							<button
								type="button"
								onClick={showHireMeModal}
								className="hire-me-button"
								aria-haspopup="dialog"
							>
								Hire Me
							</button>
						</div>
					</div>
				</div>

				{/* Mobile navigation */}
				{showMenu && (
					<div
						id="mobile-navigation"
						className="mobile-menu absolute inset-x-0 top-full z-50 border-t border-white/10 bg-ink/95 shadow-2xl shadow-black/30 backdrop-blur-xl lg:hidden"
					>
						<div className="container mx-auto py-2">
							<ul>
								{NAV_LINKS.map((link) => {
									const active = isActive(link.href);
									return (
										<li key={link.href}>
											<Link
												href={link.href}
												onClick={() => setShowMenu(false)}
												aria-current={active ? 'page' : undefined}
												className={`header-link border-b border-white/5 py-3.5 ${active ? 'active' : ''}`}
											>
												{link.label}
											</Link>
										</li>
									);
								})}
							</ul>
							<button
								type="button"
								onClick={() => {
									setShowMenu(false);
									showHireMeModal();
								}}
								className="hire-me-button-mobile"
								aria-haspopup="dialog"
							>
								Hire Me
							</button>
						</div>
					</div>
				)}
			</nav>

			{showModal && (
				<HireMeModal
					onClose={showHireMeModal}
					onRequest={showHireMeModal}
				/>
			)}
		</>
	);
}

export default AppHeader;
