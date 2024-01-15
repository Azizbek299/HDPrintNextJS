import mongoose from "mongoose";
const { Schema } = mongoose;


const productSchema = new Schema({

    slug: {
        type: String,
        required: true,
    },

    price:{
        type:String,
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

    productTime:{
        type:String
    },

    cn:{
        title: {
            type: String,
            required: true,
        },

        description:{
            type:String
        },
        
        character1: {
            type: String,            
        },
        character2: {
            type: String,
            
        },
        character3: {
            type: String,            
        },
        character4: {
            type: String,            
        },
        character5: {
            type: String,            
        },
        character6: {
            type: String,            
        },
        character7: {
            type: String,            
        },           
    },
    uz:{
        title: {
            type: String,
            required: true,
        },

        description:{
            type:String
        },
        character1: {
            type: String,            
        },
        character2: {
            type: String,
            
        },
        character3: {
            type: String,            
        },
        character4: {
            type: String,            
        },
        character5: {
            type: String,            
        },
        character6: {
            type: String,            
        },
        character7: {
            type: String,            
        },           
    },
    ru:{
        title: {
            type: String,
            required: true,
        },

        description:{
            type:String
        },
        character1: {
            type: String,            
        },
        character2: {
            type: String,
            
        },
        character3: {
            type: String,            
        },
        character4: {
            type: String,            
        },
        character5: {
            type: String,            
        },
        character6: {
            type: String,            
        },
        character7: {
            type: String,            
        },           
    },
    en:{
        title: {
            type: String,
            required: true,
        },

        description:{
            type:String
        },
        character1: {
            type: String,            
        },
        character2: {
            type: String,
            
        },
        character3: {
            type: String,            
        },
        character4: {
            type: String,            
        },
        character5: {
            type: String,            
        },
        character6: {
            type: String,            
        },
        character7: {
            type: String,            
        },           
    },
    tr:{
        title: {
            type: String,
            required: true,
        },

        description:{
            type:String
        },
        character1: {
            type: String,            
        },
        character2: {
            type: String,
            
        },
        character3: {
            type: String,            
        },
        character4: {
            type: String,            
        },
        character5: {
            type: String,            
        },
        character6: {
            type: String,            
        },
        character7: {
            type: String,            
        },           
    },
    kr:{
        title: {
            type: String,
            required: true,
        },

        description:{
            type:String
        },
        character1: {
            type: String,            
        },
        character2: {
            type: String,
            
        },
        character3: {
            type: String,            
        },
        character4: {
            type: String,            
        },
        character5: {
            type: String,            
        },
        character6: {
            type: String,            
        },
        character7: {
            type: String,            
        },           
    },


  },
  { timestamps: true }
);

const Product = mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;



