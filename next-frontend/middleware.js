import { NextResponse } from "next/server";

export function middleware(req){
    const url=req.nextUrl.clone();
    if(!req.cookies.get("auth")){
        url.pathname="/login";
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}

export const config={
    matcher:"/protected-route/:path*",
}