import { Router } from 'express';
import categoryController from '../controllers/category.controller.js';

const route = Router();

route.get('/', categoryController.getAll);
route.get('/countDocuments', categoryController.countDocuments);
route.post('/', categoryController.create);

export default route;