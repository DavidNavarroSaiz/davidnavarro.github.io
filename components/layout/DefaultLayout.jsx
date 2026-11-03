import AppHeader from '../shared/AppHeader';
import AppFooter from '../shared/AppFooter';

const DefaultLayout = ({ children }) => {
	return (
		<>
			<a href="#main-content" className="skip-link">
				Skip to content
			</a>
			<AppHeader />
			<main id="main-content" tabIndex={-1}>
				{children}
			</main>
			<AppFooter />
		</>
	);
};

export default DefaultLayout;
