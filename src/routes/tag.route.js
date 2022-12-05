import express from 'express';
import tagController from '../controllers/tag.controller.js';

const route = express.Router();

route.get('/', tagController.getAll);
route.get('/countDocuments', tagController.countDocuments);
route.post('/', tagController.create);
route.patch('/', tagController.update);
route.delete('/:id', tagController.erase);

export default route;