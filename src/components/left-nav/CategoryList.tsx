import axios from 'axios';
import { useEffect, useState } from 'react';
import { Result } from '../../infrastructure/shared/Result';
import { CategoryDto } from '../../infrastructure/dtos/CategoryDto';
import Endpoints from '../../infrastructure/helpers/api-endpoints';
import Spinner from '../shared/Spinner';

const CategoryList = () => {
	console.log('CategoryList is rendered.');
	const [categories, setCategories] = useState<Result<Array<CategoryDto>>>();
	const [showSpinner, setShowSpinner] = useState(false);

	useEffect(() => {
		loadCategories();
	}, []);

	const loadCategories = () => {
		// Component State -  Sadece bu bileşenden erişilir
		// Global State - Tüm uygulamadan erişilir

		setShowSpinner(true);
		axios
			.get<Result<Array<CategoryDto>>>(Endpoints.Categories.List)
			.then((result) => {
				setCategories(result.data);
				setShowSpinner(false);
			})
			.catch((reason) => {
				console.log(reason);
			});
	};

	return (
		<div className='list-group'>
			{/* <a href='#' className='list-group-item list-group-item-action active' aria-current='true'>
				Elektronik
			</a> */}
			{showSpinner && <Spinner color='danger' />}
			{categories?.value.map((item) => (
				<a key={item.id} href={'/kategoriler/' + item.id} className='list-group-item list-group-item-action'>
					{item.name}
				</a>
			))}
		</div>
	);
};

export default CategoryList;
