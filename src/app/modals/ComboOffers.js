import mongoose from 'mongoose';

const ComboOfferSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
      },
      description: {
        type: String,
        trim: true
      },
      products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
      }],
      totalPrice: {
        type: Number,
        required: true
      },
      discount: {
        type: Number, 
        required: true
      },
      startDate: {
        type: Date,
        required: true
      },
      endDate: {
        type: Date,
        required: true
      },
      isActive: {
        type: Boolean,
        default: true
      },
   
}, { timestamps: true });

export default mongoose.models.ComboOffer || mongoose.model('ComboOffer', ComboOfferSchema);