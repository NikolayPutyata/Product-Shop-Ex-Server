import { Router } from 'express';
import express from 'express';
import {
  createProductController,
  deleteProductController,
  getAllProductsController,
  putProductController,
} from '../controllers/products.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = Router();

const jsonParser = express.json();

router.get('/products', ctrlWrapper(getAllProductsController));

router.post('/products', jsonParser, ctrlWrapper(createProductController));

router.put('/products/:id', jsonParser, ctrlWrapper(putProductController));

router.delete('/products/:id', ctrlWrapper(deleteProductController));

export default router;
