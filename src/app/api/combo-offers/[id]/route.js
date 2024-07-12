import connect from '../../../dbconnection/db';
import ComboOffer from '../../../modals/ComboOffers';
import { NextResponse } from 'next/server'

export const GET = async (req, { params }) => {
    try {
        await connect();
        const { id } = params;
        const ComboOffer = await ComboOffer.findById(id);

        if (!ComboOffer) {
            return new NextResponse('ComboOffer not found', { status: 404 });
        }

        return new NextResponse(JSON.stringify(ComboOffer), {
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
        const { name, products, description, totalPrice, discount, startDate, endDate, isActive, } = body;
        const updateFields = {
            name,
            products,
            totalPrice,
            description,
            discount,
            startDate,
            endDate,
            isActive,
        };
        Object.keys(updateFields).forEach(key => updateFields[key] === undefined && delete updateFields[key]);

        const updatedComboOffer = await ComboOffer.findByIdAndUpdate(id, updateFields, { new: true });

        if (!updatedComboOffer) {
            return new NextResponse('ComboOffer not found', { status: 404 });
        }

        return new NextResponse(JSON.stringify(updatedComboOffer), {
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

        const deletedComboOffer = await ComboOffer.findByIdAndDelete(id);

        if (!deletedComboOffer) {
            return new NextResponse('ComboOffer not found', { status: 404 });
        }

        return new NextResponse(JSON.stringify(deletedComboOffer), { status: 200 });
    } catch (error) {
        console.error('Database Error:', error);
        return new NextResponse('Database Error: ' + error.message, { status: 500 });
    }
};