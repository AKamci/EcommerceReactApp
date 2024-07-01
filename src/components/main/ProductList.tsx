import { useEffect, useState } from 'react';
import Product from '../product/Product';
import { ProductDto } from '../../infrastructure/dtos/ProductDto';
import { Result } from '../../infrastructure/shared/Result';
import Endpoints from '../../infrastructure/helpers/api-endpoints';
import axios from 'axios';
import Spinner from '../shared/Spinner';

const ProductList = () => {
	console.log('CategoryList is rendered.');
	const [products, setProducts] = useState<Result<Array<ProductDto>>>();
	const [showSpinner, setShowSpinner] = useState(false);

	useEffect(() => {
		loadProducts();
	}, []);

	const loadProducts = () => {
		setShowSpinner(true);
		axios
			.get<Result<Array<ProductDto>>>(Endpoints.Products.List)
			.then((result) => {
				setProducts(result.data);
				setShowSpinner(false);
			})
			.catch((reason) => {
				console.log(reason);
			});
	};
	return (
		<div className='container-fluid'>
			<div className='row'>
				{showSpinner && <Spinner color='primary' />}
				{products?.value.map((item) => (
					<Product product={item} key={item.id} />
				))}
			</div>
		</div>
	);
};

export default ProductList;
