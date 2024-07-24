import mongoose from 'mongoose';

const ActivitySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    imageUrls: [{ type: String, required: true }],
    category: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    }],
    price: {
        type: String,
        required: true
    },
    availability: {
        type: [String], // Array of strings
        required: true,
    },
    inventory: {
        type: String,
    }
}, { timestamps: true });

export default mongoose.models.Activity || mongoose.model('Activity', ActivitySchema);
