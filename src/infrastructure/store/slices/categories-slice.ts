import { AsyncThunk, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Endpoints from '../../helpers/api-endpoints';
import axios from 'axios';
import { Result } from '../../shared/Result';
import { CategoryDto } from '../../dtos/CategoryDto';
import ApiState from '../../enums/ApiState';

export interface CategoryState {
	categories: Result<Array<CategoryDto>>;
	activeCategory: number;
	state: ApiState;
}

const initialState = { state: ApiState.Idle } as CategoryState;

export const loadCategories: AsyncThunk<Result<Array<CategoryDto>>, void, CategoryState> = createAsyncThunk(
	'categories/getAll',
	async () => {
		const response = await axios.get<Result<Array<CategoryDto>>>(Endpoints.Categories.List);
		return response.data;
	}
);

const categoriesSlice = createSlice({
	name: 'categories',
	initialState,
	extraReducers: (builder) => {
		builder.addCase(loadCategories.pending, (state, action) => {
			state.state = ApiState.Pending;
		});
		builder.addCase(loadCategories.fulfilled, (state, action) => {
			state.categories = action.payload;
		});
		builder.addCase(loadCategories.rejected, (state, action) => {
			state.state = ApiState.Rejected;
		});
	},
	reducers: {
		setActiveCategory: (state, action) => {
			state.activeCategory = action.payload;
		},
	},
});

export const { setActiveCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;
