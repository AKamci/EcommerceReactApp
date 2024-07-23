import React from 'react';

const Footer = () => {
	console.log('Footer is rendered.');
	return (
		<footer className='mt-3 bg-dark px-3 py-2 text-center'>
			<p className='text-bg-dark'>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
			<nav>
				<a href='/privacy' style={{ color: 'white', margin: '0 10px' }}>
					Privacy Policy
				</a>
				<a href='/terms' style={{ color: 'white', margin: '0 10px' }}>
					Terms of Service
				</a>
				<a href='/contact' style={{ color: 'white', margin: '0 10px' }}>
					Contact Us
				</a>
			</nav>
		</footer>
	);
};

export default React.memo(Footer);
