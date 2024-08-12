'use server';
import bcrypt from 'bcrypt';
import { connectToDatabase } from '../database';
import User from '../database/models/users.models';
export async function createUser({ user }) {
    try {
        await connectToDatabase();

        // Check if user already exists
        const existingUser = await User.findOne({ email: user.email });
        if (existingUser) {
            throw new Error('Email already exists');
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(user.password, 10);

        // Create a new user
        const newUser = await User.create({
            ...user,
            password: hashedPassword,
        });

        return JSON.parse(JSON.stringify(newUser));
    } catch (error) {
        console.error(error);
        throw new Error(error.message); // Re-throw the error message directly
    }
}
