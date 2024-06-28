import React from 'react';

const Footer = () => {
	return (
		<footer style={{backgroundColor: '#282c34', color: 'white', padding: '10px 20px', textAlign: 'center'}}>
			<p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
			<nav>
				<a href="/privacy" style={{color: 'white', margin: '0 10px'}}>Privacy Policy</a>
				<a href="/terms" style={{color: 'white', margin: '0 10px'}}>Terms of Service</a>
				<a href="/contact" style={{color: 'white', margin: '0 10px'}}>Contact Us</a>
			</nav>
		</footer>
	);
};

export default Footer;