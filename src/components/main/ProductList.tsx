import { useEffect, useState } from 'react';
import Product from '../product/Product';
import { ProductDto } from '../../infrastructure/dtos/ProductDto';
import { Result } from '../../infrastructure/shared/Result';
import Endpoints from '../../infrastructure/helpers/api-endpoints';
import axios from 'axios';
import Spinner from '../shared/Spinner';
import React from 'react';

const ProductList = (props: { categoryId: number | null }) => {
	console.log('CategoryList is rendered.');
	const [products, setProducts] = useState<Result<Array<ProductDto>>>();
	const [showSpinner, setShowSpinner] = useState(false);

	useEffect(() => {
		loadProducts();
	}, [props.categoryId]);

	const loadProducts = () => {
		setShowSpinner(true);
		const url = props.categoryId
			? Endpoints.Products.GetAllByCategoryId + '/' + props.categoryId
			: Endpoints.Products.List;
		axios
			.get<Result<Array<ProductDto>>>(url)
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

export default React.memo(ProductList);
