import { ProductDto } from '../../infrastructure/dtos/ProductDto';
import Page from '../shared/Page';
import Navbar from '../shared/Navbar';
import BreadCrumb from '../shared/BreadCrumb';
import Footer from '../shared/Footer';

const CartPage = () => {
	// cart as state variable.
	console.log('Cart is rendered.');
	console.log(cart);

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
						{cart.map((item, index) => (
							<tr>
								<th scope='row'>{index + 1}</th>
								<td>{item.name}</td>
								<td>1</td>
								<td>{item.price}</td>
								<td>{item.price}</td>
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
