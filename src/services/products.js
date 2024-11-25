import { ProductsCollection } from '../db/models/product.js';

export const getAllProducts = async () => {
  const products = await ProductsCollection.find();
  return products;
};

export const createProduct = async (product) => {
  const newProduct = await ProductsCollection.create(product);
  return newProduct;
};

export const putProduct = async (id, updateData) => {
  const updatedProduct = await ProductsCollection.findByIdAndUpdate(
    id,
    updateData,
    { new: true, runValidators: true },
  );
  return updatedProduct;
};

export const deleteProduct = async (id) => {
  const deletedProduct = await ProductsCollection.findByIdAndDelete(id);
  return deletedProduct;
};
