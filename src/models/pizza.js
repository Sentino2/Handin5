import mongoose from 'mongoose';

const pizzaSchema = new mongoose.Schema({
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
  isInStock: { type: Boolean, default: true },
  description: {
    type: String,
    trim: true
  },
  ingredients: [{
    type: String,
    required: true
  }],
  nutrition: {
    calories: {
      type: Number,
      required: true,
      min: 0
    },
    protein: {
      type: Number,
      required: true,
      min: 0
    },
    carbs: {
      type: Number,
      required: true,
      min: 0
    },
    fat: {
      type: Number,
      required: true,
      min: 0
    }
  }
}, {
  timestamps: true
});

const Pizza = mongoose.model('Pizza', pizzaSchema);
export default Pizza; 