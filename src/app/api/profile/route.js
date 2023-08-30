import { NextResponse, NextRequest} from "next/server";
// import { headers } from 'next/headers';
// import { redirect } from 'next/navigation'

//GET
// export async function GET(req,res){
//     const {searchParams} = new URL(req.url)
//     let id = searchParams.get('id')

//     return NextResponse.json({msg: id})
// }





//POST
// export async function POST(req,res){
//     const {searchParams} = new URL(req.url);
//     let id = searchParams.get('id');
//     let name = searchParams.get('name');
//     let city = searchParams.get('city');

//     return NextResponse.json({id:id, name:name, city:city})
// }



//catch request body with json - POST
// export async function POST(req,res){
//     const reqBody = await req.json()

//     let name = reqBody['name']
//     let city = reqBody['city']

//     return NextResponse.json({msg: name})
// }

// catch request body with form - POST
export async function POST(req,res){

    const reqBody = await req.fromData()

    const name = reqBody.get('name');
    const city = reqBody.get('city');
    const country = reqBody.get('country');

    return NextResponse.json({name:name, city:city, country:country})
}

