"use server"
import { revalidatePath } from "next/cache";
import { connectToDatabase } from "../database"
import categoryModel from "../database/models/category.model";
import { handleError } from "../utils";

export const createCategories = async ({ categories }) => {
    try {
        await connectToDatabase();
        const newCategory = await categoryModel.create({ ...categories })
        revalidatePath('/dashboard/category')
        return JSON.parse(JSON.stringify(newCategory))
    } catch (error) {
        handleError(error)
    }
}
export const getallCategories = async () => {
    try {
        await connectToDatabase();
        const Categories = await categoryModel.find()
        return JSON.parse(JSON.stringify(Categories))
    } catch (error) {
        handleError(error)
    }
}

export async function deleteCategory({ categoryId }) {
    try {
        await connectToDatabase()
        await categoryModel.findByIdAndDelete(categoryId)
        revalidatePath('/dashboard/category')
    } catch (error) {
        handleError(error)
    }
}
