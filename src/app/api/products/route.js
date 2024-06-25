import connect from '../../dbconnection/db';
import Product from '../../modals/product';
import { NextResponse } from 'next/server'

export const GET = async (req) => {
    try {
        await connect()
        const ProductData = await Product.find()
        return new NextResponse(JSON.stringify(ProductData), {
            status: 200
        })
    } catch (error) {
        console.error('Database Error:', error)
        return new NextResponse('Database Error', { status: 500 })
    }
}

export const POST = async (req) => {
    try {
      const body = await req.json()
      await connect()
      const newPost = new Product(body)
      await newPost.save()
      return new NextResponse(JSON.stringify(newPost), { status: 201 })
    } catch (error) {
      console.error('Database Error:', error)
      return new NextResponse('Database Error', { status: 500 })
    }
  }

  
  