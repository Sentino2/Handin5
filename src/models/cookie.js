import mongoose from 'mongoose';

const cookieSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  priceInCents: {
    type: Number,
    required: true,
    min: 0
  },
  description: {
    type: String,
    trim: true
  },
  isInStock: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true,
  collection: 'cookies'
});

const Cookie = mongoose.model('Cookie', cookieSchema);
export default Cookie; 