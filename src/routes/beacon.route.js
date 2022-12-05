import { Router } from 'express';
import beaconController from '../controllers/beacon.controller.js';

const route = Router();

route.get('/', beaconController.getAll);
route.get('/countDocuments', beaconController.countDocuments);
route.post('/', beaconController.create);

export default route;