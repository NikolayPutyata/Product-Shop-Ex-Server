import { Router } from 'express';
import {
  createProductController,
  deleteProductController,
  getAllProductsController,
  putProductController,
} from '../controllers/products.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = Router();

router.get('/products', ctrlWrapper(getAllProductsController));

router.post('/products', ctrlWrapper(createProductController));

router.put('/products/:id', ctrlWrapper(putProductController));

router.delete('/products/:id', ctrlWrapper(deleteProductController));

export default router;
