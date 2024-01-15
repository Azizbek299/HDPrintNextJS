import { NextRequest, NextResponse } from "next/server";
import connectDB from "../../../config/db";
import mongoose from "mongoose";
import Category from "../../../models/Categories";

export async function GET() {
  try {
    await connectDB();
    const result = await Category.find().sort({updatedAt:-1})
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
    const { title, slug } = await request.json();

    if (title === (null || undefined)) {
      return NextResponse.json(
        { status: 400, message: "Text yozilishi shart" }
      );
    }
    await connectDB();
    await Category.create({ title, slug });    
    await mongoose.connection.close();
    return NextResponse.json({ status: 201 });
  } catch (err) {
    console.error(err);
    await mongoose.connection.close();
    return NextResponse.json(
      {status: 400, message: "Failed to send message " },
    );
  }
}
