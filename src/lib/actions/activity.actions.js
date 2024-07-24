'use server'
import { connectToDatabase } from "../database"
import activityModel from "../database/models/activity.model"
import Category from "../database/models/category.model"
import { handleError } from "../utils"
import { revalidatePath } from 'next/cache'

const getCategoryByName = async (name) => {
    return Category.findOne({ name: { $regex: name, $options: 'i' } })
}

const populateEvent = (query) => {
    return query
        .populate({ path: 'category', model: Category, select: '_id name' })
}

export async function createActivity({ activity }) {
    try {
        await connectToDatabase()
        const newActivity = await activityModel.create({ ...activity })
        revalidatePath('/dashboard/activities')
        return JSON.parse(JSON.stringify(newActivity))
    } catch (error) {
        handleError(error)
    }
}

export async function getActivityById(activityId) {
    try {
        await connectToDatabase()

        const event = await activityModel.findById(activityId)

        if (!event) throw new Error('Event not found')

        return JSON.parse(JSON.stringify(event))
    } catch (error) {
        handleError(error)
    }
}
export const getAllActivity = async ({ query, category, page, limit, minPrice, maxPrice, startDate, endDate }) => {
    try {
        await connectToDatabase();

        const titleCondition = query ? { title: { $regex: query, $options: 'i' } } : {};
        const categoryCondition = category ? await getCategoryByName(category) : null;
        const categoryFilter = categoryCondition ? { category: categoryCondition._id } : {};

        const dateFilter = {};
        if (startDate && endDate) {
            // Convert to 'YYYY-MM-DD' format for comparison
            const start = new Date(startDate).toISOString().split('T')[0];
            const end = new Date(endDate).toISOString().split('T')[0];
            dateFilter.availability = { $gte: start, $lte: end };
        }

        const conditions = {
            $and: [
                titleCondition,
                categoryFilter,
                dateFilter
            ],
        };

        // Find the maximum price
        const [maxPriceResult] = await activityModel.aggregate([
            { $match: conditions },
            { $group: { _id: null, maxPrice: { $max: { $toDouble: "$price" } } } }
        ]);

        const maxPriceValue = maxPriceResult ? maxPriceResult.maxPrice : null;

        // Find the filtered events
        const skipAmount = (Number(page) - 1) * limit;
        const eventsQuery = activityModel.find(conditions)
            .sort({ createdAt: 'desc' })
            .skip(skipAmount)
            .limit(limit);

        let events = await populateEvent(eventsQuery);

        // Apply additional filtering based on minPrice and maxPrice if provided
        if (minPrice !== undefined || maxPrice !== undefined) {
            events = events.filter(event => {
                const price = parseFloat(event.price);
                return (!minPrice || price >= minPrice) && (!maxPrice || price <= maxPrice);
            });
        }

        const eventsCount = await activityModel.countDocuments(conditions);
        return {
            data: JSON.parse(JSON.stringify(events)),
            totalPages: Math.ceil(eventsCount / limit),
            maxPrice: maxPriceValue,
        };
    } catch (error) {
        handleError(error);
    }
};








export async function updateActivity({ activity }) {
    try {
        await connectToDatabase()
        const updatedEvent = await activityModel.findByIdAndUpdate(
            activity.activityId,
            { ...activity, category: activity.category },
            { new: true }
        )
        revalidatePath('/dashboard/activities')
        return JSON.parse(JSON.stringify(updatedEvent))
    } catch (error) {
        handleError(error)
    }
}

export async function deleteActivity({ activityId }) {
    console.log(activityId)
    try {
        await connectToDatabase()
        await activityModel.findByIdAndDelete(activityId)
        revalidatePath('/dashboard/activities')
    } catch (error) {
        handleError(error)
    }
}
