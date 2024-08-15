import { User } from "@/models/user";
import { NextResponse } from "next/server";

// GET ALL USER 
export async function GET(request: Request) {
    let users = []
    try {
        users = await User.find();
        return NextResponse.json(users, { status: 200 });
    } catch (error) {
        return NextResponse.json({
            message: 'Failed to get users',
        }, { status: 500 });
    }

}
