import React, { useState } from 'react';
import { ProductDto } from '../../infrastructure/dtos/ProductDto';
import axios from 'axios';
import Endpoints from '../../infrastructure/helpers/api-endpoints';
import QuantityManager from './QuantityManager';

const AddToCart: React.FC<{ product: ProductDto }> = ({ product }) => {
	const [quantity, setQuantity] = useState(1);
	console.log('Add To Cart is Rendered.');

	const addToCart = () => {
		axios
			.post(Endpoints.Carts.AddProduct, {
				productId: product.id,
				quantity: quantity,
			})
			.then((result) => {
				console.log(result);
			})
			.catch((reason) => {
				console.log(reason);
			});
	};

	return (
		<div className='d-flex align-items-start'>
			<QuantityManager setFunc={setQuantity} quantity={1} />
			<button className='btn btn-warning' onClick={addToCart}>
				Sepete Ekle
			</button>
		</div>
	);
};

export default React.memo(AddToCart);
