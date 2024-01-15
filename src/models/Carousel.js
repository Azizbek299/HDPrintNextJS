import mongoose from "mongoose";
const { Schema } = mongoose;

const carouselSchema = new Schema(
  {
    uz:{
        text1: {
            type: String,
          },
          text2: {
            type: String,        
          },
          text3: {
            type: String,         
          },
    },
    ru:{
        text1: {
            type: String,          
          },
          text2: {
            type: String,            
          },
          text3: {
            type: String,          
          },
    },

    cn:{
        text1: {
            type: String,        
          },
          text2: {
            type: String,          
          },
          text3: {
            type: String,          
          },
    },

    en:{
        text1: {
            type: String,          
          },
          text2: {
            type: String,         
          },
          text3: {
            type: String,       
          },
    },
    tr:{
          text1: {
            type: String,         
          },
          text2: {
            type: String,      
          },
          text3: {
            type: String,          
          },
    },
    kr:{
        text1: {
            type: String,           
          },
          text2: {
            type: String,            
          },
          text3: {
            type: String,            
          },
    },

    imageURL: {
        type: String,
        required: true,
      },
  },
  { timestamps: true }
);

const Carousel =
  mongoose.models.Carousel || mongoose.model("Carousel", carouselSchema);

export default Carousel;


