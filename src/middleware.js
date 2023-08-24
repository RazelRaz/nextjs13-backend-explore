import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";


export function middleware(req,res){
    console.log("Middleware");
}

// specific path set & muliple path middleware
export const config = {
    matcher:['/api/:path*','/site']
}