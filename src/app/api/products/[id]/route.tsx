import { NextRequest, NextResponse } from "next/server";
import connectDB from "../../../../config/db";
import mongoose from "mongoose";
import Imagee from "@/models/Images";
import Category from "@/models/Categories";
import Products from "@/models/Products";




export async function GET(request: NextRequest,{ params }: { params: { id: number } }) {
  try {
    await connectDB();
    const result = await Products.findById(params.id).populate('imageURL')
    await mongoose.connection.close();
    return NextResponse.json({
      result,
      message: "Message get successfully",
      status: 200,
    });
  } catch (err) {
    console.error(err);
    await mongoose.connection.close();
    return NextResponse.json({ message: "Failed " }, { status: 400 });
  }
}




export async function PUT(request: NextRequest,{ params }: { params: { id: number } }) {
  try {
    const body = await request.json();
    let {imageURL, ...others} = body
    await connectDB();

    if (imageURL.url1 || imageURL.url2 || imageURL.url3) {      
      let product = await Products.findById(params.id)
      let imgID = await product.imageURL
      let image = await Imagee.findById(imgID)
      if (imageURL.url1) {
        image.url1 = imageURL.url1
      }
      if (imageURL.url2) {
        image.url2 = imageURL.url2
      }
      if (imageURL.url3) {
        image.url3 = imageURL.url3
      }
      await image.save()
    }
    
    const result = await Products.findByIdAndUpdate(params.id, others, {new: true});

    await mongoose.connection.close();
    return NextResponse.json({result, message: "Message get successfully", status: 200 });
  } catch (err) {
    console.error(err);
    await mongoose.connection.close();
    return NextResponse.json({ message: "Failed " }, { status: 400 });
  }
}




export async function DELETE(request: NextRequest,{ params }: { params: { id: number } }) {
  try {
    await connectDB();
    
    let product = await Products.findById(params.id)
    await Imagee.findByIdAndDelete(product.imageURL)
    let categoryID = product.categories
    let category = await Category.findById(categoryID)
    await category.updateOne({ $pull: { products: product._id } })
    const result = await Products.findByIdAndDelete(params.id);
    await mongoose.connection.close();
    return NextResponse.json({
      result,
      message: "Message get successfully",
      status: 200,
    });
  } catch (err) {
    console.error(err);
    await mongoose.connection.close();
    return NextResponse.json({ message: "Failed " }, { status: 400 });
  }
}
