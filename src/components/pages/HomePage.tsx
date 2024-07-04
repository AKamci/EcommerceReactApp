import Page from '../shared/Page';
import Navbar from '../shared/Navbar';
import BreadCrumb from '../shared/BreadCrumb';
import CategoryList from '../left-nav/CategoryList';
import ProductList from '../main/ProductList';
import Footer from '../shared/Footer';
import { useState } from 'react';

const HomePage = () => {
	const [activeCategory, setActiveCategory] = useState<number | null>(null);
	console.log('Homepage is rendered.');
	console.log('activeCategory :>> ', activeCategory);
	return (
		<Page>
			<Page.Header>
				<Navbar />
			</Page.Header>
			<Page.BreadCrumb>
				<BreadCrumb />
			</Page.BreadCrumb>
			<Page.Aside>
				<CategoryList setCategory={setActiveCategory} />
			</Page.Aside>
			<Page.Main>
				<ProductList categoryId={activeCategory} />
			</Page.Main>
			<Page.Footer>
				<Footer />
			</Page.Footer>
		</Page>
	);
};

export default HomePage;
