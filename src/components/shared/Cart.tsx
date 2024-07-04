import { useState } from 'react';
import { ProductDto } from '../../infrastructure/dtos/ProductDto';

const Cart = () => {
	// cart as state variable.
	console.log('Cart is rendered.');
	console.log(cart);

	return (
		<div>
			<h2>Shopping Cart</h2>
			<ul>
				{cart.map((item) => (
					<li key={item.id}>
						{item.name} - ${item.price}
					</li>
				))}
			</ul>
		</div>
	);
};

// state variable
var cart: ProductDto[] = [];
export function addToCart(product: ProductDto): void {
	cart.push(product);
	console.log('Ürün sepete eklendi:', product);
}

export default Cart;
