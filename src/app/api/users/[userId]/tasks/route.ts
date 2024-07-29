import { Task } from "@/models/task";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: any) {

    try {
        const { userId } = params;
        const tasks = await Task.find({
            userId: userId
        });
        return NextResponse.json(tasks);

    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message: "Internal server error ",
        },{status: 500})

    }
}