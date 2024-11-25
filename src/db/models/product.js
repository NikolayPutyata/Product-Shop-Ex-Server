import { Schema, model } from 'mongoose';

const productSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    discountPercentage: { type: Number },
    rating: { type: Number, required: true },
    stock: { type: Number, required: true },
    tags: { type: [String], required: true },
    brand: { type: String },
    sku: { type: String },
    weight: { type: Number },
    dimensions: {
      width: { type: Number },
      height: { type: Number },
      depth: { type: Number },
    },
    warrantyInformation: { type: String },
    shippingInformation: { type: String },
    availabilityStatus: { type: String },
    reviews: [
      {
        rating: { type: Number },
        comment: { type: String },
        date: { type: Date },
        reviewerName: { type: String },
        reviewerEmail: { type: String },
      },
    ],
    returnPolicy: { type: String },
    minimumOrderQuantity: { type: Number },
    images: { type: [String] },
    thumbnail: { type: String, required: true },
    count: { type: Number, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const ProductsCollection = model('products', productSchema);
