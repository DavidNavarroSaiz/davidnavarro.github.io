import AppHeader from '../shared/AppHeader';
import AppFooter from '../shared/AppFooter';
import PagesMetaHead from '../PagesMetaHead';

const DefaultLayout = ({ children }) => {
	return (
		<>
			<PagesMetaHead />
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
