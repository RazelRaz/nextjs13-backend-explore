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
// export function middleware(req,res){
//     if(req.nextUrl.pathname.startsWith("/api/product")){
//         console.log("IM API Middleware");
//     } else if (req.nextUrl.pathname.startsWith("/dashboard")){
//         console.log("IM dashboard Middleware");
//     } else if (req.nextUrl.pathname.startsWith("/site")){
//         console.log("IM SIte Middleware");
//     }
// }






//how to work with request header mnipulate in middleware
//if there is an any token avaialable or not
// export function middleware(req,res){
//     if(req.nextUrl.pathname.startsWith("/api/product")){
//         const reqHeaders = new Headers(req.Headers);
//         const token = reqHeaders.get('token')

//         if(token==="123-XYZ"){
//             //set new header property
//             reqHeaders.set('user_id', '1991')
//             reqHeaders.set('user_email', 'mailrazel@mail.com')
//            return NextResponse.next({
//                 request:{headers:reqHeaders}
//            });
//         } else {
//            return NextResponse.json({}, {status:401})
//         }
//     }
// }

//how to work with response header manipulate in middleware
export function middleware(req,res){
    const reqHeaders = new Headers(req.Headers);
    const token = reqHeaders.get('token')
    if(token==="123-XYZ"){
       const response = NextResponse.next()
       response.headers.set('Set-Cookie', 'session=XXXX; expires=Tues, 27 Aug 2023 15:45:00 GMT; path=/')
       response.headers.set('test', 'test')
       return response;
    } else {
        return NextResponse.json({}, {status:401})
    }
}