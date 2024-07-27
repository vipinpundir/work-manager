import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// THIS FUNCTION RUN WHEN ROUTE MATCHED 
export function middleware(request: NextRequest) {
    const userLoggedIn = request.cookies.get("authToken")?.value
    
    if (request.nextUrl.pathname === "/api/login"){
        return;
    }
    if (!userLoggedIn) {
        return NextResponse.redirect(new URL('/login', request.url))
    }else{
        
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