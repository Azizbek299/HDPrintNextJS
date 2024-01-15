import { NextRequest, NextResponse } from "next/server";
import connectDB from "../../../config/db";
import mongoose from "mongoose";
import User from "../../../models/User";

export async function GET() {
  try {
    await connectDB();
    const result = await User.find();
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
    await connectDB();
    await User.create(body);
    await mongoose.connection.close();
    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 201 }
    );
  } catch (err) {
    console.error(err);
    await mongoose.connection.close();
    return NextResponse.json(
      { message: "Failed to send message " },
      { status: 400 }
    );
  }
}
