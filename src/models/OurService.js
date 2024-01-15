import mongoose from "mongoose";
const { Schema } = mongoose;

const ourServiceSchema = new Schema(
  {
    cn: {
      title: {
        type: String,
        required: true,
      },
      describe: {
        type: String,
      },
    },
    uz: {
      title: {
        type: String,
        required: true,
      },
      describe: {
        type: String,
      },
    },
    ru: {
      title: {
        type: String,
        required: true,
      },
      describe: {
        type: String,
      },
    },
    en: {
      title: {
        type: String,
        required: true,
      },
      describe: {
        type: String,
      },
    },
    tr: {
      title: {
        type: String,
        required: true,
      },
      describe: {
        type: String,
      },
    },
    kr: {
      title: {
        type: String,
        required: true,
      },
      describe: {
        type: String,
      },
    },

    slug: {
      type: String,
      required: true,
    },

    categories:{
        type: mongoose.Schema.ObjectId,
        ref: "Category",
        required: true,
    },
    
    imageURL:{
      type: mongoose.Schema.ObjectId,
      ref: "Imagee",
      required: true,
  },
  },
  { timestamps: true }
);

const OurService = mongoose.models.OurService || mongoose.model("OurService", ourServiceSchema);

export default OurService;
