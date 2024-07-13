import React, { useState } from 'react';
import { ProductDto } from '../../infrastructure/dtos/ProductDto';
import axios from 'axios';
import Endpoints from '../../infrastructure/helpers/api-endpoints';

const AddToCart: React.FC<{ product: ProductDto }> = ({ product }) => {
	const [count, setCount] = useState(1);

	const insreaseCount = () => {
		setCount(count + 1);
	};

	const decreaseCount = () => {
		const quantity = count == 1 ? 1 : count - 1;
		setCount(quantity);
	};

	const addToCart = () => {
		axios
			.post(Endpoints.Carts.AddSingleProduct, {
				productId: product.id,
				quantity: count,
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
			<div className='input-group w-auto'>
				<button className='btn btn-outline-secondary' onClick={decreaseCount}>
					-
				</button>
				<span className='input-group-text text-center px-2 border border-secondary'>{count} Adet </span>
				<button className='btn btn-outline-secondary' onClick={insreaseCount}>
					+
				</button>
			</div>
			<button className='btn btn-warning ms-1' onClick={addToCart}>
				Sepete Ekle
			</button>
		</div>
	);
};

export default AddToCart;
