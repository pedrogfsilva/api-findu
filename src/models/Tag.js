import mongoose from 'mongoose';

const TagSchema = new mongoose.Schema({
    macAddress: {
        type: String,
        required: false,
    },
    name: {
        type: String,
        required: false,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: false,
    },
    positionX: {
        type: Number,
        required: false,
    },
    positionY: {
        type: Number,
        required: false,
    },
    positionZ: {
        type: Number,
        required: false,
    }
});

const Tag = mongoose.model('Tag', TagSchema);

export default Tag;