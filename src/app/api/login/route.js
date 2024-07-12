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
        const { mobile, password } = await req.json(); 
        const admin = await Admin.findOne({ mobile, password });
        if (!admin) {
            return new NextResponse('Invalid username or password', { status: 401 });
        }
        return new NextResponse(JSON.stringify(admin), { status: 200 });
    } catch (error) {
        console.error('Database Error:', error);
        return new NextResponse('Database Error', { status: 500 });
    }
}
