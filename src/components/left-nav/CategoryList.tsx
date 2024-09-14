import { useEffect } from 'react';
import Spinner from '../shared/Spinner';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../infrastructure/store/store';
import ApiState from '../../infrastructure/enums/ApiState';
import { loadCategories, setActiveCategory } from '../../infrastructure/store/slices/categories-slice';

const CategoryList = () => {
	const dispatch = useAppDispatch();
	const state = useAppSelector((state) => state.categories.state);
	const categories = useAppSelector((state) => state.categories.data);
	const activeCategory = useAppSelector((state) => state.categories.activeCategory);
	console.log('CategoryList is rendered: ', state);

	useEffect(() => {
		if (state == ApiState.Idle) {
			dispatch(loadCategories());
		}
	}, []);

	return (
		<aside>
			<h3>Kategoriler</h3>
			<div className='list-group'>
				{state == ApiState.Pending && <Spinner color='primary' />}
				<a
					href={'/kategoriler/'}
					onClick={(e) => {
						e.preventDefault();
						dispatch(setActiveCategory(null));
					}}
					className={`list-group-item list-group-item-action ${activeCategory === null ? 'active' : ''}`}>
					Tümü
				</a>
				{categories?.isSuccess &&
					categories?.value.map((item) => (
						<a
							key={item.id}
							href={'/kategoriler/' + item.id}
							onClick={(e) => {
								e.preventDefault();
								dispatch(setActiveCategory(item.id));
							}}
							className={`list-group-item list-group-item-action ${activeCategory === item.id ? 'active' : ''}`}>
							{item.name}
						</a>
					))}
			</div>
		</aside>
	);
};

export default React.memo(CategoryList);
