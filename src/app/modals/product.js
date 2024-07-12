import mongoose from 'mongoose';

const LocationSchema = new mongoose.Schema({
    line1: {
        type: String,
        required: true
    },
    line2: {
        type: String
    },
    landmark: {
        type: String
    }
}, { _id: false });

const PackageSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    times: [{
        startTime: {
            type: String,
            required: true
        },
        endTime: {
            type: String,
            required: true
        }
    }],
    dates: {
        type: [String],
        required: true
    },
    images: [String]
}, { timestamps: true });

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: [String],
    price: {
        type: Number,
        required: true
    },
    details: {
        type: String,
        required: true
    },
    location: {
        type: LocationSchema,
        required: true
    },
    packages: {
        type: [PackageSchema],
        required: false
    },
    status: {
        type: String,
        enum: ['active', 'inactive', 'pending', 'draft', 'archived'],
        default: 'draft',
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
}, { timestamps: true });

export default mongoose.models.Product || mongoose.model('Product', ProductSchema);