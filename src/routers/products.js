import { Router } from 'express';
import {
  createProductController,
  deleteProductController,
  getAllProductsController,
  putProductController,
} from '../controllers/products.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = Router();

router.get('/cart', ctrlWrapper(getAllProductsController));

router.post('/cart', ctrlWrapper(createProductController));

router.put('/cart/:id', ctrlWrapper(putProductController));

router.delete('/cart/:id', ctrlWrapper(deleteProductController));

export default router;
