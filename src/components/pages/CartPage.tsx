import Page from '../shared/Page';
import Navbar from '../shared/Navbar';
import BreadCrumb from '../shared/BreadCrumb';
import Footer from '../shared/Footer';
import { useEffect, useState } from 'react';
import { CartDto } from '../../infrastructure/dtos/CartDto';
import { Result } from '../../infrastructure/shared/Result';
import CartItem from '../cart/CartItem';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../infrastructure/store/store';
import { loadCarts } from '../../infrastructure/store/slices/cart-slice';

const CartPage = () => {

	const dispatch = useAppDispatch();
	const state = useAppSelector((state) => state.carts.state);
	const carts = useAppSelector((state) => state.carts.data);
	

	const [cart, setCart] = useState<Result<CartDto>>();
	console.log('Cart Page is Rendered');
	

	useEffect(() => {
		dispatch(loadCarts()) // invoke loadCarts as a function
	}, [dispatch] || [carts]);

	useEffect(() => {
		setCart(carts);
		console.log("Carts: ", carts);
		console.log("Cart: ", cart);
	}, [carts]);


	return (
		<Page>
			<Page.Header>
				<Navbar />
			</Page.Header>
			<Page.BreadCrumb>
				<BreadCrumb />
			</Page.BreadCrumb>
			<Page.Main fullPage>
				<h1>Shopping Cart</h1>
				<table className='table table-hover'>
					<thead>
						<tr>
							<th scope='col'>Ürün Adı</th>
							<th scope='col'>Adet</th>
							<th scope='col'>Birim Fiyat</th>
							<th scope='col'>Tutar</th>
							<th scope='col'>İşlemler</th>
						</tr>
					</thead>
					<tbody>
						{cart?.value != null &&
							cart.value.cartItems.length > 0 &&
							cart?.value?.cartItems?.map((item, index) => <CartItem item={item} key={index} />)}
					</tbody>
				</table>
			</Page.Main>
			<Page.Footer>
				<Footer />
			</Page.Footer>
		</Page>
	);
};

export default React.memo(CartPage);
