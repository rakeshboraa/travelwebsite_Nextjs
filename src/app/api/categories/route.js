import Category from '../../modals/category';
import connect from '../../dbconnection/db';
import { NextResponse } from 'next/server'


export const GET = async (req) => {
    try {
        await connect()
        const CategoryData = await Category.find()
        return new NextResponse(JSON.stringify(CategoryData), {
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
      const newPost = new Category(body)
      await newPost.save()
      return new NextResponse(JSON.stringify(newPost), { status: 201 })
    } catch (error) {
      console.error('Database Error:', error)
      return new NextResponse('Database Error', { status: 500 })
    }
  }