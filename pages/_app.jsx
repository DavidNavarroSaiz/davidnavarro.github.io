import '../styles/globals.css';
import { AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import DefaultLayout from '../components/layout/DefaultLayout';
import UseScrollToTop from '../hooks/useScrollToTop';
import PageTransition from '../components/shared/PageTransition';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				{/* Preload critical images with proper as attribute */}
				<link
					rel="preload"
					href="/images/profile.jpeg"
					as="image"
					type="image/jpeg"
				/>
				<link
					rel="preload"
					href="/images/DN-Logo.svg"
					as="image"
					type="image/svg+xml"
				/>
				{/* Preload critical fonts */}
				<link
					rel="preload"
					href="/fonts/GeneralSans-Variable.woff2"
					as="font"
					type="font/woff2"
					crossOrigin="anonymous"
				/>
			</Head>
			<AnimatePresence>
				<div className="bg-primary-dark dark:bg-primary-dark transition duration-300">
					<DefaultLayout>
						<Component {...pageProps} />
					</DefaultLayout>
					<UseScrollToTop />
				</div>
			</AnimatePresence>
		</>
	);
}

export default MyApp;
