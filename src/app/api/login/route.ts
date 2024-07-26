import { User } from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'


// LOGIN 
export async function POST(request: Request) {
    const { email, password } = await request.json()

    try {
        const user = await User.findOne({
            email: email
        });

        if (user === null) {
            return NextResponse.json({
                message: "User not found",
            }, { status: 404 })
        }

        const passwordMatched = await bcrypt.compareSync(password, user.password)

        if (!passwordMatched) {
            return NextResponse.json({
                message: "Password is incorrect",
            }, { status: 401 })
        }

        // generate jwt token 
        const jwtToken = jwt.sign({
            _id: user._id,
            name: user.name
        }, process.env.SECRET_KEY || '');

        const response = NextResponse.json(user, { status: 200 });
        // Set cookie 
        response.cookies.set("authToken", jwtToken, {
            httpOnly: true,
            maxAge: 1,
        });

        return response;

    } catch (error) {
        return NextResponse.json({
            message: "Error in login",
        }, { status: 500 })

    }
}