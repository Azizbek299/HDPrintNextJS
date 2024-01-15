import mongoose from "mongoose";
const { Schema } = mongoose;


const imageeSchema = new Schema({
    url1: {
      type: String,
      required: true,
    },
    url2: {
        type: String,    
      },
    url3: {
        type: String,    
      },
    product:{
        type: mongoose.Schema.ObjectId,
        ref: "Product",        
    },

    ourService:{
        type: mongoose.Schema.ObjectId,
        ref: "ourService",        
    },

  },
  { timestamps: true }
);

const Imagee = mongoose.models.Imagee || mongoose.model("Imagee", imageeSchema);

export default Imagee;



