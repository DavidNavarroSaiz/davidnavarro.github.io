import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useReducedMotion } from 'framer-motion';
import { FiChevronUp } from 'react-icons/fi';

function useScrollToTop() {
	const [showScroll, setShowScroll] = useState(false);
	const shouldReduceMotion = useReducedMotion();
	const router = useRouter();

	useEffect(() => {
		const handleScroll = () => {
			setShowScroll(window.pageYOffset > 400);
		};

		handleScroll();
		window.addEventListener('scroll', handleScroll, { passive: true });

		return function cleanup() {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	// Simple scroll to top when route changes - no delay
	useEffect(() => {
		// Use setTimeout to ensure DOM is ready
		const timer = setTimeout(() => {
			window.scrollTo(0, 0);
		}, 0);
		return () => clearTimeout(timer);
	}, [router.asPath]);

	const backToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: shouldReduceMotion ? 'auto' : 'smooth',
		});
	};

	return (
		<button
			type="button"
			className="scrollToTop"
			onClick={backToTop}
			aria-label="Back to top"
			style={{
				height: 40,
				width: 40,
				padding: 7,
				borderRadius: 50,
				right: 50,
				bottom: 50,
				display: showScroll ? 'flex' : 'none',
			}}
		>
			<FiChevronUp className="h-6 w-6" aria-hidden="true" />
		</button>
	);
}

export default useScrollToTop;
