import Product from '../product/Product';

const ProductList = () => {
	const numbers = [1, 2, 3, 4, 5, 6];
	return (
		<div className='container-fluid'>
			<div className='row'>
				{numbers.map((item) => (
					<Product random={item} key={item} />
				))}
				{/* <Product random={1} />
				<Product random={2} />
				<Product random={3} />
				<Product random={4} />
				<Product random={5} />
				<Product random={6} /> */}
			</div>
		</div>
	);
};

export default ProductList;
