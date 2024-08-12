'use server';
import bcrypt from 'bcrypt';
import { connectToDatabase } from '../database';
import User from '../database/models/users.models';
import { createToken, verifyToken } from '../jwtutils';
import { cookies } from 'next/headers';

export async function LoginUser({ email, password }) {
    try {
        await connectToDatabase();
        
        const foundUser = await User.findOne({ email });

        if (!foundUser) {
            throw new Error('User not found');
        }

        const isPasswordMatch = await bcrypt.compare(password, foundUser.password);

        if (!isPasswordMatch) {
            throw new Error('Invalid Password');
        }

        const token = createToken({
            id: foundUser._id.toString(),
            email: foundUser.email,
        });
        return {
            success: true,
            token,
            user: { id: foundUser._id.toString(), email: foundUser.email },
        };
    } catch (error) {
        throw new Error(error.message || 'Something went wrong');
    }
}
export async function getLoggedData() {
    try {
        const token = cookies().get('token')?.value;
        if (!token) {
            return { error: 'Not authenticated', status: 401 };
        }

        const payload = await verifyToken(token);
        if (!payload) {
            return { error: 'Invalid token', status: 401 };
        }

        const { id } = payload;
        await connectToDatabase();
        const user = await User.findById(id).select('-password');

        if (!user) {
            return { error: 'User not found', status: 404 };
        }

        return { user, status: 200 };
    } catch (error) {
        console.error('Error fetching user data:', error.message || error);
        return { error: error.message || 'Error fetching user data', status: 500 };
    }
}
