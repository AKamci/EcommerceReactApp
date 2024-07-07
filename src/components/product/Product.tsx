import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ProductDto } from '../../infrastructure/dtos/ProductDto';
import { faLiraSign } from '@fortawesome/free-solid-svg-icons';
import { addToCart } from '../pages/CartPage';
import { NavLink } from 'react-router-dom';

const Product = (props: { product: ProductDto }) => {
	console.log('Product is rendered.');
	const handleAddToCart = () => {
		addToCart(props.product); // Ürünü sepete eklemek için addToCart fonksiyonuna props.product'ı geçiyoruz
	};

	return (
		<div className='col-4'>
			<div className='card mb-2'>
				<NavLink to={'/ürün/' + props.product.id}>
					<img
						src={'https://picsum.photos/200/200?random=' + props.product.id}
						className='card-img-top'
						alt={props.product.name}
					/>
				</NavLink>
				<div className='card-body'>
					<h5 className='card-title'>{props.product.name}</h5>
					<h6 className='card-subtitle mb-2 text-body-secondary'>
						{props.product.price} <FontAwesomeIcon icon={faLiraSign} />
					</h6>
					<p className='card-text'>{props.product.description}</p>
					<a className='btn btn-primary' onClick={handleAddToCart}>
						Sepete Ekle
					</a>
				</div>
			</div>
		</div>
	);
};

export default Product;
