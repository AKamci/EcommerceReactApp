import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import categoriesSlice from './slices/categories-slice';
import productsSlice from './slices/products-slice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

const store = configureStore({
	reducer: {
		categories: categoriesSlice,
		products: productsSlice,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
