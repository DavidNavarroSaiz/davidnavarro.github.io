import PagesMetaHead from '../components/PagesMetaHead';
import AppHero from '../components/shared/AppHero';
import AppBio from '../components/shared/AppBio';

export default function Home() {
	return (
		<div>
			<PagesMetaHead title="David Navarro - Machine Learning Engineer" />

			<AppHero />

			<AppBio />
		</div>
	);
}
