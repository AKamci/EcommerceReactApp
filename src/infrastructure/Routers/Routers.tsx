import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../../components/pages/HomePage';
import AboutUs from '../../components/pages/AboutUsPage';
import CartPage from '../../components/pages/CartPage';
import ProductPage from '../../components/pages/ProductPage';

const Routers = () => {
	console.log('Routers is rendered.');
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/about' element={<AboutUs />} />
				<Route path='/cart' element={<CartPage />} />
				<Route path='/ürün/:id' element={<ProductPage />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Routers;
