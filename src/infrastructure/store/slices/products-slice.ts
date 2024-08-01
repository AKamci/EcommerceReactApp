import { AsyncThunk, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Endpoints from '../../helpers/api-endpoints';
import axios from 'axios';
import { Result } from '../../shared/Result';
import ApiState from '../../enums/ApiState';
import { ProductDto } from '../../dtos/ProductDto';

export interface ProductState {
	data: Result<Array<ProductDto>>;
	state: ApiState;
}

const initialState = { state: ApiState.Idle } as ProductState;

export const loadProducts: AsyncThunk<
	Result<Array<ProductDto>>,
	{ activeCategory: number | null },
	ProductState
> = createAsyncThunk('products/getAll', async ({ activeCategory }) => {
	const url = activeCategory ? Endpoints.Products.GetAllByCategoryId + '/' + activeCategory : Endpoints.Products.List;
	const response = await axios.get<Result<Array<ProductDto>>>(url);
	return response.data;
});

const productsSlice = createSlice({
	name: 'products',
	initialState,
	extraReducers: (builder) => {
		builder.addCase(loadProducts.pending, (state, action) => {
			state.state = ApiState.Pending;
		});
		builder.addCase(loadProducts.fulfilled, (state, action) => {
			state.data = action.payload;
			state.state = ApiState.Fulfilled;
		});
		builder.addCase(loadProducts.rejected, (state, action) => {
			state.state = ApiState.Rejected;
		});
	},
	reducers: {},
});

export default productsSlice.reducer;
