import createHttpError from 'http-errors';
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  putProduct,
} from '../services/products.js';

export const getAllProductsController = async (req, res) => {
  const products = await getAllProducts();

  res.status(200).send(products);
};

export const createProductController = async (req, res) => {
  const product = req.body;

  const newProduct = await createProduct(product);

  res.status(201).send(newProduct);
};

export const putProductController = async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;

  if (!updateData || Object.keys(updateData).length === 0) {
    throw createHttpError(400, 'No data provided for update');
  }

  const updatedProduct = await putProduct(id, updateData);

  if (!updatedProduct) {
    throw createHttpError(404, 'Product not found');
  }

  res.status(200).send(updatedProduct);
};

export const deleteProductController = async (req, res) => {
  const { id } = req.params;

  const deletedProduct = await deleteProduct(id);

  if (!deletedProduct) {
    throw createHttpError(404, 'Contact not found');
  }
  res.status(200).send(deletedProduct);
};
