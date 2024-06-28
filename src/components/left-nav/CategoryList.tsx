import axios from 'axios';
import { useEffect, useState } from 'react';
import { Result } from '../../infrastructure/shared/Result';
import { CategoryDto } from '../../infrastructure/dtos/CategoryDto';

const CategoryList = () => {
	const [categories, setCategories] = useState<Result<Array<CategoryDto>>>();

	useEffect(() => {
		loadCategories();
	}, []);

	const loadCategories = () => {
		// Component State -  Sadece bu bileşenden erişilir
		// Global State - Tüm uygulamadan erişilir

		axios
			.get<Result<Array<CategoryDto>>>('http://localhost:5021/api/Categories')
			.then((result) => {
				setCategories(result.data);
			})
			.catch((reason) => {
				console.log(reason);
			});
	};

	// loadCategories();

	return (
		<div className='list-group'>
			{/* <a href='#' className='list-group-item list-group-item-action active' aria-current='true'>
				Elektronik
			</a> */}
			{categories?.value.map((item) => (
				<a key={item.id} href={'/kategoriler/' + item.id} className='list-group-item list-group-item-action'>
					{item.name}
				</a>
			))}
		</div>
	);
};

export default CategoryList;
