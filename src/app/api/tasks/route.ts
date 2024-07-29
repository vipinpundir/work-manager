import { Task } from "@/models/task"
import { NextResponse } from "next/server"

// GET ALL TASK 
export async function GET(request: Request) {

    let tasks = []

    try {
        tasks = await Task.find();
        return NextResponse.json(tasks)

    } catch (error) {
        return NextResponse.json({
            message: 'failed to get tasks',
            success: false
        })
    }

}


// CREATE TASK 
export async function POST(request: Request) {
    const {title, content, status, userId} = await request.json()
    try {
        const task = new Task({
            title,
            content,
            status,
            userId,
        })
       const createdTask =  await task.save()
       return NextResponse.json({
        message: 'Successfully task added',
        data: createdTask,
        status: 201
    })
    } catch (error) {
        return NextResponse.json({
            message: 'Failed to create Taks !!',
            status: false
           })
    }
}