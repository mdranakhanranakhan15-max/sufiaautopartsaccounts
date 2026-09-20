import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide product name'],
      trim: true,
    },
    sku: {
      type: String,
      required: [true, 'Please provide product SKU'],
      unique: true,
      uppercase: true,
      trim: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
      required: [true, 'Please select a category'],
    },
    buyingPrice: {
      type: Number,
      required: [true, 'Please provide buying price'],
      min: 0,
    },
    sellingPrice: {
      type: Number,
      required: [true, 'Please provide selling price'],
      min: 0,
    },
    stockQuantity: {
      type: Number,
      required: [true, 'Please provide stock quantity'],
      min: 0,
      default: 0,
    },
    minStockAlert: {
      type: Number,
      default: 5,
      min: 0,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Product || mongoose.model('Product', ProductSchema);
