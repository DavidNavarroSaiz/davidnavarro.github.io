export const UMAMI_CONFIG = Object.freeze({
	scriptSrc: 'https://cloud.umami.is/script.js',
	websiteId: '80e8267f-8d6f-4b68-baea-52d41f267d48',
	domain: 'davidnavarrosaiz.github.io',
});

export function isUmamiProductionHost(locationLike) {
	return locationLike?.hostname === UMAMI_CONFIG.domain;
}

export function trackUmamiEvent(eventName, eventData = {}, browserWindow) {
	const currentWindow = browserWindow || (typeof window !== 'undefined' ? window : null);

	if (!isUmamiProductionHost(currentWindow?.location)) return false;

	const tracker = currentWindow.umami;
	if (typeof tracker?.track !== 'function') return false;

	tracker.track(eventName, eventData);
	return true;
}
