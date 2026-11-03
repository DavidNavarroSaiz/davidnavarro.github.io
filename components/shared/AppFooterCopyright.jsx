function AppFooterCopyright() {
	const year = new Date().getFullYear();

	return (
		<div className="flex flex-col gap-1 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
			<p>© {year} David Navarro. All rights reserved.</p>
			<p className="font-mono text-[10px] uppercase tracking-[0.18em] text-gray-500">
				Senior AI Engineer
			</p>
		</div>
	);
}

export default AppFooterCopyright;
