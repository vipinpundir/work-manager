import { connectDb } from "@/helper/db";
import { User } from "@/models/user";
import { NextResponse } from "next/server";

connectDb()

export async function GET(request: Request) {

    let users = []

    try {
        users = await User.find();
        return NextResponse.json(users)

    } catch (error) {
        return NextResponse.json({
            message: 'failed to get users',
            success: false
        })
    }

}

export async function POST(request: Request) {

    const { name, email, password, about, profileURL } = await request.json()

    const user = new User({
        name,
        email,
        password,
        about,
        profileURL
    })

    try {
        const createdUser = await user.save()

        return NextResponse.json(
            user, { status: 201 }
        )
    } catch (error) {
        console.log('error', error)
        return NextResponse.json({
            message: 'fail to create a new user',
            status: false
        },)
    }
}