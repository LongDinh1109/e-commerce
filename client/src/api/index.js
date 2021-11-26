import axios from 'axios';

const isDev = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
const baseURL = isDev ? 'http://localhost:3001/api/v1' : 'https://api-mobile7076.herokuapp.com/api/v1';
const API = axios.create({ baseURL });

// Add Header Authorization
API.interceptors.request.use((req) => {
  const accessToken = localStorage.getItem('accessToken');
  if (accessToken) {
    req.headers.authorization = `Bearer ${accessToken}`;
  }
  return req;
});

export const apiInstance = API;

// ----------------------------Auth------------------------------------

export const register = (data) => API.post('/auth/login', data);
export const login = (username, password) => API.post('/auth/login', { username, password });
export const logout = (refreshToken) => API.post('/auth/logout', { refreshToken });

// ----------------------------Me--------------------------------------
export const getInfo = () => API.get('/me');

// ----------------------------Category--------------------------------
export const getAllCategory = (fields) => (fields ? API.get(`/categories?fields=${fields}`) : API.get('/categories'));
export const getOneCategory = (identity) => API.get(`/categories/${identity}`);
export const createCategory = (newCategory) => API.post('/categories', newCategory);
export const updateCategory = (identity, updatedCategory) => API.patch(`/categories/${identity}`, updatedCategory);
export const deleteCategory = (identity) => API.delete(`/categories/${identity}`);

// ----------------------------Brand-----------------------------------
export const getAllBrand = (fields) => (fields ? API.get(`/brands?fields=${fields}`) : API.get('/brands'));
export const getOneBrand = (identity) => API.get(`/brands/${identity}`);
export const createBrand = (newBrand) => API.post('/brands', newBrand);
export const updateBrand = (identity, updatedBrand) => API.patch(`/brands/${identity}`, updatedBrand);
export const deleteBrand = (identity) => API.delete(`/brands/${identity}`);

// ----------------------------Discount--------------------------------
export const getAllDiscount = () => API.get('/discounts');
export const getOneDiscount = (identity) => API.get(`/discounts/${identity}`);
export const createDiscount = (newDiscount) => API.post('/discounts', newDiscount);
export const updateDiscount = (identity, updatedDiscount) => API.patch(`/discounts/${identity}`, updatedDiscount);
export const deleteDiscount = (identity) => API.delete(`/discounts/${identity}`);

// ----------------------------Product---------------------------------
export const getAllProduct = () => API.get('/products');
export const getOneProduct = (identity) => API.get(`/products/${identity}`);
export const createProduct = (newProduct) => API.post('/products', newProduct);
export const updateProduct = (identity, updatedProduct) => API.patch(`/products/${identity}`, updatedProduct);
export const deleteProduct = (identity) => API.delete(`/products/${identity}`);

// ----------------------------Variant--------------------------------
export const createProductVariant = (identity, newProductVariant) =>
  API.post(`/products/${identity}/variants`, newProductVariant);
export const updateProductVariant = (identity, sku, updatedProduct) =>
  API.patch(`/products/${identity}/variants/${sku}`, updatedProduct);
export const deleteProductVariant = (identity, sku) => API.delete(`/products/${identity}/variants/${sku}`);

// ----------------------------User (staff) --------------------------
export const getAllStaffs = () => API.get('/users/staff');
export const getStaff = (identity) => API.get(`/users/staff/${identity}`);
export const createStaff = (newUser) => API.post('/users/staff', newUser);
export const updateStaff = (identity, updatedUser) => API.patch(`/users/staff/${identity}`, updatedUser);
export const deleteStaff = (identity) => API.delete(`/users/staff/${identity}`);

// ----------------------------User (customer) -----------------------
export const getAllCustomers = () => API.get('/users/customer');
export const getOneUser = (identity) => API.get(`/users/customer/${identity}`);
export const createUser = (newUser) => API.post('/users/customer', newUser);
export const updateUser = (identity, updatedUser) => API.patch(`/users/customer/${identity}`, updatedUser);
export const deleteUser = (identity) => API.delete(`/users/customer/${identity}`);
