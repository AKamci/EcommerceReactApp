import axios from 'axios';
import { useEffect, useState } from 'react';
import { Result } from '../../infrastructure/shared/Result';
import { CategoryDto } from '../../infrastructure/dtos/CategoryDto';
import Endpoints from '../../infrastructure/helpers/api-endpoints';
import Spinner from '../shared/Spinner';

const CategoryList = (props: { setCategory: React.Dispatch<React.SetStateAction<number | null>> }) => {
	console.log('CategoryList is rendered.');
	const [categories, setCategories] = useState<Result<Array<CategoryDto>>>();
	const [showSpinner, setShowSpinner] = useState(false);
	const [activeButton, setActiveButton] = useState<number | null>(null); // Aktif buton durumunu takip etmek için state

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
		setActiveButton(prevActiveButton => (prevActiveButton === itemId ? null : itemId));
	};

	return (
		<div className='list-group'>
			{showSpinner && <Spinner color='danger' />}
			<a
				href={'/kategoriler/'}
				onClick={(e) => {
					e.preventDefault();
					props.setCategory(null);
					handleClick(null);
				}}
				className={`list-group-item list-group-item-action ${
					activeButton === null ? 'active' : ''
				}`}
				style={{
					backgroundColor: activeButton === null ? 'blue' : 'initial',
					color: activeButton === null ? 'white' : 'initial'
				}}
			>
				Tümü
			</a>
			{categories?.value.map((item) => (
				<a
					key={item.id}
					href={'/kategoriler/' + item.id}
					onClick={(e) => {
						e.preventDefault();
						props.setCategory(item.id);
						handleClick(item.id);
					}}
					className={`list-group-item list-group-item-action ${
						activeButton === item.id ? 'active' : ''
					}`}
					style={{
						backgroundColor: activeButton === item.id ? 'blue' : 'initial',
						color: activeButton === item.id ? 'white' : 'initial'
					}}
				>
					{item.name}
				</a>
			))}
		</div>
	);
};

export default CategoryList;
