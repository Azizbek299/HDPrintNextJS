import { NextRequest, NextResponse } from "next/server";
import connectDB from "../../../../config/db";
import mongoose from "mongoose";
import OurService from "../../../../models/OurService";
import Imagee from "@/models/Images";
import Category from "@/models/Categories";




export async function GET(request: NextRequest,{ params }: { params: { id: number} }
) {
  try {
    await connectDB();
    let result = await OurService.findById(params.id).populate('imageURL').populate('categories')
    await mongoose.connection.close();    
    return NextResponse.json({result, message: "Message get successfully", status: 200 });

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
    if (imageURL.length !== undefined) {      
      let our_service = await OurService.findById(params.id)
      let imgID = await our_service.imageURL
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

    const result = await OurService.findByIdAndUpdate(params.id, others, {new: true});
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



export async function DELETE(request: NextRequest,{ params }: { params: { id: number } }) {
  try {
    await connectDB();
    let our_service = await OurService.findById(params.id)
    await Imagee.findByIdAndDelete(our_service.imageURL)
    let categoryID = our_service.categories
    let category = await Category.findById(categoryID)
    await category.updateOne({ $pull: { ourService: our_service._id } })
    const result = await OurService.findByIdAndDelete(params.id);
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
