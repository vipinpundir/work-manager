import { Task } from "@/models/task";
import { NextResponse } from "next/server";

// GET  TASK  BY ID
export async function GET(request: Request, { params }: any) {
    const { taskId } = params;

    try {
        const task = await Task.findById(taskId);
        return NextResponse.json(task);

    } catch (error) {

        return NextResponse.json({
            message: "Error in finding task by id  !! ",
            success: false,

        })

    }
}


// UPDATE TASK BY ID 
export async function PUT(request: Request, { params }: any) {
    const { taskId } = params;
    const { title, content, status } = await request.json()

    try {
        const task = await Task.findById(taskId);
        task.title = title
        task.content = content
        task.status = status
        const updatedTask = await task.save()

        return NextResponse.json(updatedTask);

    } catch (error) {

        return NextResponse.json({
            message: "Error in updating task !! ",
            success: false,

        })

    }
}


// DELETE TASK BY ID 
export async function DELETE(request: Request, { params }: any) {
    try {
        const { taskId } = params
        await Task.deleteOne({
            _id: taskId
        })
        return NextResponse.json({
            message: "Task deleted !! ",
        }, { status: 200 });

    } catch (error) {
        return NextResponse.json({
            message: 'Internal server error.',
        }, { status: 500 });
    }
}