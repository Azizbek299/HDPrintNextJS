import mongoose from "mongoose";
const { Schema } = mongoose;


const categorySchema = new Schema({
    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    products: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
    ourService: [{ type: Schema.Types.ObjectId, ref: 'OurService' }],
    video: [{ type: Schema.Types.ObjectId, ref: 'Video' }],
    ourJob: [{ type: Schema.Types.ObjectId, ref: 'OurJob' }],    
  },
  { timestamps: true }
);

const Category = mongoose.models.Category || mongoose.model("Category", categorySchema);

export default Category;



