import { useEffect } from 'react';
import Product from '../product/Product';
import Spinner from '../shared/Spinner';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../infrastructure/store/store';
import { loadProducts } from '../../infrastructure/store/slices/products-slice';
import ApiState from '../../infrastructure/enums/ApiState';

const ProductList = () => {
	console.log('CategoryList is rendered.');
	const dispatch = useAppDispatch();
	const state = useAppSelector((state) => state.products.state);
	const products = useAppSelector((state) => state.products.data);
	const activeCategory = useAppSelector((state) => state.categories.activeCategory);

	useEffect(() => {
		if (state == ApiState.Idle) {
			dispatch(loadProducts({ activeCategory: null }));
		}
	}, [state]);

	useEffect(() => {
		if (state == ApiState.Fulfilled && activeCategory != null) {
			dispatch(loadProducts({ activeCategory }));
		}
	}, [activeCategory]);

	return (
		<div className='container-fluid'>
			<div className='row'>
				{state == ApiState.Pending && <Spinner color='primary' />}
				{products?.value.map((item) => (
					<Product product={item} key={item.id} />
				))}
			</div>
		</div>
	);
};

export default React.memo(ProductList);
