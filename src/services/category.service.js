import Category from '../models/Category.js';

const createService = (body) => Category.create(body);
const getAllService = () => Category.find();
const countDocumentsService = () => Category.countDocuments();

export default {
    createService,
    getAllService,
    countDocumentsService
}