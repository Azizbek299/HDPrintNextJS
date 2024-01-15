import mongoose from "mongoose";
const { Schema } = mongoose;



const videoSchema = new Schema(
  {

    cn: {
      title: {
        type: String,
        required: true,
      },      
    },

    uz: {
      title: {
        type: String,
        required: true,
      },      
    },

    ru: {
      title: {
        type: String,
        required: true,
      },      
    },

    en: {
      title: {
        type: String,
        required: true,
      },      
    },

    tr: {
      title: {
        type: String,
        required: true,
      },      
    },
    
    kr: {
      title: {
        type: String,
        required: true,
      },      
    },

    slug: {
      type: String,
      required: true,
    },

    imageURL: {
      type: String,
    },
    
    categories: {
      type: mongoose.Schema.ObjectId,
      ref: "Category",
      required: true,
    },

  },
  { timestamps: true }
);

const Video = mongoose.models.Video || mongoose.model("Video", videoSchema);

export default Video;
