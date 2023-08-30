import { NextResponse, NextRequest} from "next/server";
// import { headers } from 'next/headers';
// import { redirect } from 'next/navigation'

//GET
export async function GET(req,res){
    const {searchParams} = new URL(req.url)
    let id = searchParams.get('id')

    return NextResponse.json({msg: id})
}





//POST
export async function POST(req,res){
    const {searchParams} = new URL(req.url);
    let id = searchParams.get('id');
    let name = searchParams.get('name');
    let city = searchParams.get('city');

    return NextResponse.json({id:id, name:name, city:city})
}




