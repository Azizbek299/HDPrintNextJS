import { NextRequest, NextResponse } from "next/server";
import connectDB from "../../../../config/db";
import mongoose from "mongoose";
import Category from "../../../../models/Categories";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  try {
    await connectDB();
    const result = await Category.findById(params.id);
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
    const result = await Category.findByIdAndUpdate(params.id, {title:body}, { new: true });
    await mongoose.connection.close();
    return NextResponse.json({
      result,
      message: "Message updated successfully",
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
    const result = await Category.findByIdAndDelete(params.id);
    await mongoose.connection.close();
    return NextResponse.json({
      result,
      message: "Message successfully deleted",
      status: 200,
    });
  } catch (err) {
    console.error(err);
    await mongoose.connection.close();
    return NextResponse.json({ message: "Failed " }, { status: 400 });
  }
}
