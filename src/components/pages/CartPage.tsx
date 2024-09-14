import Page from '../shared/Page';
import Navbar from '../shared/Navbar';
import BreadCrumb from '../shared/BreadCrumb';
import Footer from '../shared/Footer';
import { useEffect } from 'react';
import CartItem from '../cart/CartItem';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../infrastructure/store/store';
import { loadCarts } from '../../infrastructure/store/slices/cart-slice';

const CartPage = () => {
	const dispatch = useAppDispatch();
	const cart = useAppSelector((state) => state.carts.data);

	console.log('Cart Page is Rendered');

	useEffect(() => {
		dispatch(loadCarts());
	}, []);

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
						{cart?.value == null ||
							(cart.value.cartItems.length == 0 && (
								<tr>
									<td colSpan={5} className='text-center'>
										Herhangi bir kayıt bulunamadı.
									</td>
								</tr>
							))}
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
