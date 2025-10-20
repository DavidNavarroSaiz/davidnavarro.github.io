import { useEffect } from 'react';
import { motion } from 'framer-motion';
import ContactDetails from '../components/contact/ContactDetails';
import ContactForm from '../components/contact/ContactForm';
import PagesMetaHead from '../components/PagesMetaHead';
import NeuralNetwork from '../components/shared/NeuralNetwork';

function contact() {
	// Force scroll to top on page load
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="relative">
			<PagesMetaHead title="Contact - David Navarro" />

			{/* Neural network background */}
			<NeuralNetwork intensity="high" />

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{
					ease: 'easeInOut',
					duration: 0.5,
					delay: 0.1,
				}}
				className="container mx-auto flex flex-col-reverse lg:flex-row py-5 lg:py-10 lg:mt-5 relative z-10"
			>
				<ContactForm />

				<ContactDetails />
			</motion.div>
		</div>
	);
}

export default contact;
