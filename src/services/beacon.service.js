import Beacon from '../models/Beacon.js';

const createService = (body) => Beacon.create(body);
const getAllService = () => Beacon.find();
const countDocumentsService = () => Beacon.countDocuments();

export default {
    createService,
    getAllService,
    countDocumentsService
}
