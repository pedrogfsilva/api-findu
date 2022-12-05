import Tag from '../models/Tag.js';

const getAllService = () => Tag.find().populate('category');
const createService = (body) => Tag.create(body);
const updateService = (id, macAddress, name, category, positionX, positionY, positionZ) => Tag.findOneAndUpdate({ _id: id }, { macAddress, name, category, positionX, positionY, positionZ });
const eraseService = (id) => Tag.findOneAndDelete({ _id: id });
const countDocumentsService = () => Tag.countDocuments();

export default {
    getAllService,
    createService,
    updateService,
    eraseService,
    countDocumentsService
}