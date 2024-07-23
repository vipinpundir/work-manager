import { User } from "@/models/user";
import { NextResponse } from "next/server";

// GET USER BY ID 
export async function GET(request: Request, { params }: any) {
    const { userId } = params;

    try {
        const user = await User.findById(userId).select("-password");
        return NextResponse.json(user);

    } catch (error) {

        return NextResponse.json({
            message: "Error in finding user by id  !! ",
            success: false,

        })

    }
}

// DELETE USER BY ID 
export async function DELETE(request: Request, { params }: any) {
    const { userId } = params;

    try {
        await User.deleteOne({
            _id: userId,
        });

        return NextResponse.json({
            message: "user deleted !! ",
            success: true,
        });

    } catch (error) {

        return NextResponse.json({
            message: "Error in deleting user !! ",
            success: false,

        })

    }
}

// UPDATE USER BY ID 
export async function PUT(request: Request, { params }: any) {
    const { userId } = params;
    const { name, email, password, about, profileURL } = await request.json()

    try {
        const user = await User.findById(userId);
        user.name = name
        user.email = email
        user.password = password
        user.about = about
        user.profileURL = profileURL

        const updatedUser = await user.save()

        return NextResponse.json(updatedUser);

    } catch (error) {

        return NextResponse.json({
            message: "Error in updating user !! ",
            success: false,

        })

    }
}