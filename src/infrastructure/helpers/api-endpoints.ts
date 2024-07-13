const baseUrl = 'http://localhost:5021/api';

export default {
	Categories: {
		List: `${baseUrl}/Categories`,
	},
	Products: {
		List: `${baseUrl}/Products`,
		GetAllByCategoryId: `${baseUrl}/Products/GetAllByCategoryId`,
	},
	Carts: {
		AddSingleProduct: `${baseUrl}/Carts/AddSingleProduct`,
		Remove: `${baseUrl}/Carts`,
		GetCartOfCustomer: `${baseUrl}/Carts/GetCartOfCustomer`,
	},
};
