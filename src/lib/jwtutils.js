import { jwtVerify } from 'jose';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;

export function createToken(payload) {
  try {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });
  } catch (error) {
    console.error('Error creating token:', error);
    return null;
  }
}
export async function verifyToken(token) {
  try {
    const { payload } = await jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET));
    return payload; // Return the decoded payload if valid
  } catch (error) {
    return null; // Return null if verification fails
  }
}