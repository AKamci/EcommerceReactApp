import Page from '../shared/Page';
import Navbar from '../shared/Navbar';
import BreadCrumb from '../shared/BreadCrumb';
import CategoryList from '../left-nav/CategoryList';
import ProductList from '../main/ProductList';

const HomePage = () => {
	return (
		<Page>
			<Page.Header>
				<Navbar />
			</Page.Header>
			<Page.BreadCrumb>
				<BreadCrumb />
			</Page.BreadCrumb>
			<Page.Aside>
				<CategoryList />
			</Page.Aside>
			<Page.Main>
				<ProductList />
			</Page.Main>
		</Page>
	);
};

export default HomePage;
