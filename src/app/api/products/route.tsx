import { NextRequest, NextResponse } from "next/server";
import connectDB from "../../../config/db";
import mongoose from "mongoose";
import Products from "../../../models/Products";
import Category from "@/models/Categories";
import Imagee from "@/models/Images";

export async function GET() {
  try {
    await connectDB();
    const result = await Products.find().populate('imageURL')
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




export async function POST(request: NextRequest) {
  try {
    const {body} = await request.json();
    await connectDB();
    
    let url1 = body.imageURL[0] && body.imageURL[0] 
    let url2 = body.imageURL[1] && body.imageURL[1] 
    let url3 = body.imageURL[2] && body.imageURL[2] 

    let img = await Imagee.create({  
      url1:url1,
      url2:url2,
      url3:url3,
    })
    let category = await Category.findOne({ slug:body.categories})
    body.categories = category._id.toString()  
    body.imageURL = img._id.toString()    
    let product = await Products.create(body);
    await category.updateOne({$push:{products:product._id}})
    img.product = product._id.toString()
    await img.save()
    await mongoose.connection.close();
    return NextResponse.json({ message: "Message sent successfully" , status: 201 });
  } catch (err) {
    console.error(err);
    await mongoose.connection.close();
    return NextResponse.json(
      { message: "Failed to send message " },
      { status: 400 }
    );
  }
}
