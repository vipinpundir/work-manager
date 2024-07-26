import { connectDb } from "@/helper/db";
import { User } from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs'
connectDb()

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

// CREATE NEW USER 
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

        // Check if the email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return NextResponse.json({
                message: 'Email already registered.',
            }, { status: 409 });
        }

        // Password hashing 
        const saltRounds = process.env.BCRYPT_SALT || '10'
        user.password = await bcrypt.hash(password, parseInt(saltRounds));

        const createdUser = await user.save();
        return NextResponse.json(createdUser, { status: 201 })
    } catch (error) {
        return NextResponse.json({
            message: 'Internal server error.',
        }, { status: 500 });
    }
}