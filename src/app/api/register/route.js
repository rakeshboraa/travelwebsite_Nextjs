import Admin from '../../modals/admin';
import connect from '../../dbconnection/db';
import { NextResponse } from 'next/server'


export const GET = async (req) => {
    try {
        await connect()
        const AdminData = await Admin.find()
        return new NextResponse(JSON.stringify(AdminData), {
            status: 200
        })
    } catch (error) {
        console.error('Database Error:', error)
        return new NextResponse('Database Error', { status: 500 })
    }
}

export const POST = async (req) => {
  try {
      const body = await req.json();
      await connect();
      
      // Check if the mobile number already exists
      const existingAdmin = await Admin.findOne({ mobile: body.mobile });
      if (existingAdmin) {
          return new NextResponse('Mobile number already exists', { status: 400 });
      }

      const newPost = new Admin(body);
      await newPost.save();
      return new NextResponse(JSON.stringify(newPost), { status: 201 });
  } catch (error) {
      console.error('Database Error:', error);
      return new NextResponse('Database Error', { status: 500 });
  }
};