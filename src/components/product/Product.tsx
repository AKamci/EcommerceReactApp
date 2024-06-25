const Product = (props: { random: number }) => {
	return (
		<div className='col-4'>
			<div className='card mb-2'>
				<img
					src={'https://picsum.photos/200/200?random=' + props.random}
					className='card-img-top'
					alt='Product Image'
				/>
				<div className='card-body'>
					<h5 className='card-title'>Test Product</h5>
					<p className='card-text'>
						Some quick example text to build on the card title and make up the bulk of the card's content.
					</p>
					<a href='#' className='btn btn-primary'>
						Sepete Ekle
					</a>
				</div>
			</div>
		</div>
	);
};

export default Product;
