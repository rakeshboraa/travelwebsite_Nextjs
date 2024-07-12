import Category from '../../../modals/category';
import connect from '../../../dbconnection/db';
import { NextResponse } from 'next/server'


export const GET = async (req, { params }) => {
    try {
        await connect();
        const { id } = params;
        const product = await Category.findById(id);

        if (!product) {
            return new NextResponse('Product not found', { status: 404 });
        }

        return new NextResponse(JSON.stringify(product), {
            status: 200,
        });
    } catch (error) {
        console.error('Database Error:', error);
        return new NextResponse('Database Error', { status: 500 });
    }
};

export const PUT = async (req, { params }) => {
    try {
        await connect();
        const { id } = params;
        const body = await req.json();
        const { title,  image} = body;
        const updateFields = {
            title,
            image,
        };

        Object.keys(updateFields).forEach(key => updateFields[key] === undefined && delete updateFields[key]);

        const updatedProduct = await Category.findByIdAndUpdate(id, updateFields, { new: true });

        if (!updatedProduct) {
            return new NextResponse('Product not found', { status: 404 });
        }

        return new NextResponse(JSON.stringify(updatedProduct), {
            status: 200,
        });
    } catch (error) {
        console.error('Database Error:', error);
        return new NextResponse('Database Error', { status: 500 });
    }
};

export const DELETE = async (req, { params }) => {
    try {
        const { id } = params;
        await connect();

        const deletedProduct = await Category.findByIdAndDelete(id);

        if (!deletedProduct) {
            return new NextResponse('Product not found', { status: 404 });
        }

        return new NextResponse(JSON.stringify(deletedProduct), { status: 200 });
    } catch (error) {
        console.error('Database Error:', error);
        return new NextResponse('Database Error: ' + error.message, { status: 500 });
    }
};