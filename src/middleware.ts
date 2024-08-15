import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { jwtVerify } from 'jose';

// THIS FUNCTION RUN WHEN ROUTE MATCHED 
export async function middleware(request: NextRequest) {

    if (
        (request.nextUrl.pathname === "/api/login") || 
        (request.nextUrl.pathname === "/api/signup") ||
        (request.nextUrl.pathname === "/api/current")
    ) {
        return;
    }

    try {
        const authToken = request.cookies.get("authToken")?.value || ''
        const secretKey = new TextEncoder().encode(process.env.SECRET_KEY || '');
        await jwtVerify(authToken, secretKey);

    } catch (error) {
        if (request.nextUrl.pathname.startsWith("/api")) {
            return NextResponse.json({
                message: 'Access Denied.',
            }, { status: 401 });
        }
        return NextResponse.redirect(new URL('/login', request.url));
    }

}

// "Matching Paths"  
export const config = {
    matcher: [
        "/add-task",
        "/show-task",
        "/api/:path*",
    ],
}