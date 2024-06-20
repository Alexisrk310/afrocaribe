const WaveMask = () => {
	return (
		<svg className="absolute bottom-0 w-full h-32" viewBox="0 0 1440 320">
			<defs>
				<linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
					<stop
						offset="0%"
						style={{ stopColor: 'rgba(255,255,255,0)', stopOpacity: 0 }}
					/>
					<stop
						offset="100%"
						style={{ stopColor: 'rgba(255,255,255,1)', stopOpacity: 1 }}
					/>
				</linearGradient>
			</defs>
			<path
				fill="url(#grad1)"
				d="M0,160L48,181.3C96,203,192,245,288,240C384,235,480,181,576,186.7C672,192,768,256,864,272C960,288,1056,256,1152,213.3C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
		</svg>
	);
};

export default WaveMask;
