import { NavLink } from 'react-router-dom';

const BreadCrumb = () => {
	console.log('BreadCrumb is rendered.');
	return (
		<nav aria-label='breadcrumb'>
			<ol className='breadcrumb'>
				<li className='breadcrumb-item'>
					<NavLink to='/' title='Anasayfa'>
						Anasayfa
					</NavLink>
				</li>
				<li className='breadcrumb-item'>
					<NavLink to='/kategoriler'>Kategoriler</NavLink>
				</li>
				<li className='breadcrumb-item active' aria-current='page'>
					Toys
				</li>
			</ol>
		</nav>
	);
};

export default BreadCrumb;
