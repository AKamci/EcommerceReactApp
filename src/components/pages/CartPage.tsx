import Page from '../shared/Page';
import Navbar from '../shared/Navbar';
import BreadCrumb from '../shared/BreadCrumb';
import Footer from '../shared/Footer';
import Endpoints from '../../infrastructure/helpers/api-endpoints';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { CartDto } from '../../infrastructure/dtos/CartDto';
import { Result } from '../../infrastructure/shared/Result';
import CartItem from '../cart/CartItem';

const CartPage = () => {
	const [cart, setCart] = useState<Result<CartDto>>();
	console.log('Cart Page is Rendered');

	useEffect(() => {
		loadCart();
	}, []);

	const loadCart = () => {
		axios
			.get(Endpoints.Carts.GetCartOfCustomerWithCustomerId + '?customerId=22')
			.then((result) => {
				console.log('result.data :>> ', result.data);
				setCart(result.data);
			})
			.catch((reason) => {
				console.log(reason);
			});
	};

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
							cart?.value?.cartItems?.map((item, index) => <CartItem item={item} key={index} />)
							
							}
							
					</tbody>
				</table>
			</Page.Main>
			<Page.Footer>
				<Footer />
			</Page.Footer>
		</Page>
	);
};

export default CartPage;
