const Navbar = () => {
	console.log('Navbar is rendered.');
	return (
		<nav className='navbar navbar-expand-lg bg-body-tertiary'>
			<div className='container-fluid'>
				<a className='navbar-brand' href='#'>
					Navbar scroll
				</a>
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
							<a className='nav-link' href='#'>
								Link
							</a>
						</li>
						<li className='nav-item dropdown'>
							<a
								className='nav-link dropdown-toggle'
								href='#'
								role='button'
								data-bs-toggle='dropdown'
								aria-expanded='false'>
								Link
							</a>
							<ul className='dropdown-menu'>
								<li>
									<a className='dropdown-item' href='#'>
										Action
									</a>
								</li>
								<li>
									<a className='dropdown-item' href='#'>
										Another action
									</a>
								</li>
								<li>
									<hr className='dropdown-divider' />
								</li>
								<li>
									<a className='dropdown-item' href='#'>
										Something else here
									</a>
								</li>
							</ul>
						</li>
					</ul>
					<form className='d-flex w-75' role='search'>
						<input className='form-control me-2' type='search' placeholder='Ara...' aria-label='Ara...' />
					</form>
					<ul className='navbar-nav my-lg-0 navbar-nav-scroll'>
						<li className='nav-item'>
							<a className='nav-link active' aria-current='page' href='/cart'>
								Sepetim
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link' href='#'>
								Üye Girişi
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
