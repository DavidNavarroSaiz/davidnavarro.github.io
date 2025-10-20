import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { FiChevronUp } from 'react-icons/fi';

function useScrollToTop() {
	const [showScroll, setShowScroll] = useState(false);
	const router = useRouter();

	useEffect(() => {
		window.addEventListener('scroll', scrollToTop);
		return function cleanup() {
			window.removeEventListener('scroll', scrollToTop);
		};
	});

	// Simple scroll to top when route changes - no delay
	useEffect(() => {
		// Use setTimeout to ensure DOM is ready
		const timer = setTimeout(() => {
			window.scrollTo(0, 0);
		}, 0);
		return () => clearTimeout(timer);
	}, [router.asPath]);

	const scrollToTop = () => {
		if (!showScroll && window.pageYOffset > 400) {
			setShowScroll(true);
		} else if (showScroll && window.pageYOffset <= 400) {
			setShowScroll(false);
		}
	};

	const backToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	if (typeof window !== 'undefined') {
		window.addEventListener('scroll', scrollToTop);
	}

	return (
		<>
			<FiChevronUp
				className="scrollToTop"
				onClick={backToTop}
				style={{
					height: 40,
					width: 40,
					padding: 7,
					borderRadius: 50,
					right: 50,
					bottom: 50,
					display: showScroll ? 'flex' : 'none',
				}}
			/>
		</>
	);
}

export default useScrollToTop;
