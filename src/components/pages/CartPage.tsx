import { ProductDto } from '../../infrastructure/dtos/ProductDto';
import Page from '../shared/Page';
import Navbar from '../shared/Navbar';
import BreadCrumb from '../shared/BreadCrumb';
import Footer from '../shared/Footer';
import Endpoints from '../../infrastructure/helpers/api-endpoints';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { CartDto } from '../../infrastructure/dtos/CartDto';
import { Result } from '../../infrastructure/shared/Result';

const CartPage = () => {
	const [cart, setCart] = useState<Result<CartDto>>();

	useEffect(() => {
		loadCart();
	}, []);

	const loadCart = () => {
		axios
			.post(Endpoints.Carts.GetCartOfCustomer + '?customerId=22')
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
							<th scope='col'>#</th>
							<th scope='col'>Ürün Adı</th>
							<th scope='col'>Adet</th>
							<th scope='col'>Birim Fiyat</th>
							<th scope='col'>Tutar</th>
						</tr>
					</thead>
					<tbody>
						{cart?.value != null &&
							cart.value.cartItems.length > 0 &&
							cart?.value?.cartItems?.map((item, index) => (
								<tr>
									<th scope='row'>{index + 1}</th>
									<td>{item.product.name}</td>
									<td>{item.quantity}</td>
									<td>{item.product.price}</td>
									<td>{item.quantity * item.product.price}</td>
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

// state variable
const cart: ProductDto[] = [];
export function addToCart(product: ProductDto): void {
	cart.push(product);
	console.log('Ürün sepete eklendi:', product);
}

export default CartPage;
