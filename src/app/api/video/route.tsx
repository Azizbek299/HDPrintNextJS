import { NextRequest, NextResponse } from "next/server";
import connectDB from "../../../config/db";
import mongoose from "mongoose";
import Video from "../../../models/Videos";
import Category from "@/models/Categories";

export async function GET() {
  try {
    await connectDB();
    const result = await Video.find();
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
    const body = await request.json();
    let slugs = body.categories

    await connectDB();
    let category = await Category.findOne({ slug:slugs})
    body.categories = category._id.toString()  
    let video = await Video.create(body);    
    await category.updateOne({$push:{video:video._id}})
    await mongoose.connection.close();
    return NextResponse.json({ message: "Message sent successfully" , status: 201},{ status: 201 });

  } catch (err) {
    console.error(err);
    await mongoose.connection.close();
    return NextResponse.json(
      { message: "Failed to send message " },
      { status: 400 }
    );
  }
}
