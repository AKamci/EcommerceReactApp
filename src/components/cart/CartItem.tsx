import React, { useEffect, useMemo, useState } from 'react';
import QuantityManager from '../product/QuantityManager';
import { CartItemDto } from '../../infrastructure/dtos/CartItemDto';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import Endpoints from '../../infrastructure/helpers/api-endpoints';

const CartItem: React.FC<{ item: CartItemDto }> = ({ item }) => {
	const [quantity, setQuantity] = useState(1);

	useEffect(() => {
		if (quantity != item.quantity) {
			updateProductQuantity();
		}
	}, [quantity]);

	const updateProductQuantity = () => {
		if (quantity == item.quantity) return;
		axios
			.post(Endpoints.Carts.UpdateCartItemQuantity, {
				productId: item.productId,
				quantity: quantity,
			})
			.then((result) => {
				console.log(result);
			})
			.catch((reason) => {
				console.log(reason);
			});
	};

	const removeFromCart = (productId: number) => {
		axios
			.delete(`${Endpoints.Carts.RemoveProduct}/${productId}`)
			.then((result) => {
				console.log('result :>> ', result);
			})
			.catch((reason) => {
				console.log(reason);
			});
	};

	return (
		<tr>
			<td>{item.product.name}</td>
			<td>
				<QuantityManager setFunc={setQuantity} quantity={item.quantity} />
			</td>
			<td>{item.product.price}</td>
			<td>{item.quantity * item.product.price}</td>
			<td>
				<button className='btn btn-danger' onClick={() => removeFromCart(item.productId)}>
					<FontAwesomeIcon icon={faTrashCan} /> Sil
				</button>
			</td>
		</tr>
	);
};

export default React.memo(CartItem);
