import categoryService from '../services/category.service.js';

const create = async (req, res) => {
    try {
        const { name, color } = req.body;

        if(!name || !color) {
            return res.status(400).send({ message: 'Please, submit all the fields required' });
        }
        
        const category = await categoryService.createService(req.body);

        if(!category) {
            return res.status(400).send({ message: 'Error creating category' });
        }

        res.status(201).send({
            message: 'Category created successfully',
            category: {
                id: category._id,
                name: name,
                color: color
            }
        });

    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
}

const getAll = async (req, res) => {
    try {
        const categorys = await categoryService.getAllService();

        if(categorys.length === 0) {
            return res.status(400).send({ message: 'There are no categorys saved in the database'});
        }
        
        res.json(categorys);
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
}

const countDocuments = async (req, res) => {
    try {
        let result = await categoryService.countDocumentsService();

        if(result.length === 0) {
            res.status(404).send({ message: error.message });
        }

        res.json({
            documents: result
        });

    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

export default {
    create,
    getAll,
    countDocuments
}