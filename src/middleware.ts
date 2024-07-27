import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { jwtVerify } from 'jose';

// THIS FUNCTION RUN WHEN ROUTE MATCHED 
export async function middleware(request: NextRequest) {

    if (request.nextUrl.pathname === "/api/login") {
        return;
    }

    try {
        const authToken = request.cookies.get("authToken")?.value || ''
        const secretKey = new TextEncoder().encode(process.env.SECRET_KEY || '');
        await jwtVerify(authToken, secretKey);
     
    } catch (error) {
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