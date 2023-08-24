import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";


// export function middleware(req,res){
//     console.log("Middleware");
// }

// // specific path set & muliple path middleware
// export const config = {
//     matcher:['/api/:path*','/site']
// }



//conditional statement - middleware
export function middleware(req,res){
    if(req.nextUrl.pathname.startsWith("/api/product")){
        console.log("IM API Middleware");
    } else if (req.nextUrl.pathname.startsWith("/dashboard")){
        console.log("IM dashboard Middleware");
    } else if (req.nextUrl.pathname.startsWith("/site")){
        console.log("IM SIte Middleware");
    }
}