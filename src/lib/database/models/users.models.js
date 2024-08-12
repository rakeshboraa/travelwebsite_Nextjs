import mongoose, { model, models } from 'mongoose';

const UserSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
        
    },
    email: {
        type: String,
        required: true,
        unique: true 
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['customer', 'manager', 'vendor', 'admin'],
        default: 'customer'
    }

}, { timestamps: true });

const User = models.User || model('User', UserSchema);

export default User;