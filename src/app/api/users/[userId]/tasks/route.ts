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

        return NextResponse.json({
            message: "Error in finding user task  !! ",
            success: false,

        })

    }
}