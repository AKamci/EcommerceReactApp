import axios from 'axios';
import { useEffect, useState } from 'react';
import { Result } from '../../infrastructure/shared/Result';
import { CategoryDto } from '../../infrastructure/dtos/CategoryDto';
import Endpoints from '../../infrastructure/helpers/api-endpoints';
import Spinner from '../shared/Spinner';

const CategoryList = (props: {
	setCategory?: React.Dispatch<React.SetStateAction<number | null>>;
	activeCategory?: number;
}) => {
	console.log('CategoryList is rendered.');
	const [categories, setCategories] = useState<Result<Array<CategoryDto>>>();
	const [showSpinner, setShowSpinner] = useState(false);
	const [activeButton, setActiveButton] = useState<number | null | undefined>(props.activeCategory); // Aktif buton durumunu takip etmek için state

	useEffect(() => {
		loadCategories();
	}, []);

	const loadCategories = () => {
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

	const handleClick = (itemId: number | null) => {
		setActiveButton((prevActiveButton) => (prevActiveButton === itemId ? null : itemId));
	};

	return (
		<aside>
			<h3>Kategoriler</h3>
			<div className='list-group'>
				{showSpinner && <Spinner color='primary' />}
				<a
					href={'/kategoriler/'}
					onClick={(e) => {
						e.preventDefault();
						if (props.setCategory) props.setCategory(null);
						handleClick(null);
					}}
					className={`list-group-item list-group-item-action ${activeButton === (null || undefined) ? 'active' : ''}`}>
					Tümü
				</a>
				{categories?.value.map((item) => (
					<a
						key={item.id}
						href={'/kategoriler/' + item.id}
						onClick={(e) => {
							e.preventDefault();
							if (props.setCategory) props.setCategory(item.id);
							handleClick(item.id);
						}}
						className={`list-group-item list-group-item-action ${activeButton === item.id ? 'active' : ''}`}>
						{item.name}
					</a>
				))}
			</div>
		</aside>
	);
};

export default CategoryList;
