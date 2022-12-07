import mongoose from 'mongoose';

const ImageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: false
    },
    desc: {
        type: String,
        required: false
    },
    img: {
        data: Buffer,
        contentType: String,
        required: false
    }
});

const Image = mongoose.model('Image', ImageSchema);

export default Image;