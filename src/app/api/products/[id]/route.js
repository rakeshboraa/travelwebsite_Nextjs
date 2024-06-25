import connect from '../../../dbconnection/db';
import Product from '../../../modals/product';
import { NextResponse } from 'next/server'

export const GET = async (req, { params }) => {
    try {
        await connect();
        const { id } = params;
        const product = await Product.findById(id);

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
        const { title, thumbnail, description, image, price, details, location, packages, status } = body;
        const updateFields = {
            title,
            thumbnail,
            description,
            image,
            price,
            details,
            location,
            packages,
            status
        };

        // Remove undefined fields from updateFields
        Object.keys(updateFields).forEach(key => updateFields[key] === undefined && delete updateFields[key]);

        const updatedProduct = await Product.findByIdAndUpdate(id, updateFields, { new: true });

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

        const deletedProduct = await Product.findByIdAndDelete(id);

        if (!deletedProduct) {
            return new NextResponse('Product not found', { status: 404 });
        }

        return new NextResponse(JSON.stringify(deletedProduct), { status: 200 });
    } catch (error) {
        console.error('Database Error:', error);
        return new NextResponse('Database Error: ' + error.message, { status: 500 });
    }
};