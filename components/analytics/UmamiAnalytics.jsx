import { useEffect, useState } from 'react';
import Script from 'next/script';
import { UMAMI_CONFIG, isUmamiProductionHost } from '../../utils/analytics';

function UmamiAnalytics() {
	const [isProductionHost, setIsProductionHost] = useState(false);

	useEffect(() => {
		setIsProductionHost(isUmamiProductionHost(window.location));
	}, []);

	if (!isProductionHost) return null;

	return (
		<Script
			defer
			strategy="afterInteractive"
			src={UMAMI_CONFIG.scriptSrc}
			data-website-id={UMAMI_CONFIG.websiteId}
			data-domains={UMAMI_CONFIG.domain}
			data-auto-track="true"
		/>
	);
}

export default UmamiAnalytics;
