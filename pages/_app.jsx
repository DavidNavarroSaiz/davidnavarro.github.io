import '../styles/globals.css';
import '../styles/components.css';
import { AnimatePresence, MotionConfig } from 'framer-motion';
import Head from 'next/head';
import DefaultLayout from '../components/layout/DefaultLayout';
import UmamiAnalytics from '../components/analytics/UmamiAnalytics';
import UseScrollToTop from '../hooks/useScrollToTop';
import PageTransition from '../components/shared/PageTransition';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				{/* Fonts and images are served from hashed Next.js static
					assets (basePath-aware). Do not add absolute-path preloads
					here: they 404 under the GitHub Pages subpath. */}
			</Head>
			<UmamiAnalytics />
			<MotionConfig reducedMotion="user">
				<AnimatePresence>
					<div className="bg-primary-dark dark:bg-primary-dark transition duration-300">
						<DefaultLayout>
							<Component {...pageProps} />
						</DefaultLayout>
						<UseScrollToTop />
					</div>
				</AnimatePresence>
			</MotionConfig>
		</>
	);
}

export default MyApp;
