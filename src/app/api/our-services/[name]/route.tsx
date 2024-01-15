import { NextRequest, NextResponse } from "next/server";
import connectDB from "../../../../config/db";
import mongoose from "mongoose";
import OurService from "../../../../models/OurService";



export async function GET(request: NextRequest,{ params }: { params: { name: string} }
    ) {
      try {
        await connectDB();
        let result = await OurService.find({slug:params.name}).populate('imageURL')
        await mongoose.connection.close();    
        return NextResponse.json({result, message: "Message get successfully", status: 200 });
    
      } catch (err) {
        console.error(err);
        await mongoose.connection.close();
        return NextResponse.json({ message: "Failed " }, { status: 400 });
      }
    }
    