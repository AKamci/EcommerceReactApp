import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../../components/pages/HomePage';
import AboutUs from '../../components/pages/AboutUs';
import Cart from '../../components/shared/Cart';

const Routers = () => {
	console.log('Routers is rendered.');
    
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </BrowserRouter>
      );
};

export default Routers;