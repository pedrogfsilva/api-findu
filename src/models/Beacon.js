import mongoose from 'mongoose';

const BeaconSchema = new mongoose.Schema({
    macAddress: {
        type: String,
        required: true
    },
    
    distanceA: {
        type: Number,
        required: true
    },

    distanceC: {
        type: Number,
        required: true
    }
});

const Beacon = mongoose.model('Beacon', BeaconSchema);

export default Beacon;