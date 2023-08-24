import { NextRequest, NextResponse } from "next/server";
import { headers } from 'next/headers';



//GET
export async function GET(req, res){
    // single query string
    const {searchParams} = new URL(req.url)
    let id = searchParams.get('id')

    // return NextResponse.json({msg: 'IM GET'})
    return NextResponse.json({msg: id})
}



//POST
// export async function POST(req, res){

//     // multiple query string
//     const {searchParams} = new URL(req.url)
//     const id = searchParams.get('id')
//     const name = searchParams.get('name')
//     const city = searchParams.get('city')

//     // return NextResponse.json({msg: 'IM POST'})
//     // returning as a json object
//     return NextResponse.json({id:id, name:name, city:city})


// } 

//sending Body - if request body is a json
// export async function POST(req, res){
//     const reqBody = await req.json();
//     let name = reqBody['name']
//     let city = reqBody['city']
    
//     return NextResponse.json({msg:city})
// } 

//sending Body - if request body is a form data
// export async function POST(req, res){
//     // catch request
//     const reqBody = await req.formData();
//     let name = reqBody.get('name');
//     let city = reqBody.get('city');
//     let country = reqBody.get('country');


//     // Calculation
//     // Business Logic
//     // Model
//     // Database
//     // Heavy Execution
//     // Security



//     // send response
//     return NextResponse.json({name:name,city:city,country:country })
// } 


//how to work with request header
// export async function POST(req, res){
//     // catch request
//     let headList = headers();
//     let Token = headList.get('Auth-Token')
    
    


//     // send response
//     return NextResponse.json({msg:Token})
// } 


//how to work with cookies
// export async function POST(req, res){
//     // catch request
//     let csrf_token = req.cookies.get('csrf_token')
    
    


//     // send response
//     return NextResponse.json({msg:csrf_token})
// } 


// response status Code
export async function POST(req, res){
    // catch request
    
    
    // send response
    return NextResponse.json([
        {
            "name": "Alice",
            "age": 25,
            "city": "New York"
          },
          {
            "name": "Bob",
            "age": 30,
            "city": "Los Angeles"
          },
          {
            "name": "Charlie",
            "age": 22,
            "city": "Chicago"
          }
    ], {status: 203})

} 
















//PUT
export async function PUT(req, res){
    return NextResponse.json({msg: 'IM PUT'})
}


//DELETE
export async function DELETE(req, res){
    return NextResponse.json({msg:'IM DELETE'})
}


//PATCH