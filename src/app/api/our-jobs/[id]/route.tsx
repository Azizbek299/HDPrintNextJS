import { NextRequest, NextResponse } from "next/server";
import connectDB from "../../../../config/db";
import mongoose from "mongoose";
import OurJobs from "../../../../models/OurJobs";
import Category from "@/models/Categories";


export async function GET(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  try {
    await connectDB();
    const result = await OurJobs.findById(params.id);
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

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  try {
    const body = await request.json();

    await connectDB();
    const result = await OurJobs.findByIdAndUpdate(params.id, body, {
      new: true,
    });
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

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  try {
    await connectDB();
    let ourjob = await OurJobs.findById(params.id)
    let categoryID = ourjob.categories
    let category = await Category.findById(categoryID)
    await category.updateOne({ $pull: { ourJob: ourjob._id } })

    const result = await OurJobs.findByIdAndDelete(params.id);
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
