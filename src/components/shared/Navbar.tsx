import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
	console.log('Navbar is rendered.');
	return (
		<nav className='navbar navbar-expand-lg bg-body-tertiary'>
			<div className='container-fluid'>
				<NavLink to='/' className={'nav-link'} />
				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarScroll'
					aria-controls='navbarScroll'
					aria-expanded='false'
					aria-label='Toggle navigation'>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div className='collapse navbar-collapse' id='navbarScroll'>
					<ul className='navbar-nav my-lg-0 navbar-nav-scroll'>
						<li className='nav-item'>
							<NavLink to='/' className={'nav-link'}>
								Anasayfa
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink to='/about' className={'nav-link'}>
								Hakkımızda
							</NavLink>
						</li>
					</ul>
					<form className='d-flex w-75' role='search'>
						<input className='form-control me-2' type='search' placeholder='Ara...' aria-label='Ara...' />
					</form>
					<ul className='navbar-nav my-lg-0 navbar-nav-scroll'>
						<li className='nav-item'>
							<NavLink to='/cart' className={'nav-link'}>
								Sepetim
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink to='/log-in' className={'nav-link'}>
								Üye girişi
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default React.memo(Navbar);
