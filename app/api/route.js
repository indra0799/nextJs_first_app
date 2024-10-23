import { connectDb } from "@/lib/config/db";
import TodoModel from "@/lib/models/TodoModel";
import { NextResponse } from "next/server";



const LoadDB = async () => {
    await connectDb();
}

LoadDB();

export async function GET(request) {

    const todos =await TodoModel.find({})
    return NextResponse.json({todos:todos})
    
}

export async function POST(request) {

        const { title , description } = await request.json();
        await TodoModel.create({
            title,
            description
        })

    return NextResponse.json({mes:"Todo Created"})
    
}


export async function DELETE(request) {

    const mongoId = request.nextUrl.searchParams.get("mongoId")
    await TodoModel.findByIdAndDelete(mongoId);

return NextResponse.json({mes:"Todo Created"})

}


export async function PUT(request) {

    const mongoId = request.nextUrl.searchParams.get("mongoId")
    await TodoModel.findByIdAndUpdate(mongoId,{  
        $set:{
            isComplete:true,
        }
    });

return NextResponse.json({mes:"Todo completeed"})

}