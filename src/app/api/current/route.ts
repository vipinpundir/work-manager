import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';
import { cookies } from 'next/headers';
import { User } from '@/models/user';

export async function GET(request: Request) {
    const cookieStore = cookies();

    try {
        const authToken = cookieStore.get('authToken')?.value;
        if (!authToken) {
            throw new Error('No auth token found');
        }

        const secretKey = new TextEncoder().encode(process.env.SECRET_KEY || '');
        const { payload } = await jwtVerify(authToken, secretKey);

        // GET CURRENT USER BY ID 
        const user = await User.findById(payload._id).select(("-password"))
        return NextResponse.json(user)

    } catch (error) {
        // console.error('JWT Verification Error:', error);
        return NextResponse.json({
            message: "Token not found",
        }, { status: 404 })
    }
}
