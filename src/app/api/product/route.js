import { NextRequest, NextResponse } from "next/server";


//GET
export async function GET(req, res){
    // single query string
    const {searchParams} = new URL(req.url)
    let id = searchParams.get('id')

    // return NextResponse.json({msg: 'IM GET'})
    return NextResponse.json({msg: id})
}



//POST
export async function POST(req, res){
    return NextResponse.json({msg: 'IM POST'})
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