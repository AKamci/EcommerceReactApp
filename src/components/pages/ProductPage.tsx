import Page from '../shared/Page';
import Navbar from '../shared/Navbar';
import BreadCrumb from '../shared/BreadCrumb';
import CategoryList from '../left-nav/CategoryList';
import Footer from '../shared/Footer';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Endpoints from '../../infrastructure/helpers/api-endpoints';
import { Result } from '../../infrastructure/shared/Result';
import { ProductDto } from '../../infrastructure/dtos/ProductDto';
const ProductPage = () => {
	const [product, setProduct] = useState<Result<ProductDto>>();
	const { id } = useParams();

	useEffect(() => {
		if (id != (null || undefined)) {
			loadProduct();
		}
	}, [id]);

	const loadProduct = () => {
		axios
			.get(Endpoints.Products.List + '/' + id)
			.then((result) => {
				if (result.status == 200) {
					setProduct(result.data);
				}
				// Toats uyarısı eklenecek
			})
			.catch((reason) => {
				console.log(reason);
			});
	};

	return (
		<Page>
			<Page.Header>
				<Navbar />
			</Page.Header>
			<Page.BreadCrumb>
				<BreadCrumb />
			</Page.BreadCrumb>
			<Page.Aside>{product?.isSuccess && <CategoryList activeCategory={product?.value.categoryId} />}</Page.Aside>
			<Page.Main>
				<h1>{product?.value.name}</h1>
			</Page.Main>
			<Page.Footer>
				<Footer />
			</Page.Footer>
		</Page>
	);
};

export default ProductPage;
